import {
  Container,
  Row,
  Column,
  Link,
  Title,
  Text,
  Break,
} from './styles/Footer';

interface propsFooterType {
  toggled: boolean;
  children: React.ReactNode;
  [key: string]: unknown;
}

interface propsType {
  children: React.ReactNode;
  [key: string]: unknown;
}

interface propsTypewithToggle {
  toggled: boolean;
  children: React.ReactNode;
  [key: string]: unknown;
}

interface propsBreakType {
  [key: string]: unknown;
}

export default function Footer({
  toggled = false,
  children,
  ...restProps
}: propsFooterType) {
  return (
    <Container toggled={toggled} {...restProps}>
      {children}
    </Container>
  );
}

Footer.Row = function FooterRow({ children, ...restProps }: propsType) {
  return <Row {...restProps}>{children}</Row>;
};

Footer.Column = function FooterColumn({ children, ...restProps }: propsType) {
  return <Column {...restProps}>{children}</Column>;
};

Footer.Link = function FooterLink({
  toggled = false,
  children,
  ...restProps
}: propsTypewithToggle) {
  return (
    <Link toggled={toggled} {...restProps}>
      {children}
    </Link>
  );
};

Footer.Title = function FooterTitle({
  toggled = false,
  children,
  ...restProps
}: propsTypewithToggle) {
  return (
    <Title toggled={toggled} {...restProps}>
      {children}
    </Title>
  );
};

Footer.Text = function FooterText({
  toggled = false,
  children,
  ...restProps
}: propsTypewithToggle) {
  return (
    <Text toggled={toggled} {...restProps}>
      {children}
    </Text>
  );
};

Footer.Break = function FooterBreak({ ...restProps }: propsBreakType) {
  return <Break {...restProps} />;
};
