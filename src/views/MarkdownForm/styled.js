import styled from "styled-components";

export const Padding = styled.View`
  padding: 5%;
`;

export const Organization = styled.TouchableOpacity`
  background-color: #fefefe;
  flex-direction: row;
  align-items: center;
  margin-bottom: 15px;
  margin-top: 15px;
`;

export const CollapsedContainer = styled.TouchableOpacity`
  margin-top: 35px;
  border-bottom-width: 2.5;
  border-bottom-color: rgb(244, 244, 244);
`;

export const AssetsContainer = styled.TouchableOpacity`
  height: 100px;
  width: 100px;
  background-color: #f4f4f4;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
`;

export const RemoveImageContainer = styled.TouchableOpacity`
  justify-content: flex-end;
  align-items: flex-end;
  flex-direction: row;
  padding: 2%;
`;

export const ModalStyle = styled.View`
  background-color: rgba(0, 0, 0, 0.3);
  flex: 1;
`;
