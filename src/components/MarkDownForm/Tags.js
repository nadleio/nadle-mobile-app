/* eslint-disable jsx-a11y/no-autofocus */
import React, { useState } from "react";
import {
  KeyboardAvoidingView,
  Modal,
  Platform,
  ScrollView
} from "react-native";
import styled, { withTheme } from "styled-components";
import { useQuery } from "@apollo/react-hooks";
import gql from "graphql-tag";
import { SafeAreaView } from "react-navigation";

import TagsFields from "../Tags";
import Header from "../Modal/Header";

import { withNadleTheme } from "../../lib/ContextTheme";

const colors = {
  border: {
    LIGHT_MODE: "#f4f4f4",
    DARK_MODE: "#ffffff",
    BLUE_MODE: "#ffffff"
  },
  color: {
    LIGHT_MODE: "#000000",
    DARK_MODE: "#ffffff",
    BLUE_MODE: "#ffffff"
  },
  placeholderColor: {
    LIGHT_MODE: "#7f7f7f",
    DARK_MODE: "#777777",
    BLUE_MODE: "#565656"
  }
};

const Container = styled.View`
  flex: 1;
  background-color: ${props => props.theme.styled.BACKGROUND};
`;

const TagsContainer = styled.View`
  flex: 1;
`;

const TagBox = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
  margin: 12px 16px 32px 16px;
`;

const InputContainer = styled.View`
  background-color: ${props => props.theme.styled.BOX_BACKGROUND};
  padding: 0 16px;
`;
const Input = styled.TextInput`
  color: ${({ appTheme }) => colors.color[appTheme.themeMode]};
  font-size: ${props => props.theme.fontSize.BODY};
  font-weight: 500;
  min-height: 40;
  margin-bottom: 4px;
`;

const Content = styled.Text`
  color: ${props => props.theme.styled.CONTENT};
  font-size: ${props => props.theme.fontSize.BODY};
`;

const SearchResult = styled.TouchableOpacity`
  background-color: ${props => props.theme.styled.BOX_BACKGROUND};
  padding: 16px;
`;

const TAGS_LIST = gql`
  query($name: String) {
    tags(name: $name) {
      message
      success
      data {
        id
        name
      }
    }
  }
`;

function Tags({ theme, close, setTags, tags, appTheme }) {
  const [variable, setVariable] = useState("");
  const { data = { tags: { data: [] } } } = useQuery(TAGS_LIST, {
    variables: { name: variable }
  });

  function removeTag(index) {
    const newTags = [...tags];
    newTags.splice(index, 1);
    setTags(newTags);
  }

  function addTag(item) {
    setVariable("");
    const exist = tags.some(value => value.name === item.name);

    if (!exist) {
      const newTags = [...tags];
      newTags.push(item);
      setTags(newTags);
    }
  }

  return (
    <Modal animationType="slide" visible={true}>
      <SafeAreaView backgroundColor={theme.styled.BOX_BACKGROUND} />
      <SafeAreaView
        style={{ flex: 1 }}
        backgroundColor={theme.styled.BOX_BACKGROUND}
      >
        <Container>
          <Header title="Tags" close={close} />

          <KeyboardAvoidingView
            style={{ flex: 1 }}
            behavior="padding"
            keyboardVerticalOffset={Platform.OS === "android" ? 25 : 0}
          >
            <TagsContainer>
              <ScrollView style={{ maxHeight: 200 }}>
                <TagBox>
                  {tags.map((tag, index) => (
                    <TagsFields
                      key={index}
                      action={() => removeTag(index)}
                      hasDelete
                      name={tag.name}
                    />
                  ))}
                </TagBox>
              </ScrollView>
            </TagsContainer>

            {data.tags.data.map(data => (
              <SearchResult onPress={() => addTag(data)} key={data.id}>
                <Content>{data.name}</Content>
              </SearchResult>
            ))}

            <InputContainer>
              <Input
                placeholderTextColor={
                  colors.placeholderColor[appTheme.themeMode]
                }
                appTheme={appTheme}
                placeholder="Search Tags"
                autoFocus
                onChangeText={value => setVariable(value)}
                autoCapitalize="none"
                value={variable}
              />
            </InputContainer>
          </KeyboardAvoidingView>
        </Container>
      </SafeAreaView>
    </Modal>
  );
}

export default withTheme(withNadleTheme(Tags));
