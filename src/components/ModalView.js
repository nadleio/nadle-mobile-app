import React from "react";
import { ScrollView, Modal, ActivityIndicator } from "react-native";

import styled from "styled-components";

import { ViewFlex, Margin } from "../assets/styles/styles";
import { Images } from "../assets/styles/Image";
import { PaddingHorizontal } from "../assets/styles/styles";
import { TextInput } from "./Form/Input";

import CLOSE from "../assets/img/cancel.png";

export const CloseButton = styled.TouchableOpacity`
  margin-top: 60px;
  margin-bottom: 10px;
`;

export const Content = styled.View`
  padding: 5%;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: space-between;
`;

export function ModalView(props) {
  return (
    <ViewFlex>
      <Modal visible={props.show}>
        <PaddingHorizontal>
          <CloseButton onPress={() => props.hide(false)}>
            <Images height={20} width={20} source={CLOSE} />
          </CloseButton>
        </PaddingHorizontal>

        <ScrollView showsVerticalScrollIndicator={false}>
          {props.search && (
            <PaddingHorizontal>
              <TextInput
                onChangeText={text => props.changeText(text)}
                placeholder="Search Tenor"
                returnKeyType="search"
                onSubmitEditing={() => props.search()}
              />
            </PaddingHorizontal>
          )}

          {props.activity && (
            <Margin top={5}>
              <ActivityIndicator animating={props.loading} />
            </Margin>
          )}

          {props.content}
        </ScrollView>
      </Modal>
    </ViewFlex>
  );
}

ModalView.navigationOptions = { header: null };
