import styled from 'styled-components';

export const Card = styled.div`
  width: 320px;
  height: 400px;
  background-color: ${(props) => props.theme.boxBackgroundColor};
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 1px 1px 5px ${(props) => props.theme.shadowColor};
  margin: 10px;
  transition: background-color 0.2s;
  position: relative;

  &:hover {
    background-color: ${(props) => props.theme.boxOnHover};
    cursor: pointer;
  }

  &:hover .btn-container {
    opacity: 1;
    -webkit-transition: all 0.2s ease-in-out;
    -moz-transition: all 0.2s ease-in-out;
    -o-transition: all 0.2s ease-in-out;
    transition: all 0.2s ease-in-out;
  }
`;

export const InfoArea = styled.div`
  padding: 15px;
  width: 100%;

  & h2 {
    margin: 5px 0;
  }
`;

export const Thumbnail = styled.div`
  width: 100%;
  height: 170px;
  overflow: hidden;
  display: flex;
  justify-content: center;
`;

export const ThumbnailImg = styled.img`
  width: 100%;
  height: auto;
  object-fit: cover;
`;

export const CardsGrid = styled.div`
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 90%;
  margin: 0 auto;
`;

export const ButtonContainer = styled.div`
  height: min-content;
  width: min-content;
  color: black;
  text-decoration: none;
  opacity: 0;
  position: absolute;
  z-index: 1;
  top: 120px;
  right: 10px;
`;
