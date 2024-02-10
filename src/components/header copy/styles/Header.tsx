import styled from 'styled-components';
import { Link } from 'react-router-dom';

interface backgroundProps {
  src: string;
}

export const Background = styled.div`
  display: flex;
  flex-direction: column;
  background: url(${({ src }: backgroundProps) =>
    src ? `/images/misc/${src}.jpg` : `/images/misc/home-bg.jpg`})
    top left / cover no-repeat;
    position: relative;
    &::before {
        /* Create a pseudo-element for the overlay */
        content: '';
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        /* Set the linear gradient for the overlay */
        background: linear-gradient(
          to bottom,
          rgba(0, 0, 0, 0.5),
          rgba(0, 0, 0, 0.3)
        );
        z-index: 1;
      }
  }
`;
export const Container = styled.div`
  display: flex;
  margin: 0 30px;
  height: 64px;
  padding: 18px 0;
  justify-content: space-between;
  align-items: center;

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
  background-color: #e50914;
  width: 84px;
  height: fit-content;
  color: white;
  border: 0;
  font-size: 15px;
  border-radius: 3px;
  padding: 8px 17px;
  cursor: pointer;
  text-decoration: none;
  box-sizing: border-box;
  z-index: 2;

  &:hover {
    background-color: #f40612;
  }
`;
