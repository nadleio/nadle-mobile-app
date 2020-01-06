import React, { useState } from "react";
import { Keyboard, View } from "react-native";
import styled, { withTheme } from "styled-components";
import { Formik } from "formik";

import Input from "../../components/Form/Input";
import { Label } from "../Text";
import Dialog from "../Modal/Dialog";
import Button from "../../components/Button";

const Container = styled.View`
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
  width: 100%;
  padding: 0 22% 0 22%;
`;

function SetTable({ close, theme, action }) {
  const [animation, setAnimation] = useState("fadeInUpBig");

  function closeModal() {
    setAnimation("fadeOutDownBig");
    setTimeout(function() {
      close();
    }, 350);
  }

  function insertValue(values) {
    setAnimation("fadeOutDownBig");
    setTimeout(function() {
      action(values.row, values.coloumn);
      close();
    }, 350);
  }

  return (
    <Dialog
      animation={animation}
      text="insert your table size"
      close={() => closeModal()}
    >
      <Formik
        initialValues={{ row: "", coloumn: "" }}
        onSubmit={values => insertValue(values)}
      >
        {({ handleChange, handleSubmit, values }) => (
          <View>
            <Container>
              <View style={{ width: "15%" }}>
                <Input
                  onChangeText={handleChange("row")}
                  placeholder="R"
                  onSubmitEditing={() => this.column.focus()}
                  maxLength={2}
                  keyboardType="numeric"
                  style={{ textAlign: "center" }}
                />
              </View>

              <Label color={props => props.theme.styled.TITLE} size={20}>
                x
              </Label>

              <View style={{ width: "15%" }}>
                <Input
                  onChangeText={handleChange("coloumn")}
                  placeholder="C"
                  onSubmitEditing={() => Keyboard.dismiss()}
                  maxLength={2}
                  keyboardType="numeric"
                  ref={input => {
                    this.column = input;
                  }}
                  style={{ textAlign: "center" }}
                />
              </View>
            </Container>

            <Button
              disabled={values.row === "" || values.coloumn === ""}
              action={handleSubmit}
              text="INSERT"
              color={[theme.colors.PRIMARY, theme.colors.PRIMARY]}
              style={{ marginTop: 20 }}
              textColor="#fff"
            />
          </View>
        )}
      </Formik>
    </Dialog>
  );
}

export default withTheme(SetTable);
SetTable.navigationOptions = { header: null };
