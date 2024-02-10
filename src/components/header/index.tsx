import { Link } from 'react-router-dom';
import {
  Background,
  ClearBackground,
  Container,
  Logo,
  ButtonLink,
} from './styles/Header';

interface propsWithToggle {
  toggletheme: boolean;
  children: React.ReactNode;
  [key: string]: unknown;
}

interface propsFrame {
  children: React.ReactNode;
  [key: string]: unknown;
}
interface propsHeader {
  bg: boolean;
  src: string;
  toggletheme: boolean;
  children: React.ReactNode;
  [key: string]: unknown;
}

interface propsLogo {
  to: string;
  [key: string]: unknown;
}

export default function Header({
  bg = true,
  src = '',
  toggletheme = false,
  children,
  ...restProps
}: propsHeader) {
  return bg ? (
    <Background src={src as string} {...restProps}>
      {children}
    </Background>
  ) : (
    <ClearBackground toggletheme={toggletheme}>{children}</ClearBackground>
  );
}

Header.Frame = function HeaderFrame({
  toggletheme = false,
  children,
  ...restProps
}: propsFrame) {
  return (
    <Container toggletheme={toggletheme} {...restProps}>
      {children}{' '}
    </Container>
  );
};

Header.Button = function HeaderButton({
  toggletheme = false,
  children,
  ...restProps
}: propsWithToggle) {
  return (
    <ButtonLink toggletheme={toggletheme} {...restProps}>
      {children}
    </ButtonLink>
  );
};

Header.Logo = function HeaderLogo({ to, ...restProps }: propsLogo) {
  return (
    <Link to={to}>
      <Logo {...restProps} />
    </Link>
  );
};
