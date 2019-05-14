import React from "react";
import { View } from "react-native";

import { AuthHeader } from "../components/Auth/Header";
import { Title, InputValidation } from "../components/Text";
import { TextInput } from "../components/form/Input";
import { ViewFlex, Margin } from "../assets/styles/styles";
import { Formik } from "formik";
import { Button } from "../components/Button";
import { BottomAuth } from "../components/BottomAuth";
import * as Yup from "yup";

const SignupSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email"),
  password: Yup.string().min(8, "Minimum 8 characters"),
  username: Yup.string().min(3, "Minimum 3 characters")
});

function Register(props) {
  return (
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
            onSubmit={values => console.log(values)}
            validationSchema={SignupSchema}
          >
            {props => (
              <View>
                <TextInput
                  onChangeText={props.handleChange("complete_name")}
                  placeholder="Complete name"
                />

                <TextInput
                  onChangeText={props.handleChange("username")}
                  placeholder="Username"
                  top={10}
                  autoCapitalize="none"
                />

                <InputValidation top={10}>
                  {props.errors.username}
                </InputValidation>

                <TextInput
                  onChangeText={props.handleChange("email")}
                  placeholder="Email"
                  autoCapitalize="none"
                  top={5}
                />

                <InputValidation top={5}>{props.errors.email}</InputValidation>

                <TextInput
                  onChangeText={props.handleChange("password")}
                  placeholder="Password"
                  secureTextEntry={true}
                  top={5}
                />

                <InputValidation top={5}>
                  {props.errors.password}
                </InputValidation>

                <TextInput
                  onChangeText={props.handleChange("confirm_password")}
                  placeholder="Confirm password"
                  secureTextEntry={true}
                  top={5}
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
  );
}

Register.navigationOptions = { header: null };
export default Register;
