import React from "react";
import { View, TouchableOpacity } from "react-native";

import { ViewFlex, Margin, RadiusBox } from "../assets/styles/styles";
import { Images, ImageContent, ImageBackground } from "../assets/styles/Image";
import {
  Padding,
  Align,
  Row,
  IconsBox,
  PostTitleContent,
  Authorized,
  Subscribe,
  Settings
} from "../views/Profile/style";

import PROFILE from "../assets/img/profile.jpg";
import SETTINGS from "../assets/img/settings.png";
import BACK from "../assets/img/back.png";
import CARLOS from "../assets/img/pp.jpg";
import INFLUENCER from "../assets/img/influencer.png";
import MORE from "../assets/img/more.png";

import { Information, Title } from "./Text";
import { PreviewPost } from "./PreviewPost";

export function ProfileContent(props) {
  return (
    <ViewFlex>
      <ImageBackground height={250} width="100%" source={PROFILE}>
        <Settings>
          {props.back ? (
            <TouchableOpacity onPress={() => props.goBack()}>
              <ImageContent
                height={32}
                width={32}
                radius={14}
                color="rgba(0,0,0,0.3)"
              >
                <Images height={19} width={19} source={BACK} />
              </ImageContent>
            </TouchableOpacity>
          ) : (
            <View />
          )}

          <TouchableOpacity
            onPress={() => (props.myProfile ? alert() : props.actionSheat())}
          >
            <ImageContent
              height={32}
              width={32}
              radius={14}
              color="rgba(0,0,0,0.3)"
            >
              <Images
                height={22}
                width={22}
                source={props.myProfile ? SETTINGS : MORE}
              />
            </ImageContent>
          </TouchableOpacity>
        </Settings>
      </ImageBackground>

      <Padding>
        <RadiusBox top={-60}>
          <Align>
            <ImageContent height={85} width={85} radius={42.5}>
              <Images height={80} width={80} radius={40} source={CARLOS} />
            </ImageContent>

            <Title top={10}>Ricardo Malagon</Title>
            <Information color="#727272" size={16} top={5}>
              ricardo
            </Information>

            {!props.myProfile && (
              <Subscribe>
                <Information
                  color="#833fff"
                  size={14}
                  onPress={() => props.subscribe()}
                >
                  {props.subscribeCotent.text}
                </Information>
              </Subscribe>
            )}
          </Align>

          <IconsBox>
            <Row>
              <ImageContent
                color="rgba(131, 63, 255,0.09)"
                height={36}
                width={36}
                radius={18}
              >
                <Images height={20} width={20} source={INFLUENCER} />
              </ImageContent>

              <Margin left={5}>
                <Information size={16} weight={600}>
                  {props.subscribeCotent.count}
                </Information>
                <Information color="#727272" size={14} top={1}>
                  Subscriptors
                </Information>
              </Margin>
            </Row>

            <Row>
              <ImageContent
                color="rgba(131, 63, 255,0.09)"
                height={36}
                width={36}
                radius={18}
              >
                <Images height={20} width={20} source={INFLUENCER} />
              </ImageContent>

              <Margin left={5}>
                <Information size={16} weight={600}>
                  520
                </Information>
                <Information color="#727272" size={14} top={1}>
                  Subscriptions
                </Information>
              </Margin>
            </Row>
          </IconsBox>
        </RadiusBox>
      </Padding>

      <Authorized>
        <Information size={16} weight={400}>
          Authorized by{" "}
          <Information color="#0091ff" size={16} top={5}>
            @react @vue @nagular
          </Information>
        </Information>
      </Authorized>

      <PostTitleContent margintop={10}>
        <Information size={16} weight={400}>
          Pinned posts
        </Information>

        <Information color="#0091ff" size={14} top={5}>
          15 posts
        </Information>
      </PostTitleContent>

      <PreviewPost
        title="How to get better in your React Native code"
        name="Ricardo Malagon"
        date="10 of march"
        hashtags={["React Native", "React", "GraphQl", "NodeJS"]}
      />
    </ViewFlex>
  );
}
