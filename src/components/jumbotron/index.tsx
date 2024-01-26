import React from 'react';
import {
  Item,
  Inner,
  Container,
  Pane,
  ImagePane,
  Title,
  SubTitle,
  Image,
} from './styles/Jumbotron';

interface elementType {
  children: React.ReactNode;
  [key: string]: unknown;
}
interface itemType {
  [key: string]: unknown;
}

export default function Jumbotron({
  children,
  direction = 'row',
  ...restProps
}: elementType) {
  return (
    <Item {...restProps}>
      <Inner direction={direction as string}>{children}</Inner>
    </Item>
  );
}

Jumbotron.Container = function JumbotronContainer({
  children,
  ...restProps
}: elementType) {
  return <Container {...restProps}>{children}</Container>;
};

Jumbotron.Pane = function JumbotronPane({
  children,
  ...restProps
}: elementType) {
  return <Pane {...restProps}>{children}</Pane>;
};

Jumbotron.ImagePane = function JumbotronImagePane({
  children,
  ...restProps
}: elementType) {
  return <ImagePane {...restProps}>{children}</ImagePane>;
};

Jumbotron.Title = function JumbotronTitle({
  children,
  ...restProps
}: elementType) {
  return <Title {...restProps}>{children}</Title>;
};

Jumbotron.Title = function JumbotronTitle({
  children,
  ...restProps
}: elementType) {
  return <Title {...restProps}>{children}</Title>;
};

Jumbotron.SubTitle = function JumbotronSubTitle({
  children,
  ...restProps
}: elementType) {
  return <SubTitle {...restProps}>{children}</SubTitle>;
};

Jumbotron.Image = function JumbotronImage({ ...restProps }: itemType) {
  return <Image {...restProps} />;
};
