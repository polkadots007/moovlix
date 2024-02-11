import faqsData from '../fixtures/faqs.json';
import { Accordion, OptForm } from '../components';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as ROUTES from '../constants/Routes';

interface FaqsProps {
  id: number;
  header: string;
  body: string;
}
interface onChangeProps {
  target: {
    value: string;
  };
  [key: string]: unknown;
}

export function FaqsContainer() {
  const navigate = useNavigate();
  const [emailAddress, setEmailAddress] = useState<string>('');
  const [error, setError] = useState<string>('');
  const regex = /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/;
  const Invalid = emailAddress === '';
  const Incorrect = !regex.test(emailAddress);
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
      console.log('check', Invalid && regex.test(emailAddress));
      navigate(ROUTES.SIGN_UP);
      setError('');
    }
  };

  return (
    <Accordion>
      <Accordion.Title>Frequently Asked Questions</Accordion.Title>
      {faqsData.map((item: FaqsProps) => (
        <Accordion.Item key={item.id}>
          <Accordion.Header>{item.header}</Accordion.Header>
          <Accordion.Body>{item.body}</Accordion.Body>
        </Accordion.Item>
      ))}
      <OptForm>
        <OptForm.Text>
          Ready to watch? Enter your email to create or restart your membership.
        </OptForm.Text>
        <OptForm.Break />
        <OptForm.Input
          error={error}
          placeholder="Email address"
          value={emailAddress}
          onChange={({ target }: onChangeProps) =>
            setEmailAddress(target.value)
          }
        />
        <OptForm.Button onClick={handleSignUpOrRecreate}>
          Get Started
        </OptForm.Button>
      </OptForm>
    </Accordion>
  );
}
