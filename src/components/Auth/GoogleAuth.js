import React from "react";

import Button from "../Button";

import GoogleIcon from "../../assets/images/google.inline.svg";
import { withNadleTheme } from "../../lib/ContextTheme";

const AuthButton = ({ style, appTheme }) => {
  return (
    <Button
      action={() => {}}
      text="AUTH WITH GOOGLE"
      color={["#ffffff", "#ffffff"]}
      style={style}
      textColor="#000"
      icon={<GoogleIcon height={24} width={24} />}
      {...(appTheme.themeMode === "LIGHT_MODE" && {
        containerStyle: { borderWidth: 2, borderColor: "#f4f4f4" }
      })}
    />
  );
};

export default withNadleTheme(AuthButton);
