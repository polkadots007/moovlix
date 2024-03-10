import { useEffect, useState } from 'react';
import { Dialog } from '../components';
import { FooterContainer } from '../containers/Footer';
import { HeaderContainer } from '../containers/Header';
import { getAuth, sendPasswordResetEmail } from 'firebase/auth';

interface onChangeProps {
  target: {
    value: string;
  };
}
export default function RecoverPassword() {
  const [recoveryMail, setRecoveryMail] = useState<string>('');
  const [error, setError] = useState<string>('');
  const [isNotifSent, setNotifStatus] = useState<boolean>(false);
  const auth = getAuth();
  //   const navigate = useNavigate();
  const regex = /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/;
  const Invalid = recoveryMail === '';
  const Incorrect = !regex.test(recoveryMail);

  useEffect(() => {
    !Invalid && setError('');
    !Incorrect && setError('');
  }, [Invalid, Incorrect]);
  const handleRecovery = () => {
    if (Invalid) {
      setError('Email is required.');
    } else if (Incorrect) {
      setError('Please enter a valid email address.');
    } else {
      sendPasswordResetEmail(auth, recoveryMail)
        .then(() => {
          setNotifStatus(true);
          console.log('Password reset email sent');
          // Handle success
        })
        .catch((error: { code: number; message: string }) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.error(errorCode + ':' + errorMessage);
          // Handle error
        });
      // setNotifStatus(true);
      // console.log('check', Invalid && regex.test(email));
      //   navigate(ROUTES.SIGN_UP);
      setError('');
    }
  };
  return (
    <>
      <HeaderContainer srcImg="logout" bg={true} toggled={false}>
        <Dialog>
          <Dialog.Box>
            <Dialog.Frame>
              {!isNotifSent ? (
                <>
                  <Dialog.Title>Forgot Email/Password</Dialog.Title>
                  <Dialog.Text>
                    How would you like to reset your password?
                  </Dialog.Text>
                  <Dialog.Text>
                    We will send you an email with instructions on how to reset
                    your password.
                  </Dialog.Text>
                  <Dialog.Input
                    placeholder="name@example.com"
                    error={error}
                    value={recoveryMail || ''}
                    onChange={({ target }: onChangeProps) =>
                      setRecoveryMail(target.value)
                    }
                  />
                  <Dialog.Button onClick={handleRecovery}>
                    Email Me
                  </Dialog.Button>
                </>
              ) : (
                <>
                  <Dialog.Title>Email Sent</Dialog.Title>
                  <Dialog.Text>
                    An email with instructions on how to reset your password has
                    been sent to <b>{recoveryMail}</b>. Check your spam or junk
                    folder if you don’t see the email in your inbox.
                  </Dialog.Text>
                  <Dialog.Text>
                    If you no longer have access to this email account, please
                    <Dialog.Link to="#" extra={false}>
                      {' '}
                      contact us.
                    </Dialog.Link>
                  </Dialog.Text>
                </>
              )}
            </Dialog.Frame>
            <Dialog.BoxFrame>
              <Dialog.ExtraText>
                This page is protected by Google reCAPTCHA to ensure you're not
                a bot.
                <Dialog.Link to="#" extra={true}>
                  {' '}
                  Learn more.
                </Dialog.Link>
              </Dialog.ExtraText>
            </Dialog.BoxFrame>
          </Dialog.Box>
        </Dialog>
      </HeaderContainer>
      <FooterContainer toggled={false} />
    </>
  );
}
