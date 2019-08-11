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

export const RadiusBox = styled.View`
  padding: 5%;
  background-color: ${props => props.theme.styled.BOX_BACKGROUND};
  box-shadow: 0px 2px 20px rgba(0, 0, 0, 0.05);
  border-radius: 8;
  margin-top: ${props => props.top || 0};
`;
