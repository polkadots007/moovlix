import { HeaderContainer } from '../containers/Header';
import { FooterContainer } from '../containers/Footer';
import { StepContainer } from '../containers/ContentStep';

export default function SignUp() {
  return (
    <>
      <HeaderContainer bg={false} toggletheme={true}>
        <StepContainer />
      </HeaderContainer>
      <FooterContainer toggletheme={true} />
    </>
  );
}
