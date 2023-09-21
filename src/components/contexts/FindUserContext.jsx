import { createContext, useMemo, useState } from 'react';
import { string, node } from 'prop-types';

export const FindUserContext = createContext();

const initialState = {
  email: null,
  id: null,
  username: null,
};

function FindUserProvider({ displayName = 'FindUserProvider', children }) {
  const [findUserState, setFindUserState] = useState(initialState);
  const FindUser = useMemo(
    () => ({
      ...findUserState,
      updateFindUserState: (records) => {
        setFindUserState((state) => ({
          ...state,
          ...records,
        }));
      },
    }),
    [findUserState]
  );

  return (
    <FindUserContext.Provider value={FindUser} displayName={displayName}>
      {children}
    </FindUserContext.Provider>
  );
}

FindUserProvider.defaultProps = {
  displayName: 'FindUserProvider',
};

FindUserProvider.propTypes = {
  displayName: string,
  children: node.isRequired,
};

export default FindUserProvider;
