import { StepContent } from '../components';
import stepData from '../fixtures/reg_steps.json';
import * as ROUTES from '../constants/Routes';
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
export function StepContainer() {
  return (
    <StepContent>
      {stepData.map(
        (step: stepProps) =>
          step.id == 1 && (
            <StepContent.Frame key={step.id}>
              <StepContent.Image src={step.image} />
              <StepContent.SmallText>
                STEP <b>1</b> OF <b>3</b>
              </StepContent.SmallText>
              <StepContent.Title>{step.title}</StepContent.Title>
              <StepContent.Text align="center">
                {step.description}
              </StepContent.Text>
              <StepContent.Button type={'normal'} to={ROUTES.REGISTRATION}>
                Next
              </StepContent.Button>
            </StepContent.Frame>
          ),
      )}
    </StepContent>
  );
}
