import React from "react";

import { StyleSheet } from "react-native";

import YouTube from "react-native-youtube";
import styled from "styled-components";

import { Header } from "../../components/Header";
import { ViewFlex } from "../../assets/styles/styles";

const Content = styled.View`
  align-items: center;
  justify-content: center;
  flex: 1;
  padding-left: 5%;
  padding-right: 5%;
`;

const styles = StyleSheet.create({
  youtube: {
    width: "100%",
    height: 300,
    borderRadius: 8
  }
});

function YoutubeForAndroid(props) {
  return (
    <ViewFlex>
      <Header back={() => props.navigation.goBack()} />

      <Content>
        <YouTube
          videoId={props.navigation.state.params.id}
          apiKey="AIzaSyDyv4wRUVFNL8zPTZuRMkovLhhRBznrp08"
          play={true}
          fullscreen={true}
          loop={false}
          resumePlayAndroid={false}
          onChangeFullscreen={e =>
            e.isFullscreen == false && props.navigation.goBack()
          }
          style={styles.youtube}
        />
      </Content>
    </ViewFlex>
  );
}

export default YoutubeForAndroid;
