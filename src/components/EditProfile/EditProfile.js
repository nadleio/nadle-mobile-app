import React, { useState, useContext } from "react";
import { View, Modal } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import styled, { withTheme } from "styled-components";
import { Formik } from "formik";
import { useMutation } from "@apollo/react-hooks";
import gql from "graphql-tag";

import Header from "./Header";
import Input from "../Form/Input";
// import { Label } from "../Text";

import ChangeUsername from "./ChangeUsername";
import ChangeEmail from "./ChangeEmail";
import ImageHeader from "./ImageHeader";
// import { Photo } from "../components/Photo";

import ContextSelf from "../../lib/ContextSelf";

import { userInformation } from "../../Fragments/userInfo";
import Loading from "../Loading";

const Container = styled.View`
  flex: 1;
  background-color: ${props => props.theme.styled.BACKGROUND};
`;

// const EditContainer = styled.TouchableOpacity`
//   flex-direction: row;
//   justify-content: space-between;
//   align-items: center;
//   margin-bottom: 32px;
//   padding: 0 16px 0 16px;
// `;

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

function EditProfile({ self, close }) {
  const { updateSelf } = useContext(ContextSelf);

  const [update] = useMutation(UPDATE_INFO);

  const [changeUsername, setChangeUsername] = useState(false);
  const [changeEmail, setChangeEmail] = useState(false);
  const [loading, setLoading] = useState(false);

  async function updateInfo(values) {
    console.log(values);
    // setLoading(true);

    // try {
    //   const { data } = await update({
    //     variables: {
    //       firstName: values.firstName || null,
    //       lastName: values.lastName || null,
    //       biography: values.biography || null,
    //       link: values.link || null,
    //       latitude: 0.0,
    //       longitude: 0.0
    //     }
    //   });

    //   const response = data.updateInfo;

    //   if (response.success) {
    //     updateSelf({
    //       uid: response.data.id,
    //       type: "USER",
    //       picture: response.data.avatar,
    //       username: response.data.username,
    //       email: response.data.email,
    //       firstName: response.data.firstName,
    //       lastName: response.data.lastName,
    //       followers: response.data.followers.count,
    //       following: response.data.following.count,
    //       biography: response.data.biography,
    //       link: response.data.link
    //     });

    //     setLoading(false);
    //     close();
    //   }
    // } catch (error) {
    //   setLoading(false);
    // }
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
                  onPressProfile={link => setFieldValue("picture", link)}
                  picture={self.picture}
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

                {/* <EditContainer onPress={() => setChangeUsername(true)}>
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
                </EditContainer> */}
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
