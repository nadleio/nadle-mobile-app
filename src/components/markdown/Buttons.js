import React from "react";
import { ScrollView } from "react-native";
import styled, { withTheme } from "styled-components";

import Icon from "../Icon";

const Container = styled.View`
  flex-direction: row;
  background-color: ${props => props.theme.styled.BOX_BACKGROUND};
  padding-top: 10px;
  padding-bottom: 12px;
  border-top-color: ${props => props.theme.styled.DIVIDER};
  border-top-width: 1px;
`;

const TouchableOpacity = styled.TouchableOpacity`
  margin-left: ${props => props.left || 20};
  margin-right: ${props => props.right || 0};
`;

function Buttons({ theme, ...props }) {
  return (
    <Container>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        keyboardShouldPersistTaps="handled"
      >
        <TouchableOpacity onPress={() => props.dimiss()}>
          <Icon name="replace" color={theme.styled.ICON} size={20} />
        </TouchableOpacity>

        <TouchableOpacity left={35} onPress={() => props.header()}>
          <Icon color={theme.styled.ICON} size={20}>
            
          </Icon>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => props.bold()}>
          <Icon color={theme.styled.ICON} size={20}>
            
          </Icon>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => props.line()}>
          <Icon color={theme.styled.ICON} size={20}>
            
          </Icon>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => props.italic()}>
          <Icon color={theme.styled.ICON} size={20}>
            
          </Icon>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => props.link()} left={35}>
          <Icon color={theme.styled.ICON} size={20}>
            
          </Icon>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => props.gif()}>
          <Icon color={theme.styled.ICON} size={20}>
            
          </Icon>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => props.image()}>
          <Icon color={theme.styled.ICON} size={20}>
            
          </Icon>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => props.table()} left={35}>
          <Icon color={theme.styled.ICON} size={20}>
            
          </Icon>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => props.centerLine()}>
          <Icon color={theme.styled.ICON} size={18}>
            
          </Icon>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => props.blocks()}>
          <Icon color={theme.styled.ICON} size={20}>
            
          </Icon>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => props.pointList()}>
          <Icon color={theme.styled.ICON} size={20}>
            
          </Icon>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => props.codeLine()}>
          <Icon color={theme.styled.ICON} size={20}>
            
          </Icon>
        </TouchableOpacity>

        <TouchableOpacity right={20} onPress={() => props.code()}>
          <Icon color={theme.styled.ICON} size={20}>
            
          </Icon>
        </TouchableOpacity>
      </ScrollView>
    </Container>
  );
}

export default withTheme(Buttons);
Buttons.navigationOptions = { header: null };
