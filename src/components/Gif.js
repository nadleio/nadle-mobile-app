import React, { useState, useEffect } from "react";
import { TouchableOpacity, ActivityIndicator } from "react-native";

import styled from "styled-components";

import { ViewFlex, Margin } from "../assets/styles/styles";
import { Images, ImageContent } from "../assets/styles/Image";

import { Button } from "../components/Button";
import { ModalView } from "../components/ModalView";

import axios from "axios";

export const Content = styled.View`
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: space-between;
`;

export const Padding = styled.View`
  padding: 5%;
  padding-bottom: 10%;
`;

export function Gif(props) {
  const [gifs, setGif] = useState([]);
  const [loading, setLoading] = useState(false);
  const [text, setText] = useState("");
  const [load, setLoad] = useState({ start: 0, end: 15 });
  const [loadMore, setLoadMore] = useState(false);

  useEffect(() => {
    gifs.length == 0 &&
      axios
        .get(
          `https://api.tenor.com/v1/trending?&key=QABAGB4SKW7Z&limit=15&anon_id=3a76e56901d740da9e59ffb22b988242`
        )
        .then(request => {
          setGif(request.data.results);
        });
  });

  function search() {
    setLoadMore(true);
    setLoading(true);
    axios
      .get(
        `https://api.tenor.com/v1/search?q=${text}?&key=QABAGB4SKW7Z&limit=50&anon_id=3a76e56901d740da9e59ffb22b988242`
      )
      .then(request => {
        setLoad({ start: 0, end: 27 });
        setGif(request.data.results);
        setLoading(false);
      });
  }

  return (
    <ViewFlex>
      <ModalView
        search={true}
        activity={true}
        loading={loading}
        changeText={text => setText(text)}
        show={props.show}
        hide={() => props.set(false)}
        search={() => search()}
        content={
          gifs.length == 0 ? (
            <Margin top={5}>
              <ActivityIndicator />
            </Margin>
          ) : (
            <Padding>
              <Content>
                {gifs.length > 0 &&
                  gifs.slice(load.start, load.end).map((data, i) => {
                    return (
                      <TouchableOpacity
                        key={i}
                        onPress={() => props.gif(data.media[0].tinygif.url)}
                      >
                        <Margin bottom={5}>
                          <ImageContent radius={8} height={108} width={108}>
                            <Images
                              radius={8}
                              height={108}
                              width={108}
                              source={{
                                uri: data.media[0].nanogif.url
                              }}
                            />
                          </ImageContent>
                        </Margin>
                      </TouchableOpacity>
                    );
                  })}
              </Content>

              {loadMore && (
                <Button
                  haveIcon={false}
                  disabled={false}
                  text="Load more"
                  top={20}
                  color={["white", "white"]}
                  borderColor="#f4f4f4"
                  TextColor="black"
                  action={() => setLoad({ start: 0, end: 50 })}
                />
              )}
            </Padding>
          )
        }
      />
    </ViewFlex>
  );
}

Gif.navigationOptions = { header: null };
