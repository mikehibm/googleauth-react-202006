import React from 'react';
import { useAuthState } from './auth-state';
import './UserInfo.css';

export function UserInfo() {
  const [state] = useAuthState();
  const { isSignedIn, userId, userName, userEmail, error } = state;

  if (isSignedIn === undefined) {
    return <div className="UserInfo-loading">Loading...</div>;
  }

  if (error) {
    return (
      <div className="UserInfo">
        <pre>{JSON.stringify(error, null, 2)}</pre>
      </div>
    );
  }

  return (
    <div className="UserInfo">
      <p>Id: {userId}</p>
      <p>Name: {userName}</p>
      <p>Email: {userEmail}</p>
      <hr />
      <pre>{JSON.stringify(state, null, 2)}</pre>
    </div>
  );
}
