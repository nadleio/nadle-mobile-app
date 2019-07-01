import React from "react";

import { ViewFlex } from "../assets/styles/styles";
import { Images } from "../assets/styles/Image";
import { Information } from "../components/Text";

import PAISAJE from "../assets/img/paisaje.png";
import styled from "styled-components";

export const RowTechs = styled.View`
  flex-wrap: wrap;
  flex-direction: row;
  align-items: center;
`;

export const PostContent = styled.TouchableOpacity`
  padding-left: 15px;
  padding-right: 15px;
  padding-top: 10px;
  padding-bottom: 10px;
  border-bottom-width: 2;
  border-bottom-color: #f4f4f4;
  flex-direction: row;
  justify-content: space-between;
`;

export const TitlePost = styled.View`
  width: 75%;
`;

export const Hashtags = styled.TouchableOpacity`
  padding: 3%;
  padding-top: 2%;
  padding-bottom: 2%;
  background-color: rgba(131, 63, 255, 0.09);
  border-radius: 8;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
  margin-right: 5px;
`;

export function PreviewPost(props) {
  return (
    <ViewFlex>
      <PostContent activeOpacity={0.8}>
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

          <RowTechs>
            {props.hashtags.map(data => (
              <Hashtags>
                <Information color="#833fff" size={14}>
                  {data}
                </Information>
              </Hashtags>
            ))}
            <Hashtags>
              <Information color="#833fff" size={14}>
                5+
              </Information>
            </Hashtags>
          </RowTechs>
        </TitlePost>

        <Images height={60} width={60} radius={8} source={PAISAJE} />
      </PostContent>
    </ViewFlex>
  );
}
