import styled from 'styled-components';

const infoAreaWidth = '300px';
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

  & h2 {
    margin: 0;
    margin-bottom: 20px;
  }

  & p {
    margin: 5px 0;
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
`;
