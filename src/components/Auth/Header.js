import React from "react";
import { View } from "react-native";

import styled from "styled-components";
import { Margin } from "../../assets/styles/styles";
import { Images } from "../../assets/styles/Image";
import { SwitchTheme } from "../SwitchTheme";
import ImageBackground from "../../assets/img/auth-header.png";
import WHITE_LOGO from "../../assets/img/white-logo.png";

const Background = styled.ImageBackground`
  height: 220px;
  width: 100%;
  justify-content: center;
  padding-left: 8%;
`;

export function AuthHeader(props) {
  return (
    <View>
      <Background source={ImageBackground}>
        <Margin top={10}>
          <Images height={54} width={180} source={WHITE_LOGO} />
        </Margin>
      </Background>

      {props.withThemeSwitch && (
        <View alignSelf="flex-end">
          <Margin right={20} top={-9}>
            <SwitchTheme change={value => console.log(value)} />
          </Margin>
        </View>
      )}
    </View>
  );
}
