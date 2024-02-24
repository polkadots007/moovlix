import { useContext } from 'react';
import { Header } from '../components';
import * as ROUTES from './../constants/Routes';
import logo from '/images/logos/MOOVIX.png';
import { UserContext } from '../context/newuser';

interface propsHeaderContainer {
  bg: boolean;
  toggled: boolean;
  srcImg: string;
  children: React.ReactNode;
}

export function HeaderContainer({
  bg = true,
  toggled = false,
  srcImg = '',
  children,
}: propsHeaderContainer) {
  const { userDetails } = useContext(UserContext)!;
  return (
    <Header bg={bg} toggled={toggled} src={srcImg || 'home-bg-new'}>
      <Header.Frame toggled={toggled}>
        <Header.Logo to={ROUTES.HOME} alt="Netflix" src={logo} />
        {userDetails.uid === null ? (
          <Header.Button logged={false} toggled={toggled} to={ROUTES.SIGN_IN}>
            Sign In
          </Header.Button>
        ) : (
          <Header.Button logged={true} toggled={toggled} to={ROUTES.SIGN_OUT}>
            Sign Out
          </Header.Button>
        )}
      </Header.Frame>
      {children}
    </Header>
  );
}
