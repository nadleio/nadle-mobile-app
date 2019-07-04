import React, { useState } from "react";
import {
  StatusBar,
  ScrollView,
  ProgressViewIOS,
  ProgressBarAndroid,
  Platform,
  View,
  TouchableOpacity
} from "react-native";

import YouTube from "react-native-youtube";
import { SafeAreaView } from "react-navigation";

import {
  PaddingBox,
  HeaderIcons,
  NameContent,
  BoxesContent,
  Repos,
  ClapsContent,
  PostContentPadding,
  styles,
  HeaderIconsTouchable
} from "./style";

import { ViewFlex, Margin } from "../../assets/styles/styles";
import { Images, ImageContent } from "../../assets/styles/Image";

import { Information, Title } from "../../components/Text";
import { Preview } from "../../components/markdown/Preview";
import { Hashtags } from "../../components/Hashtags";
import { Header } from "../../components/Header";
import { PreviewPost } from "../../components/PreviewPost";
import { ShareIt } from "../../lib/utils/Share";

import PAISAJE from "../../assets/img/paisaje.png";
import COMMENT from "../../assets/img/chat.png";
import JHOVANNA from "../../assets/img/jhovanna.jpg";
import SHARE from "../../assets/img/share.png";
import BOOKMARK from "../../assets/img/bookmark.png";
import BOOKMARKFILLED from "../../assets/img/bookmarkFilled.png";
import CLAP from "../../assets/img/clapping.png";
import CLAPFILLIED from "../../assets/img/clapFilled.png";
import BOOK from "../../assets/img/book.png";
import ISSUE from "../../assets/img/issue.png";
import YOUTUBE from "../../assets/img/youtube.png";

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
`;

function Post(props) {
  const [height, setHeight] = useState(0);
  const [scrollContent, setScrollContent] = useState(0);
  const [progress_count, setProgress_count] = useState(0);
  const HashtagsArr = ["NodeJS", "React", "React Native", "Vue", "Javascript"];
  const [clap, setClap] = useState({ filled: false, count: 239 });
  const [save, setSave] = useState(false);

  function UpdateProgressBar(progress) {
    setProgress_count(
      Math.abs(progress.nativeEvent.contentOffset.y / (scrollContent - height))
    );
  }

  function setClapFunc() {
    clap.filled
      ? setClap({ filled: false, count: clap.count - 1 })
      : setClap({ filled: true, count: clap.count + 1 });
  }
  return (
    <ViewFlex paddingBottom="0">
      <SafeAreaView backgroundColor="white" />
      <StatusBar barStyle="dark-content" />

      <Header
        backBool={true}
        back={() => props.navigation.goBack()}
        buttons={
          <HeaderIcons>
            <HeaderIconsTouchable
              onPress={() => (save ? setSave(false) : setSave(true))}
            >
              <Images
                height={18}
                width={18}
                source={save ? BOOKMARKFILLED : BOOKMARK}
              />
            </HeaderIconsTouchable>

            <HeaderIconsTouchable>
              <Images height={18} width={18} source={ISSUE} />
            </HeaderIconsTouchable>

            <HeaderIconsTouchable onPress={() => ShareIt("https://nadle.io")}>
              <Images height={18} width={18} source={SHARE} />
            </HeaderIconsTouchable>
          </HeaderIcons>
        }
      />

      {Platform.OS === "android" ? (
        <ProgressBarAndroid
          styleAttr="Horizontal"
          progress={progress_count}
          color="#833fff"
          indeterminate={false}
          style={{ width: "100%" }}
        />
      ) : (
        <ProgressViewIOS
          progressTintColor="#833fff"
          style={{ width: "100%" }}
          progress={progress_count}
        />
      )}

      <ScrollView
        onContentSizeChange={(width, height) => {
          setScrollContent(height);
        }}
        onScroll={UpdateProgressBar}
        onLayout={event => setHeight(event.nativeEvent.layout.height)}
        scrollEventThrottle={12}
      >
        <PaddingBox>
          <NameContent>
            <ImageContent height={32} width={32} radius={16}>
              <Images radius={14} height={28} width={28} source={JHOVANNA} />
            </ImageContent>

            <View>
              <Information
                left={5}
                size={14}
                color="black"
                weight="600"
                onPress={() =>
                  props.navigation.push("SearchProfile", {
                    id: 2
                  })
                }
              >
                Ricardo Malagon •{" "}
                <Information size={12} weight="normal">
                  17 July, 2019
                </Information>
              </Information>

              <Information
                left={5}
                size={13}
                top={2}
                color="black"
                weight="400"
              >
                Published in{" "}
                <Information color="#0091ff" size={13} weight="400">
                  @react
                </Information>
              </Information>
            </View>
          </NameContent>

          <Title top={15}>How to release on React Native project</Title>

          <Information size={16} top={5} color="black">
            A project to shoe how to release on the react native project in ios
            and android
          </Information>

          <Margin top={5}>
            <Images radius={8} height={250} width="100%" source={PAISAJE} />
          </Margin>

          <Margin top={10}>
            <Preview content={copy} />
          </Margin>

          <ClapsContent margintop={20}>
            <TouchableOpacity onPress={() => setClapFunc()}>
              <Images
                height={20}
                width={20}
                source={clap.filled ? CLAPFILLIED : CLAP}
              />
            </TouchableOpacity>
            <Information
              size={14}
              color="black"
              weight="400"
              left={5}
              right={20}
            >
              {clap.count} claps
            </Information>

            <Images height={20} width={20} source={COMMENT} />

            <Information size={14} color="#0091ff" weight="400" left={5}>
              239 comments
            </Information>
          </ClapsContent>

          <BoxesContent>
            <Information size={16} bottom={5} color="black" weight="bold">
              Hashtags
            </Information>

            <Hashtags data={HashtagsArr} />
          </BoxesContent>

          <BoxesContent>
            <Information
              size={16}
              bottom={Platform.OS === "android" ? 5 : 15}
              color="black"
              weight="bold"
            >
              Youtube videos
            </Information>

            {Platform.OS === "android" ? (
              <Repos>
                <NameContent>
                  <Images height={20} width={20} source={YOUTUBE} />

                  <Information
                    onPress={() =>
                      props.navigation.navigate("YoutubeForAndroid", {
                        id: "liJVSwOiiwg"
                      })
                    }
                    size={16}
                    left={5}
                    color="black"
                    weight="400"
                  >
                    Youtube video name
                  </Information>
                </NameContent>
              </Repos>
            ) : (
              <ScrollView
                horizontal={true}
                showsHorizontalScrollIndicator={false}
              >
                <YouTube
                  videoId="liJVSwOiiwg"
                  apiKey="AIzaSyDyv4wRUVFNL8zPTZuRMkovLhhRBznrp08"
                  play={false}
                  fullscreen={true}
                  loop={false}
                  resumePlayAndroid={false}
                  style={styles.youtube}
                />
              </ScrollView>
            )}
          </BoxesContent>

          <BoxesContent>
            <Information size={16} bottom={5} color="black" weight="bold">
              Repositories
            </Information>

            <Repos>
              <NameContent>
                <Images height={18} width={18} source={BOOK} />

                <Information size={16} left={5} color="black" weight="400">
                  Repo name
                </Information>
              </NameContent>
            </Repos>

            <Repos>
              <NameContent>
                <Images height={18} width={18} source={BOOK} />

                <Information size={16} left={5} color="black" weight="400">
                  Repo name
                </Information>
              </NameContent>
            </Repos>
          </BoxesContent>

          <BoxesContent line="white">
            <Information size={16} bottom={5} color="black" weight="bold">
              Recomendaded for you
            </Information>

            <PostContentPadding>
              <PreviewPost
                title="How to get better in your React Native code"
                name="Ricardo Malagon"
                date="10 of march"
                hashtags={["React Native", "React", "GraphQl", "NodeJS", "5+"]}
                viewPost={() =>
                  props.navigation.push("Post", {
                    id: 2
                  })
                }
              />
            </PostContentPadding>
          </BoxesContent>
        </PaddingBox>
      </ScrollView>
    </ViewFlex>
  );
}

export default Post;
