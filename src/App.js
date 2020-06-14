import React from 'react';
import { AuthProvider } from './auth-state';
import { UserInfo } from './UserInfo';
import { SignInOutButton } from './SignInOutButton';
import './App.css';

function App() {
  return (
    <AuthProvider>
      <div className="App">
        <header className="App-header">
          <h1>Google Auth React Examle</h1>
          <SignInOutButton />
        </header>
        <div className="App-main">
          <UserInfo />
        </div>
      </div>
    </AuthProvider>
  );
}

export default App;
