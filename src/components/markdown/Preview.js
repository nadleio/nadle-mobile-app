import React from "react";
import { StyleSheet, ScrollView } from "react-native";
import Markdown from "react-native-markdown-renderer";
import { ViewFlex } from "../../assets/styles/styles";

const styles = StyleSheet.create({
  heading: {
    borderBottomWidth: 1,
    borderColor: "#000000"
  },
  heading1: {
    fontSize: 32,
    color: "black"
  },
  heading2: {
    fontSize: 24,
    color: "black"
  },
  heading3: {
    fontSize: 18,
    color: "black"
  },
  heading4: {
    fontSize: 16,
    color: "black"
  },
  heading5: {
    fontSize: 13,
    color: "black"
  },
  heading6: {
    fontSize: 11
  },
  text: { fontSize: 16 },
  table: {
    borderWidth: 1,
    borderColor: "#000000",
    borderRadius: 3
  },
  image: {
    height: 260,
    width: "100%",
    borderRadius: 8,
    overflow: "hidden"
  },
  blockquote: {
    paddingHorizontal: 20,
    paddingVertical: 3,
    backgroundColor: "transparent",
    borderLeftWidth: 2,
    borderLeftColor: "red"
  },
  codeBlock: {
    borderWidth: 1,
    borderColor: "#CCCCCC",
    backgroundColor: "#f5f5f5",
    paddingTop: 15,
    paddingHorizontal: 15,
    borderRadius: 8
  },
  codeInline: {
    borderWidth: 1,
    borderColor: "#c7264e",
    backgroundColor: "#f9f2f4",
    borderRadius: 4,
    color: "#c7264e"
  }
});

export function Preview(props) {
  return (
    <ViewFlex>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Markdown style={styles}>{props.content}</Markdown>
      </ScrollView>
    </ViewFlex>
  );
}

Preview.navigationOptions = { header: null };
