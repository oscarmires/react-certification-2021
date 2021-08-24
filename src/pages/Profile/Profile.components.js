import styled from 'styled-components';

const infoAreaWidth = '300px';
const infoAreaHeight = '170px';
const titleHeight = '102px';

export const ProfilePageContainer = styled.main`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-wrap: wrap;
  padding-top: 60px;

  & h1 {
    padding: 30px;
    font-size: 35px;
    width: 100%;
    height: ${titleHeight};
    justify-content: left;
    height: min-content;
    border-bottom: 1px solid ${(props) => props.theme.borderColor};
  }
`;

export const AccountInfoArea = styled.div`
  width: ${infoAreaWidth};
  height: calc(100% - ${titleHeight});
  padding: 25px;
  border-right: 1px solid ${(props) => props.theme.borderColor};
  box-shadow: 0 5px 5px ${(props) => props.theme.shadowColor};
  overflow: hidden;

  & h2 {
    margin: 0;
    margin-bottom: 20px;
  }

  & p {
    margin: 5px 0;
  }

  & a {
    color: ${(props) => props.theme.textColor};
  }

  & a:visited {
    color: ${(props) => props.theme.textColor};
  }

  @media only screen and (max-width: 950px) {
    width: 100%;
    height: ${infoAreaHeight};
    border-right: 0;
    border-bottom: 1px solid ${(props) => props.theme.borderColor};
    box-shadow: 0 1px 5px ${(props) => props.theme.shadowColor};
  }
`;

export const FavoriteVideosGrid = styled.div`
  width: calc(100% - ${infoAreaWidth});
  padding: 25px;
  height: calc(100% - ${titleHeight});
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  overflow: scroll;

  & h2 {
    margin: 0;
    margin-bottom: 20px;
    width: 100%;
  }

  @media only screen and (max-width: 950px) {
    width: 100%;
    min-height: calc(100vh - ${titleHeight} - ${infoAreaWidth});
    height: auto;
    overflow: auto;
  }
`;

export const DefaultArea = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  height: calc(100% - ${titleHeight});
`;

export const LoginMessage = styled.div`
  width: 80%;
  font-size: 48px;
  text-align: center;
  padding: 30px;
  border-radius: 20px;
  color: gray;
  transition: background-color 0.2s;

  &:hover {
    cursor: pointer;
    background-color: ${(props) => props.theme.itemOnHover};
  }
`;
