import React, { useState } from "react";
import { View, TouchableOpacity } from "react-native";

import { ViewFlex, RadiusBox } from "../../assets/styles/styles";
import {
  Images,
  ImageContent,
  ImageBackground
} from "../../assets/styles/Image";

import {
  Padding,
  Align,
  Organizations,
  PostContentPadding,
  PostTitleContent,
  Authorized,
  Settings,
  Wrap,
  BioContent
} from "../../views/Profile/style";

import PROFILE from "../../assets/img/profile.jpg";
import SETTINGS from "../../assets/img/settings.png";
import BACK from "../../assets/img/back.png";
import CARLOS from "../../assets/img/pp.jpg";
import MORE from "../../assets/img/more.png";

import { Information } from "../Text";
import { PreviewPost } from "../PreviewPost";
import { SubscribeSectionUser } from "./SubscribeSectionUser";
import { SubscribeSectionOrganization } from "./SubscribeSectionOrganization";

export function ProfileContent(props) {
  const members = props.type == "user" ? "Organizations" : "Members";

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
            <Images height={80} width={80} radius={40} source={CARLOS} />

            <Information weight={600} size={18} top={10}>
              Ricardo Malagon
            </Information>
            <Information color="#727272" size={16} top={5}>
              ricardo
            </Information>
          </Align>

          {props.type == "user" ? (
            <SubscribeSectionUser
              subscribers={props.subscribeCotent.count}
              subscriptions={type => props.subscriptions(type)}
              myProfile={props.myProfile}
              subsText={props.subscribeCotent.text}
              subscribe={() => props.subscribe()}
              align="center"
            />
          ) : (
            <SubscribeSectionOrganization
              subscribers={props.subscribeCotent.count}
              subscriptions={type => props.subscriptions(type)}
              myProfile={props.myProfile}
              subsText={props.subscribeCotent.text}
              subscribe={() => props.subscribe()}
            />
          )}
        </RadiusBox>
      </Padding>

      <BioContent>
        <Information size={16} weight={600}>
          Bio
        </Information>

        <Information size={16} top={6} color="#5c5c5c">
          This the Official React channel we are posting interesting content for
          you all subscribe and enjoy it!
        </Information>
      </BioContent>

      <Authorized>
        <Information size={16} weight={600}>
          {members} (15)
        </Information>

        <Wrap>
          <Organizations marginright="5%">
            <Images height={40} width={40} radius={20} source={CARLOS} />
          </Organizations>

          <Organizations marginright="5%">
            <Images height={40} width={40} radius={20} source={CARLOS} />
          </Organizations>

          <Organizations marginright="5%">
            <Images height={40} width={40} radius={20} source={CARLOS} />
          </Organizations>

          <Organizations marginright="5%">
            <Images height={40} width={40} radius={20} source={CARLOS} />
          </Organizations>

          <Organizations marginright="5%">
            <Images height={40} width={40} radius={20} source={CARLOS} />
          </Organizations>

          <Organizations>
            <Images height={40} width={40} radius={20} source={CARLOS} />
          </Organizations>
        </Wrap>
      </Authorized>

      <PostTitleContent margintop={1}>
        <Information size={16} weight={600}>
          Pinned posts (15)
        </Information>
      </PostTitleContent>

      <PostContentPadding>
        <PreviewPost
          title="How to get better in your React Native code"
          name="Ricardo Malagon"
          date="10 of march"
          hashtags={["React Native", "React", "GraphQl", "NodeJS", "5+"]}
          viewPost={() => props.viewPost()}
        />
      </PostContentPadding>
    </ViewFlex>
  );
}
