import styled from "styled-components";

export const PaddingBox = styled.View`
  padding: 5%;
  padding-bottom: 3%;
  padding-top: 3%;
  background-color: white;
`;

export const Row = styled.View`
  flex-direction: row;
`;

export const TextContent = styled.View`
  width: 85%;
`;

export const Header = styled.View`
  padding: 20px;
  padding-left: 5%;
  border-bottom-color: #f4f4f4;
  border-bottom-width: 2;
`;

export const TextInput = styled.TextInput`
  min-height: 40px;
  max-height: 100px;
  width: 87%;
  border-width: 2;
  border-color: rgb(244, 244, 244);
  font-size: 16;
  font-family: "System";
  font-weight: 500;
  text-align: left;
  border-radius: 8px;
  padding: 2%;
`;

export const TextInputContainer = styled(Row)`
  justify-content: space-between;
  padding: 10px;
  align-items: center;
  background-color: white;
`;

export const Container = styled(Row)`
  padding-bottom: 10px;
  padding-top: 10px;
  border-bottom-width: 1;
  border-color: rgb(244, 244, 244);
`;

export const SendContainer = styled.TouchableOpacity`
  border-radius: 4px;
  background-color: #325ad2;
  justify-content: center;
  align-items: center;
  height: 35px;
  width: 35px;
`;

export const UserMentions = styled.TouchableOpacity`
  height: 60px;
  padding: 10px;
  display: flex;
  flex-direction: row;
  align-items: center;
`;
