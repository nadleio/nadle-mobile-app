import React from "React";

import styled from "styled-components";

import Icon from "./Icon";
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
  height: 32px;
  width: 32px;
  margin-left: 2%;
  margin-right: -10px;
`;

export function Header(props) {
  return (
    <HeaderContent justify={props.text ? "flex-start" : "space-between"}>
      {props.backBool && (
        <TouchableOpacity onPress={() => props.back()}>
          <Icon color="black" size={32}>
            
          </Icon>
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
