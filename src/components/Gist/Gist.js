import React, { useState, useEffect } from "react";
import { Modal, View, ScrollView } from "react-native";
import styled, { withTheme } from "styled-components";
import axios from "axios";
import Collapsible from "react-native-collapsible";
import { MaterialIndicator as Spinner } from "react-native-indicators";

import GistHeader from "./Header";
import { Title, Label } from "../Text";
import Header from "../Modal/Header";
import Icon from "../Icon";

const Container = styled.View`
  flex: 1;
  background-color: ${props => props.theme.styled.BACKGROUND};
`;

const BoxContainer = styled.TouchableOpacity`
  margin-top: 8px;
  padding: 0 5% 0 5%;
  height: 42px;
  border-radius: 8px;
  background-color: ${props => props.theme.styled.BOX_BACKGROUND};
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const GistContainer = styled.View`
  margin-top: 5;
  padding-left: 3%;
`;

function Gist({ close, theme, ...props }) {
  const [gistState, setGist] = useState([]);
  const [user, setUser] = useState({ name: "ricardomalagon", photo: "" });
  const [collapsed, setCollapsed] = useState([]);

  async function bringGists() {
    const url = `https://api.github.com/users/${user.name}/gists`;
    const { data } = await axios.get(url);
    var userGithub = data[0].owner;

    setUser({
      name: userGithub.login,
      photo: userGithub.avatar_url
    });

    data.map(() => collapsed.push(true));

    setGist(data);
    setCollapsed(collapsed);
  }

  useEffect(() => {
    bringGists();
  }, []);

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
    <Modal animationType="slide" visible={true}>
      <Container>
        <Header title="Gists" close={() => close()} />

        {gistState.length == 0 ? (
          <View
            style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
          >
            <Spinner
              size={32}
              animationDuration={1400}
              color={theme.colors.PRIMARY}
            />
          </View>
        ) : (
          <View>
            <GistHeader
              action={() => bringGists()}
              user={user}
              setUser={data => setUser(data)}
            />
            <Title style={{ marginLeft: "5%", marginTop: 20 }}>My Gists</Title>

            <ScrollView>
              {gistState.map((data, i) => {
                var url = data.url;
                var gists = 0;

                var LIST_GISTS = Object.keys(data.files).map((data, j) => {
                  gists = j + 1;
                  return (
                    <Label
                      key={j}
                      onPress={() => gistFunc(url, data)}
                      color="#ce6972"
                      style={{ marignTop: 4 }}
                    >
                      • {data}
                    </Label>
                  );
                });

                return (
                  <View key={i} style={{ marginHorizontal: 16 }}>
                    <BoxContainer onPress={() => toggleExpanded(i)}>
                      <Label numberOfLines={1}>
                        {data.description}{" "}
                        <Label size={14} color="#ce6972">
                          ({gists})
                        </Label>
                      </Label>

                      <Icon
                        name="replace"
                        color={theme.styled.ICON}
                        size={16}
                      />
                    </BoxContainer>

                    <Collapsible collapsed={collapsed[i]} align="center">
                      <GistContainer>{LIST_GISTS}</GistContainer>
                    </Collapsible>
                  </View>
                );
              })}
            </ScrollView>
          </View>
        )}
      </Container>
    </Modal>
  );
}

export default withTheme(Gist);
Gist.navigationOptions = { header: null };
