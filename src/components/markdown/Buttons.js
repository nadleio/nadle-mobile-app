import React from "react";
import { ScrollView } from "react-native";

import BOLD from "../../assets/img/bold.png";
import LINE from "../../assets/img/line.png";
import ITALIC from "../../assets/img/italic.png";
import FONT from "../../assets/img/font.png";
import LINK from "../../assets/img/link.png";
import CENTERLINE from "../../assets/img/centerLine.png";
import QUOTE from "../../assets/img/quote.png";
import GIF from "../../assets/img/gif.png";
import CODE from "../../assets/img/code.png";
import CODELINE from "../../assets/img/codeLine.png";
import LIST from "../../assets/img/list.png";
import DOWN from "../../assets/img/angle-down.png";
import IMAGE from "../../assets/img/image.png";
import TABLE from "../../assets/img/table.png";
import GIST from "../../assets/img/gist.png";

import styled from "styled-components";

import { Images } from "../../assets/styles/Image";

export const Scroll = styled.View`
  flex-direction: row;
  background-color: #fafbfb;
  padding-top: 10;
  padding-bottom: 12px;
  border-top-color: #f4f4f4;
  border-top-width: 2;
`;

export const TouchableOpacity = styled.TouchableOpacity`
  margin-left: ${props => props.left || 20};
  margin-right: ${props => props.right || 0};
`;

export function Buttons(props) {
  return (
    <Scroll>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        keyboardShouldPersistTaps={"handled"}
      >
        <TouchableOpacity onPress={() => props.dimiss()}>
          <Images height={20} width={20} source={DOWN} />
        </TouchableOpacity>

        <TouchableOpacity left={35} onPress={() => props.header()}>
          <Images height={20} width={20} source={FONT} />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => props.bold()}>
          <Images height={20} width={20} source={BOLD} />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => props.line()}>
          <Images height={20} width={20} source={LINE} />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => props.italic()}>
          <Images height={20} width={20} source={ITALIC} />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => props.link()} left={35}>
          <Images height={20} width={20} source={LINK} />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => props.gif()}>
          <Images height={20} width={20} source={GIF} />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => props.image()}>
          <Images height={20} width={20} source={IMAGE} />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => props.table()} left={35}>
          <Images height={20} width={20} source={TABLE} />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => props.centerLine()}>
          <Images height={20} width={20} source={CENTERLINE} />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => props.blocks()}>
          <Images height={20} width={20} source={QUOTE} />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => props.pointList()}>
          <Images height={20} width={20} source={LIST} />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => props.gist()}>
          <Images height={20} width={20} source={GIST} />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => props.codeLine()}>
          <Images height={20} width={20} source={CODELINE} />
        </TouchableOpacity>

        <TouchableOpacity right={20} onPress={() => props.code()}>
          <Images height={20} width={20} source={CODE} />
        </TouchableOpacity>
      </ScrollView>
    </Scroll>
  );
}

Buttons.navigationOptions = { header: null };
