import React from "react";
import { Modal } from "react-native";
import { Button } from "../../components/Button";
import styled from "styled-components";
import { Information } from "../../components/Text";
import { Images } from "../../assets/styles/Image";

export const ModalContent = styled.View`
  flex: 1;
  background-color: rgba(0, 0, 0, 0.3);
  justify-content: center;
  padding-left: 5%;
  padding-right: 5%;
`;

export const AlertBox = styled.View`
  padding: 20px;
  background-color: white;
  border-radius: 8;
  width: 100%;
`;

export const CenterContent = styled.View`
  align-items: center;
`;

export function Alert(props) {
  return (
    <Modal transparent={true} visible={props.isShowingAlert}>
      <ModalContent>
        <AlertBox>
          <CenterContent>
            <Images height={50} width={50} source={props.image} />

            <Information top={15} size={16}>
              {props.title}
            </Information>
          </CenterContent>

          <Button
            haveIcon={false}
            disabled={false}
            text={props.buttonText}
            top={20}
            color={["#007aff", "#007aff"]}
            borderColor="white"
            TextColor="white"
            action={() => props.action()}
          />
        </AlertBox>
      </ModalContent>
    </Modal>
  );
}

Alert.navigationOptions = { header: null };
