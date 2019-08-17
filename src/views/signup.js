import React from "react";
import { View, Keyboard } from "react-native";

import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { Formik } from "formik";

import { AuthHeader } from "../components/Auth/Header";
import { Title, InputValidation } from "../components/Text";
import { TextInput } from "../components/form/Input";
import { Button } from "../components/Button";
import { BottomAuth } from "../components/BottomAuth";
import { SignupSchema } from "../components/form/Validations";
import { ViewFlex, Margin } from "../assets/styles/styles";

function Signup(props) {
  function save(values) {}
  return (
    <KeyboardAwareScrollView>
      <ViewFlex>
        <Margin top={-1}>
          <AuthHeader withThemeSwitch={true} />
        </Margin>

        <ViewFlex>
          <View paddingLeft="5%">
            <Title>Sign up</Title>
          </View>

          <View padding="5%">
            <Formik
              initialValues={{
                complete_name: "",
                username: "",
                email: "",
                password: "",
                confirm_password: ""
              }}
              onSubmit={values => save(values)}
              validationSchema={SignupSchema}
            >
              {props => (
                <View>
                  <TextInput
                    onChangeText={props.handleChange("complete_name")}
                    placeholder="Complete name"
                    onSubmitEditing={() => {
                      this.username.focus();
                    }}
                    returnKeyType="next"
                  />

                  <TextInput
                    onChangeText={props.handleChange("username")}
                    placeholder="Username"
                    top={10}
                    autoCapitalize="none"
                    ref={input => {
                      this.username = input;
                    }}
                    onSubmitEditing={() => {
                      this.email.focus();
                    }}
                    returnKeyType="next"
                  />

                  <InputValidation top={10}>
                    {props.errors.username}
                  </InputValidation>

                  <TextInput
                    onChangeText={props.handleChange("email")}
                    placeholder="Email"
                    autoCapitalize="none"
                    top={5}
                    ref={input => {
                      this.email = input;
                    }}
                    onSubmitEditing={() => {
                      this.password.focus();
                    }}
                    returnKeyType="next"
                  />

                  <InputValidation top={5}>
                    {props.errors.email}
                  </InputValidation>

                  <TextInput
                    onChangeText={props.handleChange("password")}
                    placeholder="Password"
                    secureTextEntry={true}
                    top={5}
                    ref={input => {
                      this.password = input;
                    }}
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
                    text="SIGN UP"
                    top={40}
                    disabled={
                      props.values.complete_name == "" ||
                      props.values.username.length < 3 ||
                      props.errors.email == "Invalid email" ||
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

Signup.navigationOptions = { header: null };
export default Signup;
