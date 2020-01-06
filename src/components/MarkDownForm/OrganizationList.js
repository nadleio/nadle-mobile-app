import React, { useState, useContext } from "react";
import { ScrollView, Modal, View } from "react-native";
import styled, { withTheme } from "styled-components";

import { Label } from "../Text";
import Input from "../Form/Input";
import Header from "../Modal/Header";

import ContextSelf from "../../lib/ContextSelf";

const ThumbnailContainer = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  height: 50px;
  margin-top: 4px;
`;

const Container = styled.View`
  flex: 1;
  background-color: ${props => props.theme.styled.BACKGROUND};
`;

const Thumbnail = styled.Image`
  height: 36px;
  width: 36px;
  border-radius: 4px;
  background-color: #e6e6e6;
`;

const array = [
  {
    id: 1,
    name: "React",
    image: "https://source.unsplash.com/random"
  },
  {
    id: 2,
    name: "React Native",
    image: "https://source.unsplash.com/random"
  },
  {
    id: 3,
    name: "Angular",
    image: "https://source.unsplash.com/random"
  },
  {
    id: 5,
    name: "Twitier",
    image: "https://source.unsplash.com/random"
  },
  {
    id: 6,
    name: "Netlify",
    image: "https://source.unsplash.com/random"
  }
];

function OrganizationList({ theme, close, setValues }) {
  const [results, setResults] = useState(array);

  const { picture } = useContext(ContextSelf);

  function filter(text) {
    var result = array.filter(obj =>
      obj.name.toLowerCase().includes(text.toLowerCase())
    );

    setResults(result);
  }

  return (
    <Modal animationType="slide" visible={true}>
      <Container>
        <Header title="Post in" close={() => close()} />

        <ScrollView>
          <View style={{ marginHorizontal: 16, marginTop: 12 }}>
            <Input
              onChangeText={text => filter(text)}
              placeholder="Search Organization"
            />
          </View>

          <Label
            color={theme.styled.TITLE}
            style={{ marginLeft: 16, marginTop: 24 }}
            weight={600}
          >
            Profile
          </Label>

          <View
            style={{
              backgroundColor: `${theme.styled.BOX_BACKGROUND}`,
              paddingHorizontal: 16,
              marginTop: 8
            }}
          >
            <ThumbnailContainer
              onPress={() => setValues({ name: "My Profile", image: picture })}
              style={{ marginTop: 0 }}
            >
              <Thumbnail source={{ uri: picture }} />

              <Label color={theme.styled.TITLE} style={{ marginLeft: 12 }}>
                My Profile
              </Label>
            </ThumbnailContainer>
          </View>

          <Label
            color={theme.styled.TITLE}
            style={{ marginLeft: 16, marginTop: 16 }}
            weight={600}
          >
            My organizations
          </Label>

          <View
            style={{
              backgroundColor: `${theme.styled.BOX_BACKGROUND}`,
              paddingHorizontal: 16,
              marginTop: 8
            }}
          >
            {results.map(data => (
              <ThumbnailContainer onPress={() => setValues(data)} key={data.id}>
                <Thumbnail source={{ uri: data.image }} />

                <Label color={theme.styled.TITLE} style={{ marginLeft: 12 }}>
                  {data.name}
                </Label>
              </ThumbnailContainer>
            ))}
          </View>
        </ScrollView>
      </Container>
    </Modal>
  );
}

export default withTheme(OrganizationList);
