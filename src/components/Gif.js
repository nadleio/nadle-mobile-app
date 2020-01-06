import React, { useState, useEffect } from "react";
import { TouchableOpacity, Modal, ScrollView, View } from "react-native";
import styled, { withTheme } from "styled-components";
import axios from "axios";
import { MaterialIndicator as Spinner } from "react-native-indicators";

import Input from "./Form/Input";
import Header from "./Modal/Header";
import SearchButton from "./Buttons/Search";

import { Images } from "../assets/styles/Image";

const Container = styled.View`
  flex: 1;
  background-color: ${props => props.theme.styled.BACKGROUND};
`;

const ImageRowContainer = styled.View`
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: space-between;
`;

const ImageContainer = styled.View`
  padding: 5%;
  padding-bottom: 10%;
`;

const SearchContainer = styled.View`
  width: 100%;
  height: 50px;
  margin: 10px 0 10px 0;
  padding: 0 5% 0 3%;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

function Gif({ theme, close, ...props }) {
  const [gifs, setGif] = useState([]);
  const [text, setText] = useState("");
  const [isLoadingSearch, setIsLoadingSearch] = useState(false);

  useEffect(() => {
    async function fetchGif() {
      const route =
        "https://api.tenor.com/v1/trending?&key=QABAGB4SKW7Z&limit=15&anon_id=3a76e56901d740da9e59ffb22b988242";

      const { data } = await axios.get(route);
      setGif(data.results);
    }

    fetchGif();
  }, []);

  async function searchGif() {
    setIsLoadingSearch(true);

    const route = `https://api.tenor.com/v1/search?q=${text}?&key=QABAGB4SKW7Z&limit=50&anon_id=3a76e56901d740da9e59ffb22b988242`;
    const { data } = await axios.get(route);

    setGif(data.results);
    setIsLoadingSearch(false);
  }

  return (
    <Modal animationType="slide" visible={true}>
      <Container>
        <Header title="Gif" close={() => close()} />

        <SearchContainer>
          <Input
            onChangeText={text => setText(text)}
            placeholder="Search Tenor"
            returnKeyType="search"
            onSubmitEditing={() => searchGif()}
            style={{ width: "85%" }}
          />

          <SearchButton
            isLoading={isLoadingSearch}
            action={() => searchGif()}
          />
        </SearchContainer>

        {gifs.length == 0 ? (
          <View
            style={{
              flex: 1,
              justifyContent: "center",
              alignItems: "center"
            }}
          >
            <Spinner
              size={32}
              animationDuration={1400}
              color={theme.colors.PRIMARY}
            />
          </View>
        ) : (
          <ScrollView>
            <ImageContainer>
              <ImageRowContainer>
                {gifs.map((data, i) => {
                  return (
                    <TouchableOpacity
                      key={i}
                      onPress={() => props.gif(data.media[0].tinygif.url)}
                    >
                      <Images
                        radius={8}
                        height={108}
                        width={108}
                        source={{
                          uri: data.media[0].nanogif.url
                        }}
                        style={{ overlayColor: "white", marginBottom: 5 }}
                      />
                    </TouchableOpacity>
                  );
                })}
              </ImageRowContainer>
            </ImageContainer>
          </ScrollView>
        )}
      </Container>
    </Modal>
  );
}

export default withTheme(Gif);
Gif.navigationOptions = { header: null };
