import { useState, useContext, createContext } from 'react';
import {
  Container,
  Title,
  Frame,
  Item,
  Header,
  Body,
  Inner,
} from './styles/Accordion';

interface propsType {
  children: React.ReactNode;
  [key: string]: unknown;
}

// interface propsBreakType {
//   [key: string]: unknown;
// }

interface toggleContextType {
  toggleShow: boolean;
  setToggleShow: React.Dispatch<React.SetStateAction<boolean>>;
}

const ToggleContext = createContext<toggleContextType | null>(null);

const useToggleContext = (): toggleContextType => {
  const context = useContext(ToggleContext);

  if (!context) {
    throw new Error('useMyContext must be used within a MyProvider');
  }

  return context;
};

export default function Accordion({ children, ...restProps }: propsType) {
  return (
    <Container {...restProps}>
      <Inner>{children}</Inner>
    </Container>
  );
}

Accordion.Title = function AccordionTitle({
  children,
  ...restProps
}: propsType) {
  return <Title {...restProps}>{children}</Title>;
};

Accordion.Frame = function AccordionFrame({
  children,
  ...restProps
}: propsType) {
  return <Frame {...restProps}>{children}</Frame>;
};

Accordion.Item = function AccordionItem({ children, ...restProps }: propsType) {
  const [toggleShow, setToggleShow] = useState(false);
  return (
    <ToggleContext.Provider value={{ toggleShow, setToggleShow }}>
      <Item {...restProps}>{children}</Item>
    </ToggleContext.Provider>
  );
};

Accordion.Header = function AccordionHeader({
  children,
  ...restProps
}: propsType) {
  const { toggleShow, setToggleShow } = useToggleContext();
  return (
    <Header
      onClick={() => setToggleShow((toggleShow: boolean) => !toggleShow)}
      {...restProps}
    >
      {children}
      {toggleShow ? (
        <img src="/images/icons/close-slim.png" alt="Close" />
      ) : (
        <img src="/images/icons/add.png" alt="Open" />
      )}
    </Header>
  );
};

Accordion.Body = function AccordionBody({ children, ...restProps }: propsType) {
  const { toggleShow } = useToggleContext();
  return toggleShow ? <Body {...restProps}>{children}</Body> : null;
};
