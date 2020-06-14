import React from 'react';
import { useAuthState } from './auth-state';

export function SignInOutButton() {
  const [state, actions] = useAuthState();
  const { isSignedIn } = state;
  const { signIn, signOut } = actions;

  if (isSignedIn === undefined) {
    return null;
  }

  return (
    <div>
      {isSignedIn ? (
        <button onClick={signOut}>Sign Out</button>
      ) : (
        <button onClick={signIn}>Sign In</button>
      )}
    </div>
  );
}
