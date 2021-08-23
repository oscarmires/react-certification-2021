import styled from 'styled-components';

export const FormContainer = styled.form`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;

  & span {
    font-weight: bold;
    margin-bottom: 10px;
  }

  & button {
    margin-top: 5px;
  }
`;

export const FormInput = styled.input`
  width: 100%;
  height: 38px;
  font-size: 15px;
  border: 0;
  border-radius: 5px;
  margin-bottom: 8px;
  padding: 5px;
  padding-left: 10px;
  background-color: ${(props) => props.theme.loginFormBackgroundColor};
  color: ${(props) => props.theme.loginFormTextColor};
  transition: background-color 0.2s;

  &:hover {
    background-color: ${(props) => props.theme.loginFormOnHOver};
  }
`;
