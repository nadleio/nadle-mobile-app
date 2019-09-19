import React, { useState, useContext, useCallback } from "react";
import AsyncStorage from "@react-native-community/async-storage";
import styled, { withTheme } from "styled-components";
import { Keyboard, ScrollView, View } from "react-native";
import { useMutation } from "@apollo/react-hooks";
import gql from "graphql-tag";
import { Formik } from "formik";

import ContextAuth from "../../lib/ContextAuth";

import AuthHeader from "../../components/Auth/Header";

import { LOGIN_SCHEMA } from "../../lib/form/authValidations";

import Separator from "../../components/Separator";
import Button from "../../components/Button";
import Input from "../../components/Form/Input";
import ActionLink from "../../components/ActionLink";

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
  mutation(
    $firstName: String!
    $lastName: String!
    $email: String!
    $password: String!
  ) {
    signup(
      firstName: $firstName
      lastName: $lastName
      email: $email
      password: $password
    ) {
      success
    }
  }
`;

function Signup({ theme, navigation }) {
  const { setLogged } = useContext(ContextAuth);
  const [signup] = useMutation(MUTATION_SIGNUP);

  const [isLoading, setIsLoading] = useState(false);

  const handleAuthForm = useCallback(
    async values => {
      setIsLoading(true);
      try {
        const { data } = await signup({
          variables: {
            firstName: "John",
            lastName: "Doe",
            email: values.email,
            password: values.password
          }
        });

        if (data.signup.success) {
          setLogged(true);
          await AsyncStorage.setItem("authToken", "I like to save it.");
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
            validationSchema={LOGIN_SCHEMA}
          >
            {({ handleChange, handleSubmit }) => (
              <View>
                <Input
                  onChangeText={handleChange("username")}
                  label="Username"
                  autoCapitalize="none"
                  returnKeyType="next"
                  spellCheck={false}
                  style={{ marginBottom: 32 }}
                />

                <Input
                  onChangeText={handleChange("email")}
                  label="Email"
                  autoCapitalize="none"
                  returnKeyType="next"
                  spellCheck={false}
                  style={{ marginBottom: 32 }}
                />

                <Input
                  onChangeText={handleChange("password")}
                  label="Password"
                  secureTextEntry={true}
                  onSubmitEditing={() => {
                    Keyboard.dismiss();
                  }}
                  returnKeyType="next"
                  style={{ marginBottom: 32 }}
                />

                <Button
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
