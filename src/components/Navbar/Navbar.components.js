import styled from 'styled-components';
import Burger from './burger';

export const Nav = styled.nav`
  width: 100%;
  height: 60px;
  background-color: #555;
  box-shadow: 0 1px 5px grey;
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

export const BurgerMenuButton = styled(Burger)`
  display: flex;
  height: 40px;
  width: 40px;
  margin: 0;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  border: none;
  background-color: #555;
  transition: background-color 0.2s;

  &:hover {
    background-color: gray;
    cursor: pointer;
  }
`;

export const UserProfileButton = styled.button`
  width: 40px;
  height: 40px;
  border-radius: 8px;
  border: none;
  background-color: white;

  &:hover {
    cursor: pointer;
  }
`;
