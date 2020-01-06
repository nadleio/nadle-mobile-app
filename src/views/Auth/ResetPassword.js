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

const MUTATION_SEND_EMAIL = gql`
  mutation($email: String!) {
    forgotPassword(email: $email) {
      message
      success
      errorCode
    }
  }
`;

function ResetPassword({ theme, navigation }) {
  const [isLoading, setIsLoading] = useState(false);
  const [send_email] = useMutation(MUTATION_SEND_EMAIL);

  async function handleAuthForm(values) {
    setIsLoading(true);

    try {
      const { data } = await send_email({
        variables: {
          email: values.email
        }
      });

      if (data.forgotPassword.success) {
        alert("Please check your email");
        navigation.navigate("Login");
      } else {
        alert(ERROR[data.forgotPassword.errorCode]);
      }
    } catch (error) {
      // Sentry Catch
    }
    setIsLoading(false);
  }

  return (
    <Container>
      <ScrollView>
        <AuthHeader />

        <FormContainer>
          <Formik
            initialValues={{ email: "" }}
            onSubmit={values => handleAuthForm(values)}
            validationSchema={SIGNUP_SCHEMA}
          >
            {({ handleChange, handleSubmit, values, errors }) => (
              <View>
                <View>
                  <Input
                    onChangeText={handleChange("email")}
                    label="Email"
                    autoCapitalize="none"
                    ref={input => {
                      this.email = input;
                    }}
                    onSubmitEditing={() => {
                      Keyboard.dismiss();
                    }}
                    returnKeyType="next"
                    spellCheck={false}
                  />

                  <InputValidation style={{ marginBottom: 22 }} top={10}>
                    {errors.email}
                  </InputValidation>
                </View>

                <Button
                  isLoading={isLoading}
                  disabled={values.email === "" || isLoading}
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

ResetPassword.navigationOptions = { header: null, headerMode: "none" };
export default withTheme(ResetPassword);
