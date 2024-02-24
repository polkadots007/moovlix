import styled from 'styled-components';
import { Link } from 'react-router-dom';

interface alignProps {
  align: string;
}

interface linkProps {
  type: string;
}

interface errorProps {
  error: string;
}

export const Container = styled.div`
  display: flex;
  width: 100%;
`;
export const Frame = styled.div`
  display: flex;
  max-width: 340px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin: 0 auto 140px;
`;
export const LFrame = styled.div<alignProps>`
  display: flex;
  max-width: 440px;
  flex-direction: column;
  align-items: ${({ align }: alignProps) =>
    align == 'left' ? 'flex-start' : 'center'};
  justify-content: ${({ align }: alignProps) =>
    align == 'left' ? 'flex-start' : 'center'};
  margin: 0 auto 140px;
`;
export const Title = styled.h1`
  margin-top: 0;
`;
export const Text = styled.div<alignProps>`
  color: #333;
  font-size: 18px;
  text-align: ${({ align }: alignProps) => align};
  line-height: 1.3em;
  padding: ${({ align }: alignProps) =>
    align === 'center' ? '0 40px 25px' : '0 0 15px'};
  white-space: pre-line;
`;
export const SmallText = styled.p`
  padding: 0 10px;
  font-size: 14px;
`;

export const MediumText = styled.p`
  padding: 0 10px;
  font-size: 16px;
`;
export const Image = styled.img`
  width: 260px;
  height: 90px;
  margin: 100px 0 20px;
`;
export const ButtonLink = styled(Link)<linkProps>`
  display: block;
  background-color: ${({ type }: linkProps) =>
    type === 'normal' ? '#e50914' : '#d3d3d3'};
  width: 100%;
  height: fit-content;
  color: ${({ type }: linkProps) => (type === 'normal' ? 'white' : 'black')};
  font-weight: ${({ type }: linkProps) => (type === 'normal' ? 400 : 600)};
  border: 0;
  font-size: 25px;
  border-radius: 3px;
  padding: 20px 17px;
  cursor: pointer;
  text-decoration: none;
  box-sizing: border-box;
  margin: 0 auto;
  text-align: center;

  &:hover {
    background-color: ${({ type }: linkProps) =>
      type === 'normal' ? '#f40612' : '#e0e0e0'};
  }
`;

export const Button = styled.button`
  display: block;
  background-color: #e50914;
  width: 100%;
  height: fit-content;
  color: white;
  border: 0;
  font-size: 25px;
  border-radius: 3px;
  padding: 20px 17px;
  cursor: pointer;
  text-decoration: none;
  box-sizing: border-box;
  margin: 15px 0 auto;
  text-align: center;

  &:hover {
    background-color: #f40612;
  }
`;

export const Input = styled.input<errorProps>`
  border: ${({ error }: errorProps) =>
    error ? '0.05px solid #e50914' : '0.05px solid #333'};
  padding: 10px;
  height: 60px;
  box-sizing: border-box;
  border-radius: 5px;
  background-color: #fff;
  color: black;
`;

export const Error = styled.div`
  text-align: left;
  font-weight: 400;
  color: #e50914;
  font-size: 14px;
  width: -moz-fit-content; /* Firefox */
  width: -webkit-fit-content; /* Safari */
  width: fit-content; /* Standard */
  height: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 65px;
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 100%;
  width: 100%;
  padding-bottom: 10px;
`;

export const IconSmall = styled.div`
  width: 20px;
  height: 20px;
  padding-right: 5px;
`;

export const IconFrame = styled.div`
  width: 40px;
  height: 40px;
  margin-top: 100px;
  border: 2px solid red;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
