import React from "react";
import { View } from "react-native";
import styled, { withTheme } from "styled-components";

import { Label, Title } from "../Text";

const Container = styled.View`
  flex-direction: row;
  align-items: center;
`;

const ImageContainer = styled.View`
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

function PostInfo() {
  return (
    <View style={{ marginBottom: 16 }}>
      <Container>
        <ImageContainer>
          <Avatar source={{ uri: "https://source.unsplash.com/random" }} />
        </ImageContainer>

        <View style={{ marginLeft: 8 }}>
          <Label>Ricardo Malagon</Label>
          <Label style={{ fontSize: 14 }}>16 Dic, 2020</Label>
        </View>
      </Container>

      <Title style={{ marginVertical: 16 }}>
        How to launch on React Native IOS and Android
      </Title>

      <Divider />
    </View>
  );
}

export default withTheme(PostInfo);
