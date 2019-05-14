import React from "react";
import { View } from "react-native";

import { AuthHeader } from "../components/Auth/Header";
import { Title, ActionLink } from "../components/Text";
import { TextInput } from "../components/form/Input";
import { ViewFlex, Margin } from "../assets/styles/styles";
import { Formik } from "formik";
import { Button } from "../components/Button";
import { BottomAuth } from "../components/BottomAuth";
import Google_logo from "../assets/img/google.png";
import Github_logo from "../assets/img/github.png";

function Login(props) {
  return (
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
            onSubmit={values => console.log(values)}
          >
            {props => (
              <View>
                <TextInput
                  onChangeText={props.handleChange("user")}
                  placeholder="Username, Email"
                  autoCapitalize="none"
                />

                <TextInput
                  onChangeText={props.handleChange("password")}
                  placeholder="Password"
                  secureTextEntry={true}
                  top={10}
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
            <ActionLink onPress={() => alert()} size={14} color="#0091ff">
              FORGOT PASSWORD?
            </ActionLink>
          </Margin>

          <BottomAuth
            action={() => props.navigation.navigate("Register")}
            text="CREATE ACCOUNT"
            top={15}
          />

          <Button
            haveIcon={true}
            image={Google_logo}
            disabled={false}
            text="SIGN IN WITH GOOGLE"
            top={50}
            color={["white", "white"]}
            borderColor="#f4f4f4"
            TextColor="black"
          />

          <Button
            haveIcon={true}
            image={Github_logo}
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
  );
}

Login.navigationOptions = { header: null };
export default Login;
