import React, { useState } from "react";

import { SafeAreaView } from "react-navigation";
import { ListItem } from "react-native-elements";
import styled from "styled-components";

import { Information } from "../components/Text";
import { ViewFlex, PaddingHorizontal } from "../assets/styles/styles";
import { Header } from "../components/Header";
import { TextInput } from "../components/Form/Input";
import { Button } from "../components/Button";
import { ShareIt } from "../lib/utils/Share";

const Margintop = styled.View`
  margin-top: 30px;
`;

function ShareNadle(props) {
  const [email, setEmail] = useState("");
  return (
    <ViewFlex>
      <SafeAreaView backgroundColor="white" />
      <Header
        back={() => props.navigation.goBack()}
        backBool={true}
        text="Share Nadle"
      />

      <PaddingHorizontal>
        <Information top={20} size={16}>
          Write a email to send invitation
        </Information>

        <TextInput
          top={5}
          onChangeText={text => setEmail(text)}
          placeholder="Write a email"
          returnKeyType="done"
          autoCapitalize="none"
        />

        <Button
          // action={}
          text="SEND EMAIL INVITATION"
          top={30}
          disabled={email == ""}
          TextColor="white"
          color={["#2f5de9", "#2f5de9"]}
        />
      </PaddingHorizontal>

      <Margintop>
        <ListItem
          titleStyle={{ textAlign: "center", color: "#0091ff" }}
          topDivider={true}
          bottomDivider={true}
          title={"Share Nadle"}
          onPress={() => ShareIt("https://nadle.io")}
        />
      </Margintop>
    </ViewFlex>
  );
}

export default ShareNadle;
