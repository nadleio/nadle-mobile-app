import React, { useState } from "react";
import { View } from "react-native";
import styled from "styled-components";
import { useMutation } from "@apollo/react-hooks";
import gql from "graphql-tag";

import Photo from "../Photo";
import Icon from "../Icon";

import DEFAULT_PROFILE from "../../assets/images/defaultProfile.png";

const UPDATE_AVATAR = gql`
  mutation($file: Upload!) {
    changeAvatar(file: $file) {
      message
      success
      errorCode
      data {
        avatar
      }
    }
  }
`;

const ImageContainer = styled.View`
  height: 76px;
  width: 76px;
  border-radius: 38px;
  background-color: ${props => props.theme.styled.BACKGROUND};
  justify-content: center;
  align-items: center;
`;

const Cover = styled.ImageBackground`
  height: 210px;
  width: 100%;
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

function ImageHeader({ picture }) {
  const [profilePhoto, setProfilePhoto] = useState(picture);

  const [update] = useMutation(UPDATE_AVATAR);

  async function changeAvatar() {
    const file = new FormData();
    const image = await Photo();

    if (image !== "error") {
      setProfilePhoto(image.path);

      console.log(image);

      file.append("file", {
        name: image.filename,
        type: "image/jpg",
        uri: image.path
      });

      try {
        const { data } = await update({
          variables: {
            file: file
          }
        });

        console.log(data);
      } catch (error) {
        console.log(error);
      }
    }
  }

  return (
    <View>
      <Cover source={{ uri: "https://source.unsplash.com/random" }}>
        <AddCover>
          <Icon name="outline-plus-circle" color="white" size={26} />
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
