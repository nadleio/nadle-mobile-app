import React, { useState, useEffect } from "react";
import { Animated } from "react-native";

const FadeInView = props => {
  const [fadeAnim] = useState(new Animated.Value(0));
  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 500
    }).start();
  }, []);

  return (
    <Animated.View
      style={{
        flex: 1,
        opacity: fadeAnim
      }}
    >
      {props.children}
    </Animated.View>
  );
};

export default FadeInView;
