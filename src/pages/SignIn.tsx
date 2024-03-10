import { HeaderContainer } from '../containers/Header';
import { FooterContainer } from '../containers/Footer';
import { Form } from '../components';
import { useState } from 'react';
import * as ROUTES from '../constants/Routes';
import { useNavigate } from 'react-router-dom';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';

interface onChangeProps {
  target: {
    value: string;
  };
  [key: string]: unknown;
}

interface errorProps {
  code: number;
  message: string;
}

export default function SignIn() {
  const [emailAddress, setEmailAddress] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [error, setError] = useState<string>('');
  const navigate = useNavigate();
  const auth = getAuth();

  const isInvalid = password === '' || emailAddress === '';
  const handleSignin = (event: MouseEvent) => {
    event.preventDefault();
    //firebase
    signInWithEmailAndPassword(auth, emailAddress, password)
      .then(() => {
        //push to browse page
        navigate(ROUTES.BROWSER);
      })
      .catch((error: errorProps) => {
        setEmailAddress('');
        setPassword('');
        setError(error.message);
      });
  };

  return (
    <>
      <HeaderContainer srcImg="home-bg-new" bg={true} toggled={false}>
        <Form>
          <Form.Title>Sign In</Form.Title>
          {error && <Form.Error>{error}</Form.Error>}
          <Form.Base onSubmit={handleSignin} method="POST">
            <Form.Input
              placeholder="Email address"
              value={emailAddress}
              onChange={({ target }: onChangeProps) =>
                setEmailAddress(target.value)
              }
            />
            <Form.Input
              type="password"
              autoComplete="off"
              placeholder="Password"
              value={password}
              onChange={({ target }: onChangeProps) =>
                setPassword(target.value)
              }
            />
            <Form.Submit disabled={isInvalid} type="submit">
              Sign In
            </Form.Submit>
          </Form.Base>
          <Form.LinkBase>
            <Form.Link to={ROUTES.RECOVER_PW} normal={false} highlight={true}>
              {' '}
              Forgot password?
            </Form.Link>
          </Form.LinkBase>
          <Form.Text>
            New to Netflix?{' '}
            <Form.Link to={ROUTES.HOME} normal={false} highlight={false}>
              Sign up now.
            </Form.Link>
          </Form.Text>
          <Form.SmallText>
            This page is protected by Google reCAPTCHA to ensure you're not a
            bot.
            <Form.Link to="#" normal={true} highlight={false}>
              {' '}
              Learn more.
            </Form.Link>
          </Form.SmallText>
        </Form>
      </HeaderContainer>
      <FooterContainer toggled={false} />
    </>
  );
}
