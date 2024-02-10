import {
  Container,
  Frame,
  Title,
  Text,
  SmallText,
  ButtonLink,
  Image,
} from './styles/Steps';

interface contentProps {
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

Content.Image = function ContentImage({ ...restProps }: defaultProps) {
  return <Image {...restProps} />;
};

Content.Title = function ContentTitle({
  children,
  ...restProps
}: contentProps) {
  return <Title {...restProps}>{children}</Title>;
};

Content.Text = function ContentText({ children, ...restProps }: contentProps) {
  return <Text {...restProps}>{children}</Text>;
};

Content.SmallText = function ContentSmallText({
  children,
  ...restProps
}: contentProps) {
  return <SmallText {...restProps}>{children}</SmallText>;
};

Content.Button = function ContentButton({
  children,
  ...restProps
}: contentProps) {
  return <ButtonLink {...restProps}>{children}</ButtonLink>;
};
