import { Container, Title, SubTitle } from './styles/Feature';
interface propsEle {
  children: React.ReactNode;
  [key: string]: unknown;
}

export default function Feature({ children, ...restProps }: propsEle) {
  return <Container {...restProps}>{children} </Container>;
}

Feature.Title = function FeatureTitle({ children, ...restProps }: propsEle) {
  return <Title {...restProps}>{children} </Title>;
};

Feature.SubTitle = function FeatureSubTitle({
  children,
  ...restProps
}: propsEle) {
  return <SubTitle {...restProps}>{children} </SubTitle>;
};
