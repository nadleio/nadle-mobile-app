import React, { useState } from "react";
import { StatusBar, ScrollView, View } from "react-native";

import { SafeAreaView } from "react-navigation";

import { ViewFlex } from "../../assets/styles/styles";
import { Images, ImageContent } from "../../assets/styles/Image";
import { Padding, Row, TextContent } from "./style";

import { Information } from "../../components/Text";
import { Header } from "../../components/Header";
import { Subscribe } from "../../components/Subscribe";

import json from "../../json/subscriptions";

import CARLOS from "../../assets/img/pp.jpg";

function Subscriptions(props) {
  const [subscribe, setSubscribe] = useState([]);

  function goProfile(id) {
    props.navigation.navigate("SearchProfile", {
      id: id
    });
  }

  function subscribeFunc(i) {
    const text = [...subscribe];
    text[i] = subscribe[i] ? false : true;
    setSubscribe(text);
  }
  return (
    <ViewFlex>
      <SafeAreaView backgroundColor="white" />
      <StatusBar barStyle="dark-content" />
      <Header
        backBool={true}
        back={() => props.navigation.goBack()}
        text={props.navigation.state.params.type}
      />

      <ScrollView>
        {json.map((data, i) => {
          subscribe.push(data.subscribed);
          var text = subscribe[i] ? "subscribed" : "subscribe";
          return (
            <Padding>
              <Row>
                <Images radius={20} height={40} width={40} source={CARLOS} />

                <TextContent onPress={() => goProfile(1)}>
                  <Information
                    numberOfLines={1}
                    size={16}
                    left={5}
                    weight="600"
                  >
                    {data.name}
                  </Information>

                  <Information size={14} left={5} color="#5c5c5c" weight="600">
                    {data.username}
                  </Information>
                </TextContent>

                <View>
                  <Subscribe onPress={() => subscribeFunc(i)}>
                    <Information color="white" size={14}>
                      {text}
                    </Information>
                  </Subscribe>
                </View>
              </Row>
            </Padding>
          );
        })}
      </ScrollView>
    </ViewFlex>
  );
}
export default Subscriptions;
