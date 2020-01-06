/* eslint-disable react/display-name */
import React from "react";
import { StyleSheet, Modal } from "react-native";
import Markdown from "react-native-markdown-renderer";
import styled, { withTheme } from "styled-components";

import Header from "../../Modal/Header";

import rules from "./rules";

const Container = styled.ScrollView`
  flex: 1;
  padding: 5%;
  background-color: ${props => props.theme.styled.BACKGROUND};
`;

function Preview({ content, close, theme }) {
  const styles = StyleSheet.create({
    heading: {
      borderBottomWidth: 1,
      borderColor: "#000000"
    },

    heading1: {
      fontSize: 32,
      color: `${theme.styled.TITLE}`
    },

    heading2: {
      fontSize: 24,
      color: `${theme.styled.TITLE}`
    },

    heading3: {
      fontSize: 18,
      color: `${theme.styled.TITLE}`
    },

    text: { fontSize: 16, color: `${theme.styled.CONTENT}` },

    image: {
      height: 250,
      width: "100%",
      borderRadius: 8,
      overflow: "hidden"
    }
  });

  return (
    <Modal animationType="slide" visible={true}>
      <Header title="Preview" close={() => close()} />

      <Container>
        <Markdown rules={rules} style={styles}>
          {content}
        </Markdown>
      </Container>
    </Modal>
  );
}

export default withTheme(Preview);

Preview.navigationOptions = { header: null };
