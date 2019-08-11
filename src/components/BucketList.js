import React from "react";
import { View } from "react-native";

import styled from "styled-components";

import { Information } from "./Text";
import Icon from "./Icon";
import { Images } from "../assets/styles/Image";

const Bucket = styled.View`
  background-color: #fefefe;
  flex-direction: row;
  align-items: center;
  margin-bottom: 15px;
`;

export function BucketList(props) {
  return (
    <View>
      <Bucket>
        <Icon size={20} color="black">
          
        </Icon>

        <Information onPress={() => props.createNew()} size={16} left={10}>
          Create new bucket
        </Information>
      </Bucket>

      <Bucket>
        <Images
          height={22}
          width={22}
          radius={4}
          source={{
            uri: "https://nadle-assets.nyc3.digitaloceanspaces.com/paisaje.png"
          }}
        />
        <Information onPress={() => props.action()} size={16} left={10}>
          {props.title}
        </Information>
      </Bucket>
    </View>
  );
}
