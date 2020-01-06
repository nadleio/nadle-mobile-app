import styled from "styled-components";
import theme from "../theme";

// export const Title = styled.Text`
//   font-family: "System";
//   font-size: 20;
//   color: black;
//   font-weight: bold;
//   margin-top: ${props => props.top || 0};
// `;

export const ActionLink = styled.Text`
  font-family: "System";
  font-size: ${props => props.size || 16};
  color: ${props => props.color || "black"};
  font-weight: 600;
  text-align: center;
`;

export const InputValidation = styled.Text`
  font-family: "System";
  font-size: ${props => props.size || 12};
  color: ${props => props.color || "red"};
  margin-top: ${props => props.top || 0};
`;

export const Information = styled.Text`
  color: ${props => props.color || "black"};
  font-family: "System";
  font-size: ${props => props.size || 14};
  font-weight: ${props => props.weight || "normal"};
  text-align: ${props => props.align || "left"};
  margin-top: ${props => props.top || 0};
  margin-left: ${props => props.left || 0};
  margin-right: ${props => props.right || 0};
  margin-bottom: ${props => props.bottom || 0};
`;

export const Label = styled.Text`
  color: ${props => props.color || props.theme.styled.CONTENT};
  font-family: "System";
  font-size: ${props => props.size || theme.fontSize.BODY};
  font-weight: ${props => props.weight || "normal"};
  text-align: ${props => props.align || "left"};
`;

export const Title = styled.Text`
  color: ${props => props.color || props.theme.styled.TITLE};
  font-size: ${props => props.size || theme.fontSize.TITLE};
  font-weight: 600;
  font-family: "System";
  text-align: ${props => props.align || "left"};
`;
