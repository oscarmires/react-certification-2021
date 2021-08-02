import styled from 'styled-components';

export const Bar = styled.div`
  background-color: #333;
  border-radius: 8px;
  height: 40px;
  display: flex;
  align-items: center;
  padding: 8px;
  margin: 0 10px;
  transition: background-color 0.2s;

  &:hover {
    background-color: #444;
  }

  @media only screen and (max-width: 600px) {
    width: 100%;
  }
`;

export const SearchInput = styled.input`
  background-color: transparent;
  border: none;
  color: white;
  width: 200px;
  height: 30px;
  font-size: 18px;
  margin-left: 5px;

  &:focus {
    border: none;
    outline: none;
  }

  @media only screen and (max-width: 600px) {
    width: 100%;
  }
`;
