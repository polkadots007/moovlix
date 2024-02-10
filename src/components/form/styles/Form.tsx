import styled from 'styled-components';

import { Link as RouterLink } from 'react-router-dom';

interface LinkProps {
  normal: boolean;
  highlight: boolean;
}

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 660px;
  background-color: rgba(0, 0, 0, 0.75);
  border-radius: 5px;
  width: 100%;
  margin: auto;
  max-width: 350px;
  padding: 50px 68px 40px;
  margin-bottom: 100px;
  z-index: 2;
`;
export const Base = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 350px;
  width: 100%;
`;

export const LinkBase = styled.div`
  text-align: center;
  max-width: 350px;
  width: 100%;
`;

export const Error = styled.div`
  background: #e87c03;
  border-radius: 4px;
  font-size: 14px;
  margin: 0 0 16px;
  color: white;
  padding: 15px 20px;
`;
export const Title = styled.h1`
  color: white;
  font-size: 32px;
  font-weight: bold;
  margin-bottom: 28px;
`;
export const Text = styled.p`
  color: #737373;
  font-size: 16px;
  font-weight: 500;
`;
export const SmallText = styled.p`
  margin-top: 10px;
  font-size: 13px;
  line-height: normal;
  color: #8c8c8c;
`;
export const Link = styled(RouterLink)<LinkProps>`
  color: ${({ normal }: LinkProps) => (normal ? '#0071eb' : '#fff')};
  text-decoration: none;

  &:hover {
    text-decoration: underline;
    color: ${({ highlight }: LinkProps) => highlight && '#8c8c8c'};
  }
`;

export const Input = styled.input`
  background: transparent;
  border-radius: 4px;
  border: 2px solid #333;
  color: white;
  height: 50px;
  line-height: 50px;
  padding: 5px 20px;
  margin-bottom: 20px;

  &:last-of-type {
    margin-bottom: 30px;
  }
`;
export const Submit = styled.button`
  background: #e50914;
  border-radius: 4px;
  font-size: 16px;
  font-weight: bold;
  margin: 24px 0 12px;
  padding: 16px;
  border: 0;
  color: white;
  cursor: pointer;
`;
