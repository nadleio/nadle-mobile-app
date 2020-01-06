import React, { useState, useEffect } from "react";
import { Animated } from "react-native";

function AnimatedZoom({ children }) {
  const [fadeAnim] = useState(new Animated.Value(0));
  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 400,
      useNativeDriver: true
    }).start();
  }, []);

  return (
    <Animated.View
      style={{
        flex: 1,
        opacity: fadeAnim,
        transform: [
          {
            scale: fadeAnim.interpolate({
              inputRange: [0, 1],
              outputRange: [0.0, 1]
            })
          }
        ]
      }}
    >
      {children}
    </Animated.View>
  );
}

export default AnimatedZoom;
