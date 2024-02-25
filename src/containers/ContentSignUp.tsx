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
import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
} from 'firebase/auth';
import { setPersistence, browserSessionPersistence } from 'firebase/auth';
import { UserContext } from '../context/newuser';
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
  fullName: string;
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
  fullName?: string;
}

type SetStateFunction<errorProps> = Dispatch<SetStateAction<errorProps>>;

const checkCredentials = (
  email: string,
  pwd: string,
  fullName: string,
  setError: SetStateFunction<errorProps>,
) => {
  const regexInput = /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/;
  const regexPassword = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
  const regexName = /^[a-zA-ZÀ-ÿ-']+(?:\s[a-zA-ZÀ-ÿ-']+)*$/;
  let noErrorFlag: boolean = true;
  if (email === '') {
    setError((prev: errorProps) => ({
      input: 'Email is required.',
      pwd: prev.pwd,
      fullName: prev.fullName,
    }));
    noErrorFlag = false;
  } else if (!regexInput.test(email)) {
    setError((prev: errorProps) => ({
      input: 'Please enter a valid email address.',
      pwd: prev.pwd,
      fullName: prev.fullName,
    }));
    noErrorFlag = false;
  }
  if (fullName === '') {
    setError((prev: errorProps) => ({
      input: prev.input,
      pwd: prev.pwd,
      fullName: 'Full Name is required.',
    }));
    noErrorFlag = false;
  } else if (!regexName.test(fullName)) {
    setError((prev: errorProps) => ({
      input: prev.pwd,
      pwd: prev.pwd,
      fullName: 'Please enter a valid name.',
    }));
    noErrorFlag = false;
  }
  if (pwd === '') {
    setError((prev: errorProps) => ({
      pwd: 'Password is required.',
      input: prev.input,
      fullName: prev.fullName,
    }));
    noErrorFlag = false;
  } else if (!regexPassword.test(pwd)) {
    setError((prev: errorProps) => ({
      pwd: 'Please enter a valid password.',
      input: prev.input,
      fullName: prev.fullName,
    }));
    noErrorFlag = false;
  }
  return noErrorFlag;
};

export function RegistrationContainer() {
  const auth = getAuth();
  const navigate = useNavigate();
  const { userDetails } = useContext(UserContext)!;
  const [email, setEmail] = useState<string>(userDetails.email || '');
  const [error, setError] = useState<errorProps>({
    input: '',
    pwd: '',
    fullName: '',
  });
  const [password, setPassword] = useState<string>('');
  const [fullName, setFullName] = useState<string>('');

  useEffect(() => {
    const regexInput = /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/;
    const regexPassword = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    const regexName = /^[a-zA-ZÀ-ÿ-']+(?:\s[a-zA-ZÀ-ÿ-']+)*$/;
    email !== '' &&
      setError((prev: errorProps) => ({
        input: '',
        pwd: prev.pwd,
        fullName: prev.fullName,
      }));
    regexInput.test(email) &&
      setError((prev: errorProps) => ({
        input: '',
        pwd: prev.pwd,
        fullName: prev.fullName,
      }));
    fullName !== '' &&
      setError((prev: errorProps) => ({
        input: '',
        pwd: prev.pwd,
        fullName: '',
      }));
    regexName.test(fullName) &&
      setError((prev: errorProps) => ({
        input: '',
        pwd: prev.pwd,
        fullName: '',
      }));
    password !== '' &&
      setError((prev: errorProps) => ({
        input: prev.input,
        pwd: '',
        fullName: prev.fullName,
      }));
    regexPassword.test(password) &&
      setError((prev: errorProps) => ({
        input: prev.input,
        pwd: '',
        fullName: prev.fullName,
      }));
  }, [email, password, fullName]);
  const signUpWithEmailAndPassword = async ({
    email,
    password,
    fullName,
  }: usercreds) => {
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password,
      );
      const user = userCredential.user;
      updateProfile(user, {
        displayName: fullName,
        photoURL: (Math.floor(Math.random() * 5) + 1).toString(),
      });
      setPersistence(auth, browserSessionPersistence);
      // console.log('User signed up:', user, userCredential);
      return user;
    } catch (error) {
      if (error instanceof Error) {
        setEmail('');
        setFullName('');
        setPassword('');
        console.error('Error signing up:', error.message);
        throw error;
      }
    }
  };
  const handleSignUpOrRecreate = async () => {
    if (checkCredentials(email, password, fullName, setError)) {
      const user = await signUpWithEmailAndPassword({
        email: email,
        password: password,
        fullName: fullName,
      });
      if (user) {
        const userInfo = {
          email: user.email,
          uid: user.uid,
        };
        // localStorage.setItem('authUser', JSON.stringify(userInfo));
        //perform email verification
        navigate(ROUTES.VERIFY, { state: { user: userInfo } });
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
                error={error?.fullName}
                placeholder="Full Name"
                value={fullName}
                onChange={({ target }: onChangeProps) =>
                  setFullName(target.value)
                }
              />
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
