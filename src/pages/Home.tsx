import { FaqsContainer } from '../containers/Faqs';
import { FooterContainer } from '../containers/Footer';
import { JumbotronContainer } from '../containers/Jumbotron';
import { HeaderContainer } from '../containers/Header';
import { Feature, OptForm } from '../components';
import * as ROUTES from '../constants/Routes';
import { useNavigate } from 'react-router-dom';
import { useContext, useEffect, useState } from 'react';
import { UserContext } from '../context/newuser';
import { UserProps } from '../types';
interface onChangeProps {
  target: {
    value: string;
  };
  [key: string]: unknown;
}

export default function Home() {
  const navigate = useNavigate();
  const { userDetails, setUserDetails } = useContext(UserContext)!;
  const [email, setEmail] = useState<string>('');
  const [error, setError] = useState<string>('');
  const regex = /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/;
  const Invalid = email === '';
  const Incorrect = !regex.test(email);

  useEffect(() => {
    !Invalid && setError('');
    !Incorrect && setError('');
  }, [Invalid, Incorrect]);
  const handleSignUpOrRecreate = () => {
    if (Invalid) {
      setError('Email is required.');
    } else if (Incorrect) {
      setError('Please enter a valid email address.');
    } else {
      // console.log('check', Invalid && regex.test(email));
      setUserDetails((prev: UserProps) => {
        prev.email = email;
        return prev;
      });
      navigate(ROUTES.SIGN_UP);
      setError('');
    }
  };
  return (
    <>
      <HeaderContainer srcImg="home-bg-new" bg={true} toggled={false}>
        <Feature>
          {userDetails.uid !== null && (
            <Feature.Text>Welcome back!</Feature.Text>
          )}
          <Feature.Title>Unlimited movies, TV shows and more</Feature.Title>
          <Feature.SubTitle>
            Watch anywhere. Cancel at any time.
          </Feature.SubTitle>
          {userDetails.uid === null && (
            <OptForm>
              <OptForm.Text>
                Ready to watch? Enter your email to create or restart your
                membership.
              </OptForm.Text>
              <OptForm.Break />

              <>
                <OptForm.Input
                  error={error}
                  placeholder="Email address"
                  value={email || ''}
                  onChange={({ target }: onChangeProps) =>
                    setEmail(target.value)
                  }
                />
                <OptForm.Button onClick={handleSignUpOrRecreate}>
                  Get Started
                </OptForm.Button>
              </>
            </OptForm>
          )}
        </Feature>
      </HeaderContainer>
      <JumbotronContainer />
      <FaqsContainer />
      <FooterContainer toggled={false} />
    </>
  );
}
