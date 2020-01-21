import React from "react";
import { withTheme } from "styled-components";
import {
  ProgressViewIOS,
  ProgressBarAndroid,
  Platform,
  View
} from "react-native";

function PostProgress({ progressCount, theme }) {
  return (
    <View>
      {Platform.OS === "android" ? (
        <ProgressBarAndroid
          styleAttr="Horizontal"
          progress={progressCount}
          color={theme.colors.PRIMARY}
          indeterminate={false}
          style={{ width: "100%" }}
        />
      ) : (
        <ProgressViewIOS
          progressTintColor={theme.colors.PRIMARY}
          style={{ width: "100%" }}
          progress={progressCount}
        />
      )}
    </View>
  );
}

export default withTheme(PostProgress);
