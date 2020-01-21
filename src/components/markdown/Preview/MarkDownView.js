/* eslint-disable react/display-name */
import React from "react";
import { StyleSheet } from "react-native";
import Markdown from "react-native-markdown-renderer";
import { withTheme } from "styled-components";

import rules from "./rules";

function MarkDownView({ content, theme }) {
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
    <Markdown rules={rules} style={styles}>
      {content}
    </Markdown>
  );
}

export default withTheme(MarkDownView);
