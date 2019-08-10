import React, { useState } from "react";
import { View } from "react-native";

import { Formik } from "formik";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

import { AuthHeader } from "../components/Auth/Header";
import { Title, ActionLink } from "../components/Text";
import { TextInput } from "../components/form/Input";
import { ViewFlex, Margin } from "../assets/styles/styles";
import { Button } from "../components/Button";
import { DropdownAlert } from "../components/alerts/DropdownAlert";
import { BottomAuth } from "../components/BottomAuth";

import GOOGLE_LOGO from "../assets/img/google.png";
import GITHUB_LOGO from "../assets/img/github.png";
import CLOSE from "../assets/img/close.png";

function Login(props) {
  const [isShowingAlert, setIsShowingAlert] = useState(false);
  const [user, setUSer] = useState("");

  function enterProfile(values) {
    props.navigation.navigate("Root");
  }

  return (
    <KeyboardAwareScrollView>
      <DropdownAlert
        image={CLOSE}
        isShowingAlert={isShowingAlert}
        setShowingAlert={() => setIsShowingAlert(false)}
        background="#ff5554"
        text={"Incorrect password for " + user + " please try again."}
      />

      <ViewFlex>
        <Margin top={-1}>
          <AuthHeader withThemeSwitch={true} />
        </Margin>

        <ViewFlex>
          <View paddingLeft="5%">
            <Title>Sign in</Title>
          </View>

          <View padding="5%">
            <Formik
              initialValues={{ user: "", password: "" }}
              onSubmit={values => enterProfile(values)}
            >
              {props => (
                <View>
                  <TextInput
                    onChangeText={props.handleChange("user")}
                    placeholder="Username, Email"
                    autoCapitalize="none"
                    onSubmitEditing={() => {
                      this.password.focus();
                    }}
                    returnKeyType="next"
                  />

                  <TextInput
                    onChangeText={props.handleChange("password")}
                    placeholder="Password"
                    secureTextEntry={true}
                    top={10}
                    ref={input => {
                      this.password = input;
                    }}
                    returnKeyType="done"
                  />

                  <Button
                    action={props.handleSubmit}
                    text="SIGN IN"
                    top={45}
                    disabled={
                      props.values.user == "" || props.values.password == ""
                    }
                    TextColor="white"
                    color={["#8075f7", "#59a9fb"]}
                  />
                </View>
              )}
            </Formik>

            <Margin top={10}>
              <ActionLink
                onPress={() => props.navigation.navigate("InputEmail")}
                size={14}
                color="#0091ff"
              >
                FORGOT PASSWORD?
              </ActionLink>
            </Margin>

            <BottomAuth
              action={() => props.navigation.navigate("Signup")}
              text="CREATE ACCOUNT"
              top={15}
            />

            <Button
              haveIcon={true}
              image={GOOGLE_LOGO}
              disabled={false}
              text="SIGN IN WITH GOOGLE"
              top={50}
              color={["white", "white"]}
              borderColor="#f4f4f4"
              TextColor="black"
            />

            <Button
              haveIcon={true}
              image={GITHUB_LOGO}
              disabled={false}
              text="SIGN IN WITH GITHUB"
              top={20}
              color={["#333333", "#333333"]}
              borderColor="#333333"
              TextColor="white"
            />
          </View>
        </ViewFlex>
      </ViewFlex>
    </KeyboardAwareScrollView>
  );
}

Login.navigationOptions = { header: null };
export default Login;
