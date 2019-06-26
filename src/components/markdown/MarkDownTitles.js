import React from "react";
import { View } from "react-native";

import styled from "styled-components";
import { ViewFlex } from "../../assets/styles/styles";

import { Information } from "../Text";
import { ModalOptions } from "../ModalOptions";

export const ButtonContent = styled.TouchableOpacity`
  border-top-width: 1;
  border-top-color: #f4f4f4;
  padding-top: 10;
  padding-bottom: 10;
`;

export function MarkDownTitles(props) {
  return (
    <ViewFlex>
      <ModalOptions
        alert={props.alert}
        text="title"
        close={() => props.close()}
        align="center"
        content={
          <View>
            <ButtonContent onPress={() => props.action("H1")}>
              <Information align="center" size={16}>
                H1
              </Information>
            </ButtonContent>

            <ButtonContent onPress={() => props.action("H2")}>
              <Information align="center" size={16}>
                H2
              </Information>
            </ButtonContent>

            <ButtonContent onPress={() => props.action("H3")}>
              <Information align="center" size={16}>
                H3
              </Information>
            </ButtonContent>
          </View>
        }
      />
    </ViewFlex>
  );
}

MarkDownTitles.navigationOptions = { header: null };
