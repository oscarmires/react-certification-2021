import styled, { css } from 'styled-components';

const Button = styled.button`
  height: 40px;
  width: ${(props) => props.width || '100%'};
  border: 2px solid ${(props) => props.theme.regularOutlineColor};
  border-radius: 6px;
  font-size: 16px;
  background-color: ${(props) => props.theme.regularBackgroundColor};
  color: ${(props) => props.theme.regularTextColor};
  transition: background-color 0.2s;

  &:hover {
    cursor: pointer;
    background-color: ${(props) => props.theme.regularHoverColor};
  }

  ${(props) => {
    // "primary" style
    return (
      props.primary &&
      css`
        background-color: ${(props) => props.theme.primaryBackgroundColor};
        border: 1px solid ${(props) => props.theme.primaryOutlineColor};
        color: ${(props) => props.theme.primaryTextColor};
        font-weight: bold;

        &:hover {
          background-color: ${(props) => props.theme.primaryHoverColor};
        }
      `
    );
  }}

  ${(props) => {
    // "danger" style
    return (
      props.danger &&
      css`
        background-color: ${(props) => props.theme.dangerBackgroundColor};
        color: ${(props) => props.theme.dangerOutlineColor};
        border: 1px solid ${(props) => props.theme.dangerOutlineColor};
        font-weight: bold;

        &:hover {
          background-color: ${(props) => props.theme.dangerHoverColor};
        }
      `
    );
  }}
`;

export default Button;
