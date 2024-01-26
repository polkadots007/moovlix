import {
  Container,
  Row,
  Column,
  Link,
  Title,
  Text,
  Break,
} from './styles/Footer';

interface propsType {
  children: React.ReactNode;
  [key: string]: unknown;
}

interface propsBreakType {
  [key: string]: unknown;
}

export default function Footer({ children, ...restProps }: propsType) {
  return <Container {...restProps}>{children}</Container>;
}

Footer.Row = function FooterRow({ children, ...restProps }: propsType) {
  return <Row {...restProps}>{children}</Row>;
};

Footer.Column = function FooterColumn({ children, ...restProps }: propsType) {
  return <Column {...restProps}>{children}</Column>;
};

Footer.Link = function FooterLink({ children, ...restProps }: propsType) {
  return <Link {...restProps}>{children}</Link>;
};

Footer.Title = function FooterTitle({ children, ...restProps }: propsType) {
  return <Title {...restProps}>{children}</Title>;
};

Footer.Text = function FooterText({ children, ...restProps }: propsType) {
  return <Text {...restProps}>{children}</Text>;
};

Footer.Break = function FooterBreak({ ...restProps }: propsBreakType) {
  return <Break {...restProps} />;
};
