import { StepContent } from '../components';
import stepData from '../fixtures/reg_steps.json';
import * as ROUTES from '../constants/Routes';
import { UserContext } from '../context/newuser';
import { useContext } from 'react';
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
export function VerifyContainer() {
  const { userDetails } = useContext(UserContext)!;

  return (
    <StepContent>
      {stepData.map(
        (step: stepProps) =>
          step.id == 3 && (
            <StepContent.LFrame align="center" key={step.id}>
              <StepContent.IconNormal />
              <StepContent.SmallText>
                STEP <b>2</b> OF <b>3</b>
              </StepContent.SmallText>
              <StepContent.Title>{step.title}</StepContent.Title>
              <StepContent.MediumText align="center">
                {step.action?.text1} <b>{userDetails.email}</b>{' '}
                {step.action?.text2}
              </StepContent.MediumText>
              <StepContent.MediumText align="center">
                {step.description}
              </StepContent.MediumText>
              <StepContent.Button type={'other'} to={ROUTES.HOME}>
                Skip
              </StepContent.Button>
            </StepContent.LFrame>
          ),
      )}
    </StepContent>
  );
}
