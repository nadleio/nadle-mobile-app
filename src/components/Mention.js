import React, { Component } from "react";
import { View, Animated, FlatList } from "react-native";
import {
  TextInput,
  TextInputContainer,
  SendContainer
} from "../views/Comments/styled";

import Icon from "./Icon";

export class Mention extends Component {
  constructor() {
    super();
    this.state = {
      textInputHeight: "",
      isTrackingStarted: false,
      suggestionRowHeight: new Animated.Value(0)
    };
    this.isTrackingStarted = false;
    this.previousChar = " ";
  }

  componentWillMount() {
    this.setState({
      textInputHeight: this.props.textInputMinHeight
    });
  }

  componentWillReceiveProps(nextProps) {
    if (!nextProps.value) {
      this.resetTextbox();
    } else if (
      this.isTrackingStarted &&
      !nextProps.horizontal &&
      nextProps.suggestionsData.length !== 0
    ) {
      const numOfRows =
        nextProps.MaxVisibleRowCount >= nextProps.suggestionsData.length
          ? nextProps.suggestionsData.length
          : nextProps.MaxVisibleRowCount;
      const height = numOfRows * nextProps.suggestionRowHeight;
      this.openSuggestionsPanel(height);
    }
  }

  startTracking() {
    this.isTrackingStarted = true;
    this.openSuggestionsPanel();
    this.setState({
      isTrackingStarted: true
    });
  }

  stopTracking() {
    this.isTrackingStarted = false;
    this.closeSuggestionsPanel();
    this.setState({
      isTrackingStarted: false
    });
  }

  openSuggestionsPanel(height) {
    Animated.timing(this.state.suggestionRowHeight, {
      toValue: height ? height : this.props.suggestionRowHeight,
      duration: 100
    }).start();
  }

  closeSuggestionsPanel() {
    Animated.timing(this.state.suggestionRowHeight, {
      toValue: 0,
      duration: 100
    }).start();
  }

  updateSuggestions(lastKeyword) {
    this.props.triggerCallback(lastKeyword);
  }

  identifyKeyword(val) {
    if (this.isTrackingStarted) {
      const boundary =
        this.props.triggerLocation === "new-word-only" ? "B" : "";
      const pattern = new RegExp(
        `\\${boundary}${this.props.trigger}[a-z0-9_-]+|\\${boundary}${this.props.trigger}`,
        `gi`
      );
      const keywordArray = val.match(pattern);
      if (keywordArray && !!keywordArray.length) {
        const lastKeyword = keywordArray[keywordArray.length - 1];
        this.updateSuggestions(lastKeyword);
      }
    }
  }

  onChangeText(val) {
    this.props.onChangeText(val); // pass changed text back
    const lastChar = val.substr(val.length - 1);
    const wordBoundry =
      this.props.triggerLocation === "new-word-only"
        ? this.previousChar.trim().length === 0
        : true;
    if (lastChar === this.props.trigger && wordBoundry) {
      this.startTracking();
    } else if (
      (lastChar === " " && this.state.isTrackingStarted) ||
      val === ""
    ) {
      this.stopTracking();
    }
    this.previousChar = lastChar;
    this.identifyKeyword(val);
  }

  resetTextbox() {
    this.previousChar = " ";
    this.stopTracking();
    this.setState({ textInputHeight: this.props.textInputMinHeight });
  }

  render() {
    return (
      <View>
        <Animated.View
          style={[
            { ...this.props.suggestionsPanelStyle },
            { height: this.state.suggestionRowHeight }
          ]}
        >
          <FlatList
            keyboardShouldPersistTaps={"always"}
            horizontal={this.props.horizontal}
            ListEmptyComponent={this.props.loadingComponent}
            enableEmptySections={true}
            data={this.props.suggestionsData}
            keyExtractor={this.props.keyExtractor}
            renderItem={rowData => {
              return this.props.renderSuggestionsRow(
                rowData,
                this.stopTracking.bind(this)
              );
            }}
          />
        </Animated.View>

        <TextInputContainer>
          <TextInput
            {...this.props}
            ref={component => (this._textInput = component)}
            onChangeText={this.onChangeText.bind(this)}
            value={this.props.value}
            placeholder={
              this.props.placeholder
                ? this.props.placeholder
                : "Write a comment..."
            }
            multiline
          />

          <SendContainer onPress={() => mentionFunc()}>
            <Icon color="white" size={18}>
              
            </Icon>
          </SendContainer>
        </TextInputContainer>
      </View>
    );
  }
}
