import React, { useState } from "react";
import { StatusBar, ScrollView } from "react-native";

import Collapsible from "react-native-collapsible";
import { SafeAreaView } from "react-navigation";
import DialogInput from "react-native-dialog-input";

import { Header } from "../../components/Header";
import { TextInput } from "../../components/form/Input";
import { Images, ImageBackground } from "../../assets/styles/Image";
import { Information } from "../../components/Text";
import { Icon } from "../../components/Icon";
import { Photo } from "../../components/Photo";
import { ViewFlex } from "../../assets/styles/styles";
import { Button } from "../../components/Button";

import {
  Padding,
  Organization,
  CollapsedContainer,
  AssetsContainer,
  RemoveImageContainer,
  ModalStyle,
  Row,
  MarginLeft
} from "./styled";

function MarkdownForm(props) {
  const [postInfo, setPostInfo] = useState({
    title: "",
    description: "",
    organization: "Pick your organization",
    image: null
  });

  const [organizationTextColor, setOrganizationTextColor] = useState("#bcbcc2");
  const [collapsed, setCollapsed] = useState(true);
  const [youtube, setYoutube] = useState(false);
  const [youtubeVideo, setYoutubeVideo] = useState([]);

  function photo() {
    Photo().then(image => {
      if (image != "error") {
        setPostInfo(prevState => {
          return { ...prevState, image: image };
        });
      }
    });
  }

  function youtubeVideoFunc(video) {
    if (video !== "") {
      setYoutubeVideo([...youtubeVideo, video]);
      setYoutube(false);
    }
  }

  function removeVideo(i) {
    var removed = youtubeVideo;
    removed.splice(i, 1);
    setYoutubeVideo([...removed]);
    //#2f5de9
  }

  return (
    <ViewFlex>
      <SafeAreaView backgroundColor="white" />
      <StatusBar barStyle="dark-content" />
      <Header
        backBool={true}
        back={() => props.navigation.goBack()}
        text="Post info"
      />

      <ScrollView>
        <Padding>
          <TextInput
            onChangeText={text => {
              setPostInfo(prevState => {
                return { ...prevState, title: text };
              });
            }}
            placeholder="Title"
            ref={input => {
              this.title = input;
            }}
            returnKeyType="next"
          />
          <TextInput
            onChangeText={text => {
              setPostInfo(prevState => {
                return { ...prevState, description: text };
              });
            }}
            placeholder="Description"
            top={10}
            ref={input => {
              this.description = input;
            }}
            returnKeyType="next"
            multiline={true}
          />
          <CollapsedContainer onPress={() => setCollapsed(!collapsed)}>
            <Information color={organizationTextColor} bottom={10} size={16}>
              {postInfo.organization}
            </Information>
          </CollapsedContainer>
          <Collapsible collapsed={collapsed} align="center">
            <Organization
              onPress={() => {
                setOrganizationTextColor("black");
                setPostInfo(prevState => {
                  return { ...prevState, organization: "Microsoft" };
                });
                setCollapsed(!collapsed);
              }}
            >
              <Images
                height={22}
                width={22}
                radius={4}
                source={{
                  uri:
                    "https://nadle-assets.nyc3.digitaloceanspaces.com/paisaje.png"
                }}
              />
              <Information size={16} left={10}>
                Microsoft
              </Information>
            </Organization>
          </Collapsible>
          <Information bottom={15} weight="500" top={15} size={16}>
            Image
          </Information>
          {postInfo.image == null ? (
            <AssetsContainer onPress={() => photo()}>
              <Icon color="grey" size={22}>
                
              </Icon>
            </AssetsContainer>
          ) : (
            <ImageBackground
              height={250}
              width="100%"
              radius={8}
              source={{
                uri: `data:${postInfo.image.mime};base64,${postInfo.image.data}`
              }}
            >
              <RemoveImageContainer
                onPress={() =>
                  setPostInfo(prevState => {
                    return { ...prevState, image: null };
                  })
                }
              >
                <Icon color="red" size={22}>
                  
                </Icon>
              </RemoveImageContainer>
            </ImageBackground>
          )}
          <Information bottom={15} top={15} weight="500" top={15} size={16}>
            Youtube videos
          </Information>

          <Row>
            <ScrollView
              horizontal={true}
              showsHorizontalScrollIndicator={false}
            >
              <AssetsContainer onPress={() => setYoutube(true)}>
                <Icon color="grey" size={22}>
                  
                </Icon>
              </AssetsContainer>

              {youtubeVideo.map((data, i) => {
                return (
                  <MarginLeft id={i}>
                    <ImageBackground
                      height={100}
                      width={100}
                      radius={8}
                      source={{
                        uri: `https://img.youtube.com/vi/${data}/default.jpg`
                      }}
                    >
                      <RemoveImageContainer onPress={() => removeVideo(i)}>
                        <Icon color="red" size={22}>
                          
                        </Icon>
                      </RemoveImageContainer>
                    </ImageBackground>
                  </MarginLeft>
                );
              })}
            </ScrollView>
          </Row>

          {youtube && (
            <ModalStyle>
              <DialogInput
                isDialogVisible={props.visible}
                title={"Youtube video"}
                message={"Put your youtube video ID"}
                hintInput={"SvO3jKeBCRM"}
                dialogStyle={{
                  backgroundColor: "white",
                  borderWidth: 1,
                  borderColor: "#cccccc"
                }}
                submitInput={inputText => {
                  youtubeVideoFunc(inputText);
                }}
                closeDialog={() => {
                  setYoutube(false);
                }}
              />
            </ModalStyle>
          )}

          <Button
            haveIcon={false}
            disabled={false}
            text="POST IT!"
            top={30}
            color={["#2f5de9", "#2f5de9"]}
            borderColor="#2f5de9"
            TextColor="white"
          />
        </Padding>
      </ScrollView>
    </ViewFlex>
  );
}

export default MarkdownForm;
