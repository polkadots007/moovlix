import styled from 'styled-components';
interface clearBgProps {
  toggled: boolean;
}

interface clearContainerProps {
  toggled: boolean;
}
export const Container = styled.div<clearContainerProps>`
  display: flex;
  padding: 70px 56px;
  justify-content: center;
  flex-direction: column;
  background-color: ${({ toggled }: clearContainerProps) =>
    toggled && '#f3f3f3'};
  @media (max-width: 1000px) {
    padding: 70px 30px;
  }
`;
export const Row = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(230px, 1fr));
  grid-gap: 15px;

  @media (max-width: 1000px) {
    grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  }
`;
export const Column = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
`;
export const Link = styled.a<clearBgProps>`
  color: ${({ toggled }: clearBgProps) => (toggled ? '#737373' : '#ffffffb3')};
  margin-bottom: 20px;
  font-size: 14px;
  font-weight: 400;
  font-stretch: 100%;
  text-decoration: underline;
`;
export const Title = styled.p<clearBgProps>`
  font-size: 16px;
  color: ${({ toggled }: clearBgProps) => (toggled ? '#737373' : '#ffffffb3')};
  margin-bottom: 40px;
`;
export const Text = styled.p<clearBgProps>`
  font-size: 14px;
  color: ${({ toggled }: clearBgProps) => (toggled ? '#737373' : '#ffffffb3')};
  margin-bottom: 40px;
`;
export const Break = styled.p`
flex-basis: 100%;
height; 0;
`;
