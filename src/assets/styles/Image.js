import styled from "styled-components";

export const Images = styled.Image`
  height: ${props => props.height || 0};
  width: ${props => props.width || 0};
  border-radius: ${props => props.radius || 0};
`;

export const ImageContent = styled.View`
  height: ${props => props.height || 0};
  width: ${props => props.width || 0};
  border-radius: ${props => props.radius || 0};
  background-color: #d9d9d9;
  justify-content: center;
  align-items: center;
`;
