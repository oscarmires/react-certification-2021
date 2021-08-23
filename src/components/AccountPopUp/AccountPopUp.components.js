import styled from 'styled-components';

export const AccountPopUpContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  align-items: flex-start;
  width: 300px;
  max-height: fit-content;
  position: fixed;
  top: 50px;
  right: 10px;
  z-index: 1;
  background-color: ${(props) => props.theme.accPopUpBackgroundColor};
  color: ${(props) => props.theme.textColor};
  border-radius: 10px;
  padding: 20px;
  padding-top: 30px;
  box-shadow: 1px 1px 5px ${(props) => props.theme.shadowColor};

  @media only screen and (max-width: 600px) {
    width: 100%;
    right: 0;
  }
`;
