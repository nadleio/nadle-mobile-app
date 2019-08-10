import styled from "styled-components";

export const TextInput = styled.TextInput`
  min-height: 40;
  width: ${props => props.width || "100%"};
  border-bottom-width: 2.5;
  border-bottom-color: rgb(244, 244, 244);
  font-size: 16;
  font-family: "System";
  margin-top: ${props => props.top || 0};
  font-weight: 500;
  text-align: ${props => props.align || "left"};
`;
