import { StepContent } from '../components';
import stepData from '../fixtures/reg_steps.json';
import * as ROUTES from '../constants/Routes';
import {
  Dispatch,
  SetStateAction,
  useContext,
  useEffect,
  useState,
} from 'react';
import { useNavigate } from 'react-router-dom';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { setPersistence, browserSessionPersistence } from 'firebase/auth';
import { UserContext } from '../context/newuser';
import { UserProps } from '../types';
// import { Error } from 'ts-error';
interface stepProps {
  id: number;
  title: string;
  image?: string;
  alt?: string;
  description: string;
  action?: {
    text1: string;
    text2: string;
  };
}

interface usercreds {
  email: string;
  password: string;
}
interface onChangeProps {
  target: {
    value: string;
  };
  [key: string]: unknown;
}

interface errorProps {
  input?: string;
  pwd?: string;
}

type SetStateFunction<errorProps> = Dispatch<SetStateAction<errorProps>>;

const checkCredentials = (
  email: string,
  pwd: string,
  setError: SetStateFunction<errorProps>,
) => {
  const regexInput = /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/;
  const regexPassword = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
  let noErrorFlag: boolean = true;
  if (email === '') {
    setError((prev: errorProps) => ({
      input: 'Email is required.',
      pwd: prev.pwd,
    }));
    noErrorFlag = false;
  } else if (!regexInput.test(email)) {
    setError((prev: errorProps) => ({
      input: 'Please enter a valid email address.',
      pwd: prev.pwd,
    }));
    noErrorFlag = false;
  }
  if (pwd === '') {
    setError((prev: errorProps) => ({
      pwd: 'Password is required.',
      input: prev.input,
    }));
    noErrorFlag = false;
  } else if (!regexPassword.test(pwd)) {
    setError((prev: errorProps) => ({
      pwd: 'Please enter a valid password.',
      input: prev.input,
    }));
    noErrorFlag = false;
  }
  return noErrorFlag;
};

export function RegistrationContainer() {
  const auth = getAuth();
  const navigate = useNavigate();
  const { userDetails, setUserDetails } = useContext(UserContext)!;
  const [email, setEmail] = useState<string>(userDetails.email || '');
  const [error, setError] = useState<errorProps>({
    input: '',
    pwd: '',
  });
  const [password, setPassword] = useState<string>('');

  useEffect(() => {
    const regexInput = /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/;
    const regexPassword = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    email !== '' &&
      setError((prev: errorProps) => ({ input: '', pwd: prev.pwd }));
    regexInput.test(email) &&
      setError((prev: errorProps) => ({ input: '', pwd: prev.pwd }));
    password !== '' &&
      setError((prev: errorProps) => ({ input: prev.input, pwd: '' }));
    regexPassword.test(password) &&
      setError((prev: errorProps) => ({ input: prev.input, pwd: '' }));
  }, [email, password]);
  const signUpWithEmailAndPassword = async ({ email, password }: usercreds) => {
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password,
      );
      const user = userCredential.user;
      setPersistence(auth, browserSessionPersistence);
      setUserDetails((prev: UserProps) => {
        prev.email = email;
        prev.uid = user?.uid;
        return prev;
      });
      const userInfo = {
        email: user.email,
        uid: user.uid,
      };
      localStorage.setItem('authUser', JSON.stringify(userInfo));
      // console.log('User signed up:', user, userCredential);
      return user;
    } catch (error) {
      if (error instanceof Error) {
        console.error('Error signing up:', error.message);
        throw error;
      }
    }
  };
  const handleSignUpOrRecreate = async () => {
    if (checkCredentials(email, password, setError)) {
      const user = await signUpWithEmailAndPassword({
        email: email,
        password: password,
      });
      if (user) {
        //perform email verification
        navigate(ROUTES.VERIFY);
        setError({});
      }
    }
  };

  return (
    <StepContent>
      {stepData.map(
        (step: stepProps) =>
          step.id == 2 && (
            <StepContent.LFrame align="left" key={step.id}>
              <StepContent.SmallText>
                STEP <b>1</b> OF <b>3</b>
              </StepContent.SmallText>
              <StepContent.Title>{step.title}</StepContent.Title>
              <StepContent.Text align="left">
                {step.description}
              </StepContent.Text>
              <StepContent.Input
                error={error?.input}
                placeholder="Email address"
                value={email}
                onChange={({ target }: onChangeProps) => setEmail(target.value)}
              />
              <StepContent.Password
                error={error?.pwd}
                placeholder="Add a password"
                value={password}
                onChange={({ target }: onChangeProps) =>
                  setPassword(target.value)
                }
              />
              <StepContent.SubmitButton onClick={handleSignUpOrRecreate}>
                Next
              </StepContent.SubmitButton>
            </StepContent.LFrame>
          ),
      )}
    </StepContent>
  );
}
