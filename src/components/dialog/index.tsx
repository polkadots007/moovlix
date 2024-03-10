import {
  Container,
  Box,
  Frame,
  Title,
  Text,
  ButtonLink,
  Button,
  Input,
  BoxFrame,
  InputContainer,
  Error,
  IconSmall,
  Link,
  ExtraText,
} from './styles/Dialog';
import { CrossIcon } from '../../helpers/Icons';

interface linkProps {
  to: string;
  children: React.ReactNode;
  [key: string]: unknown;
}
interface defaultProps {
  children: React.ReactNode;
  [key: string]: unknown;
}

interface defaultLinkProps {
  to: string;
  extra: boolean;
  children: React.ReactNode;
  [key: string]: unknown;
}
interface inputProps {
  error: string;
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

Dialog.BoxFrame = function DialogBoxFrame({
  children,
  ...restProps
}: defaultProps) {
  return <BoxFrame {...restProps}>{children}</BoxFrame>;
};

Dialog.Title = function DialogTitle({ children, ...restProps }: defaultProps) {
  return <Title {...restProps}>{children}</Title>;
};

Dialog.Text = function DialogText({ children, ...restProps }: defaultProps) {
  return <Text {...restProps}>{children}</Text>;
};

Dialog.ExtraText = function DialogExtraText({
  children,
  ...restProps
}: defaultProps) {
  return <ExtraText {...restProps}>{children}</ExtraText>;
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

Dialog.Input = function DialogInputBox({ error, ...restProps }: inputProps) {
  return (
    <InputContainer>
      {error && (
        <Error {...restProps}>
          <IconSmall>
            <CrossIcon />
          </IconSmall>
          {error}
        </Error>
      )}
      <Input
        error={error}
        type="email"
        pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
        required
        minLength={5}
        maxLength={50}
        {...restProps}
      />
    </InputContainer>
  );
};

Dialog.Link = function DialogLink({
  to,
  children,
  extra = false,
  ...restProps
}: defaultLinkProps) {
  return (
    <Link to={to} extra={extra} {...restProps}>
      {children}
    </Link>
  );
};
