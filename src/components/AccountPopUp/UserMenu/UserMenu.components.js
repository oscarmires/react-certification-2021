import styled from 'styled-components';

export const UserMenuContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  width: 100%;

  & span {
    font-weight: bold;
    margin-bottom: 15px;
    width: 100%;
    text-align: center;
  }
`;

export const UserMenuButtons = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding-top: 10px;
  border-top: 1px solid gray;

  & .user-left-btn {
    margin-right: 10px;
  }
`;
