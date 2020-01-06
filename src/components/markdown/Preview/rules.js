/* eslint-disable react/display-name */
import React from "react";
import { View, ScrollView } from "react-native";
import SyntaxHighlighter from "react-native-syntax-highlighter";
import { okaidia } from "react-syntax-highlighter/styles/prism";

import {
  Table,
  TableRow,
  TableHeader,
  Hr,
  Blockquote,
  CodeLine,
  ListContainer,
  ListText
} from "./styles";

function hasParents(parents, type) {
  return parents.findIndex(el => el.type === type) > -1;
}

const rules = {
  table: (node, children) => (
    <ScrollView
      style={{ flex: 1 }}
      horizontal
      showsHorizontalScrollIndicator={false}
    >
      <Table key={node.key}>{children}</Table>
    </ScrollView>
  ),
  tr: (node, children) => <TableRow key={node.key}>{children}</TableRow>,
  th: (node, children) => <TableHeader key={node.key}>{children}</TableHeader>,
  hr: node => <Hr key={node.key} />,

  blockquote: (node, children) => (
    <Blockquote key={node.key}>{children}</Blockquote>
  ),

  code_inline: node => <CodeLine key={node.key}>{node.content}</CodeLine>,

  fence: node => (
    <SyntaxHighlighter
      language={node.sourceInfo}
      highlighter="prism"
      style={okaidia}
      fontSize={16}
      showsHorizontalScrollIndicator={false}
      borderRadius={8}
      paddingBottom={0}
      marginHorizontal={0}
    >
      {node.content}
    </SyntaxHighlighter>
  ),

  list_item: (node, children, parent, styles) => {
    if (hasParents(parent, "bullet_list")) {
      return (
        <ListContainer key={node.key}>
          <ListText size={20}>{"•"}</ListText>
          <View style={styles.listItem}>{children}</View>
        </ListContainer>
      );
    }

    if (hasParents(parent, "ordered_list")) {
      return (
        <ListContainer key={node.key}>
          <ListText size={16}>{node.index + 1}</ListText>
          <View style={styles.listItem}>{children}</View>
        </ListContainer>
      );
    }

    return (
      <View key={node.key} style={styles.listItem}>
        {children}
      </View>
    );
  }
};

export default rules;
