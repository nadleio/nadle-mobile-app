import React from "react";

import { ScrollView } from "react-native";

import { SafeAreaView } from "react-navigation";

import { Header } from "../../components/Header";
import { TextInputSearch } from "../../components/form/Input";
import { Icon } from "../../components/Icon";
import { PreviewPost } from "../../components/PreviewPost";
import { Information } from "../../components/Text";
import { Hashtags } from "../../components/Hashtags";
import { ViewFlex } from "../../assets/styles/styles";
import {
  Padding,
  AlignItems,
  PostContainer,
  Margintop,
  SearchButtonContainer,
  SearchContainer
} from "./styled";

function Search(props) {
  return (
    <ViewFlex>
      <SafeAreaView backgroundColor="white" />
      <Header backBool={false} text="Search" />

      <ScrollView>
        <Padding>
          <SearchContainer>
            <AlignItems>
              <Icon color="#cccccc" size={18}>
                
              </Icon>

              <TextInputSearch placeholder="Type your search" />
            </AlignItems>

            <SearchButtonContainer>
              <Icon color="#cccccc" size={18}>
                
              </Icon>
            </SearchButtonContainer>
          </SearchContainer>

          <Information bottom={10} top={20} weight="600" size={18}>
            Recomended Hashtags
          </Information>

          <Hashtags
            data={["React Native", "React", "GraphQl", "NodeJS", "Apollo"]}
          />

          <Margintop>
            <PostContainer>
              <PreviewPost
                title="How to get better in your React Native code"
                name="Ricardo Malagon"
                date="10 of march"
                hashtags={["React Native", "React", "GraphQl", "NodeJS", "5+"]}
                viewPost={() =>
                  props.navigation.push("Post", {
                    id: 1
                  })
                }
              />
            </PostContainer>

            <PostContainer>
              <PreviewPost
                title="How to get better in your React Native code"
                name="Ricardo Malagon"
                date="10 of march"
                hashtags={["React Native", "React", "GraphQl", "NodeJS", "5+"]}
                viewPost={() =>
                  props.navigation.push("Post", {
                    id: 1
                  })
                }
              />
            </PostContainer>
          </Margintop>
        </Padding>
      </ScrollView>
    </ViewFlex>
  );
}
export default Search;
