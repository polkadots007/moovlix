import { Header } from '../components';
import * as ROUTES from './../constants/Routes';
import logo from '/images/logos/MOOVIX.png';

interface propsHeaderContainer {
  bg: boolean;
  toggletheme: boolean;
  children: React.ReactNode;
}

export function HeaderContainer({
  bg = true,
  toggletheme = false,
  children,
}: propsHeaderContainer) {
  return (
    <Header bg={bg} toggletheme={toggletheme} src="home-bg-new">
      <Header.Frame toggletheme={toggletheme}>
        <Header.Logo to={ROUTES.HOME} alt="Netflix" src={logo} />
        <Header.Button toggletheme={toggletheme} to={ROUTES.SIGN_IN}>
          Sign In
        </Header.Button>
      </Header.Frame>
      {children}
    </Header>
  );
}
