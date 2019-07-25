import { StyleSheet } from "react-native";
import styled from "styled-components";

export const styles = StyleSheet.create({
  youtube: {
    width: 220,
    height: 140,
    borderRadius: 8,
    alignSelf: "stretch"
  }
});

export const PaddingBox = styled.View`
  padding: 5%;
`;

export const Row = styled.View`
  flex-direction: row;
`;

export const HeaderIcons = styled(Row)`
  justify-content: space-between;
  width: 28%;
`;

export const NameContent = styled(Row)`
  align-items: center;
  margin-top: 15px;
`;

export const BoxesContent = styled.View`
  border-bottom-width: 2;
  border-bottom-color: ${props => props.line || "#f4f4f4"};
  padding-bottom: 10px;
  padding-top: 10px;
`;

export const Repos = styled.View`
  padding-bottom: 10px;
  padding-top: 10px;
`;

export const ClapsContent = styled(BoxesContent)`
  flex-direction: row;
  align-items: center;
  margin-top: ${props => props.margintop || 0};
`;

export const PostContentPadding = styled.View`
  padding-top: 10px;
`;

export const HeaderIconsTouchable = styled.TouchableOpacity`
  height: 20px;
  width: 20px;
`;

export const LineDivisor = styled.View`
  height: 1px;
  background-color: #f4f4f4;
  margin-top: 20px;
`;
