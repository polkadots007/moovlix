import { RegistrationContainer } from '../containers/ContentSignUp';
import { FooterContainer } from '../containers/Footer';
import { HeaderContainer } from '../containers/Header';

export default function Registration() {
  return (
    <>
      <HeaderContainer srcImg="home-bg-new" bg={false} toggled={true}>
        <RegistrationContainer />
      </HeaderContainer>
      <FooterContainer toggled={true} />
    </>
  );
}
