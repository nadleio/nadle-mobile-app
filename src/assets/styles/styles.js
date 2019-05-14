import styled from "styled-components";

export const ViewFlex = styled.View`
  flex: 1;
`;

export const Margin = styled.View`
  margin-top: ${props => props.top || 0};
  margin-bottom: ${props => props.bottom || 0};
  margin-left: ${props => props.left || 0};
  margin-right: ${props => props.right || 0};
`;
