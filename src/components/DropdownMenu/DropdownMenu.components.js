import styled from 'styled-components';

export const DropdownMenuContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  width: 300px;
  max-height: fit-content;
  position: fixed;
  top: 50px;
  z-index: 1;
  background-color: ${(props) => props.theme.accPopUpBackgroundColor};
  color: ${(props) => props.theme.textColor};
  border-radius: 10px;
  padding: 20px 0;
  box-shadow: 1px 1px 5px ${(props) => props.theme.shadowColor};

  @media only screen and (max-width: 600px) {
    width: 100%;
    right: 0;
  }
`;

export const Section = styled.div`
  width: 100%;
  display: flex;
  flex-flow: column wrap;
  border-top: 1px solid ${(props) => props.theme.menuSectionBorder};
`;

export const MenuItem = styled.button`
  height: 40px;
  width: 100%;
  color: ${(props) => props.theme.textColor};
  border: 0;
  text-align: left;
  padding: 10px;
  padding-left: 20px;
  font-size: 16px;
  background-color: transparent;
  transition: background-color 0.2s;

  &:hover {
    background-color: ${(props) => props.theme.loginFormOnHOver};
    cursor: pointer;
  }

  & path {
    fill: ${(props) => props.theme.textColor};
  }
`;

export const MenuSpecialItem = styled.div`
  display: flex;
  width: 100%;
  height: 40px;
  padding-left: 18px;
  padding-top: 5px;

  & label {
    color: ${(props) => props.theme.textColor};
  }
`;

export const MenuText = styled.i`
  padding: 10px;
  display: block;
  margin-top: 5px;
`;
