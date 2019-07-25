import React from "React";
import styled from "styled-components";
import { Information } from "../components/Text";

export const HashtagsContent = styled.TouchableOpacity`
  padding: 3%;
  padding-top: 1.5%;
  padding-bottom: 1.5%;
  background-color: #eaeefa;
  border-radius: 4;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
  margin-right: 6px;
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
          <Information color="#325ad2" size={14}>
            {data}
          </Information>
        </HashtagsContent>
      ))}
    </RowTechs>
  );
}
