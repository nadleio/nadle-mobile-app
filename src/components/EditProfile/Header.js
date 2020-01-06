import React from "react";
import { StatusBar, View, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-navigation";
import styled, { withTheme } from "styled-components";

import { Title, Label } from "../Text";
import Icon from "../Icon";

const Container = styled.View`
  padding: 15px 5% 15px 5%;
  border-bottom-color: ${props => props.theme.styled.DIVIDER};
  border-bottom-width: 1px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background-color: ${props => props.theme.styled.BOX_BACKGROUND};
`;

function Header({ back, theme, saveInfo }) {
  return (
    <View>
      <SafeAreaView backgroundColor={theme.styled.BOX_BACKGROUND} />
      <StatusBar barStyle={theme.styled.STATUS_BAR} />

      <Container>
        <TouchableOpacity onPress={() => back()} style={{ width: 50 }}>
          <Icon name="outline-angle-left" color={theme.styled.ICON} size={28} />
        </TouchableOpacity>

        <Title>Edit Profile</Title>

        <Label onPress={saveInfo} weight={600} color={theme.styled.TITLE}>
          SAVE
        </Label>
      </Container>
    </View>
  );
}

export default withTheme(Header);
