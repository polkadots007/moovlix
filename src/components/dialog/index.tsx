import {
  Container,
  Box,
  Frame,
  Title,
  Text,
  ButtonLink,
  Button,
} from './styles/Dialog';

interface linkProps {
  to: string;
  children: React.ReactNode;
  [key: string]: unknown;
}
interface defaultProps {
  children: React.ReactNode;
  [key: string]: unknown;
}
export default function Dialog({ children, ...restProps }: defaultProps) {
  return <Container {...restProps}>{children}</Container>;
}

Dialog.Box = function DialogBox({ children, ...restProps }: defaultProps) {
  return <Box {...restProps}>{children}</Box>;
};

Dialog.Frame = function DialogFrame({ children, ...restProps }: defaultProps) {
  return <Frame {...restProps}>{children}</Frame>;
};

Dialog.Title = function DialogTitle({ children, ...restProps }: defaultProps) {
  return <Title {...restProps}>{children}</Title>;
};

Dialog.Text = function DialogText({ children, ...restProps }: defaultProps) {
  return <Text {...restProps}>{children}</Text>;
};

Dialog.Button = function DialogButton({
  children,
  ...restProps
}: defaultProps) {
  return <Button {...restProps}>{children}</Button>;
};

Dialog.ButtonLink = function DialogButtonLink({
  to,
  children,
  ...restProps
}: linkProps) {
  return (
    <ButtonLink to={to} {...restProps}>
      {children}
    </ButtonLink>
  );
};
