import React, { useState } from "react";

import { SafeAreaView } from "react-navigation";

import { Information } from "../components/Text";
import { ViewFlex, PaddingHorizontal } from "../assets/styles/styles";
import { Header } from "../components/Header";
import { TextInput } from "../components/form/Input";
import { Button } from "../components/Button";

function Suggestions(props) {
  const [email, setEmail] = useState("");
  return (
    <ViewFlex>
      <SafeAreaView backgroundColor="white" />
      <Header
        back={() => props.navigation.goBack()}
        backBool={true}
        text="Send suggestions"
      />

      <PaddingHorizontal>
        <Information top={20} size={16}>
          Do you like Nadle? imagine taking into account your considerations, we
          can continue building an incredible application, send your
          suggestions! we will definitely be reading it.
        </Information>

        <TextInput
          top={10}
          onChangeText={text => setEmail(text)}
          placeholder="Write suggestions"
          returnKeyType="done"
          autoCapitalize="none"
          multiline={true}
        />

        <Button
          // action={}
          text="SEND SUGGESTIONS"
          top={30}
          disabled={email == ""}
          TextColor="white"
          color={["#2f5de9", "#2f5de9"]}
        />
      </PaddingHorizontal>
    </ViewFlex>
  );
}

export default Suggestions;
