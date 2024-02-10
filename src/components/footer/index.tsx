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
  toggletheme: boolean;
  children: React.ReactNode;
  [key: string]: unknown;
}

interface propsType {
  children: React.ReactNode;
  [key: string]: unknown;
}

interface propsTypewithToggle {
  toggletheme: boolean;
  children: React.ReactNode;
  [key: string]: unknown;
}

interface propsBreakType {
  [key: string]: unknown;
}

export default function Footer({
  toggletheme = false,
  children,
  ...restProps
}: propsFooterType) {
  return (
    <Container toggletheme={toggletheme} {...restProps}>
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
  toggletheme = false,
  children,
  ...restProps
}: propsTypewithToggle) {
  return (
    <Link toggletheme={toggletheme} {...restProps}>
      {children}
    </Link>
  );
};

Footer.Title = function FooterTitle({
  toggletheme = false,
  children,
  ...restProps
}: propsTypewithToggle) {
  return (
    <Title toggletheme={toggletheme} {...restProps}>
      {children}
    </Title>
  );
};

Footer.Text = function FooterText({
  toggletheme = false,
  children,
  ...restProps
}: propsTypewithToggle) {
  return (
    <Text toggletheme={toggletheme} {...restProps}>
      {children}
    </Text>
  );
};

Footer.Break = function FooterBreak({ ...restProps }: propsBreakType) {
  return <Break {...restProps} />;
};
