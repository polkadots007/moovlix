import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  display: flex;
  width: 100%;
`;
export const Frame = styled.div`
  display: flex;
  max-width: 340px;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  margin: 140px auto;
`;
export const Title = styled.h1`
  margin-top: 0;
`;
export const Text = styled.div`
  margin: 0 auto;
  max-width: 300px;
  color: #333;
  font-size: 18px;
  text-align: center;
  line-height: 1.3em;
  padding: 0 40px 25px;
`;
export const SmallText = styled.p`
  padding: 45px 0 10px;
  font-size: 14px;
  margin: 0 auto;
`;
export const Image = styled.img``;
export const ButtonLink = styled(Link)`
  display: block;
  background-color: #e50914;
  width: 340px;
  height: fit-content;
  color: white;
  border: 0;
  font-size: 25px;
  border-radius: 3px;
  padding: 20px 17px;
  cursor: pointer;
  text-decoration: none;
  box-sizing: border-box;
  margin: 0 auto;

  &:hover {
    background-color: #f40612;
  }
`;
