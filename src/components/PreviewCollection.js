import React from "react";

import styled from "styled-components";

import { Images } from "../assets/styles/Image";
import { Information } from "./Text";
import { Icon } from "./Icon";

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

export const IconContent = styled.View`
  border-radius: 8px;
  height: 65px;
  width: 65px;
  border-width: 2px;
  border-color: #f4f4f4;
  justify-content: center;
  align-items: center;
`;

export function PreviewCollection(props) {
  return (
    <PostContent activeOpacity={0.8} onPress={() => props.posts()}>
      <IconContent>
        <Icon size={30}></Icon>
      </IconContent>

      <TitlePost>
        <Information size={16} weight={600}>
          {props.title}
        </Information>

        <Row>
          <Images
            height={16}
            width={16}
            radius={8}
            source={{
              uri:
                "https://nadle-assets.nyc3.digitaloceanspaces.com/jhovanna.jpg"
            }}
          />
          <Information size={14} left={5}>
            {props.name}
          </Information>
        </Row>
      </TitlePost>
    </PostContent>
  );
}
