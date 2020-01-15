/* eslint-disable import/default */
// eslint-disable-next-line import/default

import React, { useState } from "react";
import Swiper from "react-native-swiper";
import styled, { withTheme } from "styled-components";

var moment = require("moment");

import json from "../../json/feed";

const Container = styled.View`
  background-color: ${props => props.theme.styled.BACKGROUND};
`;

const PaddingBox = styled.View`
  padding: 5%;
  padding-bottom: 3%;
  background-color: ${props => props.theme.styled.FEED_SWIPPER};
  border-radius: 8px;
  height: 120px;
`;

const FlexRow = styled.View`
  flex-direction: row;
  align-items: center;
`;

const SpaceBetween = styled.View`
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
`;

const RecentActivityCount = styled.View`
  height: 21px;
  width: 21px;
  background-color: ${props => props.theme.styled.OPPOSITE_BACKGROUND};
  border-radius: 10.5px;
  margin-left: 3%;
  justify-content: center;
`;

const SmallCircle = styled.View`
  height: 10px;
  width: 10px;
  background-color: ${props => props.color};
  border-radius: 5px;
  margin-left: 3%;
`;

const ActivityBoxSeccion = styled.View`
  padding-left: 5%;
  padding-right: 5%;
  justify-content: center;
  height: 50;
`;

const CommentContainer = styled.View`
  padding-left: 16px;
  padding-right: 16px;
`;

const Bottom = styled.View`
  margin-bottom: 15px;
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
`;

const CounterSwipper = styled.Text`
  color: ${props => props.theme.styled.OPPOSITE_TITLE};
  font-size: 10px;
  text-align: center;
`;

function SwipperContent({ goToProfile, theme }) {
  const [currentSwipe, setCurrentSwipe] = useState(0);

  return (
    <Container>
      <ActivityBoxSeccion>
        <FlexRow>
          <BoldContent>Activity</BoldContent>

          <RecentActivityCount>
            <CounterSwipper>+2</CounterSwipper>
          </RecentActivityCount>

          {json[1].map((data, index) => (
            <SmallCircle
              key={data.id}
              color={
                currentSwipe === index
                  ? theme.colors.PRIMARY
                  : theme.colors.GRAY_D6
              }
            />
          ))}
        </FlexRow>
      </ActivityBoxSeccion>

      <Bottom>
        <Swiper
          height={120}
          onIndexChanged={index => setCurrentSwipe(index)}
          loop={false}
          showsPagination={false}
          index={0}
        >
          {json[1].map(data => (
            <CommentContainer key={data.id}>
              <PaddingBox>
                <SpaceBetween>
                  <BoldContent
                    onPress={() =>
                      goToProfile({
                        id: "b1b758d8-0d57-42c9-b086-4576bd1951e2",
                        type: "USER",
                        picture: "https://i.pravatar.cc/500",
                        username: "ricardo",
                        name: "Ricardo Malagón"
                      })
                    }
                  >
                    {data.fromReply}
                  </BoldContent>

                  <Content>{moment("2019-09-01T14:30:00").fromNow()}</Content>
                </SpaceBetween>

                <Content top={4}>
                  Replied to{" "}
                  <BoldContent
                    onPress={() =>
                      goToProfile({
                        id: "b1b758d8-0d57-42c9-b086-4576bd1951e2",
                        type: "USER",
                        picture: "https://i.pravatar.cc/500",
                        username: "ricardo",
                        name: "Ricardo Malagón"
                      })
                    }
                  >
                    {data.toReply}
                  </BoldContent>{" "}
                  in a post
                </Content>

                <Content top={4} numberOfLines={2}>
                  {data.body}
                </Content>
              </PaddingBox>
            </CommentContainer>
          ))}
        </Swiper>
      </Bottom>
    </Container>
  );
}

export default withTheme(SwipperContent);
