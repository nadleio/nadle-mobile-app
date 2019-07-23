import React, { useState } from "react";
import { View, TouchableOpacity } from "react-native";

import { ViewFlex, RadiusBox, Margin } from "../../assets/styles/styles";
import {
  Images,
  ImageContent,
  ImageBackground,
  SmallImageProfile
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
  BioContent,
  Row
} from "../../views/Profile/styled";

import PROFILE from "../../assets/img/profile.jpg";

import { Information } from "../Text";
import { PreviewPost } from "../PreviewPost";
import { PreviewCollection } from "../PreviewCollection";
import { SubscribeSectionUser } from "./SubscribeSectionUser";
import { SubscribeSectionOrganization } from "./SubscribeSectionOrganization";
import { Icon } from "../Icon";

export function ProfileContent(props) {
  const members = props.type == "user" ? "Organizations" : "Members";

  return (
    <ViewFlex>
      <ImageBackground height={250} width="100%" source={PROFILE}>
        <Settings>
          {props.back ? (
            <TouchableOpacity onPress={() => props.goBack()}>
              <ImageContent height={30} width={30} radius={15} color="white">
                <Icon size={20}></Icon>
              </ImageContent>
            </TouchableOpacity>
          ) : (
            <View />
          )}

          {props.myProfile ? (
            <Row>
              <Margin right={7}>
                <TouchableOpacity onPress={() => props.notifications()}>
                  <ImageContent
                    height={30}
                    width={30}
                    radius={15}
                    color="white"
                  >
                    <Icon size={20}></Icon>
                  </ImageContent>
                </TouchableOpacity>
              </Margin>

              <TouchableOpacity onPress={() => alert()}>
                <ImageContent height={30} width={30} radius={15} color="white">
                  <Icon size={20}></Icon>
                </ImageContent>
              </TouchableOpacity>
            </Row>
          ) : (
            <TouchableOpacity onPress={() => props.actionSheat()}>
              <ImageContent height={30} width={30} radius={15} color="white">
                <Icon size={20}></Icon>
              </ImageContent>
            </TouchableOpacity>
          )}
        </Settings>
      </ImageBackground>

      <Padding>
        <RadiusBox top={-60}>
          <Align>
            <Images
              height={80}
              width={80}
              radius={40}
              source={{
                uri: "https://nadle-assets.nyc3.digitaloceanspaces.com/pp.jpg"
              }}
            />

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
              align={props.myProfile ? "center" : "left"}
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

        {props.type == "organization" && (
          <View>
            <Information size={16} top={10}>
              <Icon color="black" size={16}>
                
              </Icon>{" "}
              San Francisco, CA
            </Information>

            <Information size={16} top={6}>
              <Icon color="black" size={16}>
                
              </Icon>{" "}
              https://github.com
            </Information>
          </View>
        )}
      </BioContent>

      <Authorized>
        <Row>
          <Information size={16} weight={600}>
            {members} (15){" "}
          </Information>
          <Icon color="black" size={16}>
            
          </Icon>
        </Row>

        <Wrap>
          <Organizations onPress={() => props.goToProfile()} marginright="5%">
            <SmallImageProfile
              source={{
                uri: "https://nadle-assets.nyc3.digitaloceanspaces.com/pp.jpg"
              }}
            />
          </Organizations>

          <Organizations onPress={() => props.goToProfile()} marginright="5%">
            <SmallImageProfile
              source={{
                uri: "https://nadle-assets.nyc3.digitaloceanspaces.com/pp.jpg"
              }}
            />
          </Organizations>

          <Organizations marginright="5%">
            <SmallImageProfile
              source={{
                uri: "https://nadle-assets.nyc3.digitaloceanspaces.com/pp.jpg"
              }}
            />
          </Organizations>

          <Organizations marginright="5%">
            <SmallImageProfile
              source={{
                uri: "https://nadle-assets.nyc3.digitaloceanspaces.com/pp.jpg"
              }}
            />
          </Organizations>

          <Organizations marginright="5%">
            <SmallImageProfile
              source={{
                uri: "https://nadle-assets.nyc3.digitaloceanspaces.com/pp.jpg"
              }}
            />
          </Organizations>

          <Organizations>
            <SmallImageProfile
              source={{
                uri: "https://nadle-assets.nyc3.digitaloceanspaces.com/pp.jpg"
              }}
            />
          </Organizations>
        </Wrap>
      </Authorized>

      <PostTitleContent margintop={1}>
        <Information onPress={() => props.seeAllPosts()} size={16} weight={600}>
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

      <PostContentPadding>
        <PreviewCollection
          title="Introduction to React"
          name="Ricardo Malagon"
          posts={() => props.collection()}
        />
      </PostContentPadding>
    </ViewFlex>
  );
}
