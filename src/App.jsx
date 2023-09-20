// /src/App.jsx
import { RouterProvider } from 'react-router-dom';
import { Suspense } from 'react';
import router from './routes';
import AuthProvider from './components/contexts/AuthContext';
import FindUserProvider from './components/contexts/FindUserContext';

function App() {
  return (
    <AuthProvider>
      <FindUserProvider>
        <Suspense fallback={<div>Loading</div>}>
          <RouterProvider router={router} />
        </Suspense>
      </FindUserProvider>
    </AuthProvider>
  );
}

export default App;
