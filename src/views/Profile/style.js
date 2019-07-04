import styled from "styled-components";

export const Padding = styled.View`
  padding-left: 8%;
  padding-right: 8%;
`;

export const PostContentPadding = styled.View`
  padding-left: 5%;
  padding-right: 5%;
  padding-top: 10px;
`;

export const Align = styled.View`
  align-items: center;
`;

export const Row = styled(Align)`
  flex-direction: row;
`;

export const IconsBox = styled.View`
  flex-direction: row;
  margin-top: 25px;
  justify-content: space-between;
`;

export const PostTitleContent = styled.View`
  height: 45px;
  padding-left: 5%;
  padding-right: 5%;
  border-width: 2;
  border-color: #f4f4f4;
  margin-top: ${props => props.margintop || -40};
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const Authorized = styled.View`
  padding: 15px;
  padding-left: 5%;
  padding-right: 5%;
  margin-top: -50px;
  border-width: 2;
  border-color: #f4f4f4;
`;

export const Settings = styled.View`
  margin-top: 50px;
  margin-right: 8%;
  margin-left: 8%;
  justify-content: space-between;
  flex-direction: row;
`;
