import React from "react";
import { StatusBar, ScrollView } from "react-native";
import { SafeAreaView } from "react-navigation";

import { ViewFlex, Margin } from "../../assets/styles/styles";
import { Images, ImageContent } from "../../assets/styles/Image";
import {
  PaddingBox,
  Row,
  IconCenter,
  TextContent,
  IconBackground
} from "./style";
import { Information } from "../../components/Text";

import PAISAJE from "../../assets/img/paisaje.png";
import CARLOS from "../../assets/img/pp.jpg";
import COMMENT from "../../assets/img/comment-white.png";
import JHOVANNA from "../../assets/img/jhovanna.jpg";
import MONEY from "../../assets/img/money.png";
import CLAP from "../../assets/img/clapping-white.png";
import SUBS from "../../assets/img/subs-white.png";

function Notifications(props) {
  return (
    <ViewFlex paddingBottom="0">
      <SafeAreaView backgroundColor="white" />
      <StatusBar barStyle="dark-content" />

      <ScrollView>
        <Margin top={5}>
          <PaddingBox>
            <Row>
              <ImageContent height={45} width={45} radius={22.5}>
                <Images radius={20} height={40} width={40} source={CARLOS} />
              </ImageContent>

              <TextContent>
                <Information size={16} color="black" left={5}>
                  <Information
                    onPress={() =>
                      props.navigation.navigate("SearchProfile", {
                        id: 2
                      })
                    }
                    size={16}
                    color="black"
                    weight="600"
                  >
                    ricardo
                  </Information>{" "}
                  subscribed on your Nadle profile
                </Information>
              </TextContent>
            </Row>

            <Margin left={23}>
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
            </Margin>
          </PaddingBox>

          <PaddingBox>
            <Row>
              <ImageContent height={45} width={45} radius={22.5}>
                <Images radius={20} height={40} width={40} source={PAISAJE} />
              </ImageContent>

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
              </TextContent>
            </Row>

            <Margin left={23}>
              <IconCenter>
                <IconBackground background="#ff4986">
                  <Images height={14} width={14} source={COMMENT} />
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
            </Margin>
          </PaddingBox>

          <PaddingBox>
            <Row>
              <ImageContent height={45} width={45} radius={22.5}>
                <Images radius={20} height={40} width={40} source={JHOVANNA} />
              </ImageContent>

              <TextContent>
                <Information size={16} color="black" left={5}>
                  <Information size={16} color="black" weight="600">
                    ricardomalagon
                  </Information>{" "}
                  subscribed on your profile
                </Information>
              </TextContent>
            </Row>

            <Margin left={23}>
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
            </Margin>
          </PaddingBox>

          <PaddingBox>
            <Row>
              <ImageContent height={45} width={45} radius={22.5}>
                <Images radius={20} height={40} width={40} source={CARLOS} />
              </ImageContent>

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
              </TextContent>
            </Row>

            <Margin left={23}>
              <IconCenter>
                <IconBackground background="#ff8d52">
                  <Images height={14} width={14} source={CLAP} />
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
            </Margin>
          </PaddingBox>

          <PaddingBox>
            <Row>
              <ImageContent height={45} width={45} radius={22.5}>
                <Images radius={20} height={40} width={40} source={CARLOS} />
              </ImageContent>

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
              </TextContent>
            </Row>

            <Margin left={23}>
              <IconCenter>
                <IconBackground background="#1BCE33">
                  <Images height={14} width={14} source={MONEY} />
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
            </Margin>
          </PaddingBox>
        </Margin>
      </ScrollView>
    </ViewFlex>
  );
}

export default Notifications;
