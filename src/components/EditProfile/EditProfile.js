import React, { useState, useContext } from "react";
import { View, Modal } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import styled, { withTheme } from "styled-components";
import { Formik } from "formik";
import { useMutation } from "@apollo/react-hooks";
import gql from "graphql-tag";

import Header from "./Header";
import Input from "../Form/Input";

import ChangeUsername from "./ChangeUsername";
import ChangeEmail from "./ChangeEmail";
import ImageHeader from "./ImageHeader";

import ContextSelf from "../../lib/ContextSelf";

import { userInformation } from "../../Fragments/userInfo";
import Loading from "../Loading";

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
    $latitude: Float
    $longitude: Float
  ) {
    updateInfo(
      firstName: $firstName
      lastName: $lastName
      biography: $biography
      link: $link
      latitude: $latitude
      longitude: $longitude
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

function EditProfile({ self, close }) {
  const { updateSelf } = useContext(ContextSelf);

  const [update] = useMutation(UPDATE_INFO);
  const [updateAvatar] = useMutation(UPDATE_AVATAR);

  const [changeUsername, setChangeUsername] = useState(false);
  const [changeEmail, setChangeEmail] = useState(false);
  const [loading, setLoading] = useState(false);
  const [changePhoto, setChangePhoto] = useState(false);

  async function updateInfo(values) {
    setLoading(true);

    try {
      const { data } = await update({
        variables: {
          firstName: values.firstName || null,
          lastName: values.lastName || null,
          biography: values.biography || null,
          link: values.link || null,
          latitude: 0.0,
          longitude: 0.0
        }
      });

      const response = data.updateInfo;

      if (response.success) {
        updateSelf(response.data);

        if (changePhoto) {
          changeAvatar(values.picture);
        } else {
          setLoading(false);
          close();
        }
      }
    } catch (error) {
      setLoading(false);
    }
  }

  async function changeAvatar(file) {
    try {
      const { data } = await updateAvatar({
        variables: { file }
      });

      if (data.changeAvatar.success) {
        updateSelf(data.changeAvatar.data);

        setLoading(false);
        close();
      } else {
        setLoading(false);
        close();
      }
    } catch (error) {
      setLoading(false);
      alert("Something happend, please try again.");
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
                  picture={self.avatar}
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
                </View>
              </KeyboardAwareScrollView>
            </Container>
          )}
        </Formik>

        {changeUsername && (
          <ChangeUsername close={() => setChangeUsername(false)} self={self} />
        )}

        {changeEmail && (
          <ChangeEmail close={() => setChangeEmail(false)} self={self} />
        )}

        {loading && <Loading />}
      </Container>
    </Modal>
  );
}

export default withTheme(EditProfile);
