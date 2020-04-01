/* eslint-disable no-console */
/* eslint-disable no-useless-escape */
import React, { useContext, useState, useEffect } from "react";
import AsyncStorage from "@react-native-community/async-storage";
import styled, { withTheme } from "styled-components";
import { Keyboard, ScrollView, View, Linking, Platform } from "react-native";
import { Formik } from "formik";
import { useMutation } from "@apollo/react-hooks";
import gql from "graphql-tag";

import ContextAuth from "../../lib/ContextAuth";
import ContextSelf from "../../lib/ContextSelf";

import AuthHeader from "../../components/Auth/Header";
import GithubAuth from "../../components/Auth/GithubAuth";
import GoogleAuth from "../../components/Auth/GoogleAuth";

import Separator from "../../components/Separator";
import Button from "../../components/Button";
import Input from "../../components/Form/Input";
import ActionLink from "../../components/ActionLink";
import { InputValidation } from "../../components/Text";

import { userInformation } from "../../Fragments/userInfo";

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

const MUTATION_SIGNIN = gql`
  mutation($identifier: String!, $password: String!) {
    login(identifier: $identifier, password: $password) {
      message
      success
      errorCode
      data {
        token
        user {
          ...UserInformation
        }
      }
    }
  }
  ${userInformation}
`;

function Login({ theme, navigation }) {
  const { setLogged } = useContext(ContextAuth);
  const { updateSelf } = useContext(ContextSelf);

  const [isLoading, setIsLoading] = useState(false);
  const [authSuccess, setAuthSucess] = useState(false);

  const [signin] = useMutation(MUTATION_SIGNIN);

  useEffect(() => {
    if (Platform.OS === "android") {
      Linking.getInitialURL().then(url => {
        navigate(url);
      });
    } else {
      Linking.addEventListener("url", handleOpenURL);
    }
  }, []);

  function handleOpenURL(event) {
    navigate(event.url);
  }

  function navigate(url) {
    const { navigate } = navigation;
    const route = url.replace(/.*?:\/\//g, "");
    const token = route.match(/\/([^\/]+)\/?$/)[1];

    if (route === "account.nadle.io/change_password") {
      navigate("ChangePassword", { token: token });
    }
  }

  async function handleAuthForm(values) {
    setIsLoading(true);

    try {
      const { data } = await signin({
        variables: {
          identifier: values.auth,
          password: values.password
        }
      });

      const user = data.login.data.user;

      if (data.login.success) {
        console.log(user);
        updateSelf(user);

        await AsyncStorage.setItem("authToken", data.login.data.token);
        setLogged(true);
      } else {
        setAuthSucess(true);
      }
    } catch (error) {
      console.log(error);
      // Sentry Catch
    }
    setIsLoading(false);
  }

  return (
    <Container>
      <ScrollView>
        <AuthHeader />

        <Layout>
          <Title>Sign In</Title>
        </Layout>

        <FormContainer>
          <Formik
            initialValues={{ auth: "", password: "" }}
            onSubmit={values => handleAuthForm(values)}
          >
            {({ handleChange, handleSubmit, values }) => (
              <View>
                <Input
                  onChangeText={handleChange("auth")}
                  label="Username or Email"
                  autoCapitalize="none"
                  ref={input => {
                    this.authName = input;
                  }}
                  onSubmitEditing={() => {
                    this.password.focus();
                  }}
                  returnKeyType="next"
                  spellCheck={false}
                  style={{ marginBottom: 32 }}
                />

                <Input
                  onChangeText={handleChange("password")}
                  label="Password"
                  secureTextEntry={true}
                  ref={input => {
                    this.password = input;
                  }}
                  onSubmitEditing={() => {
                    Keyboard.dismiss();
                  }}
                  returnKeyType="next"
                />

                {authSuccess && (
                  <InputValidation style={{ marginBottom: 22 }} top={10}>
                    Your username/email or password incorrect
                  </InputValidation>
                )}

                <Button
                  isLoading={isLoading}
                  disabled={
                    values.auth === "" || values.password === "" || isLoading
                  }
                  action={handleSubmit}
                  text="SIGN IN"
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
                    text="FORGOT PASSWORD?"
                    to={() => navigation.navigate("ResetPassword")}
                  />

                  <Separator text="OR" />

                  <ActionLink
                    text="CREATE ACCOUNT"
                    to={() => navigation.navigate("Signup")}
                  />
                </View>

                <GithubAuth style={{ marginBottom: 16 }} />
                <GoogleAuth />
              </View>
            )}
          </Formik>
        </FormContainer>
      </ScrollView>
    </Container>
  );
}

export default withTheme(Login);
