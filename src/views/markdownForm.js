import React, { useState, useContext } from "react";
import { ScrollView, View } from "react-native";
import styled, { withTheme } from "styled-components";
import { Formik } from "formik";
import { useMutation } from "@apollo/react-hooks";
import gql from "graphql-tag";

import Header from "../components/Header";
import Input from "../components/Form/Input";
import Button from "../components/Button";

import Organization from "../components/MarkDownForm/Organization";
import Cover from "../components/MarkDownForm/Cover";
import Loading from "../components/Loading";

import { userInformation } from "../Fragments/userInfo";

import ContextSelf from "../lib/ContextSelf";

const Container = styled.View`
  flex: 1;
  background-color: ${props => props.theme.styled.BACKGROUND};
`;

const MUTATION_POST = gql`
  mutation(
    $body: String!
    $title: String!
    $coverPostUrl: String!
    $organizationId: Int!
  ) {
    createPost(
      body: $body
      title: $title
      coverPostUrl: $coverPostUrl
      organizationId: $organizationId
    ) {
      message
      success
      errorCode
      data {
        ...UserInformation
      }
    }
  }
  ${userInformation}
`;

const UPLOAD_COVER = gql`
  mutation($file: Upload!) {
    uploadFile(file: $file) {
      message
      success
      errorCode
      data {
        url
      }
    }
  }
`;

function MarkdownForm({ theme, navigation }) {
  const [createPost] = useMutation(MUTATION_POST);
  const [uploadFile] = useMutation(UPLOAD_COVER);

  const { updateSelf } = useContext(ContextSelf);

  const [isLoading, setIsLoading] = useState(false);

  async function uploadCover(values) {
    setIsLoading(true);
    const file = values.coverPostUrl;

    try {
      const { data } = await uploadFile({
        variables: { file }
      });

      if (data.uploadFile.success) {
        const coverUrl = data.uploadFile.data.url;
        uploadPost(values, coverUrl);
      } else {
        alert("Something happend, plase try again");
      }
    } catch (error) {
      // Sentry Catch
    }
  }

  async function uploadPost(values, coverUrl) {
    try {
      const { data } = await createPost({
        variables: {
          body: values.body,
          title: values.title,
          coverPostUrl: coverUrl,
          organizationId: 0
        }
      });

      if (data.createPost.success) {
        updateSelf(data.createPost.data);
        setIsLoading(false);

        navigation.navigate("Profile");
      } else {
        alert("Something happend, plase try again");
      }
    } catch (error) {
      // Sentry Catch
    }
  }

  return (
    <Container>
      <Header title="Details" back={() => navigation.goBack()} />

      <ScrollView>
        <Formik
          enableReinitialize
          initialValues={{
            body: navigation.state.params.text,
            title: "",
            coverPostUrl: "",
            organization: {}
          }}
          onSubmit={values => uploadCover(values)}
        >
          {({ handleChange, handleSubmit, values, setFieldValue }) => (
            <View style={{ padding: 16 }}>
              <Input
                onChangeText={handleChange("title")}
                label="Title"
                onSubmitEditing={() => {
                  this.description.focus();
                }}
                style={{ marginBottom: 32 }}
                multiline={true}
                value={values.title}
              />

              <Cover setCover={file => setFieldValue("coverPostUrl", file)} />

              <Organization
                organization={values.organization}
                setOrganization={data => setFieldValue("organization", data)}
              />

              <Button
                disabled={
                  values.title === "" || values.coverPostUrl === "" || isLoading
                }
                action={handleSubmit}
                text="POST"
                color={[theme.colors.PRIMARY, theme.colors.PRIMARY]}
                textColor="#fff"
                style={{ marginTop: 32 }}
              />
            </View>
          )}
        </Formik>
      </ScrollView>

      {isLoading && <Loading />}
    </Container>
  );
}

export default withTheme(MarkdownForm);
