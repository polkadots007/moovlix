import { CrossIcon } from '../../helpers/Icons';
import {
  Container,
  Frame,
  LFrame,
  Title,
  Text,
  SmallText,
  ButtonLink,
  Image,
  InputContainer,
  Input,
  Error,
  IconSmall,
  Button,
} from './styles/Steps';

interface contentProps {
  children: React.ReactNode;
  [key: string]: unknown;
}

interface propsInputType {
  error?: string;
  [key: string]: unknown;
}

interface contentTextProps {
  align: string;
  children: React.ReactNode;
  [key: string]: unknown;
}
interface contentLinkProps {
  to: string;
  children: React.ReactNode;
  [key: string]: unknown;
}
interface defaultProps {
  [key: string]: unknown;
}
export default function Content({ children, ...restProps }: contentProps) {
  return <Container {...restProps}>{children}</Container>;
}
Content.Frame = function ContentFrame({
  children,
  ...restProps
}: contentProps) {
  return <Frame {...restProps}>{children}</Frame>;
};

Content.LFrame = function ContentLFrame({
  children,
  ...restProps
}: contentProps) {
  return <LFrame {...restProps}>{children}</LFrame>;
};

Content.Image = function ContentImage({ ...restProps }: defaultProps) {
  return <Image {...restProps} />;
};

Content.Title = function ContentTitle({
  children,
  ...restProps
}: contentProps) {
  return <Title {...restProps}>{children}</Title>;
};

Content.Text = function ContentText({
  align = 'center',
  children,
  ...restProps
}: contentTextProps) {
  return (
    <Text align={align} {...restProps}>
      {children}
    </Text>
  );
};

Content.SmallText = function ContentSmallText({
  children,
  ...restProps
}: contentProps) {
  return <SmallText {...restProps}>{children}</SmallText>;
};

Content.Input = function ContentInput({ error, ...restProps }: propsInputType) {
  return (
    <InputContainer>
      <Input
        error={error ?? ''}
        type="email"
        pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
        required
        minLength={5}
        maxLength={50}
        {...restProps}
      />
      {error && (
        <Error {...restProps}>
          <IconSmall>
            <CrossIcon />
          </IconSmall>
          {error}
        </Error>
      )}
    </InputContainer>
  );
};

Content.Password = function ContentPassword({
  error,
  ...restProps
}: propsInputType) {
  return (
    <InputContainer>
      <Input
        error={error ?? ''}
        type="password"
        required
        minLength={5}
        maxLength={50}
        {...restProps}
      />
      {error && (
        <Error {...restProps}>
          <IconSmall>
            <CrossIcon />
          </IconSmall>
          {error}
        </Error>
      )}
    </InputContainer>
  );
};

Content.SubmitButton = function ContentSubmitButton({
  children,
  ...restProps
}: contentProps) {
  return <Button {...restProps}>{children}</Button>;
};

Content.Button = function ContentButton({
  to,
  children,
  ...restProps
}: contentLinkProps) {
  return (
    <ButtonLink to={to} {...restProps}>
      {children}
    </ButtonLink>
  );
};
