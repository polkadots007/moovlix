import { Container, Input, Button, Text, Break } from './styles/OptForm';

interface propsType {
  children: React.ReactNode;
  [key: string]: unknown;
}

interface propsInputType {
  [key: string]: unknown;
}

export default function OptForm({ children, ...restProps }: propsType) {
  return <Container {...restProps}>{children}</Container>;
}

OptForm.Input = function OptFormInput({ ...restProps }: propsInputType) {
  return <Input type="email" minLength={5} maxLength={50} {...restProps} />;
};

OptForm.Button = function OptFormButton({ children, ...restProps }: propsType) {
  return (
    <Button {...restProps}>
      {children} <img src="images/icons/chevron-right.png" alt="Try Now" />
    </Button>
  );
};

OptForm.Text = function OptFormText({ children, ...restProps }: propsType) {
  return <Text {...restProps}>{children}</Text>;
};

OptForm.Break = function OptFormBreak({ ...restProps }: propsInputType) {
  return <Break {...restProps} />;
};
