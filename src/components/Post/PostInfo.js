import React from "react";
import { View } from "react-native";
import styled, { withTheme } from "styled-components";
import moment from "moment";

const Container = styled.View`
  flex-direction: row;
  align-items: center;
`;

const AvatarContainer = styled.View`
  height: 34px;
  width: 34px;
  border-radius: 17px;
  background-color: transparent;
  border-width: 2px;
  border-color: ${props => props.theme.colors.PRIMARY};
  justify-content: center;
  align-items: center;
`;

const Avatar = styled.Image`
  height: 28px;
  width: 28px;
  border-radius: 14px;
  background-color: #f4f4f4;
`;

const Divider = styled.View`
  height: 1px;
  width: 100%;
  background-color: ${props => props.theme.styled.CONTENT};
  opacity: 0.2;
`;

const Title = styled.Text`
  margin: 16px 0;
  color: ${props => props.theme.styled.TITLE};
  font-size: ${props => props.theme.fontSize.TITLE};
`;

const Date = styled.Text`
  color: ${props => props.theme.styled.CONTENT};
  font-size: ${props => props.theme.fontSize.SMALL};
`;

const Owner = styled.Text`
  color: ${props => props.theme.styled.CONTENT};
  font-size: ${props => props.theme.fontSize.BODY};
`;

function PostInfo({ content }) {
  return (
    <View style={{ marginBottom: 16 }}>
      <Container>
        <AvatarContainer>
          <Avatar source={{ uri: "https://source.unsplash.com/random" }} />
        </AvatarContainer>

        <View style={{ marginLeft: 8 }}>
          <Owner>Ricardo Malagon</Owner>
          <Date>{moment(content.createdAt).format("MMMM D, YYYY")}</Date>
        </View>
      </Container>

      <Title>{content.title}</Title>

      <Divider />
    </View>
  );
}

export default withTheme(PostInfo);
