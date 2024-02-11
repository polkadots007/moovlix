import { StepContent } from '../components';
import stepData from '../fixtures/reg_steps.json';
import * as ROUTES from '../constants/Routes';
import { Dispatch, SetStateAction, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
interface stepProps {
  id: number;
  title: string;
  image?: string;
  alt?: string;
  description: string;
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
  const navigate = useNavigate();
  const [emailAddress, setEmailAddress] = useState<string>('');
  const [error, setError] = useState<errorProps>({
    input: '',
    pwd: '',
  });
  const [password, setPassword] = useState<string>('');

  useEffect(() => {
    const regexInput = /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/;
    const regexPassword = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    emailAddress !== '' &&
      setError((prev: errorProps) => ({ input: '', pwd: prev.pwd }));
    regexInput.test(emailAddress) &&
      setError((prev: errorProps) => ({ input: '', pwd: prev.pwd }));
    password !== '' &&
      setError((prev: errorProps) => ({ input: prev.pwd, pwd: '' }));
    regexPassword.test(password) &&
      setError((prev: errorProps) => ({ input: prev.pwd, pwd: '' }));
  }, [emailAddress, password]);

  const handleSignUpOrRecreate = () => {
    if (checkCredentials(emailAddress, password, setError)) {
      navigate(ROUTES.SIGN_UP);
      setError({});
    }
  };

  return (
    <StepContent>
      {stepData.map(
        (step: stepProps) =>
          step.id == 2 && (
            <StepContent.LFrame key={step.id}>
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
                value={emailAddress}
                onChange={({ target }: onChangeProps) =>
                  setEmailAddress(target.value)
                }
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
