import React, { useState, useCallback } from "react";
import styled, { withTheme } from "styled-components";
import { Keyboard, ScrollView, View } from "react-native";
import { useMutation } from "@apollo/react-hooks";
import gql from "graphql-tag";
import { Formik } from "formik";

import { SIGNUP_SCHEMA } from "../../lib/form/authValidations";

import ERROR from "../../nadle-i18/errors";

import AuthHeader from "../../components/Auth/Header";
import Separator from "../../components/Separator";
import Button from "../../components/Button";
import Input from "../../components/Form/Input";
import ActionLink from "../../components/ActionLink";
import { InputValidation } from "../../components/Text";

const Container = styled.View`
  flex: 1;
  background-color: ${props => props.theme.styled.BACKGROUND};
`;

const Title = styled.Text`
  color: ${props => props.theme.styled.TITLE};
  font-size: ${props => props.theme.fontSize.TITLE};
  font-weight: 600;
  text-align: left;
  margin-bottom: 8px;
`;

const Layout = styled.View`
  margin: 32px 16px;
`;

const FormContainer = styled.View`
  margin: 0 16px 16px 16px;
`;

const MUTATION_SIGNUP = gql`
  mutation($email: String!, $username: String!, $password: String!) {
    signup(email: $email, username: $username, password: $password) {
      message
      success
      errorCode
    }
  }
`;

function Signup({ theme, navigation }) {
  const [signup] = useMutation(MUTATION_SIGNUP);

  const [isLoading, setIsLoading] = useState(false);

  const handleAuthForm = useCallback(
    async values => {
      setIsLoading(true);
      try {
        const { data } = await signup({
          variables: {
            email: values.email,
            username: values.username,
            password: values.password
          }
        });

        if (data.signup.success) {
          alert("Please check your email to confirm your account");
          navigation.navigate("Login");
        } else {
          alert(ERROR[data.signup.errorCode]);
        }
      } catch (error) {
        // Sentry Catch
      }
      setIsLoading(false);
    },
    [signup]
  );

  return (
    <Container>
      <ScrollView>
        <AuthHeader />

        <Layout>
          <Title>Sign Up</Title>
        </Layout>

        <FormContainer>
          <Formik
            initialValues={{ username: "", email: "", password: "" }}
            onSubmit={handleAuthForm}
            validationSchema={SIGNUP_SCHEMA}
          >
            {({ handleChange, handleSubmit, values, errors }) => (
              <View>
                <Input
                  onChangeText={handleChange("username")}
                  label="Username"
                  autoCapitalize="none"
                  returnKeyType="next"
                  spellCheck={false}
                />

                <InputValidation style={{ marginBottom: 22 }} top={10}>
                  {errors.username}
                </InputValidation>

                <Input
                  onChangeText={handleChange("email")}
                  label="Email"
                  autoCapitalize="none"
                  returnKeyType="next"
                  spellCheck={false}
                />

                <InputValidation style={{ marginBottom: 22 }} top={10}>
                  {errors.email}
                </InputValidation>

                <Input
                  onChangeText={handleChange("password")}
                  label="Password"
                  secureTextEntry={true}
                  onSubmitEditing={() => {
                    Keyboard.dismiss();
                  }}
                  returnKeyType="next"
                />

                <InputValidation style={{ marginBottom: 22 }} top={10}>
                  {errors.password}
                </InputValidation>

                <Button
                  disabled={
                    isLoading ||
                    values.username === "" ||
                    values.email === "" ||
                    values.password === ""
                  }
                  action={handleSubmit}
                  text="SIGN UP"
                  isLoading={isLoading}
                  color={[theme.colors.PRIMARY, theme.colors.PRIMARY]}
                  style={{ marginTop: 16 }}
                  textColor="#fff"
                />

                <View
                  style={{
                    alignItems: "center",
                    width: "100%"
                  }}
                >
                  <Separator text="OR" />

                  <ActionLink
                    text="SIGN IN WITH MY ACCOUNT"
                    to={() => navigation.navigate("Login")}
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

Signup.navigationOptions = { header: null, headerMode: "none" };
export default withTheme(Signup);
