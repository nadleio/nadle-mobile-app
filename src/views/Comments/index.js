import React, { useState, Fragment } from "react";
import {
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  View,
  ActivityIndicator
} from "react-native";
import styled, { withTheme } from "styled-components";
import { SafeAreaView } from "react-navigation";

import { UserMentions } from "./styled";

import { Information, Label } from "../../components/Text";
import { SmallImageProfile } from "../../assets/styles/Image";
import { Mention } from "../../components/Mention";
import Header from "../../components/Header";

import json from "../../json/comments";

const Container = styled.View`
  flex: 1;
  background-color: ${props => props.theme.styled.BACKGROUND};
`;

const users = [
  {
    image: "https://nadle-assets.nyc3.digitaloceanspaces.com/default.jpg",
    username: "ricardo"
  },
  {
    image: "https://nadle-assets.nyc3.digitaloceanspaces.com/default.jpg",
    username: "Carlos"
  },
  {
    image: "https://nadle-assets.nyc3.digitaloceanspaces.com/default.jpg",
    username: "Hector"
  }
];

function Comments({ theme, navigation }) {
  const [mention, setMention] = useState("");
  const [keyword, setKeyboard] = useState("");

  function onSuggestionTap(username, hidePanel) {
    hidePanel();
    const comment = mention.slice(0, -keyword.length);
    setMention(comment + "@" + username);
  }

  function renderSuggestionsRow({ item }, hidePanel) {
    return (
      <UserMentions onPress={() => onSuggestionTap(item.username, hidePanel)}>
        <SmallImageProfile source={{ uri: item.image }} />

        <Information size={16} left={10}>
          {item.username}
        </Information>
      </UserMentions>
    );
  }

  function callback(keyword) {
    setKeyboard(keyword);
  }

  return (
    <Fragment>
      <SafeAreaView backgroundColor={theme.styled.BOX_BACKGROUND} />
      <SafeAreaView
        style={{ flex: 1 }}
        backgroundColor={theme.styled.BACKGROUND}
      >
        <Container>
          <Header title="Comments" back={() => navigation.goBack()} />

          <KeyboardAvoidingView
            style={{ flex: 1 }}
            behavior="padding"
            keyboardVerticalOffset={Platform.OS === "android" ? 25 : 0}
          >
            <ScrollView>
              {json.map((data, index) => (
                <View style={{ padding: 16 }} key={index}>
                  <View style={{ flexDirection: "row", alignItems: "center" }}>
                    <SmallImageProfile source={{ uri: data.image }} />

                    <Label
                      onPress={() =>
                        navigation.navigate("SearchProfile", {
                          id: 2
                        })
                      }
                      weight={600}
                      style={{ marginLeft: 8 }}
                    >
                      {data.username}
                    </Label>

                    <Label style={{ marginLeft: 4 }} weight="600" size={14}>
                      • 4H ago
                    </Label>
                  </View>

                  <Label style={{ marginTop: 8 }}>{data.comment}</Label>
                </View>
              ))}
            </ScrollView>

            <Mention
              textInputMinHeight={40}
              textInputMaxHeight={100}
              trigger={"@"}
              triggerLocation={"new-word-only"}
              value={mention}
              onChangeText={text => setMention(text)}
              triggerCallback={callback}
              renderSuggestionsRow={renderSuggestionsRow}
              suggestionsData={users}
              keyExtractor={(item, index) => item.username}
              suggestionRowHeight={60}
              horizontal={false}
              MaxVisibleRowCount={3}
              loadingComponent={() => (
                <View
                  style={{
                    flex: 1,
                    width: "85%",
                    justifyContent: "center",
                    alignItems: "center"
                  }}
                >
                  <ActivityIndicator />
                </View>
              )}
            />
          </KeyboardAvoidingView>
        </Container>
      </SafeAreaView>
    </Fragment>
  );
}

export default withTheme(Comments);
