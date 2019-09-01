import React from "react";
import styled, { withTheme } from "styled-components";
import { Keyboard, ScrollView, View } from "react-native";
import { Formik } from "formik";

import AuthHeader from "../../components/Auth/Header";
import GithubAuth from "../../components/Auth/GithubAuth";
import GoogleAuth from "../../components/Auth/GoogleAuth";

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

function Login({ theme, navigation }) {
  const handleAuthForm = () => {
    // Something here...
  };

  return (
    <Container>
      <ScrollView>
        <AuthHeader />

        <Layout>
          <Title>Sign In</Title>
        </Layout>

        <FormContainer>
          <Formik
            initialValues={{ authName: "", password: "" }}
            onSubmit={values => handleAuthForm(values)}
            validationSchema={LOGIN_SCHEMA}
          >
            {({ handleChange, handleSubmit }) => (
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
                  style={{ marginBottom: 32 }}
                />

                <Button
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
                  <ActionLink text="FORGOT PASSWORD?" to={() => {}} />

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

Login.navigationOptions = { header: null, headerMode: "none" };
export default withTheme(Login);
