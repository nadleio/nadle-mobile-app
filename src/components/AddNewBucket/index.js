import React, { useState } from "react";
import { View, Switch } from "react-native";
import styled, { withTheme } from "styled-components";
import { Formik } from "formik";
import { useMutation } from "@apollo/react-hooks";
import gql from "graphql-tag";

import Input from "../Form/Input";
import { Label } from "../Text";
import Dialog from "../Modal/Dialog";
import Button from "../Button";
import Avatar from "./Avatar";

const BucketContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-top: 16px;
`;

const CREATE_BUCKET = gql`
  mutation(
    $parent: String
    $title: String!
    $description: String
    $privateBucket: Boolean
  ) {
    createBucket(
      parent: $parent
      title: $title
      description: $description
      privateBucket: $privateBucket
    ) {
      message
      success
      errorCode
      data {
        title
        privateBucket
      }
    }
  }
`;

// const UPLOAD_AVATAR = gql`
//   mutation($file: Upload!) {
//     uploadFile(file: $file) {
//       message
//       success
//       errorCode
//       data {
//         url
//       }
//     }
//   }
// `;

function AddNewBuckeet({ close, theme }) {
  const [animation, setAnimation] = useState("fadeInUpBig");
  const [isLoading, setIsLoading] = useState(false);

  // const [uploadFile] = useMutation(UPLOAD_AVATAR);
  const [createBucket] = useMutation(CREATE_BUCKET);

  // async function uploadAvatar(values) {
  //   setIsLoading(true);
  //   const file = values.avatar;

  //   try {
  //     const { data } = await uploadFile({
  //       variables: { file }
  //     });

  //     if (data.uploadFile.success) {
  //       const coverUrl = data.uploadFile.data.url;
  //       createBucketFunc(values, coverUrl);
  //     } else {
  //       alert("Something happend, plase try again");
  //     }
  //   } catch (error) {
  //     alert("Something happend, please try again");
  //     setIsLoading(false);
  //     // Sentry Catch
  //   }
  // }

  async function createBucketFunc(values) {
    setIsLoading(true);

    try {
      const { data } = await createBucket({
        variables: {
          title: values.title,
          privateBucket: values.private,
          description: "",
          parent: ""
        }
      });

      console.log(data);

      if (data.createBucket.success) {
        closeModal("fadeOutDownBig");
      } else {
        alert("Something happend, plase try again");
      }
    } catch (error) {
      alert("Something happend, please try again");
      // Sentry Catch
    }

    setIsLoading(false);
  }

  function closeModal(animation) {
    setAnimation(animation);
    setTimeout(function() {
      close();
    }, 350);
  }

  return (
    <Dialog
      animation={animation}
      text="CREATE BUCKET"
      close={() => closeModal("fadeOutDownBig")}
    >
      <Formik
        initialValues={{ title: "", avatar: "", private: false }}
        onSubmit={values => createBucketFunc(values)}
      >
        {({ handleChange, handleSubmit, values, setFieldValue }) => (
          <View>
            <Avatar setFile={value => setFieldValue("avatar", value)} />

            <Input
              onChangeText={handleChange("title")}
              placeholder="Title"
              onSubmitEditing={() => this.column.focus()}
              style={{ marginTop: 16 }}
            />

            <BucketContainer>
              <Label weight={600} color={theme.styled.TITLE}>
                Are your bucket private?
              </Label>

              <Switch
                style={{ transform: [{ scaleX: 0.9 }, { scaleY: 0.9 }] }}
                trackColor={{
                  true: theme.colors.PRIMARY,
                  false: "transparent"
                }}
                tintColor={theme.colors.PRIMARY}
                onValueChange={value => setFieldValue("private", value)}
                value={values.private}
              />
            </BucketContainer>

            <Button
              disabled={values.title === "" || isLoading}
              isLoading={isLoading}
              action={handleSubmit}
              text="CREATE BUCKET"
              color={[theme.colors.PRIMARY, theme.colors.PRIMARY]}
              style={{ marginTop: 20 }}
              textColor="#fff"
            />
          </View>
        )}
      </Formik>
    </Dialog>
  );
}

export default withTheme(AddNewBuckeet);
