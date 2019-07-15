import React from "react";
import { ScrollView } from "react-native";

import DOWN from "../../assets/img/angle-down.png";

import styled from "styled-components";
import { Icon } from "../Icon";

import { Images } from "../../assets/styles/Image";

export const Scroll = styled.View`
  flex-direction: row;
  background-color: #fafbfb;
  padding-top: 10;
  padding-bottom: 12px;
  border-top-color: #f4f4f4;
  border-top-width: 2;
`;

export const TouchableOpacity = styled.TouchableOpacity`
  margin-left: ${props => props.left || 20};
  margin-right: ${props => props.right || 0};
`;

export function Buttons(props) {
  return (
    <Scroll>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        keyboardShouldPersistTaps={"handled"}
      >
        <TouchableOpacity onPress={() => props.dimiss()}>
          <Images height={20} width={20} source={DOWN} />
        </TouchableOpacity>

        <TouchableOpacity left={35} onPress={() => props.header()}>
          <Icon color="black" size={20}>
            
          </Icon>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => props.bold()}>
          <Icon color="black" size={20}>
            
          </Icon>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => props.line()}>
          <Icon color="black" size={20}>
            
          </Icon>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => props.italic()}>
          <Icon color="black" size={20}>
            
          </Icon>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => props.link()} left={35}>
          <Icon color="black" size={20}>
            
          </Icon>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => props.gif()}>
          <Icon color="black" size={20}>
            
          </Icon>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => props.image()}>
          <Icon color="black" size={20}>
            
          </Icon>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => props.table()} left={35}>
          <Icon color="black" size={20}>
            
          </Icon>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => props.centerLine()}>
          <Icon color="black" size={18}>
            
          </Icon>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => props.blocks()}>
          <Icon color="black" size={20}>
            
          </Icon>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => props.pointList()}>
          <Icon color="black" size={20}>
            
          </Icon>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => props.gist()} left={35}>
          <Icon color="black" size={20}>
            
          </Icon>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => props.codeLine()}>
          <Icon color="black" size={20}>
            
          </Icon>
        </TouchableOpacity>

        <TouchableOpacity right={20} onPress={() => props.code()}>
          <Icon color="black" size={20}>
            
          </Icon>
        </TouchableOpacity>
      </ScrollView>
    </Scroll>
  );
}

Buttons.navigationOptions = { header: null };
