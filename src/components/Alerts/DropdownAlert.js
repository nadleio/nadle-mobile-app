import React from "react";
import { SafeAreaView } from "react-native";

import styled from "styled-components";

import { Images } from "../../assets/styles/Image";
import { Information } from "../../components/Text";
import CLOSE from "../../assets/img/close.png";

export const AlertBox = styled.View`
  padding: 15px;
  background-color: ${props => props.background || "red"};
  flex-direction: row;
  align-items: center;
`;

export const InformationContent = styled.View`
  width: 90%;
`;

export const CloseContent = styled.TouchableOpacity`
  justify-content: center;
  margin-left: 5;
`;

export function DropdownAlert(props) {
  return (
    props.isShowingAlert && (
      <SafeAreaView backgroundColor={props.background}>
        <AlertBox background={props.background}>
          <InformationContent>
            <Information color="white" size={16}>
              {props.text}
            </Information>
          </InformationContent>

          <CloseContent onPress={() => props.setShowingAlert()}>
            <Images height={23} width={23} source={CLOSE} />
          </CloseContent>
        </AlertBox>
      </SafeAreaView>
    )
  );
}

DropdownAlert.navigationOptions = { header: null };
