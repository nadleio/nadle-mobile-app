import React from "react";
import { StatusBar, View } from "react-native";
import { SafeAreaView } from "react-navigation";
import styled, { withTheme } from "styled-components";

import { Title, Label } from "../Text";

const Container = styled.View`
  padding: 15px 5% 15px 5%;
  border-bottom-color: ${props => props.theme.styled.DIVIDER};
  border-bottom-width: 1px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background-color: ${props => props.theme.styled.BOX_BACKGROUND};
`;

function Header({ title, close, theme, rightButton, onRightButtonPress }) {
  return (
    <View>
      <SafeAreaView backgroundColor={theme.styled.BOX_BACKGROUND} />
      <StatusBar barStyle={theme.styled.STATUS_BAR} />

      <Container>
        <Title onPress={() => close()} size="14px">
          CLOSE
        </Title>

        <Title>{title}</Title>

        {rightButton ? (
          <Title onPress={onRightButtonPress} size="14px">
            SAVE
          </Title>
        ) : (
          <View style={{ width: 50 }} />
        )}
      </Container>
    </View>
  );
}

export default withTheme(Header);
