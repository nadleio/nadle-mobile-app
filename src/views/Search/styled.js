import styled from "styled-components";

export const Padding = styled.View`
  padding: 5%;
`;

export const Row = styled.View`
  flex-direction: row;
`;

export const SearchContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const AlignItems = styled(Row)`
  align-items: center;
  border-width: 1px;
  border-color: #e6e6e6;
  border-radius: 8px;
  padding-left: 5%;
  padding-right: 5%;
  width: 85%;
`;

export const PostContainer = styled.View`
  padding-top: 5%;
  padding-bottom: 5%;
  border-top-width: 1px;
  border-color: #e6e6e6;
`;

export const Margintop = styled.View`
  margin-top: 20px;
`;

export const SearchButtonContainer = styled.TouchableOpacity`
  border-radius: 4px;
  background-color: #325ad2;
  justify-content: center;
  align-items: center;
  height: 35px;
  width: 35px;
`;
