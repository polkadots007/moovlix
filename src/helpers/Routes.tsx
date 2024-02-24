import { useState } from 'react';
import { useLocation, Location, Navigate } from 'react-router-dom';
import * as ROUTES from '../constants/Routes';
import { UserProps } from '../types';

interface IsUserProps {
  user: UserProps | null;
  loggedInPath: string;
  children: React.ReactNode;
  [key: string]: unknown;
}

interface RouteProps {
  user: UserProps | null;
  children: React.ReactNode;
  [key: string]: unknown;
}

export function IsUserLoggedIn({ user, loggedInPath, children }: IsUserProps) {
  const curLocation = useLocation();

  const [location] = useState<Location>(curLocation.state || {});
  return !user ? (
    children
  ) : (
    <Navigate to={loggedInPath} state={{ from: location }} />
  );
}

export function ProtectedRoute({ user, children }: RouteProps) {
  const curLocation = useLocation();

  const [location] = useState<Location>(curLocation.state || {});
  return user ? (
    children
  ) : (
    <Navigate to={ROUTES.SIGN_IN} state={{ from: location }} />
  );
}
