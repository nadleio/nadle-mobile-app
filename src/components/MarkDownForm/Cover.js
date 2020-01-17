import React, { useState } from "react";
import { View } from "react-native";
import styled, { withTheme } from "styled-components";

import Photo from "../Photo";
import { Title, Label } from "../Text";
import Icon from "../Icon";

const { ReactNativeFile } = require("apollo-upload-client");

const Container = styled.TouchableOpacity`
  height: 200px;
  width: 100%;
  background-color: ${props => props.theme.styled.BOX_BACKGROUND};
  border-radius: 8px;
  margin-bottom: 32px;
  justify-content: center;
  align-items: center;
`;

const PostCover = styled.ImageBackground`
  height: 200px;
  width: 100%;
  border-radius: 8px;
  margin-bottom: 32px;
  align-items: flex-end;
  padding: 8px;
  overflow: hidden;
  background-color: #e6e6e6;
`;

const IconContainer = styled.TouchableOpacity`
  height: 30px;
  width: 30px;
  border-radius: 15px;
  background-color: ${props => props.theme.styled.BOX_BACKGROUND};
  justify-content: center;
  align-items: center;
`;

function Cover({ theme, setCover }) {
  const [cover, setCoverState] = useState("");

  async function setPhoto() {
    const image = await Photo();

    if (image !== "error") {
      setCoverState(image.path);

      const file = new ReactNativeFile({
        uri: image.path,
        name: image.filename,
        type: "image/jpeg"
      });

      setCover(file);
    }
  }

  return (
    <View>
      <Title style={{ marginBottom: 12 }}>Cover post</Title>

      {cover !== "" ? (
        <PostCover style={{ marginBottom: 32 }} source={{ uri: cover }}>
          <IconContainer activeOpacity={0.5} onPress={() => setCover("")}>
            <Icon name="replace" color={theme.styled.ICON} size={18} />
          </IconContainer>
        </PostCover>
      ) : (
        <Container onPress={() => setPhoto()}>
          <Label size={14}>Add a cover for your post.</Label>
        </Container>
      )}
    </View>
  );
}

export default withTheme(Cover);
