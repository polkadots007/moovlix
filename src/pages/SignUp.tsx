import { HeaderContainer } from '../containers/Header';
import { FooterContainer } from '../containers/Footer';
import { StepContainer } from '../containers/ContentStep';

export default function SignUp() {
  return (
    <>
      <HeaderContainer srcImg="home-bg-new" bg={false} toggled={true}>
        <StepContainer />
      </HeaderContainer>
      <FooterContainer toggled={true} />
    </>
  );
}
