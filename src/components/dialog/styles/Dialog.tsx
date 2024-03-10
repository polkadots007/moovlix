import styled from 'styled-components';
import { Link as RouterLink } from 'react-router-dom';

interface infoProps {
  error: string;
}
interface LinkProps {
  extra: boolean;
}

export const Container = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
`;

export const Box = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  padding: 25px 185px 185px;
`;
export const Frame = styled.div`
  background-color: #fafafa;
  color: #333;
  line-height: 1.5;
  margin: 20px auto 0;
  padding: 30px 45px;
  width: 350px;
  z-index: 2;
`;
export const BoxFrame = styled.div`
  line-height: 1.5;
  width: 440px;
  z-index: 2;
`;
export const Title = styled.h2`
  margin: 0 0 10px;
  padding: 0;
`;
export const Text = styled.p`
  font-size: 16px;
`;

export const ExtraText = styled.p`
  font-size: 16px;
  color: #8c8c8c;
`;
export const ButtonLink = styled(RouterLink)`
  display: block;
  text-align: center;
  background-color: #0080ef;
  color: white;
  font-size: 16.2px;
  border-radius: 3px;
  padding: 10px 17px;
  text-decoration: none;
`;

export const Button = styled.button`
  display: block;
  text-align: center;
  width: 100%;
  background-color: #0080ef;
  color: white;
  font-size: 16.2px;
  border-radius: 3px;
  padding: 10px 17px;
  border: none;
  cursor: pointer;
`;
// export const ButtonLink = styled(Link)<linkProps>`
//   display: block;
//   background-color: ${({ type }: linkProps) =>
//     type === 'normal' ? '#e50914' : '#d3d3d3'};
//   width: 100%;
//   height: fit-content;
//   color: ${({ type }: linkProps) => (type === 'normal' ? 'white' : 'black')};
//   font-weight: ${({ type }: linkProps) => (type === 'normal' ? 400 : 600)};
//   border: 0;
//   font-size: 25px;
//   border-radius: 3px;
//   padding: 20px 17px;
//   cursor: pointer;
//   text-decoration: none;
//   box-sizing: border-box;
//   margin: 0 auto;
//   text-align: center;

//   &:hover {
//     background-color: ${({ type }: linkProps) =>
//       type === 'normal' ? '#f40612' : '#e0e0e0'};
//   }
// `;

export const Input = styled.input<infoProps>`
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  border: ${({ error }: infoProps) =>
    error ? '1px solid #e50914' : '1px solid #b3b3b3'};
  border-radius: 2px;
  box-sizing: border-box;
  color: #000;
  display: block;
  font-size: 16px;
  height: 44px;
  max-width: 500px;
  padding: 10px 11px;
  width: 100%;

  &:last-of-type {
    margin-bottom: 30px;
  }
`;

export const Error = styled.div`
  text-align: left;
  font-weight: 600;
  color: #e50914;
  font-size: 14px;
  width: -moz-fit-content; /* Firefox */
  width: -webkit-fit-content; /* Safari */
  width: fit-content; /* Standard */
  height: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

// export const Info = styled.div`
//   text-align: left;
//   font-weight: 600;
//   color: #4caf50;
//   font-size: 14px;
//   width: -moz-fit-content; /* Firefox */
//   width: -webkit-fit-content; /* Safari */
//   width: fit-content; /* Standard */
//   height: 20px;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   margin-bottom: 10px;
//   line-height: normal;
// `;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 350px;
  width: 100%;
  position: relative;
`;

export const IconSmall = styled.div`
  width: 20px;
  height: 20px;
  padding-right: 5px;
`;

export const Link = styled(RouterLink)<LinkProps>`
  color: ${({ extra }: LinkProps) => (!extra ? '#0071eb' : '#8c8c8c')};
  text-decoration: underline;
`;
