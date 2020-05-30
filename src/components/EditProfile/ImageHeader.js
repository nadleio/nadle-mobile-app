import React, { useState } from "react";
import { View } from "react-native";
import styled from "styled-components";

import Photo from "../Photo";
import Icon from "../Icon";

import DEFAULT_PROFILE from "../../assets/images/defaultProfile.png";

const { ReactNativeFile } = require("apollo-upload-client");

const ImageContainer = styled.View`
  height: 76px;
  width: 76px;
  border-radius: 38px;
  background-color: ${props => props.theme.styled.BACKGROUND};
  justify-content: center;
  align-items: center;
`;

const ProfilePicture = styled.ImageBackground`
  height: 64px;
  width: 64px;
  border-radius: 32px;
  background-color: #fff;
  overflow: hidden;
`;

const AddCover = styled.View`
  background-color: rgba(0, 0, 0, 0.4);
  height: 100%;
  justify-content: center;
  align-items: center;
`;

const Cover = styled.ImageBackground`
  height: 210px;
  width: 100%;
  background-color: #fff;
`;

function ImageHeader({ picture, coverAvatar, ...props }) {
  const [profilePhoto, setProfilePhoto] = useState(picture);
  const [coverPhoto, setCoverPhoto] = useState(coverAvatar);

  async function changeAvatar() {
    const image = await Photo();

    if (image !== "error") {
      setProfilePhoto(image.path);

      const file = new ReactNativeFile({
        uri: image.path,
        name: image.filename,
        type: "image/jpeg"
      });

      props.onPressProfile(file);
    }
  }

  async function changeCoverAvatar() {
    const image = await Photo();

    if (image !== "error") {
      setCoverPhoto(image.path);

      const file = new ReactNativeFile({
        uri: image.path,
        name: image.filename,
        type: "image/jpeg"
      });

      props.setCoverAvatar(file);
    }
  }

  return (
    <View>
      <Cover source={coverPhoto ? { uri: coverPhoto } : DEFAULT_PROFILE}>
        <AddCover>
          <Icon
            onPress={() => changeCoverAvatar()}
            name="outline-plus-circle"
            color="white"
            size={26}
          />
        </AddCover>
      </Cover>

      <View style={{ alignItems: "center", marginTop: -30 }}>
        <ImageContainer>
          <ProfilePicture
            source={profilePhoto ? { uri: profilePhoto } : DEFAULT_PROFILE}
          >
            <AddCover>
              <Icon
                onPress={() => changeAvatar()}
                name="outline-plus-circle"
                color="white"
                size={26}
              />
            </AddCover>
          </ProfilePicture>
        </ImageContainer>
      </View>
    </View>
  );
}

export default ImageHeader;
