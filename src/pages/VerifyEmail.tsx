import { VerifyContainer } from '../containers/EmailVerification';
import { FooterContainer } from '../containers/Footer';
import { HeaderContainer } from '../containers/Header';

export default function VerifyEmail() {
  return (
    <>
      <HeaderContainer bg={false} toggled={true} srcImg="">
        <VerifyContainer />
      </HeaderContainer>
      <FooterContainer toggled={true} />
    </>
  );
}
