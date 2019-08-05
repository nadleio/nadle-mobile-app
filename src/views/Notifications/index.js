import React from "react";
import { StatusBar, ScrollView, View } from "react-native";
import { SafeAreaView } from "react-navigation";

import { ViewFlex } from "../../assets/styles/styles";
import { SmallImageProfile, Images } from "../../assets/styles/Image";
import {
  PaddingBox,
  Row,
  IconCenter,
  TextContent,
  IconBackground
} from "./styled";

import { Information } from "../../components/Text";
import { Icon } from "../../components/Icon";
import { Header } from "../../components/Header";

import SUBS from "../../assets/img/subs-white.png";

function Notifications(props) {
  return (
    <ViewFlex paddingBottom="0">
      <SafeAreaView backgroundColor="white" />
      <StatusBar barStyle="dark-content" />

      <ScrollView>
        <Header
          backBool={true}
          back={() => props.navigation.goBack()}
          text="Notifications"
        />

        <PaddingBox>
          <Row>
            <View>
              <SmallImageProfile
                source={{
                  uri:
                    "https://nadle-assets.nyc3.digitaloceanspaces.com/pp-2.jpg"
                }}
              />
            </View>

            <TextContent>
              <Information size={16} left={5}>
                <Information
                  onPress={() =>
                    props.navigation.navigate("SearchProfile", {
                      id: 2
                    })
                  }
                  size={16}
                  weight="600"
                >
                  ricardo
                </Information>{" "}
                subscribed on your profile
              </Information>

              <IconCenter>
                <IconBackground background="#833fff">
                  <Images height={14} width={14} source={SUBS} />
                </IconBackground>

                <Information
                  weight="600"
                  color="#bdbdbd"
                  size={12}
                  left={5}
                  top={4}
                >
                  4H ago
                </Information>
              </IconCenter>
            </TextContent>
          </Row>
        </PaddingBox>

        <PaddingBox>
          <Row>
            <View>
              <Images
                radius={20}
                height={40}
                width={40}
                source={{
                  uri:
                    "https://nadle-assets.nyc3.digitaloceanspaces.com/pp-2.jpg"
                }}
              />
            </View>

            <TextContent>
              <Information size={16} left={5}>
                <Information
                  onPress={() =>
                    props.navigation.navigate("SearchProfile", {
                      id: 2
                    })
                  }
                  size={16}
                  weight="600"
                >
                  ricardomalagon
                </Information>{" "}
                subscribed on your profile
              </Information>

              <IconCenter>
                <IconBackground background="#833fff">
                  <Images height={14} width={14} source={SUBS} />
                </IconBackground>

                <Information
                  weight="600"
                  color="#bdbdbd"
                  size={12}
                  left={5}
                  top={4}
                >
                  4H ago
                </Information>
              </IconCenter>
            </TextContent>
          </Row>
        </PaddingBox>

        <PaddingBox>
          <Row>
            <Images
              radius={20}
              height={40}
              width={40}
              source={{
                uri:
                  "https://nadle-assets.nyc3.digitaloceanspaces.com/paisaje.png"
              }}
            />

            <TextContent>
              <Information size={16} color="black" left={5}>
                <Information size={16} color="black" weight="600">
                  carlos
                </Information>{" "}
                Let you a comment on your post{" "}
                <Information size={16} color="black" weight="600">
                  How to release on react native
                </Information>
              </Information>

              <IconCenter>
                <IconBackground background="#ff4986">
                  <Icon color="white" size={14}>
                    
                  </Icon>
                </IconBackground>

                <Information
                  weight="600"
                  color="#bdbdbd"
                  size={12}
                  left={5}
                  top={4}
                >
                  4H ago
                </Information>
              </IconCenter>
            </TextContent>
          </Row>
        </PaddingBox>

        <PaddingBox>
          <Row>
            <Images
              radius={20}
              height={40}
              width={40}
              source={{
                uri: "https://nadle-assets.nyc3.digitaloceanspaces.com/pp-2.jpg"
              }}
            />

            <TextContent>
              <Information size={16} color="black" left={5}>
                <Information size={16} color="black" weight="600">
                  carlos
                </Information>{" "}
                clap you on your post{" "}
                <Information size={16} color="black" weight="600">
                  How to release on react native
                </Information>
              </Information>

              <IconCenter>
                <IconBackground background="#ff8d52">
                  <Icon size={14} color="white">
                    
                  </Icon>
                </IconBackground>

                <Information
                  weight="600"
                  color="#bdbdbd"
                  size={12}
                  left={5}
                  top={4}
                >
                  4H ago
                </Information>
              </IconCenter>
            </TextContent>
          </Row>
        </PaddingBox>

        <PaddingBox>
          <Row>
            <Images
              radius={20}
              height={40}
              width={40}
              source={{
                uri: "https://nadle-assets.nyc3.digitaloceanspaces.com/pp-2.jpg"
              }}
            />

            <TextContent>
              <Information size={16} color="black" left={5}>
                <Information size={16} color="black" weight="600">
                  carlos
                </Information>{" "}
                bought your post{" "}
                <Information size={16} color="black" weight="600">
                  How to release on react native
                </Information>
              </Information>

              <IconCenter>
                <IconBackground background="#1BCE33">
                  <Icon size={14} color="white">
                    
                  </Icon>
                </IconBackground>

                <Information
                  weight="600"
                  color="#bdbdbd"
                  size={12}
                  left={5}
                  top={4}
                >
                  4H ago
                </Information>
              </IconCenter>
            </TextContent>
          </Row>
        </PaddingBox>
      </ScrollView>
    </ViewFlex>
  );
}

export default Notifications;
