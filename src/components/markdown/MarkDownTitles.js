import React, { useState } from "react";
import styled from "styled-components";

import { Label } from "../Text";
import Dialog from "../Modal/Dialog";
import { TouchableOpacity } from "react-native";

const ButtonContent = styled.TouchableOpacity`
  padding-top: 10;
  padding-bottom: 10;
`;

const Border = styled.View`
  border-top-width: 1;
  border-bottom-width: 1;
  border-color: #f4f4f4;
  padding-top: 10;
  padding-bottom: 10;
`;

function MarkDownTitles({ close, action }) {
  const [animation, setAnimation] = useState("fadeInUpBig");

  function closeModal() {
    setAnimation("fadeOutDownBig");
    setTimeout(function() {
      close();
    }, 350);
  }

  function insertValue(sign) {
    setAnimation("fadeOutDownBig");
    setTimeout(function() {
      action(sign);
      close();
    }, 350);
  }

  return (
    <Dialog
      animation={animation}
      text="Select title size"
      close={() => closeModal()}
    >
      <ButtonContent onPress={() => insertValue("#")}>
        <Label color={props => props.theme.styled.TITLE} align="center">
          H1
        </Label>
      </ButtonContent>

      <Border>
        <TouchableOpacity onPress={() => insertValue("##")}>
          <Label color={props => props.theme.styled.TITLE} align="center">
            H2
          </Label>
        </TouchableOpacity>
      </Border>

      <ButtonContent onPress={() => insertValue("###")}>
        <Label color={props => props.theme.styled.TITLE} align="center">
          H3
        </Label>
      </ButtonContent>
    </Dialog>
  );
}

export default MarkDownTitles;
MarkDownTitles.navigationOptions = { header: null };
