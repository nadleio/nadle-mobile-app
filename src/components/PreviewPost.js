import React from "react";

import { Images } from "../assets/styles/Image";
import { Information } from "../components/Text";
import { Hashtags } from "../components/Hashtags";

import PAISAJE from "../assets/img/paisaje.png";
import styled from "styled-components";

export const PostContent = styled.TouchableOpacity`
  padding-bottom: 10px;
  border-bottom-width: 2;
  border-bottom-color: #f4f4f4;
  flex-direction: row;
  justify-content: space-between;
`;

export const TitlePost = styled.View`
  width: 75%;
`;

export function PreviewPost(props) {
  return (
    <PostContent activeOpacity={0.8} onPress={() => props.viewPost()}>
      <TitlePost>
        <Information size={16} weight={600}>
          {props.title}
        </Information>

        <Information color="black" size={14} top={10}>
          {props.name}
        </Information>

        <Information color="#727272" size={13} top={2} bottom={2}>
          {props.date}
        </Information>

        <Hashtags data={props.hashtags} />
      </TitlePost>

      <Images height={60} width={60} radius={8} source={PAISAJE} />
    </PostContent>
  );
}
