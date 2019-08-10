import React from "react";
import { View } from "react-native";

import * as Yup from "yup";
import { Formik } from "formik";

import { AuthHeader } from "../../components/Auth/Header";
import { Title, InputValidation } from "../../components/Text";
import { TextInput } from "../../components/form/Input";
import { ViewFlex, Margin } from "../../assets/styles/styles";
import { Button } from "../../components/Button";
import { BottomAuth } from "../../components/BottomAuth";

const SignupSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email")
});

function InputEmail(props) {
  return (
    <ViewFlex>
      <Margin top={-1}>
        <AuthHeader />
      </Margin>

      <ViewFlex>
        <View paddingLeft="5%">
          <Title top={30}>Reset password</Title>
        </View>

        <View padding="5%">
          <Formik
            initialValues={{ email: "" }}
            onSubmit={values =>
              props.navigation.navigate("SendCode", { email: values.email })
            }
            validationSchema={SignupSchema}
          >
            {props => (
              <View>
                <TextInput
                  onChangeText={props.handleChange("email")}
                  placeholder="Email"
                  autoCapitalize="none"
                  top={5}
                />

                <InputValidation top={5}>{props.errors.email}</InputValidation>

                <Button
                  action={props.handleSubmit}
                  text="RESET PASSWORD"
                  top={20}
                  disabled={
                    props.errors.email == "Invalid email" ||
                    props.values.email == ""
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

InputEmail.navigationOptions = { header: null };
export default InputEmail;
