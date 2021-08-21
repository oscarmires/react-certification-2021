import styled from 'styled-components';

export const PageContainer = styled.main`
  padding: 60px 0 0;
  width: 100%;
  height: 100vh;
  display: flex;

  @media only screen and (max-width: 600px) {
    flex-direction: column;
    height: 100%;
  } ;
`;

export const PlayerAndInfo = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  overflow: scroll;
  padding: 30px;

  @media only screen and (max-width: 950px) {
    overflow: visible;
  }

  @media only screen and (max-width: 600px) {
    min-height: 60%;
  } ;
`;

export const VideoPlayer = styled.div`
  position: relative;
  overflow: hidden;
  padding-top: 56.25%;

  & iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border: 0;
  }
`;

export const VideoInfoArea = styled.div`
  & h1 {
    height: fit-content;
    margin: 30px 0;
    justify-content: left;
  }
`;

export const VideoList = styled.div`
  height: 100%;
  min-width: 400px;
  max-width: 400px;
  border-left: 1px solid ${(props) => props.theme.borderColor};
  overflow: scroll;
  padding: 10px 0;

  & h2 {
    margin: 10px 0;
    padding: 0 20px;
  }

  @media only screen and (max-width: 950px) {
    min-width: 200px;
    overflow: visible;
    height: fit-content;
  }

  @media only screen and (max-width: 600px) {
    min-width: 100%;
    border-left: none;
    border-top: 1px solid ${(props) => props.theme.borderColor};
    overflow: visible;
  } ;
`;
