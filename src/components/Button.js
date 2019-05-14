import React from "react";
import { View, StyleSheet } from "react-native";

import { ActionLink } from "../components/Text";
import styled from "styled-components";
import LinearGradient from "react-native-linear-gradient";
import { Images } from "../assets/styles/Image";

const TouchableOpacity = styled.TouchableOpacity`
  height: 48px;
  width: 100%;
`;

const IconContent = styled.View`
  position: absolute;
  margin-left: 5%;
`;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderRadius: 8,
    justifyContent: "center",
    borderWidth: 2
  }
});

export function Button(props) {
  return (
    <View marginTop={props.top || 0}>
      <TouchableOpacity
        disabled={props.disabled}
        borderColor={props.borderColor}
        onPress={() => props.action()}
      >
        <LinearGradient
          colors={props.disabled ? ["#b2b2b2", "#b2b2b2"] : props.color}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          style={[
            styles.container,
            { borderColor: props.borderColor || "white" }
          ]}
        >
          {props.haveIcon && (
            <IconContent>
              <Images height={30} width={30} source={props.image} />
            </IconContent>
          )}

          <ActionLink size={15} color={props.TextColor}>
            {props.text}
          </ActionLink>
        </LinearGradient>
      </TouchableOpacity>
    </View>
  );
}
