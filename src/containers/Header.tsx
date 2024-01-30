import { Header } from '../components';
import * as ROUTES from './../constants/Routes';
import logo from '/images/logos/MOOVIX.png';

interface propsHeaderContainer {
  children: React.ReactNode;
}

export function HeaderContainer({ children }: propsHeaderContainer) {
  return (
    <Header bg={true} src="">
      <Header.Frame>
        <Header.Logo to={ROUTES.HOME} alt="Netflix" src={logo} />
        <Header.Button to={ROUTES.SIGN_IN}>Sign In</Header.Button>
      </Header.Frame>
      {children}
    </Header>
  );
}
