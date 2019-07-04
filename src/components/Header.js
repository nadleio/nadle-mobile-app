import React from "React";
import styled from "styled-components";

import { Images } from "../assets/styles/Image";
import BACK from "../assets/img/back-black.png";
import { Platform } from "react-native";

export const HeaderContent = styled.View`
  padding-left: 5%;
  padding-right: 5%;
  padding-top: ${props => props.paddingtop || "3%"};
  padding-bottom: 3%;
  border-bottom-color: #f4f4f4;
  border-bottom-width: 2;
  flex-direction: row;
  justify-content: space-between;
`;

export const TouchableOpacity = styled.TouchableOpacity`
  height: 20px;
  width: 20px;
`;

export function Header(props) {
  return (
    <HeaderContent paddingtop={Platform.OS === "android" ? "5%" : "3%"}>
      <TouchableOpacity onPress={() => props.back()}>
        <Images height={20} width={20} source={BACK} />
      </TouchableOpacity>

      {props.buttons}
    </HeaderContent>
  );
}
