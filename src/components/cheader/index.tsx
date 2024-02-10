import { Link } from 'react-router-dom';
import { Container, Logo, ButtonLink } from './styles/CHeader';

interface propsFrame {
  children: React.ReactNode;
  [key: string]: unknown;
}

interface propsHeader {
  children: React.ReactNode;
  [key: string]: unknown;
}

interface propsLogo {
  to: string;
  [key: string]: unknown;
}

export default function Header({ children, ...restProps }: propsHeader) {
  return <Container {...restProps}>{children} </Container>;
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
