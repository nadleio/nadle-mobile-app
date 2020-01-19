import React, { useState } from "react";
import { View } from "react-native";
import styled from "styled-components";

import Photo from "../Photo";
import Icon from "../Icon";

import DEFAULT_PROFILE from "../../assets/images/defaultProfile.png";

const { ReactNativeFile } = require("apollo-upload-client");

const ImageContainer = styled.View`
  height: 48px;
  width: 48px;
  border-radius: 4px;
  background-color: ${props => props.theme.styled.BACKGROUND};
  justify-content: center;
  align-items: center;
`;

const ProfilePicture = styled.ImageBackground`
  height: 42px;
  width: 42px;
  border-radius: 4px;
  background-color: #fff;
  overflow: hidden;
`;

const AddCover = styled.View`
  background-color: rgba(0, 0, 0, 0.4);
  height: 100%;
  justify-content: center;
  align-items: center;
`;

function Avatar({ setFile }) {
  const [avatar, setAvatar] = useState("");

  async function changeAvatar() {
    const image = await Photo();

    if (image !== "error") {
      setAvatar(image.path);

      const file = new ReactNativeFile({
        uri: image.path,
        name: image.filename,
        type: "image/jpeg"
      });

      setFile(file);
    }
  }

  return (
    <View style={{ alignItems: "center" }}>
      <ImageContainer>
        <ProfilePicture source={avatar ? { uri: avatar } : DEFAULT_PROFILE}>
          <AddCover>
            <Icon
              onPress={() => changeAvatar()}
              name="outline-plus-circle"
              color="white"
              size={22}
            />
          </AddCover>
        </ProfilePicture>
      </ImageContainer>
    </View>
  );
}

export default Avatar;
