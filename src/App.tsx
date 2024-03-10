import * as ROUTES from './constants/Routes';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import {
  Home,
  Browse,
  SignUp,
  SignIn,
  Registration,
  VerifyEmail,
  SignOut,
  NotFound,
} from './pages';
import { UserContext } from './context/newuser';
import { Suspense, useState } from 'react';
import { UserProps } from './types';
import { useAuthListener } from './hooks';
import { IsUserLoggedIn, ProtectedRoute } from './helpers/Routes';
import RecoverPassword from './pages/Recover';

function App() {
  const { user } = useAuthListener();
  const [userDetails, setUserDetails] = useState<UserProps>({
    email: user?.email || '',
    uid: user?.uid || null,
  });
  return (
    <UserContext.Provider value={{ userDetails, setUserDetails }}>
      <Router>
        <Suspense
          fallback={
            <p
              className="flex max-w-full h-screen 
          items-center justify-center font-bold
          text-2xl
          "
            >
              Loading...
            </p>
          }
        >
          <Routes>
            <Route path={ROUTES.HOME} element={<Home />}></Route>
            <Route
              path={ROUTES.BROWSER}
              element={
                <ProtectedRoute user={user}>
                  <Browse />
                </ProtectedRoute>
              }
            ></Route>
            <Route
              path={ROUTES.RECOVER_PW}
              element={
                <IsUserLoggedIn
                  user={user}
                  loggedInPath={ROUTES.BROWSER}
                  path={ROUTES.RECOVER_PW}
                >
                  <RecoverPassword />
                </IsUserLoggedIn>
              }
            ></Route>
            <Route
              path={ROUTES.SIGN_UP}
              element={
                <IsUserLoggedIn
                  user={user}
                  loggedInPath={ROUTES.BROWSER}
                  path={ROUTES.SIGN_UP}
                >
                  <SignUp />
                </IsUserLoggedIn>
              }
            ></Route>
            <Route path={ROUTES.SIGN_OUT} element={<SignOut />}></Route>
            <Route
              path={ROUTES.REGISTRATION}
              element={
                <IsUserLoggedIn
                  user={user}
                  loggedInPath={ROUTES.BROWSER}
                  path={ROUTES.REGISTRATION}
                >
                  <Registration />
                </IsUserLoggedIn>
              }
            ></Route>
            <Route
              path={ROUTES.VERIFY}
              element={
                <IsUserLoggedIn
                  user={user}
                  loggedInPath={ROUTES.BROWSER}
                  path={ROUTES.VERIFY}
                >
                  <VerifyEmail />
                </IsUserLoggedIn>
              }
            ></Route>
            <Route
              path={ROUTES.SIGN_IN}
              element={
                <IsUserLoggedIn
                  user={user}
                  loggedInPath={ROUTES.BROWSER}
                  path={ROUTES.SIGN_IN}
                >
                  <SignIn />
                </IsUserLoggedIn>
              }
            ></Route>
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
