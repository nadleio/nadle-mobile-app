import React from "react";
import {
  View,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Modal
} from "react-native";

import { ViewFlex } from "../assets/styles/styles";
import CLAPPING from "../assets/img/clapping.png";
import BOLD from "../assets/img/bold.png";
import LINE from "../assets/img/line.png";
import ITALIC from "../assets/img/italic.png";
import { Images } from "../assets/styles/Image";
import Markdown from "react-native-markdown-renderer";

const styles = StyleSheet.create({
  heading: {
    borderBottomWidth: 1,
    borderColor: "#000000"
  },
  heading1: {
    fontSize: 32,
    // backgroundColor: "#000000",
    color: "black"
  },
  heading2: {
    fontSize: 24,
    color: "red"
  },
  heading3: {
    fontSize: 18
  },
  heading4: {
    fontSize: 16,
    color: "red"
  },
  heading5: {
    fontSize: 13,
    color: "red"
  },
  heading6: {
    fontSize: 11
  },
  table: {
    borderWidth: 1,
    borderColor: "#000000",
    borderRadius: 3
  },
  image: {
    flex: 1,
    borderRadius: 8,
    overflow: "hidden"
  },
  blockquote: {
    paddingHorizontal: 20,
    paddingVertical: 3,
    // margin: 20,
    backgroundColor: "transparent",
    borderLeftWidth: 2,
    borderLeftColor: "red"
  },
  codeBlock: {
    borderWidth: 1,
    borderColor: "#CCCCCC",
    backgroundColor: "#f5f5f5",
    padding: 10,
    borderRadius: 8
  }
});

export default class MarkdownEditor extends React.Component {
  state = {
    text: "",
    active: false
  };

  header = () => {
    if (h1Active) {
      const letter = setCharAt(this.state.text, 0, "");
      const postletter = setCharAt(letter, 0, "");
      this.setState({ text: postletter });
    } else {
      this.setState({ text: "# " + this.state.text });
    }
    active ? this.setState({ active: false }) : this.setState({ active: true });
  };

  setCharAt(str, index, chr) {
    if (index > str.length - 1) return str;
    return str.substr(0, index) + chr + str.substr(index + 1);
  }

  keyReturn = () => {
    this.setState({ text: "" });
  };

  render() {
    return (
      <ViewFlex>
        <View paddingHorizontal="5%" marginTop={30}>
          <View marginTop={30}>
            <TextInput
              onChangeText={text => {
                this.setState({ text: text });
              }}
              placeholder="Type here"
              autoCapitalize="none"
              value={this.state.text}
              multiline
              returnKeyType="next"
              onSubmitEditing={() => this.keyReturn()}
            />
          </View>

          <View
            style={{
              width: "100%",
              height: 60,
              marginTop: 100,
              flexDirection: "row"
            }}
          >
            <TouchableOpacity onPress={() => this.header()}>
              <Images height={20} width={20} source={CLAPPING} />
            </TouchableOpacity>
          </View>
        </View>
      </ViewFlex>
    );
  }
}
