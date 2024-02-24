import { HeaderContainer } from '../containers/Header';
import { FooterContainer } from '../containers/Footer';
import { Dialog } from '../components';
import * as ROUTES from '../constants/Routes';
import { useNavigate } from 'react-router-dom';
import { getAuth, signOut } from 'firebase/auth';
import { useContext, useEffect } from 'react';
import { UserContext } from '../context/newuser';
import { UserProps } from '../types';

interface errorProps {
  code: number;
  message: string;
}

export default function SignOut() {
  const navigate = useNavigate();
  const auth = getAuth();
  const { setUserDetails } = useContext(UserContext)!;
  const handleSignOut = (event: MouseEvent | null) => {
    event && event.preventDefault();
    //firebase
    signOut(auth)
      .then(() => {
        //push to home page
        setUserDetails((prev: UserProps) => {
          prev.email = '';
          prev.uid = null;
          return prev;
        });
        navigate(ROUTES.HOME);
      })
      .catch((error: errorProps) => {
        console.error(error.message);
        throw error;
      });
  };

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      // Your function to trigger after 8 seconds
      handleSignOut(null);
    }, 30000);

    return () => {
      // Clear the timeout if the component is unmounted before 8 seconds
      clearTimeout(timeoutId);
    };
  }, []);

  return (
    <>
      <HeaderContainer srcImg="logout" bg={true} toggled={false}>
        <Dialog>
          <Dialog.Box>
            <Dialog.Frame>
              <Dialog.Title>Leaving So Soon?</Dialog.Title>
              <Dialog.Text>
                Just so you know, you don’t always need to sign out of Netflix.
                It’s only necessary if you’re on a shared or public computer.
              </Dialog.Text>
              <Dialog.Text>
                You’ll be redirected to Netflix.com in 30 seconds.
              </Dialog.Text>
              <Dialog.Button onClick={handleSignOut}>Go Now</Dialog.Button>
            </Dialog.Frame>
          </Dialog.Box>
        </Dialog>
      </HeaderContainer>
      <FooterContainer toggled={false} />
    </>
  );
}
