import styled from "styled-components";

// This is an example component
// You shouldn't need to make any changes here
export const Button = styled.button`
  background-color: ${(props) => props.theme.colors.primary.default};
  color: #fff;
  border-radius: ${(props) => props.theme.space.xs};
  font-size: ${(props) => props.theme.typography.xl.fontSize};
  padding:  ${(props) => props.theme.space.s};
  width: 100%;
  border: none;
`;

export const ValuationButton = styled.button`
  background-color: #c2f7e1;
  border: none;
  color: #006b57;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  margin: 4px 2px;
  cursor: pointer;
  border-radius: 16px;
  width: 117%;
  height: 100%;
  font-size: ${(props) => props.theme.typography.xs.fontSize};
`;
