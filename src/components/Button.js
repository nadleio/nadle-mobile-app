import React from "react";
import { StyleSheet, View } from "react-native";

import styled from "styled-components";
import LinearGradient from "react-native-linear-gradient";

const Container = styled.TouchableOpacity`
  width: 100%;
`;

const ActionLink = styled.Text`
  color: ${props => props.color || "black"};
  font-size: ${props => props.theme.fontSize.BODY};
  font-weight: 600;
  text-align: center;
`;

const IconContainer = styled.View`
  position: absolute;
  margin-left: 16px;
`;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderRadius: 8,
    justifyContent: "center",
    padding: 16
  }
});

function Button({ style, containerStyle, ...props }) {
  return (
    <View style={style}>
      <Container
        disabled={props.disabled}
        borderColor={props.borderColor}
        onPress={() => props.action()}
      >
        <LinearGradient
          colors={props.disabled ? ["#b2b2b2", "#b2b2b2"] : props.color}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          style={[styles.container, containerStyle]}
        >
          {props.icon && <IconContainer>{props.icon}</IconContainer>}
          <ActionLink color={props.textColor}>{props.text}</ActionLink>
        </LinearGradient>
      </Container>
    </View>
  );
}

export default Button;
