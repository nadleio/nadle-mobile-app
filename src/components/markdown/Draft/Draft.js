import React, { useState, useRef } from "react";
import { Modal, ScrollView, Alert, View } from "react-native";
import styled, { withTheme } from "styled-components";
import Swipeout from "react-native-swipeout";
import * as Animatable from "react-native-animatable";

import { Label } from "../../Text";
import Icon from "../../Icon";
import { ConfirmDeleteAlert } from "../../ConfirmDeleteAlert";
import Header from "./Header";

const BoxContainer = styled.TouchableOpacity`
  margin: 0 16px 0 16px;
  padding: 16px;
  border-radius: 8px;
  background-color: ${props => props.theme.styled.BOX_BACKGROUND};
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const Container = styled.View`
  flex: 1;
  background-color: ${props => props.theme.styled.BACKGROUND};
`;

const TextContainer = styled.View`
  width: 100%;
`;

const DeleteButton = styled.View`
  background-color: red;
  flex: 1;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
`;

function Draft({ setDraft, text, close, theme }) {
  const animationRef = useRef([]);
  const [id, setId] = useState(4);

  const [duration, setDuration] = useState(1);
  const [isLoading, setIsloading] = useState(false);

  const [array, setArray] = useState([
    {
      id: 1,
      content: "hola me llamo **juan**",
      date: "15/03/2019"
    },

    {
      id: 2,
      content: "hola me llamo pedro antonio de la mancha jesus alberto",
      date: "15/08/2019"
    },

    {
      id: 3,
      content: "hola me llamo pedro antonio de la mancha jesus alberto",
      date: "15/08/2019"
    }
  ]);

  function insertNewItem() {
    if (text === "")
      Alert.alert(
        "Start writing first",
        "Before save your draft you need start writing a post."
      );
    else {
      setIsloading(true);

      const NewId = id + 1;
      setId(NewId);

      const newArr = [...array];
      newArr.unshift({ id: NewId, content: text, date: "20/10/2019" });
      setArray(newArr);
      setDuration(700);
      setIsloading(false);
    }
  }

  function deleteDraft(i) {
    ConfirmDeleteAlert(
      "If you delete this draft you can't get it back. Are your sure?",
      "Delete"
    ).then(() => {
      setDuration(700);
      animationRef.current[i].fadeOutLeftBig().then(() => {
        setArray(prevState => prevState.filter((_, j) => j !== i));
      });
    });
  }

  return (
    <Modal animationType="slide" visible={true}>
      <Container>
        <Header
          setItem={() => insertNewItem()}
          close={() => close()}
          isLoading={isLoading}
          text={text}
        />

        {array.length === 0 ? (
          <View style={{ flex: 1, justifyContent: "center" }}>
            <Label align="center">Your drafts will appear here.</Label>
          </View>
        ) : (
          <ScrollView>
            {array.map((data, i) => {
              let swipeFavIcon = (
                <DeleteButton>
                  <Icon name="replace" color={theme.styled.ICON} size={16} />
                </DeleteButton>
              );

              var swipeoutBtns = [
                {
                  component: swipeFavIcon,
                  backgroundColor: "transparent",
                  onPress: () => deleteDraft(i)
                }
              ];

              return (
                <Animatable.View
                  ref={el => (animationRef.current[i] = el)}
                  key={data.id}
                  duration={duration}
                  animation="fadeInRightBig"
                >
                  <Swipeout
                    style={{
                      marginTop: 8,
                      backgroundColor: `${theme.styled.BACKGROUND}`
                    }}
                    right={swipeoutBtns}
                    autoClose={true}
                  >
                    <BoxContainer onPress={() => setDraft(data.content)}>
                      <TextContainer>
                        <Label
                          color={theme.styled.TITLE}
                          weight="600"
                          numberOfLines={1}
                        >
                          {data.content}
                        </Label>

                        <Label style={{ marginTop: 4 }} size={14}>
                          {data.date}
                        </Label>
                      </TextContainer>
                    </BoxContainer>
                  </Swipeout>
                </Animatable.View>
              );
            })}
          </ScrollView>
        )}
      </Container>
    </Modal>
  );
}

export default withTheme(Draft);
