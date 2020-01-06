import React, { useState } from "react";
import { withTheme } from "styled-components";

import { Label } from "../../components/Text";
import Input from "../../components/Form/Input";
import Button from "../../components/Button";
import Dialog from "../../components/Modal/Dialog";

function ModalLink({ action, close, theme }) {
  const [messagge, setMessagge] = useState("");
  const [link, setLink] = useState("");
  const [animation, setAnimation] = useState("fadeInUpBig");

  const disabled = messagge == "" || link == "";

  function closeModal() {
    setAnimation("fadeOutDownBig");
    setTimeout(function() {
      close();
    }, 350);
  }

  function insertValue() {
    setAnimation("fadeOutDownBig");
    setTimeout(function() {
      action(messagge, link);
      setMessagge("");
      setLink("");
    }, 350);
  }

  return (
    <Dialog animation={animation} text="Insert Link" close={() => closeModal()}>
      <Label style={{ marginTop: 15 }}>Title</Label>

      <Input
        onChangeText={text => setMessagge(text)}
        autoCapitalize="none"
        onSubmitEditing={() => {
          this.link.focus();
        }}
        returnKeyType="next"
        spellCheck={false}
      />

      <Label style={{ marginTop: 20 }}>Link</Label>

      <Input
        onChangeText={text => setLink(text)}
        autoCapitalize="none"
        returnKeyType="done"
        spellCheck={false}
      />

      <Button
        disabled={disabled}
        action={() => insertValue()}
        text="INSERT"
        color={[theme.colors.PRIMARY, theme.colors.PRIMARY]}
        style={{ marginTop: 20 }}
        textColor="#fff"
      />
    </Dialog>
  );
}

export default withTheme(ModalLink);
ModalLink.navigationOptions = { header: null };
