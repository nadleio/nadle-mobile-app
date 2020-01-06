import React, { useState, useContext } from "react";
import { View } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import styled, { withTheme } from "styled-components";
import { Formik } from "formik";
import { useMutation } from "@apollo/react-hooks";
import gql from "graphql-tag";

import Header from "../components/EditProfile/Header";
import Input from "../components/Form/Input";
import { Label } from "../components/Text";

import ChangeUsername from "../components/EditProfile/ChangeUsername";
import ChangeEmail from "../components/EditProfile/ChangeEmail";
// import { Photo } from "../components/Photo";

import ContextSelf from "../lib/ContextSelf";
import ContextLoading from "../lib/ContextLoading";

import { userInformation } from "../Fragments/userInfo";

const Container = styled.View`
  flex: 1;
  background-color: ${props => props.theme.styled.BACKGROUND};
`;

const EditContainer = styled.TouchableOpacity`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 32px;
  padding: 0 16px 0 16px;
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

function EditProfile({ self, navigation, theme }) {
  const { updateSelf } = useContext(ContextSelf);
  const { setLoadingModal } = useContext(ContextLoading);

  const [update] = useMutation(UPDATE_INFO);

  const [changeUsername, setChangeUsername] = useState(false);
  const [changeEmail, setChangeEmail] = useState(false);

  async function updateInfo(values) {
    console.log(values);
    setLoadingModal(true);

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

      // updateSelf(values);

      // updateSelf({
      //   uid: user.id,
      //   type: "USER",
      //   picture: user.avatar,
      //   username: user.username,
      //   email: user.email,
      //   firstName: user.firstName,
      //   lastName: user.lastName,
      //   followers: user.followers.count,
      //   following: user.following.count,
      //   biography: user.biography,
      //   link: user.link
      // });

      console.log(data.updateInfo.success);
      setLoadingModal(false);

      // if (data.signup.success) {
      //   alert("Please check your email to confirm your account");
      //   navigation.navigate("Login");
      // } else {
      //   alert(ERROR[data.signup.errorCode]);
      // }
    } catch (error) {
      console.log(error);
      setLoadingModal(false);
      // Sentry Catch
    }
  }

  return (
    <Container>
      <Formik
        initialValues={self}
        onSubmit={values => updateInfo(values)}
        enableReinitialize
      >
        {({ handleChange, handleSubmit, values }) => (
          <Container>
            <Header saveInfo={handleSubmit} back={() => navigation.goBack()} />

            <KeyboardAwareScrollView>
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

              <EditContainer onPress={() => setChangeUsername(true)}>
                <View style={{ width: "80%" }}>
                  <Input
                    label="Username"
                    editable={false}
                    value={values.username}
                    placeholder="Insert your username"
                    pointerEvents="none"
                  />
                </View>

                <Label color={theme.colors.PRIMARY}>EDIT</Label>
              </EditContainer>

              <EditContainer onPress={() => setChangeEmail(true)}>
                <View style={{ width: "80%" }}>
                  <Input
                    label="Email"
                    value={values.email}
                    editable={false}
                    pointerEvents="none"
                  />
                </View>

                <Label color={theme.colors.PRIMARY}>EDIT</Label>
              </EditContainer>
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
    </Container>
  );
}

export default withTheme(EditProfile);
