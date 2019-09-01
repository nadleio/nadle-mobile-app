import React, { useState } from "react";
import styled, { withTheme } from "styled-components";
import { Keyboard, ScrollView, Text, View } from "react-native";
import { Formik } from "formik";

import AuthHeader from "../../components/Auth/Header";

import { LOGIN_SCHEMA } from "../../lib/form/authValidations";
import useTimer from "../../lib/utils/useTimer";

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

const Message = styled.Text`
  color: ${props => props.theme.styled.CONTENT};
  font-size: ${props => props.theme.fontSize.SMALL};
  margin-top: 8px;
`;

const Expiration = styled.View`
  margin-top: 32px;
`;

const TimerLabel = styled.Text`
  font-size: ${props => props.theme.fontSize.TITLE};
  font-weight: 600;
  width: 48px;
`;

const Layout = styled.View`
  margin: 32px 16px;
`;

const FormContainer = styled.View`
  margin: 0 16px 16px 16px;
`;

function ResetPassword({ theme, navigation }) {
  const [tokenSent, setTokenSent] = useState(false);
  const [verifiedToken, setVerifiedToken] = useState(false);
  const timer = useTimer(120);

  const timerAction = timer.completed
    ? { label: "GENERATE NEW CODE", action: () => timer.restart() }
    : { label: "DIDN'T RECEIVE THE CODE?", action: () => timer.restart() };

  const sendToken = () => {
    if (!tokenSent) setTokenSent(true);
    timer.restart();
  };

  const verifyToken = () => {
    setVerifiedToken(true);
  };

  const handleAuthForm = () => {
    // Something here...
  };

  return (
    <Container>
      <ScrollView>
        <AuthHeader />

        <Layout>
          <Title>Reset password</Title>
          {tokenSent && !verifiedToken && (
            <React.Fragment>
              <Message>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </Message>

              <Expiration>
                <Text
                  style={{
                    color: theme.styled.CONTENT,
                    fontSize: theme.fontSize.BODY,
                    fontWeight: 600,
                    marginBottom: 8
                  }}
                >
                  Code expires in:
                </Text>
                <View style={{ flexDirection: "row", alignItems: "flex-end" }}>
                  <TimerLabel>{timer.timeLeft}</TimerLabel>
                  <ActionLink
                    text={timerAction.label}
                    to={timerAction.action}
                  />
                </View>
              </Expiration>
            </React.Fragment>
          )}
        </Layout>

        <FormContainer>
          <Formik
            initialValues={{ authName: "", password: "" }}
            onSubmit={values => handleAuthForm(values)}
            validationSchema={LOGIN_SCHEMA}
          >
            {({ handleChange, handleSubmit }) => (
              <View>
                {!tokenSent && (
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
                    style={{ marginBottom: 32 }}
                  />
                )}

                {tokenSent && !verifiedToken && (
                  <Input
                    onChangeText={handleChange("token")}
                    label="Enter the code"
                    autoCapitalize="none"
                    maxLength={6}
                    ref={input => {
                      this.token = input;
                    }}
                    onSubmitEditing={() => {
                      Keyboard.dismiss();
                    }}
                    returnKeyType="next"
                    spellCheck={false}
                    style={{ marginBottom: 32, letterSpacing: 8 }}
                  />
                )}

                {tokenSent && verifiedToken && (
                  <React.Fragment>
                    <Input
                      onChangeText={handleChange("password")}
                      label="Password"
                      autoCapitalize="none"
                      secureTextEntry={true}
                      ref={input => {
                        this.password = input;
                      }}
                      onSubmitEditing={() => {
                        this.confirmPassword.focus();
                      }}
                      returnKeyType="next"
                      spellCheck={false}
                      style={{ marginBottom: 32 }}
                    />
                    <Input
                      onChangeText={handleChange("confirmPassword")}
                      label="Confirm password"
                      secureTextEntry={true}
                      ref={input => {
                        this.confirmPassword = input;
                      }}
                      onSubmitEditing={() => {
                        Keyboard.dismiss();
                      }}
                      returnKeyType="next"
                      style={{ marginBottom: 32 }}
                    />
                  </React.Fragment>
                )}

                <Button
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
                  <ActionLink text="SIGN IN" to={() => {}} />

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
