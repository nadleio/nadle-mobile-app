import React, { useState } from "react";

import { StatusBar, TextInput, Text } from "react-native";
import { SafeAreaView } from "react-navigation";

import { Preview } from "../components/markdown/Preview";
import { ViewFlex } from "../assets/styles/styles";
import axios from "axios";

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

![](https://img.youtube.com/vi/dQw4w9WgXcQ/0.jpg)

| Option | Description | klk |
| --- | ----------- | --- |
| data   | path to data files to supply the data that will be passed into templates. | ergfeferf |
| engine | engine to be used for processing templates. Handlebars is the default. | ergfeferf |
| ext    | extension to be used for dest files. | ergfeferf |

![](https://media3.giphy.com/avatars/default2.gif)
![](https://media.giphy.com/media/dkGhBWE3SyzXW/giphy.gif)

![](https://media3.giphy.com/media/qg5pk8s2h5kJy/giphy.gif?cid=a149c4115cf16855773764512e5ab82f&rid=giphy.gif)

![](https://media.giphy.com/media/5GoVLqeAOo6PK/giphy.gif)
`;

function Feed2() {
  // function login() {
  //   axios
  //     .get(
  //       `https://github.com/login/oauth/authorize?client_id=4529929638e8cb89d67c&redirect_uri=http://localhost:8081`
  //     )
  //     .then(request => {
  //       console.log(request.data);
  //     });
  // }
  const [text, setTxt] = useState("");

  return (
    <ViewFlex paddingBottom="0" paddingHorizontal={20}>
      <SafeAreaView backgroundColor="white" />
      <StatusBar barStyle="dark-content" />

      {/* <TextInput>
        <Text>
          <Text>**</Text>
          <Text style={{ fontWeight: "bold" }}>I'm bold</Text>
          <Text>**</Text>
        </Text>
      </TextInput> */}
      {/* 
      <TextInput
        style={{ height: 40 }}
        placeholder="Type here to translate!"
        onChangeText={text => setTxt(text)}
        multiline
      >
        <Text style={{ padding: 10, fontSize: 42 }}>
          {text.split("**").map(word => word && <Text>hola</Text>)}
        </Text>
      </TextInput> */}

      <Preview content={copy} />
    </ViewFlex>
  );
}

Feed2.navigationOptions = { header: null };
export default Feed2;
