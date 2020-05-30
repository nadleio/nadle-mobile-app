import React, { useState, useContext } from "react";
import { View, Modal } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import styled, { withTheme } from "styled-components";
import { Formik } from "formik";
import { useMutation } from "@apollo/react-hooks";
import gql from "graphql-tag";

import Header from "./Header";
import Input from "../Form/Input";
import ImageHeader from "./ImageHeader";
import Loading from "../Loading";

import ContextSelf from "../../lib/ContextSelf";

import { userInformation } from "../../Fragments/userInfo";

const Container = styled.View`
  flex: 1;
  background-color: ${props => props.theme.styled.BACKGROUND};
`;

const UPDATE_INFO = gql`
  mutation(
    $firstName: String
    $lastName: String
    $biography: String
    $link: String
    $location: String
  ) {
    updateInfo(
      firstName: $firstName
      lastName: $lastName
      biography: $biography
      link: $link
      location: $location
    ) {
      message
      success
      errorCode
      data {
        ...UserInformation
      }
    }
  }
  ${userInformation}
`;

const UPDATE_AVATAR = gql`
  mutation($file: Upload!) {
    changeAvatar(file: $file) {
      message
      success
      errorCode
      data {
        ...UserInformation
      }
    }
  }
  ${userInformation}
`;

const UPDATE_COVER_AVATAR = gql`
  mutation($file: Upload!) {
    changeCoverAvatar(file: $file) {
      message
      success
      errorCode
      data {
        ...UserInformation
      }
    }
  }
  ${userInformation}
`;

function EditProfile({ self, close }) {
  const { updateSelf } = useContext(ContextSelf);

  const [update] = useMutation(UPDATE_INFO);
  const [updateAvatar] = useMutation(UPDATE_AVATAR);
  const [updateCoverAvatar] = useMutation(UPDATE_COVER_AVATAR);

  const [loading, setLoading] = useState(false);
  const [changePhoto, setChangePhoto] = useState(false);
  const [changeCoverAvatar_state, setChangeCoverAvatar] = useState(false);

  async function updateInfo(values) {
    setLoading(true);

    try {
      const { data } = await update({
        variables: {
          firstName: values.firstName || null,
          lastName: values.lastName || null,
          biography: values.biography || null,
          link: values.link || null,
          location: values.location || null
        }
      });

      const response = data.updateInfo;

      if (response.success) {
        updateSelf(response.data);

        if (changeCoverAvatar_state) {
          changeCoverAvatar(values.coverAvatar);
        }

        if (changePhoto) {
          changeAvatar(values.picture);
        }
      }

      setLoading(false);
      close();
    } catch (error) {
      setLoading(false);
    }
  }

  async function changeAvatar(file) {
    try {
      const { data } = await updateAvatar({ variables: { file } });

      if (data.changeAvatar.success) {
        updateSelf(data.changeAvatar.data);
        setLoading(false);
        close();
      }
    } catch (error) {
      alert("Something happend, please try again.");
      setLoading(false);
    }
  }

  async function changeCoverAvatar(file) {
    try {
      const { data } = await updateCoverAvatar({ variables: { file } });

      if (data.changeCoverAvatar.success) {
        updateSelf(data.changeCoverAvatar.data);
        setLoading(false);
        close();
      }
    } catch (error) {
      alert("Something happend, please try again.");
      setLoading(false);
    }
  }

  return (
    <Modal animationType="slide" visible={true}>
      <Container>
        <Formik
          initialValues={self}
          onSubmit={values => updateInfo(values)}
          enableReinitialize
        >
          {({ handleChange, handleSubmit, values, setFieldValue }) => (
            <Container>
              <Header saveInfo={handleSubmit} back={close} />

              <KeyboardAwareScrollView>
                <ImageHeader
                  onPressProfile={form => {
                    setChangePhoto(true);
                    setFieldValue("picture", form);
                  }}
                  setCoverAvatar={form => {
                    setChangeCoverAvatar(true);
                    setFieldValue("coverAvatar", form);
                  }}
                  picture={self.avatar}
                  coverAvatar={self.coverAvatar}
                />

                <View style={{ marginTop: 16, marginHorizontal: 16 }}>
                  <Input
                    onChangeText={handleChange("firstName")}
                    label="First Name"
                    returnKeyType="next"
                    spellCheck={false}
                    value={values.firstName}
                    placeholder="Insert your first name"
                    style={{ marginBottom: 32 }}
                  />

                  <Input
                    onChangeText={handleChange("lastName")}
                    label="Last Name"
                    returnKeyType="next"
                    spellCheck={false}
                    value={values.lastName}
                    placeholder="Insert your last name"
                    style={{ marginBottom: 32 }}
                  />

                  <Input
                    onChangeText={handleChange("biography")}
                    label="Biography"
                    returnKeyType="next"
                    spellCheck={false}
                    value={values.biography}
                    style={{ marginBottom: 32 }}
                    multiline
                    placeholder="Insert your biography"
                  />

                  <Input
                    onChangeText={handleChange("link")}
                    label="Link"
                    autoCapitalize="none"
                    returnKeyType="next"
                    spellCheck={false}
                    value={values.link}
                    style={{ marginBottom: 32 }}
                    placeholder="Insert your link"
                  />

                  <Input
                    onChangeText={handleChange("location")}
                    label="Location"
                    autoCapitalize="none"
                    returnKeyType="next"
                    spellCheck={false}
                    value={values.location}
                    style={{ marginBottom: 32 }}
                    placeholder="Insert your location"
                  />
                </View>
              </KeyboardAwareScrollView>
            </Container>
          )}
        </Formik>

        {loading && <Loading />}
      </Container>
    </Modal>
  );
}

export default withTheme(EditProfile);
