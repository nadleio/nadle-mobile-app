import React from "react";

import Button from "../Button";

import GithubIcon from "../../assets/images/github.inline.svg";

const AuthButton = ({ style }) => {
  return (
    <Button
      action={() => {}}
      text="AUTH WITH GITHUB"
      textColor="#fff"
      color={["#333333", "#333333"]}
      style={style}
      icon={<GithubIcon height={24} width={24} fill="#fff" />}
    />
  );
};

export default AuthButton;
