import {
  Container,
  Base,
  LinkBase,
  Error,
  Title,
  Text,
  SmallText,
  Link,
  Input,
  Submit,
} from './styles/Form';

interface propsForms {
  children: React.ReactNode;
  [key: string]: unknown;
}

interface propsLinkForms {
  children: React.ReactNode;
  normal: boolean;
  highlight: boolean;
  [key: string]: unknown;
}

interface propsForms2 {
  [key: string]: unknown;
}

export default function Form({ children, ...restProps }: propsForms) {
  return <Container {...restProps}>{children}</Container>;
}

Form.Base = function FormBase({ children, ...restProps }: propsForms) {
  return <Base {...restProps}>{children}</Base>;
};

Form.LinkBase = function FormLinkBase({ children, ...restProps }: propsForms) {
  return <LinkBase {...restProps}>{children}</LinkBase>;
};

Form.Error = function FormError({ children, ...restProps }: propsForms) {
  return <Error {...restProps}>{children}</Error>;
};

Form.Title = function FormTitle({ children, ...restProps }: propsForms) {
  return <Title {...restProps}>{children}</Title>;
};

Form.Text = function FormText({ children, ...restProps }: propsForms) {
  return <Text {...restProps}>{children}</Text>;
};

Form.SmallText = function FormSmallText({
  children,
  ...restProps
}: propsForms) {
  return <SmallText {...restProps}>{children}</SmallText>;
};

Form.Link = function FormLink({
  children,
  normal,
  highlight,
  ...restProps
}: propsLinkForms) {
  return (
    <Link {...restProps} normal={normal} highlight={highlight}>
      {children}
    </Link>
  );
};

Form.Input = function FormInput({ ...restProps }: propsForms2) {
  return <Input {...restProps} />;
};

Form.Submit = function FormSubmit({ children, ...restProps }: propsForms) {
  return <Submit {...restProps}>{children}</Submit>;
};
