import React, { useState } from "react";

import {
  StatusBar,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  View,
  ActivityIndicator
} from "react-native";

import { SafeAreaView } from "react-navigation";
import { PaddingBox, Container, TextContent, UserMentions } from "./styled";

import { Information } from "../../components/Text";
import { SmallImageProfile } from "../../assets/styles/Image";
import { ViewFlex } from "../../assets/styles/styles";
import { Header } from "../../components/Header";
import { Mention } from "../../components/Mention";

import json from "../../json/comments";

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

function Comments(props) {
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
    <ViewFlex paddingBottom="0">
      <SafeAreaView backgroundColor="white" />
      <StatusBar barStyle="dark-content" />

      <Header
        backBool={true}
        back={() => props.navigation.goBack()}
        text="Comments"
      />

      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior="padding"
        keyboardVerticalOffset={Platform.OS === "android" ? 25 : 0}
      >
        <ScrollView>
          <PaddingBox>
            {json.map(data => (
              <Container>
                <SmallImageProfile source={{ uri: data.image }} />

                <TextContent>
                  <Information
                    onPress={() =>
                      props.navigation.navigate("SearchProfile", {
                        id: 2
                      })
                    }
                    size={16}
                    weight="600"
                    left={5}
                  >
                    {data.username}
                  </Information>

                  <Information size={16} left={5} top={4}>
                    {data.comment}
                  </Information>

                  <Information
                    weight="600"
                    color="#bdbdbd"
                    size={12}
                    left={5}
                    top={4}
                  >
                    4H ago
                  </Information>
                </TextContent>
              </Container>
            ))}
          </PaddingBox>
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
    </ViewFlex>
  );
}

export default Comments;
