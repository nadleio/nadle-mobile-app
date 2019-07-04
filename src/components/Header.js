import React from "React";

import styled from "styled-components";

import { Images } from "../assets/styles/Image";
import BACK from "../assets/img/back-black.png";
import { Information } from "./Text";

export const HeaderContent = styled.View`
  padding-left: 12px;
  padding-right: 12px;
  padding-top: 15px;
  padding-bottom: 10px;
  border-bottom-color: #f4f4f4;
  border-bottom-width: 2;
  flex-direction: row;
  justify-content: ${props => props.justify};
  align-items: center;
`;

export const TouchableOpacity = styled.TouchableOpacity`
  height: 20px;
  width: 20px;
`;

export function Header(props) {
  return (
    <HeaderContent justify={props.text ? "flex-start" : "space-between"}>
      {props.backBool && (
        <TouchableOpacity onPress={() => props.back()}>
          <Images height={20} width={20} source={BACK} />
        </TouchableOpacity>
      )}

      {props.text && (
        <Information size={20} weight="bold" left={10}>
          {props.text}
        </Information>
      )}

      {props.buttons}
    </HeaderContent>
  );
}
