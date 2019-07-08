import styled from "styled-components";

export const Subscribe = styled.TouchableOpacity`
  height: 28px;
  padding-left: 4%;
  padding-right: 4%;
  justify-content: center;
  border-radius: 4;
  align-items: center;
  background-color: #0479f7;
`;

export const SubscribeOrganization = styled.TouchableOpacity`
  height: 28px;
  padding-left: 4%;
  padding-right: 4%;
  border-top-left-radius: ${props => props.leftRadius || 0};
  border-bottom-left-radius: ${props => props.leftRadius || 0};
  border-top-right-radius: ${props => props.rightRadius || 0};
  border-bottom-right-radius: ${props => props.rightRadius || 0};
  align-items: center;
  justify-content: center;
  background-color: ${props => props.background || "#0479f7"};
`;
