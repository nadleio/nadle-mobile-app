import React from "react";
import { Modal, KeyboardAvoidingView, Platform } from "react-native";

import styled from "styled-components";
import { Images } from "../assets/styles/Image";
import { Information } from "./Text";

import CLOSE from "../assets/img/cancel.png";

export const ModalContent = styled.View`
  flex: 1;
  background-color: rgba(0, 0, 0, 0.3);
  justify-content: ${props => props.align || "center"};
  padding-left: 5%;
  padding-right: 5%;
  padding-bottom: 5%;
`;

export const AlertBox = styled.View`
  padding: 5%;
  background-color: white;
  border-radius: 8;
  width: 100%;
`;

export const CenterContent = styled.View`
  align-items: center;
`;

export const Row = styled.View`
  flex-direction: row;
`;

export const IconContent = styled.TouchableOpacity`
  margin-top: 6;
  margin-left: 65%;
  position: absolute;
`;

export function ModalOptions(props) {
  return (
    <Modal transparent={true} visible={props.alert}>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === "ios" && "padding"}
      >
        <ModalContent align={props.align}>
          <AlertBox>
            <CenterContent>
              <Row>
                <Information bottom={20} size={20}>
                  Select {props.text} size
                </Information>

                <IconContent onPress={() => props.close()}>
                  <Images height={15} width={15} source={CLOSE} />
                </IconContent>
              </Row>

              {props.messagge && (
                <Information bottom={20} size={16}>
                  {props.messagge}
                </Information>
              )}
            </CenterContent>

            {props.content}
          </AlertBox>
        </ModalContent>
      </KeyboardAvoidingView>
    </Modal>
  );
}

ModalOptions.navigationOptions = { header: null };
