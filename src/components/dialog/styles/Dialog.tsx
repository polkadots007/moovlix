import styled from 'styled-components';
import { Link } from 'react-router-dom';

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
export const Title = styled.h2`
  margin: 0 0 10px;
  padding: 0;
`;
export const Text = styled.p`
  font-size: 16px;
`;
export const ButtonLink = styled(Link)`
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
