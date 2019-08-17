import React from "react";

import { View } from "react-native";

import { SafeAreaView } from "react-navigation";
import { Formik } from "formik";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

import { ViewFlex, PaddingHorizontal } from "../assets/styles/styles";
import { TextInput } from "../components/form/Input";
import { Header } from "../components/Header";
import { Information, InputValidation } from "../components/Text";
import { Button } from "../components/Button";
import { SignupSchema } from "../components/form/Validations";

function ChangePassword(props) {
  return (
    <ViewFlex>
      <SafeAreaView backgroundColor="white" />
      <Header
        back={() => props.navigation.goBack()}
        backBool={true}
        text="Change password"
      />

      <KeyboardAwareScrollView>
        <PaddingHorizontal>
          <Formik
            initialValues={{
              oldPassword: "",
              password: "",
              confirm_password: ""
            }}
            onSubmit={values => save(values)}
            validationSchema={SignupSchema}
          >
            {props => (
              <View>
                <Information size={16} top={20}>
                  Type your actual password
                </Information>

                <TextInput
                  top={5}
                  onChangeText={props.handleChange("oldPassword")}
                  placeholder="Your password"
                  returnKeyType="done"
                  secureTextEntry={true}
                />

                <Information size={16} top={20}>
                  New password
                </Information>

                <TextInput
                  top={5}
                  onChangeText={props.handleChange("password")}
                  placeholder="New password"
                  returnKeyType="done"
                  secureTextEntry={true}
                />

                {props.errors.password == "Minimum 8 characters" && (
                  <InputValidation top={10}>
                    {props.errors.password}
                  </InputValidation>
                )}

                <Information size={16} top={20}>
                  Repet password
                </Information>

                <TextInput
                  top={5}
                  onChangeText={props.handleChange("confirm_password")}
                  placeholder="Repet password"
                  returnKeyType="done"
                  secureTextEntry={true}
                />

                <Button
                  action={props.handleSubmit}
                  text="CHANGE PASSWORD"
                  top={40}
                  disabled={
                    props.values.oldPassword == "" ||
                    props.values.password.length < 8 ||
                    props.values.confirm_password.length < 8
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

export default ChangePassword;
