import { createContext, useEffect, useState, useContext, useMemo } from 'react';
import { string, node } from 'prop-types';
import pb from '@/api/pocketbase';
import useStorage from '@/hooks/useStorage';

const AuthContext = createContext();

const initialAuthState = {
  isAuth: false,
  user: null,
  token: '',
};
function AuthProvider({ displayName = 'AuthProvider', children }) {
  const { storageData } = useStorage('pocketbase_auth');
  const [authState, setAuthState] = useState(initialAuthState);

  useEffect(() => {
    if (storageData) {
      const { token, model } = storageData;
      setAuthState({
        isAuth: !!model,
        user: model,
        token,
      });
    }
  }, [storageData]);

  useEffect(() => {
    const unsub = pb.authStore.onChange((token, model) => {
      setAuthState((state) => ({
        ...state,
        isAuth: !!model,
        user: model,
        token,
      }));
    });

    return () => {
      unsub?.();
    };
  }, []);

  const signUp = async (registerUser) => {
    const response = await pb.collection('users').create(registerUser);
    return response;
  };

  const signIn = async (usernameOrEmail, password) => {
    const response = await pb
      .collection('users')
      .authWithPassword(usernameOrEmail, password);
    return response;
  };

  const signOut = async () => {
    const response = await pb.authStore.clear();
    return response;
  };

  const cancelMembership = async (recordId) => {
    const response = await pb.collection('users').delete(recordId);
    return response;
  };

  const authValue = useMemo(
    () => ({
      ...authState,
      signUp,
      signIn,
      signOut,
      cancelMembership,
    }),
    [authState]
  );

  return (
    <AuthContext.Provider value={authValue} displayName={displayName}>
      {children}
    </AuthContext.Provider>
  );
}

AuthProvider.defaultProps = {
  displayName: 'AuthProvider',
};

AuthProvider.propTypes = {
  displayName: string,
  children: node.isRequired, // React.ReactNode
};

export default AuthProvider;

// 커스텀 훅
// 인증 정보를 앱 어디서나 손쉽게 주입 받아 쓸 수 있도록 하는 함수
export const useAuth = () => {
  const authValue = useContext(AuthContext);
  if (!authValue) {
    throw new Error('useAuth 훅은 AuthProvider 내부에서만 사용할 수 있습니다.');
  }

  return authValue;
};
