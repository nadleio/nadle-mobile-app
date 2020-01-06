import styled from "styled-components";

export const Container = styled.View`
  /* background-color: ${props => props.background}; */
  background-color: white;
  flex: 1;
`;

export const Margintop = styled.View`
  margin-top: ${props => props.margintop || 0};
`;

export const Padding = styled.View`
  padding: 0 5% 5% 5%;
`;

export const HeaderIconsTouchable = styled.TouchableOpacity`
  height: 18px;
  width: 18px;
`;
export const HeaderIcons = styled.View`
  flex-direction: row;
  justify-content: flex-end;
  flex: 1;
  margin-right: 10px;
`;

export const Lines = styled.View`
  height: 2.5px;
  width: 40%;
  background-color: #f4f4f4;
  align-self: center;
`;

export const Contrary = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-top: 10px;
  margin-bottom: 5px;
`;
