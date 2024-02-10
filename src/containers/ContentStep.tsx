import { StepContent } from '../components';
import stepData from '../fixtures/reg_steps.json';
import * as ROUTES from '../constants/Routes';
interface stepProps {
  id: number;
  title: string;
  image: string;
  alt: string;
  description: string;
}
export function StepContainer() {
  return (
    <StepContent>
      {stepData.map((step: stepProps) => (
        <StepContent.Frame key={step.id}>
          <StepContent.Image src={step.image} />
          <StepContent.SmallText>STEP 1 OF 3</StepContent.SmallText>
          <StepContent.Title>{step.title}</StepContent.Title>
          <StepContent.Text>{step.description}</StepContent.Text>
          <StepContent.Button to={ROUTES.REGISTRATION}>Next</StepContent.Button>
        </StepContent.Frame>
      ))}
    </StepContent>
  );
}
