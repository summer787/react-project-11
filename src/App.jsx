// /src/App.jsx
import { RouterProvider } from 'react-router-dom';
import { Suspense } from 'react';
import router from './routes';
import AuthProvider from './components/contexts/AuthContext';

function App() {
  return (
    <AuthProvider>
      <Suspense fallback={<div>Loading</div>}>
        <RouterProvider router={router} />
      </Suspense>
    </AuthProvider>
  );
}

export default App;
