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

export const OrganizationSubs = styled(Row)`
  margin-top: 20px;
  justify-content: center;
`;

export const Wrap = styled(Row)`
  flex-wrap: wrap;
`;

export const Organizations = styled.TouchableOpacity`
  margin-top: 15px;
  margin-right: ${props => props.marginright || 0};
`;

export const IconsBox = styled.View`
  flex-direction: row;
  margin-top: 25px;
  justify-content: space-between;
  align-items: center;
  padding-left: ${props => props.paddinghorizontal || 0};
  padding-right: ${props => props.paddinghorizontal || 0};
`;

export const PostTitleContent = styled.View`
  height: 45px;
  padding-left: 5%;
  padding-right: 5%;
  margin-top: ${props => props.margintop || -40};
  flex-direction: row;
  align-items: center;
`;

export const Authorized = styled.View`
  padding: 15px;
  padding-left: 5%;
  padding-right: 5%;
`;

export const BioContent = styled.View`
  padding: 15px;
  padding-left: 5%;
  padding-right: 5%;
  margin-top: -50px;
`;

export const Settings = styled.View`
  margin-top: 50px;
  margin-right: 8%;
  margin-left: 8%;
  justify-content: space-between;
  flex-direction: row;
`;
