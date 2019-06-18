import styled from "styled-components";

export const ViewFlex = styled.View`
  flex: 1;
  padding-bottom: ${props => props.paddingBottom || 20};
  background-color: ${props => props.background || "white"};
`;

export const Margin = styled.View`
  margin-top: ${props => props.top || 0};
  margin-bottom: ${props => props.bottom || 0};
  margin-left: ${props => props.left || 0};
  margin-right: ${props => props.right || 0};
`;

export const PaddingHorizontal = styled.View`
  padding-left: 5%;
  padding-right: 5%;
`;
