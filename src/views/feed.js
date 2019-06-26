import React, { useState, useEffect, useRef } from "react";
import { StatusBar, ScrollView, View, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-navigation";

import { ViewFlex, Margin } from "../assets/styles/styles";
import { Images, ImageContent, ImageBackground } from "../assets/styles/Image";
import { Information } from "../components/Text";
import { ShareIt } from "../lib/utils/Share";

import json from "../json/feed";

import {
  PaddingBox,
  ActivityBox,
  Row,
  FlexRow,
  JustifyCenter,
  PaddingHorizontal,
  SpaceBetween,
  RecentActivityCount,
  SmallCircle,
  ContentBox,
  CommentLine,
  ActivityBoxSeccion,
  ClapBox
} from "../assets/styles/feed";

import * as Animatable from "react-native-animatable";
import Swiper from "react-native-swiper";
import ActionSheet from "react-native-actionsheet";

import FULL_LOGO from "../assets/img/full-logo-color.png";
import DEFAULT from "../assets/img/default.jpg";
import PAISAJE from "../assets/img/paisaje.png";
import SHARE from "../assets/img/share.png";
import CLAPPING from "../assets/img/clapping.png";
import BOOKMARK from "../assets/img/bookmark.png";
import BOOKMARKFILLED from "../assets/img/bookmarkFilled.png";
import CHAT from "../assets/img/chat.png";
import OPTIONS from "../assets/img/options.png";
import PREMIUM from "../assets/img/premium.png";
import CARLOS from "../assets/img/pp.jpg";
import CODE from "../assets/img/code.jpg";
import VUE from "../assets/img/vue2.jpg";
import FLUTTER from "../assets/img/flutter.jpg";
import JHOVANNA from "../assets/img/jhovanna.jpg";
import VISQUEL from "../assets/img/pp-1.jpg";
import DANIEL from "../assets/img/pp-2.jpg";
import CLAPFILLIED from "../assets/img/clapFilled.png";

function Feed(props) {
  const [colors, SetColor] = useState(["#7b44ff", "#d6d6d6", "#d6d6d6"]);
  const [animation, setAnimation] = useState([]);
  const [save, setSave] = useState([]);
  const [images, setImages] = useState([]);

  const photos = [VUE, PAISAJE, CODE, FLUTTER]; // esto se tiene que eliminar al momento de traer las fotos
  const photosProfile = [DEFAULT, JHOVANNA, DANIEL, VISQUEL];
  const [id, setId] = useState();
  const inputRef = useRef("refComponent");

  function setAnimatableTrue(i) {
    if (images[i] == CLAPPING) {
      setAnimationFunc(true, i);
      setTimeout(setAnimatableFalse.bind(i), 1000);
    }

    const newImages = [...images];
    newImages[i] = images[i] == CLAPPING ? CLAPFILLIED : CLAPPING;
    setImages(newImages);
  }

  function setAnimatableFalse(i) {
    setAnimationFunc(false, i);
  }

  function setAnimationFunc(value, i) {
    const newAnimation = [...animation];
    newAnimation[i] = value;
    setAnimation(newAnimation);
  }

  function savePost(i) {
    const newSave = [...save];
    newSave[i] = save[i] == BOOKMARK ? BOOKMARKFILLED : BOOKMARK;
    setSave(newSave);
  }

  function changeColor(index) {
    switch (index) {
      case 0:
        SetColor(["#7b44ff", "#d6d6d6", "#d6d6d6"]);
        break;
      case 1:
        SetColor(["#d6d6d6", "#7b44ff", "#d6d6d6"]);
        break;
      case 2:
        SetColor(["#d6d6d6", "#d6d6d6", "#7b44ff"]);
        break;
    }
  }

  function showActionSheet(id) {
    setId(id);
    this.ActionSheet.show();
  }

  report = index => {
    index == 0 && console.log(index, id);
  };

  useEffect(() => {
    props.navigation.setParams({
      scrollToTop: this._scrollToTop
    });

    json[0].map(data => {
      data.clapped ? images.push(CLAPFILLIED) : images.push(CLAPPING);
      data.saved ? save.push(BOOKMARKFILLED) : save.push(BOOKMARK);
      animation.push(false);
    });

    setImages(images);
    setAnimation(animation);
  }, []);

  _scrollToTop = () => {
    inputRef.current.scrollTo({ x: 0, y: 0, animated: true });
  };

  return (
    <ViewFlex paddingBottom="0">
      <SafeAreaView backgroundColor="white" />
      <StatusBar barStyle="dark-content" />

      <ScrollView ref={inputRef}>
        <PaddingBox>
          <Images height={40} width={133} source={FULL_LOGO} />
        </PaddingBox>
        <ActivityBoxSeccion>
          <FlexRow>
            <Information weight="600" color="black" size={16}>
              Activity
            </Information>

            <RecentActivityCount>
              <Information align="center" color="white" size={10}>
                +2
              </Information>
            </RecentActivityCount>

            <SmallCircle color={colors[0]} />
            <SmallCircle color={colors[1]} />
            <SmallCircle color={colors[2]} />
          </FlexRow>
        </ActivityBoxSeccion>

        <Swiper
          height={112}
          onIndexChanged={index => changeColor(index)}
          loop={false}
          showsPagination={false}
          index={0}
        >
          {json[1].map(data => (
            <View paddingHorizontal="5%">
              <PaddingBox background="#f4f4f4" radius={8} height={112}>
                <SpaceBetween>
                  <Information weight="600" color="black" size={16}>
                    {data.fromReply}
                  </Information>

                  <Information weight="600" color="#bdbdbd" size={11}>
                    4H ago
                  </Information>
                </SpaceBetween>

                <Information color="#43485e" size={14} top={7}>
                  Replied to{" "}
                  <Information weight="bold">{data.toReply}</Information> in a
                  post
                </Information>

                <Information
                  numberOfLines={2}
                  color="#43485e"
                  size={14}
                  top={4}
                >
                  {data.body}
                </Information>
              </PaddingBox>
            </View>
          ))}
        </Swiper>

        {json[0].map((data, i) => {
          return (
            <View>
              <Margin top={10} key={i}>
                <ActivityBox>
                  <Row>
                    <JustifyCenter>
                      <ImageContent height={45} width={45} radius={22.5}>
                        <Images
                          radius={20}
                          height={40}
                          width={40}
                          source={photosProfile[i]}
                        />
                      </ImageContent>

                      <CommentLine />
                    </JustifyCenter>

                    <ContentBox>
                      <SpaceBetween>
                        <FlexRow>
                          <TouchableOpacity onPress={() => alert(data.id)}>
                            <Information weight="600" color="black" size={16}>
                              {data.name}
                            </Information>
                          </TouchableOpacity>

                          <Information
                            left={5}
                            weight="600"
                            color="#bdbdbd"
                            size={12}
                          >
                            • {data.postHour}
                          </Information>
                        </FlexRow>

                        <FlexRow>
                          <Margin right={5}>
                            <Images height={20} width={20} source={PREMIUM} />
                          </Margin>

                          <TouchableOpacity
                            onPress={() => showActionSheet(data.id)}
                          >
                            <Images height={18} width={18} source={OPTIONS} />
                          </TouchableOpacity>
                        </FlexRow>
                      </SpaceBetween>

                      <Information
                        numberOfLines={2}
                        color="black"
                        size={16}
                        top={3}
                      >
                        {data.title}
                      </Information>

                      <Information
                        numberOfLines={2}
                        color="#5c5c5c"
                        size={14}
                        top={4}
                      >
                        {data.description}
                      </Information>

                      <TouchableOpacity>
                        <Margin top={4}>
                          <ImageBackground
                            radius={8}
                            height={200}
                            width="100%"
                            source={photos[i]}
                          />
                        </Margin>
                      </TouchableOpacity>

                      <Margin top={7}>
                        <PaddingHorizontal>
                          <SpaceBetween>
                            <FlexRow>
                              {animation[i] && (
                                <Animatable.View
                                  animation="fadeOutUp"
                                  iterationCount={1}
                                  direction="alternate"
                                  key={i}
                                >
                                  <ClapBox>
                                    <Images
                                      height={20}
                                      width={20}
                                      source={CLAPPING}
                                    />
                                  </ClapBox>
                                </Animatable.View>
                              )}

                              <TouchableOpacity
                                onPress={() => setAnimatableTrue(i)}
                              >
                                <Images
                                  height={20}
                                  width={20}
                                  source={images[i]}
                                />
                              </TouchableOpacity>

                              <Information color="#5c5c5c" size={12} left={5}>
                                {data.claps}
                              </Information>
                            </FlexRow>

                            <FlexRow>
                              <TouchableOpacity onPress={() => alert(data.id)}>
                                <Images height={18} width={18} source={CHAT} />
                              </TouchableOpacity>

                              <Information color="#5c5c5c" size={12} left={5}>
                                {data.comments}
                              </Information>
                            </FlexRow>

                            <TouchableOpacity onPress={() => savePost(i)}>
                              <Images height={18} width={18} source={save[i]} />
                            </TouchableOpacity>

                            <TouchableOpacity onPress={() => ShareIt(data.url)}>
                              <Images height={19} width={19} source={SHARE} />
                            </TouchableOpacity>
                          </SpaceBetween>
                        </PaddingHorizontal>
                      </Margin>
                    </ContentBox>
                  </Row>

                  <Row>
                    <ImageContent height={45} width={45} radius={22.5}>
                      <Images
                        radius={20}
                        height={40}
                        width={40}
                        source={CARLOS}
                      />
                    </ImageContent>

                    <ContentBox>
                      <SpaceBetween>
                        <FlexRow>
                          <TouchableOpacity onPress={() => alert(data.id)}>
                            <Information weight="600" color="black" size={16}>
                              {data.commentUser}
                            </Information>
                          </TouchableOpacity>

                          <Information
                            left={5}
                            weight="600"
                            color="#bdbdbd"
                            size={12}
                          >
                            • {data.commetHour}
                          </Information>
                        </FlexRow>
                      </SpaceBetween>

                      <Information
                        numberOfLines={2}
                        color="#5c5c5c"
                        size={14}
                        top={3}
                      >
                        {data.commentContent}
                      </Information>

                      <TouchableOpacity onPress={() => alert(data.id)}>
                        <Information
                          weight="500"
                          color="#0091ff"
                          size={15}
                          top={8}
                        >
                          View comments
                        </Information>
                      </TouchableOpacity>
                    </ContentBox>
                  </Row>
                </ActivityBox>
              </Margin>
            </View>
          );
        })}
      </ScrollView>

      <ActionSheet
        ref={o => (this.ActionSheet = o)}
        options={["Report", "Cancel"]}
        cancelButtonIndex={1}
        destructiveButtonIndex={1}
        onPress={index => {
          report(index);
        }}
      />
    </ViewFlex>
  );
}

export default Feed;
