import styled from 'styled-components';

export const CardsGrid = styled.div`
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 90%;
  margin: 0 auto;
`;

export const BackgroundText = styled.p`
  font-size: 80px;
  color: gray;
  margin-top: 100px;
  padding: 20px;

  @media only screen and (max-width: 600px) {
    margin-top: 20px;
    font-size: 60px;
  }
`;
