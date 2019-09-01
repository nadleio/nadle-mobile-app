import React, { useState } from "react";
import { View, Keyboard } from "react-native";

import { Formik } from "formik";
import * as Yup from "yup";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

import { AuthHeader } from "../../components/Auth/Header";
import { Title, InputValidation } from "../../components/Text";
import { TextInput } from "../../components/Form/Input";
import { ViewFlex, Margin } from "../../assets/styles/styles";
import { Button } from "../../components/Button";
import { BottomAuth } from "../../components/BottomAuth";

const SignupSchema = Yup.object().shape({
  password: Yup.string().min(8, "Minimum 8 characters")
});

function ResetPassword(props) {
  const [showAlert, setShowAlert] = useState(false);

  function SavePassword(values) {
    setShowAlert(true);
    // props.navigation.navigate("Login");
  }

  return (
    <KeyboardAwareScrollView>
      <ViewFlex>
        <Margin top={-1}>
          <AuthHeader />
        </Margin>

        <ViewFlex>
          <View paddingLeft="5%">
            <Title top={30}>Reset password</Title>
          </View>

          <View padding="5%">
            <Formik
              initialValues={{
                password: "",
                confirm_password: ""
              }}
              onSubmit={values => SavePassword(values)}
              validationSchema={SignupSchema}
            >
              {props => (
                <View>
                  <TextInput
                    onChangeText={props.handleChange("password")}
                    placeholder="Password"
                    secureTextEntry={true}
                    top={5}
                    onSubmitEditing={() => {
                      this.confirm_password.focus();
                    }}
                    returnKeyType="next"
                  />

                  <InputValidation top={5}>
                    {props.errors.password}
                  </InputValidation>

                  <TextInput
                    onChangeText={props.handleChange("confirm_password")}
                    placeholder="Confirm password"
                    secureTextEntry={true}
                    top={5}
                    ref={input => {
                      this.confirm_password = input;
                    }}
                    onSubmitEditing={() => {
                      Keyboard.dismiss();
                    }}
                    returnKeyType="done"
                  />

                  <Button
                    action={props.handleSubmit}
                    text="RESET PASSWORD"
                    top={40}
                    disabled={
                      props.values.password.length < 8 ||
                      props.values.confirm_password.length < 8
                    }
                    TextColor="white"
                    color={["#8075f7", "#59a9fb"]}
                  />
                </View>
              )}
            </Formik>

            <BottomAuth
              action={() => props.navigation.navigate("Login")}
              top={10}
              text="SIGN IN WITH MY ACCOUNT"
            />
          </View>
        </ViewFlex>
      </ViewFlex>
    </KeyboardAwareScrollView>
  );
}

ResetPassword.navigationOptions = { header: null };
export default ResetPassword;
