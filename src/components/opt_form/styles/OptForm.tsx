import styled from 'styled-components';

interface errorProps {
  error: string;
}

export const Container = styled.div`
  display: flex;
  justify-content: center;
  height: 100%;
  margin-top: 20px;
  flex-wrap: wrap;
  z-index: 2;

  @media (max-width: 1000px) {
    flex-direction: column;
    align-items: center;
  }
`;
export const Button = styled.button`
  display: flex;
  align-items: center;
  height: 60px;
  background: #e50914;
  color: white;
  padding: 0 32px;
  font-size: 24px;
  margin-left: 10px;
  border: 0;
  cursor: pointer;
  border-radius: 5px;

  &:hover {
    background: #f40612;
  }

  @media (max-width: 1000px) {
    height: 50px;
    font-size: 16px;
    margin-top: 40px;
    font-weight: bold;
  }

  img {
    margin-left: 10px;
    filter: brightness(0) invert(1);
    width: 24px;

    @media (max-width: 1000px) {
      width: 16px;
    }
  }
`;
export const Input = styled.input`
  border: ${({ error }: errorProps) =>
    error ? '0.05px solid #e50914' : '0.05px solid #ffffffb3'};
  padding: 10px;
  height: 60px;
  box-sizing: border-box;
  border-radius: 5px;
  background-color: rgba(0, 0, 0, 0.5);
  color: white;
`;
export const Text = styled.p`
  font-size: 19.2px;
  color: white;
  text-align: center;

  @media (max-width: 600px) {
    font-size: 16px;
    line-height: 22px;S
  }
`;

export const Break = styled.div`
  flex-basis: 100%;
  height: 0;
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
  position: absolute;
  top: 65px;
`;

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
