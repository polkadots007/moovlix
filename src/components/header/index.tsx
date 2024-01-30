import { Link } from 'react-router-dom';
import { Background, Container, Logo, ButtonLink } from './styles/Header';

interface propsFrame {
  children: React.ReactNode;
  [key: string]: unknown;
}

interface propsHeader {
  bg: boolean;
  src: string;
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
  children,
  ...restProps
}: propsHeader) {
  return bg ? (
    <Background src={src as string} {...restProps}>
      {children}
    </Background>
  ) : (
    children
  );
}

Header.Frame = function HeaderFrame({ children, ...restProps }: propsFrame) {
  return <Container {...restProps}>{children} </Container>;
};

Header.Button = function HeaderButton({ children, ...restProps }: propsFrame) {
  return <ButtonLink {...restProps}>{children}</ButtonLink>;
};

Header.Logo = function HeaderLogo({ to, ...restProps }: propsLogo) {
  return (
    <Link to={to}>
      <Logo {...restProps} />
    </Link>
  );
};
