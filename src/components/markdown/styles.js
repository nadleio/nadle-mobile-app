import styled from "styled-components";

export const Header = styled.View`
  justify-content: flex-end;
  border-bottom-color: #f4f4f4;
  border-bottom-width: 2;
  padding-right: 15px;
  padding-left: 15px;
  padding-top: 15px;
  padding-bottom: 15px;
  flex-direction: row;
`;

export const IconContent = styled.View`
  justify-content: space-between;
  width: 65%;
  flex-direction: row;
`;

export const Save = styled.TouchableOpacity`
  height: 25px;
  padding-left: 6%;
  padding-right: 6%;
  justify-content: center;
  border-radius: 4;
  align-items: center;
  background-color: ${props => props.backgroundColor || "#0479f7"};
`;
