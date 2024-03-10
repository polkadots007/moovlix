import { useState, useEffect } from 'react';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { UserProps } from '../types';

export default function useAuthListener() {
  const authUser = localStorage.getItem('authUser') || null;

  const [user, setUser] = useState<UserProps | null>(
    authUser !== null && authUser != undefined ? JSON.parse(authUser) : null,
  );

  useEffect(() => {
    const auth = getAuth();
    const listener = onAuthStateChanged(auth, (authCurrentUser) => {
      if (authCurrentUser) {
        // if we an authenticated user -> store the user in localStorage
        const userInfo: UserProps | null = {
          email: (authCurrentUser?.email as string) ?? null,
          uid: authCurrentUser.uid,
        };
        localStorage.setItem('authUser', JSON.stringify(userInfo));
        setUser(userInfo);
      } else {
        // if there is no user, we clear the localStorage
        localStorage.removeItem('authUser');
        setUser(null);
      }
    });
    return () => listener();
  }, []);

  return { user };
}
