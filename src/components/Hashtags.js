import React from "React";
import styled from "styled-components";
import { Information } from "../components/Text";

export const HashtagsContent = styled.TouchableOpacity`
  padding: 3%;
  padding-top: 2%;
  padding-bottom: 2%;
  background-color: rgba(131, 63, 255, 0.09);
  border-radius: 8;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
  margin-right: 5px;
`;

export const RowTechs = styled.View`
  flex-wrap: wrap;
  flex-direction: row;
  align-items: center;
`;

export function Hashtags(props) {
  return (
    <RowTechs>
      {props.data.map(data => (
        <HashtagsContent>
          <Information color="#833fff" size={14}>
            {data}
          </Information>
        </HashtagsContent>
      ))}
    </RowTechs>
  );
}
