/* eslint-disable jsx-a11y/no-autofocus */
import React, { useState } from "react";
import { ScrollView, StatusBar, View, Modal } from "react-native";
import styled, { withTheme } from "styled-components";
import { SafeAreaView } from "react-navigation";

import { Label } from "../Text";
import SearchInput from "./SearchInput";

const Container = styled.View`
  flex: 1;
  background-color: ${props => props.theme.styled.BACKGROUND};
`;

const SearchContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

function SearchResults({ theme, close, navigate }) {
  const [text, setText] = useState("");

  return (
    <Modal>
      <Container>
        <SafeAreaView backgroundColor={theme.styled.BACKGROUND} />
        <StatusBar barStyle={theme.styled.STATUS_BAR} />

        <View style={{ padding: 16, flex: 1 }}>
          <ScrollView keyboardShouldPersistTaps="handled">
            <SearchContainer>
              <SearchInput
                onChangeText={text => setText(text)}
                placeholder="Search"
                returnKeyType="search"
                onSubmitEditing={() => navigate(text)}
                autoFocus
                clear={() => setText("")}
                style={{ width: "88%" }}
                value={text}
                isFullWidth={false}
              />

              <Label onPress={close}>Cancel</Label>
            </SearchContainer>
          </ScrollView>
        </View>
      </Container>
    </Modal>
  );
}
export default withTheme(SearchResults);
