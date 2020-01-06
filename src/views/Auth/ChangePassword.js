import React, { useState } from "react";
import styled, { withTheme } from "styled-components";
import { Keyboard, ScrollView, View } from "react-native";
import { Formik } from "formik";
import { useMutation } from "@apollo/react-hooks";
import gql from "graphql-tag";

import ERROR from "../../nadle-i18/errors";

import AuthHeader from "../../components/Auth/Header";

import { SIGNUP_SCHEMA } from "../../lib/form/authValidations";

import Separator from "../../components/Separator";
import Button from "../../components/Button";
import Input from "../../components/Form/Input";
import ActionLink from "../../components/ActionLink";
import { InputValidation } from "../../components/Text";

const Container = styled.View`
  flex: 1;
  background-color: ${props => props.theme.styled.BACKGROUND};
`;

const FormContainer = styled.View`
  margin: 32px 16px 16px 16px;
`;

const MUTATION_RESET_PASSWORD = gql`
  mutation($token: String!, $newPassword: String!) {
    changePassword(token: $token, newPassword: $newPassword) {
      message
      success
      errorCode
      data
    }
  }
`;

function ChangePassword({ theme, navigation }) {
  const [isLoading, setIsLoading] = useState(false);
  const [reset_password] = useMutation(MUTATION_RESET_PASSWORD);

  async function handleAuthForm(values) {
    setIsLoading(true);

    const password_match = values.password === values.confirm_password;
    !password_match && alert("Passwords don't match");

    if (password_match) {
      try {
        const { data } = await reset_password({
          variables: {
            token:
              "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiJjazFzb2VoNm4wMDBhMDc0OXFkNWJwbHB2IiwidmFsaWRVbnRpbCI6MjYsImlhdCI6MTU3MjE4ODc5MH0.1DuNmqxCbdco-3LAv29wHpr5JJJHYtJAP1cdgLuqk4g",
            newPassword: values.password
          }
        });

        if (data.changePassword.success) {
          alert("Password Changed succefully");
          navigation.navigate("Login");
        } else {
          alert(ERROR[data.forgotPassword.errorCode]);
        }
      } catch (error) {
        // Sentry Catch
      }
    }

    setIsLoading(false);
  }

  return (
    <Container>
      <ScrollView>
        <AuthHeader />

        <FormContainer>
          <Formik
            initialValues={{ password: "", confirm_password: "" }}
            onSubmit={values => handleAuthForm(values)}
            validationSchema={SIGNUP_SCHEMA}
          >
            {({ handleChange, handleSubmit, values, errors }) => (
              <View>
                <View>
                  <Input
                    onChangeText={handleChange("password")}
                    label="New password"
                    secureTextEntry={true}
                    returnKeyType="next"
                  />

                  <InputValidation style={{ marginBottom: 22 }} top={10}>
                    {errors.password}
                  </InputValidation>

                  <Input
                    onChangeText={handleChange("confirm_password")}
                    label="Confirm password"
                    secureTextEntry={true}
                    onSubmitEditing={() => {
                      Keyboard.dismiss();
                    }}
                    returnKeyType="done"
                  />
                </View>

                <Button
                  isLoading={isLoading}
                  disabled={
                    values.password === "" ||
                    values.confirm_password === "" ||
                    isLoading
                  }
                  action={handleSubmit}
                  text="RESET PASSWORD"
                  color={[theme.colors.PRIMARY, theme.colors.PRIMARY]}
                  style={{ marginTop: 16 }}
                  textColor="#fff"
                />

                <View
                  style={{
                    marginVertical: 16,
                    alignItems: "center",
                    width: "100%"
                  }}
                >
                  <ActionLink
                    text="SIGN IN"
                    to={() => navigation.navigate("Login")}
                  />

                  <Separator text="OR" />

                  <ActionLink
                    text="CREATE ACCOUNT"
                    to={() => navigation.navigate("Signup")}
                  />
                </View>
              </View>
            )}
          </Formik>
        </FormContainer>
      </ScrollView>
    </Container>
  );
}

ChangePassword.navigationOptions = { header: null, headerMode: "none" };
export default withTheme(ChangePassword);
