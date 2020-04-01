import React, { useState } from "react";
import { ScrollView, View } from "react-native";
import styled, { withTheme } from "styled-components";
import { SafeAreaView } from "react-navigation";

import Header from "../../components/Post/Header";
import BottomBar from "../../components/Post/BottomBar";
import MarkDownView from "../../components/markdown/Preview/MarkDownView";
import PostInfo from "../../components/Post/PostInfo";

import FadeInView from "../../components/AnimateView";

const copy = `
# ~~1 Heading~~ **8-)**
## h2 Heading 8-)
### h3 **Heading 8-)**

_klktudice_

__subrayado__

~~This was mistaken text~~

enter [github](https://youtube.com)
* ::because it lets us do simple formatting:: **easily**

- George Washington
- John Adams
- Thomas Jefferson

1. ricardo
2. malagon
    * mixed

~~~~
console.log("hello word");
~~~~

- [] list syntax required (any unordered or ordered list supported)
- [x] this is a complete item

[link to Google!](http://google.com)

[@ricardos](https://twitter.com/ricardom16)

> This is a blockquote
---


| Option | Description | klk |
| --- | ----------- | --- |
| data   | path to data files to supply the data that will be passed into templates. | ergfeferf |
| engine | engine to be used for processing templates. Handlebars is the default. | ergfeferf |
| ext    | extension to be used for dest files. | ergfeferf |
`;

const Container = styled.View`
  flex: 1;
  background-color: ${props => props.theme.styled.BACKGROUND};
`;

const Cover = styled.Image`
  height: 250px;
  background-color: #f4f4f4;
`;

function Post({ navigation, theme }) {
  return (
    <SafeAreaView
      style={{ flex: 1 }}
      backgroundColor={theme.styled.BOX_BACKGROUND}
    >
      <Container>
        <Header isVisible={true} back={() => navigation.goBack()} />

        <FadeInView>
          <ScrollView contentOffset={{ x: 0, y: 110 }}>
            <Cover source={{ uri: "https://source.unsplash.com/random" }} />

            <View style={{ margin: 16 }}>
              <PostInfo />
              <MarkDownView content={copy} />
            </View>
          </ScrollView>
        </FadeInView>

        <BottomBar />
      </Container>
    </SafeAreaView>
  );
}

export default withTheme(Post);
