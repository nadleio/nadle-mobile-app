import styled from "styled-components";

export const PaddingBox = styled.View`
  padding: 5%;
  padding-bottom: 3%;
  padding-top: 3%;
  background-color: white;
  border-bottom-width: 2;
  border-bottom-color: #f4f4f4;
`;

export const Row = styled.View`
  flex-direction: row;
`;

export const IconCenter = styled(Row)`
  align-items: center;
  margin-top: 4px;
`;

export const TextContent = styled.View`
  width: 85%;
  padding-right: 1;
`;

export const IconBackground = styled.View`
  background-color: ${props => props.background || "white"};
  padding: 1%;
  border-radius: 4;
  margin-top: 4px;
  margin-left: 5px;
`;

export const Header = styled.View`
  padding: 20px;
  padding-left: 5%;
  border-bottom-color: #f4f4f4;
  border-bottom-width: 2;
`;
