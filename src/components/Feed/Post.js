import React, { useState } from "react";
import { View, TouchableOpacity } from "react-native";
import ActionSheet from "react-native-actionsheet";
import styled, { withTheme } from "styled-components";

import Icon from "../../components/Icon";

import { ImageBackground, SmallImageProfile } from "../../assets/styles/Image";

import Share from "../../lib/utils/Share";
import json from "../../json/feed";

var moment = require("moment");

const Container = styled.View`
  border-top-width: 1px;
  border-color: #f4f4f4;
  padding: 3%;
  background-color: ${props => props.theme.styled.BACKGROUND};
`;

const CenterItems = styled.View`
  flex-direction: row;
  align-items: center;
`;

const Row = styled.View`
  flex-direction: row;
`;

const Space = styled.View`
  flex: 1;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-top: ${props => props.top || 0};
`;

const IconsContainer = styled.View`
  flex: 1;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-top: 8px;
  padding-left: 5%;
  padding-right: 5%;
`;

const RightContainer = styled.View`
  flex: 1;
`;

const Content = styled.Text`
  color: ${props => props.theme.styled.CONTENT};
  font-size: ${props => props.theme.fontSize.BODY};
  margin-top: ${props => props.top || 0};
  line-height: 21;
  font-weight: 400;
  text-align: left;
`;

const BoldContent = styled.Text`
  color: ${props => props.theme.styled.CONTENT};
  font-size: ${props => props.theme.fontSize.BODY};
  line-height: 21;
  font-weight: bold;
  margin-left: 8px;
  margin-top: 4px;
`;

const SmallContent = styled.Text`
  color: ${props => props.theme.styled.CONTENT};
  font-size: ${props => props.theme.fontSize.SMALL};
  line-height: 21;
  font-weight: 400;
`;

const HeightToBottomLine = styled.View`
  width: 2px;
  height: 100%;
  background-color: ${props => props.theme.colors.GRAY_D6};
  align-self: center;
  position: absolute;
  z-index: -1;
  margin-top: 6px;
`;

function Post({ theme, profile, post, comments }) {
  const [id, setId] = useState();

  function showActionSheet(id) {
    setId(id);
    this.ActionSheet.show();
  }

  function report(index) {
    index == 0 && console.log(index, id);
  }

  return (
    <View>
      {json[0].map(data => {
        return (
          <Container key={data.id}>
            <Row>
              <View>
                <SmallImageProfile source={{ uri: data.imageProfile }} />
                <HeightToBottomLine />
              </View>

              <RightContainer>
                <Space>
                  <CenterItems>
                    <TouchableOpacity
                      onPress={() =>
                        profile({
                          id: "b1b758d8-0d57-42c9-b086-4576bd1951e2",
                          type: "ORGANIZATION",
                          picture: "https://i.pravatar.cc/500",
                          username: "ricardo",
                          name: "Ricardo Malagón",
                          followers: { count: 0 },
                          following: { count: 0 },
                          posts: []
                        })
                      }
                    >
                      <BoldContent>{data.name}</BoldContent>
                    </TouchableOpacity>

                    <SmallContent>
                      • {moment(data.postHour).fromNow()}
                    </SmallContent>
                  </CenterItems>

                  <TouchableOpacity onPress={() => showActionSheet(data.id)}>
                    <Icon
                      color={theme.styled.ICON}
                      name="solid-more"
                      size={18}
                    />
                  </TouchableOpacity>
                </Space>

                <BoldContent numberOfLines={2}>{data.title}</BoldContent>

                <Content numberOfLines={2} style={{ marginLeft: 8 }}>
                  {data.description}
                </Content>

                <TouchableOpacity
                  onPress={() =>
                    post("Post", {
                      id: 1
                    })
                  }
                >
                  <ImageBackground
                    radius={8}
                    height={200}
                    width="100%"
                    source={{ uri: data.photo }}
                    style={{ marginTop: 6 }}
                  />
                </TouchableOpacity>

                <IconsContainer>
                  <TouchableOpacity>
                    <Icon
                      name={
                        data.clapped ? "solid-clapping" : "outline-clapping"
                      }
                      color={theme.styled.ICON}
                      size={20}
                    />
                  </TouchableOpacity>

                  <TouchableOpacity onPress={() => comments(1)}>
                    <CenterItems>
                      <Content>
                        <SmallContent>{data.comments}</SmallContent>
                      </Content>

                      <Icon
                        style={{ marginLeft: 5 }}
                        color={theme.styled.ICON}
                        name="outline-comment-alt"
                        size={18}
                      />
                    </CenterItems>
                  </TouchableOpacity>

                  <TouchableOpacity>
                    <Icon
                      name={data.saved ? "solid-bookmark" : "outline-bookmark"}
                      color={theme.styled.ICON}
                      size={18}
                    />
                  </TouchableOpacity>

                  <TouchableOpacity onPress={() => Share(data.url)}>
                    <Icon
                      name="outline-share"
                      color={theme.styled.ICON}
                      size={18}
                    />
                  </TouchableOpacity>
                </IconsContainer>
              </RightContainer>
            </Row>

            <Row style={{ marginTop: 6 }}>
              <SmallImageProfile source={{ uri: data.imageProfile }} />

              <View style={{ flex: 1 }}>
                <Row>
                  <TouchableOpacity
                    onPress={() =>
                      profile({
                        id: "b1b758d8-0d57-42c9-b086-4576bd1951e2",
                        type: "ORGANIZATION",
                        picture: "https://i.pravatar.cc/500",
                        username: "ricardo",
                        name: "Ricardo Malagón",
                        followers: { count: 0 },
                        following: { count: 0 },
                        posts: []
                      })
                    }
                  >
                    <BoldContent>{data.name}</BoldContent>
                  </TouchableOpacity>

                  <SmallContent>
                    • {moment(data.postHour).fromNow()}
                  </SmallContent>
                </Row>

                <Content numberOfLines={2} style={{ marginLeft: 8 }}>
                  {data.commentContent}
                </Content>
              </View>
            </Row>
          </Container>
        );
      })}

      <ActionSheet
        ref={o => (this.ActionSheet = o)}
        options={["Report", "Cancel"]}
        cancelButtonIndex={1}
        destructiveButtonIndex={1}
        onPress={index => {
          report(index);
        }}
      />
    </View>
  );
}

export default withTheme(Post);
