import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import Home from './home.tsx'

const LoginButton = () => {
  const { loginWithRedirect, isAuthenticated, logout } = useAuth0();

  return (
    <div>
      {!isAuthenticated ? (
        <button onClick={() => loginWithRedirect()}>Ingresar</button>
      ) : (
        <div>
        <button onClick={() => logout()}>Log out</button> <br/>
        <Home/>
        </div>
      )}
    </div>
  );
};

export default LoginButton;
