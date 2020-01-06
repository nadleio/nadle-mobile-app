import React, { useContext } from "react";
import { Modal, ScrollView, View, Keyboard } from "react-native";
import styled, { withTheme } from "styled-components";
import { Formik } from "formik";

import { Label, Title } from "../Text";
import Input from "../Form/Input";
import Header from "../Modal/Header";

import ContextSelf from "../../lib/ContextSelf";

const ModalContainer = styled.View`
  flex: 1;
  background-color: ${props => props.theme.styled.BACKGROUND};
`;

function ChangeEmail({ close, self }) {
  const { updateSelf } = useContext(ContextSelf);

  return (
    <Modal animationType="slide" visible={true}>
      <Formik
        initialValues={self}
        onSubmit={values => updateSelf(values)}
        enableReinitialize
      >
        {({ handleChange, handleSubmit, values }) => (
          <ModalContainer>
            <Header
              rightButton
              onRightButtonPress={handleSubmit}
              close={() => close()}
            />

            <View style={{ margin: 16 }}>
              <ScrollView>
                <Title size="24px">Update your email</Title>

                <Label style={{ marginTop: 8 }}>
                  Enter your password And we will send you a confirmation email.
                </Label>

                <View style={{ marginTop: 32 }}>
                  <Input
                    onChangeText={handleChange("email")}
                    label="Email"
                    placeholder="Insert your email"
                    value={values.email}
                    autoCapitalize="none"
                    returnKeyType="next"
                    spellCheck={false}
                    style={{ marginBottom: 32 }}
                    onSubmitEditing={() => {
                      this.password.focus();
                    }}
                  />

                  <Input
                    onChangeText={handleChange("password")}
                    label="Password"
                    placeholder="Insert your password"
                    secureTextEntry={true}
                    returnKeyType="next"
                    onSubmitEditing={() => {
                      Keyboard.dismiss();
                    }}
                    ref={input => {
                      this.password = input;
                    }}
                  />
                </View>
              </ScrollView>
            </View>
          </ModalContainer>
        )}
      </Formik>
    </Modal>
  );
}

export default withTheme(ChangeEmail);
