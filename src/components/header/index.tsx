import { Link } from 'react-router-dom';
import {
  Background,
  ClearBackground,
  Container,
  Logo,
  ButtonLink,
} from './styles/Header';

interface propsWithLinkToggle {
  to: string;
  toggled: boolean;
  logged: boolean;
  children: React.ReactNode;
  [key: string]: unknown;
}

interface propsFrame {
  toggled: boolean;
  children: React.ReactNode;
  [key: string]: unknown;
}
interface propsHeader {
  bg: boolean;
  src: string;
  toggled: boolean;
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
  toggled = false,
  children,
  ...restProps
}: propsHeader) {
  return bg ? (
    <Background src={src as string} {...restProps}>
      {children}
    </Background>
  ) : (
    <ClearBackground toggled={toggled}>{children}</ClearBackground>
  );
}

Header.Frame = function HeaderFrame({
  toggled = false,
  children,
  ...restProps
}: propsFrame) {
  return (
    <Container toggled={toggled} {...restProps}>
      {children}{' '}
    </Container>
  );
};

Header.Button = function HeaderButton({
  to,
  toggled = false,
  logged = false,
  children,
  ...restProps
}: propsWithLinkToggle) {
  return (
    <ButtonLink to={to} toggled={toggled} logged={logged} {...restProps}>
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
