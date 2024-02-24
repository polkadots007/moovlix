import { createContext } from 'react';
import { UserProps } from '../types';
// Create a context
interface UserPropsShared {
  userDetails: {
    email: string;
    uid: string | null;
  };
  setUserDetails: React.Dispatch<React.SetStateAction<UserProps>>;
}
export const UserContext = createContext<UserPropsShared | undefined>(
  undefined,
);
