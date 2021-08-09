import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  padding: 10px;
  align-items: center;
  transition: background-color 0.2s;
  overflow: hidden;

  @media only screen and (max-width: 950px) {
    height: 80px;
    padding: 5px;
  }

  &:hover {
    background-color: ${(props) => props.theme.itemOnHover};
    cursor: pointer;
  }
`;

export const Thumbnail = styled.div`
  min-width: 150px;
  height: 100%;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-left: 10px;

  @media only screen and (max-width: 950px) and (min-width: 600px) {
    min-width: 80px;
  }
`;

export const ThumbnailImg = styled.img`
  width: 100%;
  height: auto;
  object-fit: cover;
`;

export const InfoArea = styled.div`
  display: flex;
  flex-direction: column;
  width: 50px;
`;

export const Title = styled.span`
  font-size: 15px;
  font-weight: bold;
  max-height: 50px;
  margin-right: 10px;
  overflow: hidden;
  color: ${(props) => props.theme.textColor};
`;

export const Description = styled.span`
  font-size: 13px;
  max-height: 30px;
  overflow: hidden;
  color: ${(props) => props.theme.textColor};

  @media only screen and (max-width: 950px) and (min-width: 600px) {
    display: none;
  }
`;
