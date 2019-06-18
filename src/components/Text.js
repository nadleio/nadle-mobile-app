import styled from "styled-components";

export const Title = styled.Text`
  font-family: "System";
  font-size: 20;
  color: black;
  font-weight: bold;
  margin-top: ${props => props.top || 0};
`;

export const ActionLink = styled.Text`
  font-family: "System";
  font-size: ${props => props.size || 17};
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
  font-family: "System";
  font-size: ${props => props.size || 14};
  color: ${props => props.color || "black"};
  margin-top: ${props => props.top || 0};
  margin-left: ${props => props.left || 0};
  margin-right: ${props => props.right || 0};
  margin-bottom: ${props => props.bottom || 0};
  font-weight: ${props => props.weight || "normal"};
  text-align: ${props => props.align || "left"};
  max-width: 100%;
`;