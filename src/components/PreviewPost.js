import React from "react";

import { Images } from "../assets/styles/Image";
import { Information } from "../components/Text";
import { Hashtags } from "../components/Hashtags";

import PAISAJE from "../assets/img/paisaje.png";
import styled from "styled-components";

export const PostContent = styled.TouchableOpacity`
  padding-bottom: 10px;
  flex-direction: row;
`;

export const TitlePost = styled.View`
  width: 75%;
  margin-left: 5%;
`;

export const Row = styled.View`
  flex-direction: row;
  align-items: center;
  margin-top: 10px;
  margin-bottom: 10px;
`;

export function PreviewPost(props) {
  return (
    <PostContent activeOpacity={0.8} onPress={() => props.viewPost()}>
      <Images height={60} width={60} radius={8} source={PAISAJE} />

      <TitlePost>
        <Information size={16} weight={600}>
          <Information size={16} color="#727272">
            {props.date}
          </Information>{" "}
          • {props.title}
        </Information>

        <Row>
          <Images height={16} width={16} radius={8} source={PAISAJE} />
          <Information color="black" size={14} left={5}>
            {props.name}
          </Information>
        </Row>

        <Hashtags data={props.hashtags} />
      </TitlePost>
    </PostContent>
  );
}
