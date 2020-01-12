import React from "react";
import { TouchableOpacity } from "react-native";
import styled from "styled-components";

import Icon from "../Icon";

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

const Input = styled.TextInput`
  color: ${({ appTheme }) => colors.color[appTheme.themeMode]};
  font-size: ${props => props.theme.fontSize.BODY};
  font-weight: 500;
  min-height: 36;
`;

const Container = styled.View`
  background-color: ${props => props.theme.styled.BOX_BACKGROUND};
  padding: 0 16px 0 12px;
  border-radius: 6px;
  width: ${props => (props.isFullWidth ? "100%" : "82%")};
  flex-direction: row;
  align-items: center;
`;

const RenderInput = ({ appTheme, ...props }) => {
  return (
    <Container isFullWidth={props.isFullWidth}>
      <Icon
        name="outline-search"
        color={colors.placeholderColor[appTheme.themeMode]}
        size={16}
        style={{ marginRight: 8 }}
      />

      <Input
        appTheme={appTheme}
        placeholderTextColor={colors.placeholderColor[appTheme.themeMode]}
        {...props}
      />

      {Boolean(props.value) && (
        <TouchableOpacity onPress={props.clear}>
          <Icon
            name="replace"
            color={colors.placeholderColor[appTheme.themeMode]}
            size={16}
          />
        </TouchableOpacity>
      )}
    </Container>
  );
};

export default withNadleTheme(RenderInput);
