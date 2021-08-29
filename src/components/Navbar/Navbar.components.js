import styled from 'styled-components';

export const Header = styled.header`
  position: fixed;
  width: 100%;
  z-index: 2;
`;

export const Nav = styled.nav`
  width: 100%;
  height: 60px;
  background-color: ${(props) => props.theme.headerBackgroundColor};
  box-shadow: 0 3px 5px ${(props) => props.theme.shadowColor};
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 10px;
  margin-bottom: 10px;
`;

export const Left = styled.div`
  display: flex;

  @media only screen and (max-width: 600px) {
    width: 100%;
  }
`;

export const Right = styled.div`
  display: flex;
`;

export const BurgerMenuButton = styled.button`
  display: flex;
  height: 40px;
  width: 40px;
  margin: 0;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  border: none;
  background-color: transparent;
  transition: background-color 0.2s;

  &:hover {
    background-color: ${(props) => props.theme.btnOnHover};
    cursor: pointer;
  }
`;

export const UserProfileButton = styled.button`
  width: 40px;
  height: 40px;
  border-radius: 8px;
  border: none;
  background-color: darkgray;
  padding: 0;

  &:hover {
    cursor: pointer;
  }

  & img {
    max-width: 100%;
    width: 100%;
    height: auto;
    object-fit: contain;
  }
`;
