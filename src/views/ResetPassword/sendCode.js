import React, { useState } from "react";
import { View, Keyboard } from "react-native";

import { Formik } from "formik";
import styled from "styled-components";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

import { AuthHeader } from "../../components/Auth/Header";
import { Title, Information, ActionLink } from "../../components/Text";
import { TextInput } from "../../components/form/Input";
import { Button } from "../../components/Button";
import { BottomAuth } from "../../components/BottomAuth";
import { ViewFlex, Margin } from "../../assets/styles/styles";
import TimerCount from "../../lib/utils/TimerCount";

export const DidntReceive = styled.View`
  margin-top: 11.5;
  margin-left: 14.5%;
  position: absolute;
`;

export const FlexInput = styled.View`
  flex-direction: row;
  justify-content: space-between;
  padding-left: 5%;
  padding-right: 5%;
  margin-top: 2;
`;

function SendCode(props) {
  const [timer, setTimer] = useState({
    time: 2000 * 60,
    complete: false
  });

  const [editable, setEditable] = useState(true);

  const expirationText = timer.complete
    ? { text: "GENERATE NEW CODE", function: () => generateNewCode() }
    : { text: "DIDN'T RECEIVE THE CODE?", function: () => alert("klk") };

  function generateNewCode() {
    setEditable(true);
    setTimer({
      time: 2000 * 60,
      complete: false
    });
  }

  function resetPassword(values) {
    props.navigation.navigate("ResetPassword");
  }

  return (
    <ViewFlex>
      <Margin top={-1}>
        <AuthHeader />
      </Margin>

      <KeyboardAwareScrollView extraScrollHeight={30}>
        <ViewFlex>
          <View paddingHorizontal="5%">
            <Title top={30}>Reset password</Title>
            <Information color="#7f7f7f" top={10}>
              We sended a validation code to{" "}
              {props.navigation.state.params.email} please enter to your email
              and check it out.
            </Information>

            <Information weight={600} color="#7f7f7f" top={20}>
              Code expires in:
            </Information>

            <View flexDirection="row">
              <Information weight={600} size={16} top={10}>
                <TimerCount
                  timer={timer.time}
                  complete={() => setTimer({ time: 0, complete: true })}
                />
              </Information>

              <DidntReceive>
                <ActionLink
                  onPress={() => expirationText.function()}
                  size={14}
                  color="#0091ff"
                >
                  {expirationText.text}
                </ActionLink>
              </DidntReceive>
            </View>
          </View>

          <View padding="5%">
            <Formik
              initialValues={{
                first: 0,
                second: 0,
                third: 0,
                quater: 0,
                fifth: 0,
                sixth: 0
              }}
              onSubmit={values => resetPassword(values)}
            >
              {props => {
                function change(type, text) {
                  props.setFieldValue(type, text);
                }

                if (timer.complete) {
                  setEditable(false);
                  props.values.first = "";
                  props.values.second = "";
                  props.values.third = "";
                  props.values.quater = "";
                  props.values.fifth = "";
                  props.values.sixth = "";
                }

                return (
                  <View>
                    <FlexInput>
                      <TextInput
                        onChangeText={text => {
                          change(
                            "first",
                            text,
                            text != "" && this.secondTextInput.focus()
                          );
                        }}
                        autoCapitalize="none"
                        width="10%"
                        maxLength={1}
                        align="center"
                        keyboardType="numeric"
                        returnKeyType="done"
                        value={props.values.first}
                        editable={editable}
                      />

                      <TextInput
                        onChangeText={text =>
                          change(
                            "second",
                            text,
                            text != "" && this.thirdTextInput.focus()
                          )
                        }
                        autoCapitalize="none"
                        width="10%"
                        maxLength={1}
                        align="center"
                        ref={input => {
                          this.secondTextInput = input;
                        }}
                        keyboardType="numeric"
                        returnKeyType="done"
                        value={props.values.second}
                        editable={editable}
                      />

                      <TextInput
                        onChangeText={text =>
                          change(
                            "third",
                            text,
                            text != "" && this.quarterTextInput.focus()
                          )
                        }
                        autoCapitalize="none"
                        width="10%"
                        maxLength={1}
                        align="center"
                        ref={input => {
                          this.thirdTextInput = input;
                        }}
                        keyboardType="numeric"
                        returnKeyType="done"
                        value={props.values.third}
                        editable={editable}
                      />

                      <TextInput
                        onChangeText={text =>
                          change(
                            "quater",
                            text,
                            text != "" && this.fifthTextInput.focus()
                          )
                        }
                        autoCapitalize="none"
                        width="10%"
                        maxLength={1}
                        align="center"
                        ref={input => {
                          this.quarterTextInput = input;
                        }}
                        keyboardType="numeric"
                        returnKeyType="done"
                        value={props.values.quater}
                        editable={editable}
                      />

                      <TextInput
                        onChangeText={text =>
                          change(
                            "fifth",
                            text,
                            text != "" && this.sixthTextInput.focus()
                          )
                        }
                        autoCapitalize="none"
                        width="10%"
                        maxLength={1}
                        align="center"
                        ref={input => {
                          this.fifthTextInput = input;
                        }}
                        keyboardType="numeric"
                        returnKeyType="done"
                        value={props.values.fifth}
                        editable={editable}
                      />

                      <TextInput
                        onChangeText={text =>
                          change("sixth", text, Keyboard.dismiss())
                        }
                        autoCapitalize="none"
                        width="10%"
                        maxLength={1}
                        align="center"
                        ref={input => {
                          this.sixthTextInput = input;
                        }}
                        keyboardType="numeric"
                        returnKeyType="done"
                        value={props.values.sixth}
                        editable={editable}
                      />
                    </FlexInput>

                    <Button
                      action={props.handleSubmit}
                      text="GET NEW PASSWORD"
                      top={20}
                      disabled={
                        timer.complete == true ||
                        props.values.first == 0 ||
                        props.values.second == 0 ||
                        props.values.third == 0 ||
                        props.values.quater == 0 ||
                        props.values.fifth == 0 ||
                        props.values.sixth == 0
                      }
                      TextColor="white"
                      color={["#8075f7", "#59a9fb"]}
                    />
                  </View>
                );
              }}
            </Formik>

            <BottomAuth
              action={() => props.navigation.navigate("Login")}
              top={10}
              text="SIGN IN WITH MY ACCOUNT"
            />
          </View>
        </ViewFlex>
      </KeyboardAwareScrollView>
    </ViewFlex>
  );
}

SendCode.navigationOptions = { header: null };
export default SendCode;
