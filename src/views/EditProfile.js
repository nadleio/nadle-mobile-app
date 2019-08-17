import React, { useState, useEffect } from "react";

import { View } from "react-native";

import { SafeAreaView } from "react-navigation";
import { Formik } from "formik";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import styled from "styled-components";

import { ViewFlex, PaddingHorizontal } from "../assets/styles/styles";
import { TextInput } from "../components/form/Input";
import { Header } from "../components/Header";
import { Information, InputValidation } from "../components/Text";
import { ImageProfile } from "../assets/styles/Image";
import { Photo } from "../components/Photo";
import { Button } from "../components/Button";
import { SignupSchema } from "../components/form/Validations";

const ImageProfileContainer = styled.TouchableOpacity`
  margin-top: 20px;
`;

const InputContainer = styled.View`
  width: 100%;
  margin-left: 5%;
`;

const Row = styled.View`
  flex-direction: row;
  width: 100%;
  align-items: center;
`;

function EditProfile(props) {
  const type = "company";
  const [imageProfile, setImage] = useState("");

  function pickPhoto() {
    Photo().then(image => {
      image != "error" && setImage(`data:${image.mime};base64,${image.data}`);
    });
  }

  useEffect(() => {
    setImage("https://nadle-assets.nyc3.digitaloceanspaces.com/pp.jpg");
  }, []);

  return (
    <ViewFlex>
      <SafeAreaView backgroundColor="white" />
      <Header
        back={() => props.navigation.goBack()}
        backBool={true}
        text="Modifed your profile"
      />

      <KeyboardAwareScrollView>
        <PaddingHorizontal>
          <Formik
            initialValues={{
              complete_name: "Ricardo Malagon",
              username: "ricardomalagon",
              email: "ricardo@ricardomalagon.com",
              bio: "klk wawawa",
              url: "ricardomalagon.com",
              location: "San Jua, PR"
            }}
            onSubmit={values => save(values)}
            validationSchema={SignupSchema}
          >
            {props => (
              <View>
                <Row>
                  <ImageProfileContainer onPress={() => pickPhoto()}>
                    <ImageProfile source={{ uri: imageProfile }} />
                  </ImageProfileContainer>

                  <InputContainer>
                    <Information size={16} top={20}>
                      Complete name
                    </Information>

                    <TextInput
                      top={5}
                      onChangeText={props.handleChange("complete_name")}
                      placeholder="Your complete name"
                      value="Ricardo Malagon"
                      returnKeyType="done"
                      width="70%"
                      value={props.values.complete_name}
                    />
                  </InputContainer>
                </Row>

                <Information size={16} top={20}>
                  username
                </Information>

                <TextInput
                  top={5}
                  onChangeText={props.handleChange("username")}
                  placeholder="Your username"
                  value="ricardo"
                  returnKeyType="done"
                  value={props.values.username}
                />

                {props.errors.username == "Minimum 3 characters" && (
                  <InputValidation top={10}>
                    {props.errors.username}
                  </InputValidation>
                )}

                <Information size={16} top={20}>
                  Email
                </Information>

                <TextInput
                  top={5}
                  onChangeText={props.handleChange("email")}
                  placeholder="Your email"
                  value="ricardo@ricardomalagon.com"
                  returnKeyType="done"
                  value={props.values.email}
                />

                {props.errors.email == "Invalid email" && (
                  <InputValidation top={10}>
                    {props.errors.email}
                  </InputValidation>
                )}

                <Information size={16} top={20}>
                  Bio
                </Information>

                <TextInput
                  top={5}
                  onChangeText={props.handleChange("bio")}
                  placeholder="Your bio"
                  value="klk wawawa"
                  returnKeyType="done"
                  multiline={true}
                  value={props.values.bio}
                />

                {type === "company" && (
                  <View>
                    <Information size={16} top={20}>
                      URL
                    </Information>

                    <TextInput
                      top={5}
                      onChangeText={props.handleChange("url")}
                      placeholder="Your url"
                      value="ricardomalagon.com"
                      returnKeyType="done"
                      value={props.values.url}
                    />

                    <Information size={16} top={20}>
                      Location
                    </Information>

                    <TextInput
                      top={5}
                      onChangeText={props.handleChange("location")}
                      placeholder="Your location"
                      value="San Juan, PR"
                      returnKeyType="done"
                      value={props.values.location}
                    />
                  </View>
                )}

                <Button
                  action={props.handleSubmit}
                  text="UPDATE PROFILE"
                  top={40}
                  disabled={
                    props.values.complete_name == "" ||
                    props.values.username.length < 3 ||
                    props.errors.email == "Invalid email" ||
                    props.values.email.length == 0
                  }
                  TextColor="white"
                  color={["#2f5de9", "#2f5de9"]}
                />
              </View>
            )}
          </Formik>
        </PaddingHorizontal>
      </KeyboardAwareScrollView>
    </ViewFlex>
  );
}

export default EditProfile;
