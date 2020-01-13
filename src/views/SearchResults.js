import React, { useState } from "react";
import { ScrollView, View, TouchableOpacity, StatusBar } from "react-native";
import styled, { withTheme } from "styled-components";
import { SafeAreaView } from "react-navigation";

import ShortPost from "../components/ShortPost";
import SearchInput from "../components/Search/SearchInput";
import Header from "../components/Header";
import Icon from "../components/Icon";
import { Label } from "../components/Text";

const Container = styled.View`
  flex: 1;
  background-color: ${props => props.theme.styled.BACKGROUND};
`;

const OptionsContainer = styled.View`
  background-color: ${props => props.theme.styled.BACKGROUND};
  height: 40px;
  border-top-width: 1px;
  margin: 8px -16px 0 -16px;
  flex-direction: row;
  align-items: center;
`;

const options = ["Blogs", "Users", "Hashtags"];

function SearchResults({ navigation, theme }) {
  const [text, setText] = useState(navigation.state.params.value);

  return (
    <Container>
      <SafeAreaView backgroundColor={theme.styled.BACKGROUND} />
      <StatusBar barStyle={theme.styled.STATUS_BAR} />
      {/* <Header title="Results" back={() => navigation.goBack()} /> */}

      <View style={{ padding: 16, flex: 1 }}>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={{ marginRight: 16 }}
          >
            <Icon
              name="outline-angle-left"
              color={theme.styled.ICON}
              size={28}
            />
          </TouchableOpacity>

          <View style={{ paddingRight: 24 }}>
            <SearchInput
              onChangeText={text => setText(text)}
              placeholder="Search"
              returnKeyType="search"
              onSubmitEditing={() => {}}
              clear={() => setText("")}
              style={{ width: "88%" }}
              value={text}
              isFullWidth={true}
            />
          </View>
        </View>

        <OptionsContainer>
          {options.map((data, i) => (
            <Label
              style={{ marginRight: 32, marginLeft: 16 }}
              weight={600}
              key={i}
            >
              {data}
            </Label>
          ))}
        </OptionsContainer>

        <ScrollView>
          <View style={{ marginTop: 32 }}>
            <ShortPost />
            <ShortPost />
          </View>
        </ScrollView>
      </View>
    </Container>
  );
}
export default withTheme(SearchResults);
