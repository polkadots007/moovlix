import styled from 'styled-components';
interface InnerProps {
  direction: string;
}
export const Item = styled.div`
  display: flex;
  border-bottom: 0.5rem solid #222;
  padding: 50px 0;
  color: white;
  overflow: hidden;
`;
export const Inner = styled.div<InnerProps>`
  display: flex;
  flex-direction: ${({ direction }: InnerProps) => direction};
  align-items: center;
  justify-content: space-between;
  max-width: calc(100% - 4rem);
  margin: auto;
  width: 100%;

  @media (max-width: 1000px) {
    flex-direction: column;
  }
`;

export const Container = styled.div`
  @media (max-width: 1000px) {
    ${Item}:last-of-type h2 {
      margin-bottom: 50px;
    }
  }
`;

export const Pane = styled.div`
  width: 50%;

  @media (max-width: 1000px) {
    width: 100%;
    padding: 0 45px;
    text-align: center;
  }
`;
export const ImagePane = styled.div`
  width: 50%;
  display: flex;
  justify-content: center;
  @media (max-width: 1000px) {
    width: 100%;
    padding: 0 45px;
    text-align: center;
  }
`;

export const Title = styled.h1`
  font-size: 3rem;
  font-weight: 900;
  line-height: 1.1;
  margin-bottom: 8px;
  text-align: center;

  @media (max-width: 600px) {
    font-size: 35px;
    font-weight: 900;
  }
`;

export const SubTitle = styled.h2`
  font-size: 26px;
  font-weight: normal;
  line-height: normal;

  @media (max-width: 600px) {
    font-size: 18px;
  }
`;

export const Image = styled.img`
  max-width: 100%;
  height: auto;
`;
