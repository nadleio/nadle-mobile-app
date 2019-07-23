import React, { useState } from "react";
import { Modal } from "react-native";

import styled from "styled-components";

import { Information } from "./Text";
import { BucketList } from "./BucketList";
import { CreateBucket } from "./CreateBucket";

export const ModalContent = styled.View`
  flex: 1;
  background-color: rgba(0, 0, 0, 0.1);
  justify-content: flex-end;
`;

export const Box = styled.View`
  padding-top: 5%;
  background-color: white;
  border-radius: 8;
  width: 100%;
  height: 250px;
`;

export const Row = styled.View`
  flex-direction: row;
  justify-content: space-between;
  padding-left: 5%;
  padding-right: 5%;
  margin-bottom: 20px;
`;

export const Padding = styled.ScrollView`
  padding-left: 5%;
  padding-right: 5%;
`;

export function ModalBucket(props) {
  const [createBucket, setCreateBucket] = useState(false);

  return (
    <Modal transparent={true}>
      <ModalContent>
        <Box>
          <Row>
            <Information onPress={() => props.close()} size={16}>
              Close
            </Information>

            <Information size={16}>Buckets</Information>

            <Information
              onPress={() => props.close()}
              color="#0091ff"
              size={16}
            >
              Save
            </Information>
          </Row>

          <Padding>
            <BucketList
              createNew={() => setCreateBucket(true)}
              title="React Native"
              action={() => null}
            />
          </Padding>
        </Box>
      </ModalContent>

      <CreateBucket
        visible={createBucket}
        close={() => setCreateBucket(false)}
      />
    </Modal>
  );
}

ModalBucket.navigationOptions = { header: null };
