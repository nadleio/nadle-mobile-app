import React, { useState, useEffect } from "react";
import { ActivityIndicator, View } from "react-native";

import styled from "styled-components";
import { ViewFlex, Margin } from "../assets/styles/styles";
import { Title, Information } from "./Text";
import { Images, ImageContent } from "../assets/styles/Image";

import { ModalView } from "../components/ModalView";

import axios from "axios";
import Collapsible from "react-native-collapsible";

export const TouchableOpacity = styled.TouchableOpacity`
  margin-top: 10;
  padding: 3%;
  border-color: #f4f4f4;
  border-width: 2;
  border-radius: 8;
`;

export const Files = styled.View`
  margin-top: 5;
  padding-left: 3%;
`;

export const Padding = styled.View`
  padding: 5%;
  padding-bottom: 10%;
`;

export const Avatar = styled.View`
  margin-bottom: 5%;
  flex-direction: row;
  align-items: center;
`;

export const TextInput = styled.TextInput`
  font-size: 18;
  color: black;
  font-weight: 600;
  margin-left: 10;
`;

export function Gist(props) {
  const [gist, setGist] = useState([]);
  const [user, setUser] = useState({ name: "ricardomalagon", photo: "" });
  const [collapsed, setCollapsed] = useState([]);

  function BringGists() {
    axios
      .get(`https://api.github.com/users/${user.name}/gists`)
      .then(request => {
        var userGithub = request.data[0].owner;
        setUser({
          name: userGithub.login,
          photo: userGithub.avatar_url
        });
        setGist(request.data);

        request.data.map((data, i) => {
          collapsed.push(true);
        });
        setCollapsed(collapsed);
      });
  }

  useEffect(() => {
    gist.length == 0 && BringGists();
  });

  function gistFunc(url, name) {
    axios.get(url).then(request => {
      props.gist(
        request.data.files[name].content,
        request.data.files[name].language != null
          ? request.data.files[name].language.toLowerCase()
          : ""
      );
    });
  }

  function toggleExpanded(i) {
    const newCollapsed = [...collapsed];
    newCollapsed[i] = !collapsed[i];
    setCollapsed(newCollapsed);
  }

  return (
    <ViewFlex>
      <ModalView
        changeText={text => setText(text)}
        show={props.show}
        hide={() => props.set(false)}
        content={
          gist.length == 0 ? (
            <Margin top={5}>
              <ActivityIndicator />
            </Margin>
          ) : (
            <Padding>
              <Avatar>
                <ImageContent height={45} width={45} radius={22.5}>
                  <Images
                    radius={20}
                    height={40}
                    width={40}
                    source={{ uri: user.photo }}
                  />
                </ImageContent>

                <TextInput
                  onChangeText={text =>
                    setUser({ name: text, photo: user.photo })
                  }
                  placeholder="Github username"
                  returnKeyType="done"
                  value={user.name}
                  onSubmitEditing={() => BringGists()}
                  autoCapitalize="none"
                />
              </Avatar>
              <Title>Your Gists</Title>
              {gist.map((data, i) => {
                var url = data.url;
                return (
                  <View>
                    <TouchableOpacity key={i} onPress={() => toggleExpanded(i)}>
                      <Information weight={500} color="black" size={16}>
                        {data.description}
                      </Information>
                    </TouchableOpacity>

                    <Collapsible collapsed={collapsed[i]} align="center">
                      <Files>
                        {Object.keys(data.files).map(data => (
                          <Information
                            onPress={() => gistFunc(url, data)}
                            top={4}
                            color="#c7264e"
                            size={14}
                          >
                            • {data}
                          </Information>
                        ))}
                      </Files>
                    </Collapsible>
                  </View>
                );
              })}
            </Padding>
          )
        }
      />
    </ViewFlex>
  );
}

Gist.navigationOptions = { header: null };
