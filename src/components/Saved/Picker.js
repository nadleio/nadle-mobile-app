import React from "react";
import { View } from "react-native";
import styled, { withTheme } from "styled-components";

import { Label } from "../../components/Text";

const Container = styled.TouchableOpacity`
  background-color: ${props => props.background};
  border-width: 2px;
  border-color: ${props => props.theme.colors.PRIMARY};
  height: 32px;
  width: 50%;
  justify-content: center;
  align-items: center;
`;

function Picker({ theme, swipe, index }) {
  const active = index === 0;

  return (
    <View style={{ flexDirection: "row" }}>
      <Container
        style={{ borderTopLeftRadius: 4, borderBottomLeftRadius: 4 }}
        background={active ? theme.colors.PRIMARY : "transparent"}
        onPress={() => swipe(0)}
      >
        <Label color={active && "white"}>All items</Label>
      </Container>

      <Container
        style={{ borderTopRightRadius: 4, borderBottomRightRadius: 4 }}
        background={!active ? theme.colors.PRIMARY : "transparent"}
        onPress={() => swipe(1)}
      >
        <Label color={!active && "white"}>Buckets</Label>
      </Container>
    </View>
  );
}

export default withTheme(Picker);
