import { CrossIcon } from '../../helpers/Icons';
import {
  Container,
  InputContainer,
  Input,
  Button,
  Text,
  Break,
  Error,
  IconSmall,
} from './styles/OptForm';

interface propsType {
  children: React.ReactNode;
  [key: string]: unknown;
}

interface propsInputType {
  error: string;
  [key: string]: unknown;
}

interface propsBreak {
  [key: string]: unknown;
}
export default function OptForm({ children, ...restProps }: propsType) {
  return <Container {...restProps}>{children}</Container>;
}

OptForm.Input = function OptFormInput({ error, ...restProps }: propsInputType) {
  return (
    <InputContainer>
      <Input
        error={error}
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

OptForm.Break = function OptFormBreak({ ...restProps }: propsBreak) {
  return <Break {...restProps} />;
};
