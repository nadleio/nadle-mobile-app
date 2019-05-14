import React, { useState } from "react";
import { View } from "react-native";

import { Margin } from "../assets/styles/styles";
import { Images } from "../assets/styles/Image";
import styled from "styled-components";
import Sun from "../assets/img/sun.png";
import Moon from "../assets/img/moon.png";

const SwitchBox = styled.View`
  width: 72;
  background-color: ${props => props.color || 0};
  border-radius: 30;
  padding: 3px;
  border-width: 1;
  border-color: white;
`;

const SwitchBall = styled.TouchableOpacity`
  height: 30;
  width: 30;
  background-color: white;
  border-radius: 20;
  align-self: ${props => props.align || "flex-start"};
`;

export function SwitchTheme() {
  const [switchState, setSwitchState] = useState({
    color: "#833fff",
    align: "flex-start",
    sun: true
  });

  const [imageProps, setImageProps] = useState({
    size: 20,
    left: 21,
    image: Sun
  });

  function handleColor() {
    var value = switchState.sun ? false : true;

    setSwitchState({
      color: value ? "#833fff" : "#43485e",
      align: value ? "flex-start" : "flex-end",
      sun: value
    });

    setImageProps({
      size: value ? 20 : 18,
      left: value ? 21 : 5,
      image: value ? Sun : Moon
    });
  }

  return (
    <SwitchBox color={switchState.color}>
      <View position="absolute">
        <Margin left={imageProps.left} top={4}>
          <Images
            height={imageProps.size}
            width={imageProps.size}
            source={imageProps.image}
          />
        </Margin>
      </View>

      <SwitchBall align={switchState.align} onPress={() => handleColor()} />
    </SwitchBox>
  );
}
