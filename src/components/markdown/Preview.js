import React from "react";
import { StyleSheet, ScrollView, View } from "react-native";
import Markdown from "react-native-markdown-renderer";
import { ViewFlex } from "../../assets/styles/styles";

import SyntaxHighlighter from "react-native-syntax-highlighter";

/*by default component uses hljs so access hljs styles, import from /prism for prism styles */
// import { atomDark } from "react-syntax-highlighter/styles/prism";

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
  text: { fontSize: 16, color: "black" },
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
    borderColor: "#e0d7d1",
    backgroundColor: "#f5f2f0",
    borderRadius: 8,
    paddingHorizontal: "3%"
  },
  codeInline: {
    borderWidth: 1,
    borderColor: "#c7264e",
    backgroundColor: "#f9f2f4",
    borderRadius: 4,
    color: "#c7264e"
  }
});

const rules = {
  table: (node, children, parent, styles) => (
    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
      <View key={node.key} style={[styles.table]}>
        {children}
      </View>
    </ScrollView>
  ),

  fence: (node, children, parent, styles) => (
    <View style={styles.codeBlock}>
      <SyntaxHighlighter
        language={node.sourceInfo}
        // style={atomDark}
        highlighter={"prism" || "hljs"}
        fontSize={14}
        showsHorizontalScrollIndicator={false}
        paddingBottom="-5%"
        paddingHorizontal={0}
      >
        {node.content}
      </SyntaxHighlighter>
    </View>
  )
};

export function Preview(props) {
  return (
    <ViewFlex>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Markdown rules={rules} style={styles}>
          {props.content}
        </Markdown>
      </ScrollView>
    </ViewFlex>
  );
}

Preview.navigationOptions = { header: null };
