import styled from "styled-components";

export const Images = styled.Image`
  height: ${props => props.height || 0};
  width: ${props => props.width || 0};
  border-radius: ${props => props.radius || 0};
`;

export const ImageBackground = styled.ImageBackground`
  height: ${props => props.height || 0};
  width: ${props => props.width || 0};
  border-radius: ${props => props.radius || 0};
  overflow: hidden;
`;

export const ImageContent = styled.View`
  height: ${props => props.height || 0};
  width: ${props => props.width || 0};
  border-radius: ${props => props.radius || 0};
  background-color: ${props => props.color || "#e6e6e6"};
  justify-content: center;
  align-items: center;
`;
