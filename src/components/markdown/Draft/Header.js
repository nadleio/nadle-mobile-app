import React from "react";
import { StatusBar, View } from "react-native";
import { SafeAreaView } from "react-navigation";
import styled, { withTheme } from "styled-components";
import { MaterialIndicator as Spinner } from "react-native-indicators";

import { Title } from "../../Text";

const Container = styled.View`
  padding: 15px 5% 15px 5%;
  border-bottom-color: ${props => props.theme.styled.DIVIDER};
  border-bottom-width: 1px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background-color: ${props => props.theme.styled.BOX_BACKGROUND};
`;

function Header({ close, theme, isLoading, setItem }) {
  return (
    <View>
      <SafeAreaView backgroundColor={theme.styled.BOX_BACKGROUND} />
      <StatusBar barStyle={theme.styled.STATUS_BAR} />

      <Container>
        <Title onPress={() => close()} size="14px">
          CLOSE
        </Title>

        <Title>Drafts</Title>

        {isLoading ? (
          <View style={{ width: 36 }}>
            <Spinner
              size={16}
              animationDuration={1400}
              color={theme.colors.PRIMARY}
            />
          </View>
        ) : (
          <Title onPress={() => setItem()} size="14px">
            SAVE
          </Title>
        )}
      </Container>
    </View>
  );
}

export default withTheme(Header);
