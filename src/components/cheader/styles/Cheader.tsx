import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  display: flex;
  margin: 0 30px;
  height: 64px;
  padding: 18px 0;
  justify-content: space-between;
  align-items: center;
  background-color: #f3f3f3;

  a {
    display: flex;
  }

  @media (max-width: 1000px) {
    margin: 0 25px;
  }
`;
export const Frame = styled.div``;
export const Logo = styled.img`
  height: 58px;
  width: 138px;
  margin-right: 40px;
  z-index: 2;

  @media (min-width: 1449px) {
    height: 45px;
    width: 167px;
  }
`;

export const ButtonLink = styled(Link)`
  display: block;
  width: 84px;
  height: fit-content;
  color: #333;
  font-size: 15px;
  cursor: pointer;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;
