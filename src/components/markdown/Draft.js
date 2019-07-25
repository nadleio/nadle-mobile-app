import React, { useEffect, useState } from "react";

import styled from "styled-components";
import { Information } from "../Text";
import { Icon } from "../Icon";
import { ConfirmDeleteAlert } from "../ConfirmDeleteAlert";

const Container = styled.TouchableOpacity`
  padding-top: 4%;
  padding-bottom: 4%;
  padding-right: 5%;
  border-bottom-color: #f4f4f4;
  border-bottom-width: 1px;
  flex-direction: row;
  justify-content: space-between;
`;

const TextLimit = styled.View`
  width: 80%;
`;

export function Draft(props) {
  const [array, setArray] = useState([
    "hola me llamo **juan**",
    "#Yo no sem **pero**",
    "#Yo no sem **pero**"
  ]);

  var reverse = array.reverse();

  useEffect(() => {
    if (props.saveText != "") {
      const newArray = [...array];
      newArray[array.length + 1] = props.saveText;
      setArray(newArray);
    }
  }, []);

  function deleteDraft() {
    ConfirmDeleteAlert(
      "If you delete this draft you can't get it back",
      "Delete"
    ).then(request => {
      alert(request);
    });
  }

  return reverse.map(data => (
    <Container onPress={() => props.setDraft(data)}>
      <TextLimit>
        <Information numberOfLines={1} size={16}>
          {data}
        </Information>
      </TextLimit>

      <Icon onPress={() => deleteDraft()} size={18} color="red">
        
      </Icon>
    </Container>
  ));
}
