import React, { useState } from "react";
import { Modal, View, KeyboardAvoidingView, Platform } from "react-native";

import styled from "styled-components";

import { Information } from "../Text";
import { TextInput } from "../Form/Input";
import { ActionLink } from "../Text";

export const ModalContent = styled.View`
  flex: 1;
  background-color: rgba(0, 0, 0, 0.3);
  justify-content: flex-end;
  padding-left: 5%;
  padding-right: 5%;
  padding-bottom: 5%;
`;

export const AlertBox = styled.View`
  padding: 5%;
  background-color: white;
  border-top-left-radius: 8;
  border-top-right-radius: 8;
  width: 100%;
`;

export const CenterContent = styled.View`
  align-items: center;
`;

export const Row = styled.View`
  flex-direction: row;
  width: 100%;
  background-color: white;
  border-bottom-left-radius: 8;
  border-bottom-right-radius: 8;
`;

export const ButtonContent = styled.View`
  width: 50%;
`;

const TouchableOpacity = styled.TouchableOpacity`
  height: 48px;
  width: 100%;
  background-color: ${props => props.color || "white"};
  margin-top: 20;
  justify-content: center;
  border-top-color: #f4f4f4;
  border-top-width: 2;
  border-bottom-left-radius: ${props => props.left || 8};
  border-bottom-right-radius: ${props => props.right || 8};
`;

export function Alert(props) {
  const [messagge, setMessagge] = useState("");
  const [link, setLink] = useState("");

  const disabled = messagge == "" || link == "";
  return (
    <Modal transparent={true} visible={props.isShowingAlert}>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === "ios" && "padding"}
      >
        <ModalContent>
          <AlertBox>
            <View>
              <Information top={15} size={16}>
                Title
              </Information>
              <TextInput
                onChangeText={text => setMessagge(text)}
                placeholder="Write the title here"
                top={5}
                onSubmitEditing={() => {
                  this.link.focus();
                }}
                returnKeyType="next"
              />
            </View>

            <View>
              <Information top={20} size={16}>
                Link
              </Information>
              <TextInput
                onChangeText={text => setLink(text)}
                placeholder="Write the link here"
                top={5}
                ref={input => {
                  this.link = input;
                }}
                returnKeyType="done"
              />
            </View>
          </AlertBox>

          <Row>
            <ButtonContent>
              <TouchableOpacity
                left={8}
                right="0"
                onPress={() => props.close()}
              >
                <ActionLink size={15} color="grey">
                  Cancel
                </ActionLink>
              </TouchableOpacity>
            </ButtonContent>

            <ButtonContent>
              <TouchableOpacity
                disabled={disabled}
                left="0"
                right={8}
                color={disabled ? "#bfbfbf" : "#833fff"}
                onPress={() => {
                  props.action(messagge, link), setMessagge(""), setLink("");
                }}
              >
                <ActionLink size={15} color="white">
                  Set link
                </ActionLink>
              </TouchableOpacity>
            </ButtonContent>
          </Row>
        </ModalContent>
      </KeyboardAvoidingView>
    </Modal>
  );
}

Alert.navigationOptions = { header: null };
