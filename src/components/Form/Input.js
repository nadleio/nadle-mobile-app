import React, { useState } from "react";
import styled from "styled-components";

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
  border-bottom-width: 2;
  border-bottom-color: ${({ appTheme, isFocus, theme }) =>
    isFocus ? theme.colors.PRIMARY : colors.border[appTheme.themeMode]};
  font-size: ${props => props.theme.fontSize.BODY};
  font-weight: 500;
  min-height: 40;
  width: 100%;
`;

const Label = styled.Text`
  color: ${props => props.theme.styled.CONTENT};
  font-size: ${props => props.theme.fontSize.BODY};
  font-weight: 600;
`;

const RenderInput = ({ appTheme, label, ...props }) => {
  const [isFocus, setIsFocus] = useState(false);
  return (
    <React.Fragment>
      <Label>{label}</Label>
      <Input
        appTheme={appTheme}
        isFocus={isFocus}
        placeholderTextColor={colors.placeholderColor[appTheme.themeMode]}
        onFocus={() => setIsFocus(true)}
        onBlur={() => setIsFocus(false)}
        {...props}
      />
    </React.Fragment>
  );
};

export default withNadleTheme(RenderInput);
