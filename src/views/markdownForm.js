import React, { useState, Fragment } from "react";
import { ScrollView, View } from "react-native";
import styled, { withTheme } from "styled-components";
import { Formik } from "formik";
import { useMutation } from "@apollo/react-hooks";
import gql from "graphql-tag";
import { SafeAreaView } from "react-navigation";

import Header from "../components/Header";
import Input from "../components/Form/Input";
import Button from "../components/Button";

import Cover from "../components/MarkDownForm/Cover";
import Loading from "../components/Loading";

import { uploadFile } from "../Fragments/file";

const Container = styled.View`
  flex: 1;
  background-color: ${props => props.theme.styled.BACKGROUND};
`;

const MUTATION_POST = gql`
  mutation($body: String!, $title: String!, $coverPostUrl: String!) {
    createPost(body: $body, title: $title, coverPostUrl: $coverPostUrl) {
      message
      success
      errorCode
      data {
        id
        title
      }
    }
  }
`;

const UPLOAD_FILE = gql`
  mutation($file: Upload!) {
    uploadFile(file: $file) {
      message
      success
      errorCode
      data {
        ...UploadFile
      }
    }
  }
  ${uploadFile}
`;

function MarkdownForm({ theme, navigation }) {
  const [createPost] = useMutation(MUTATION_POST);
  const [uploadFile] = useMutation(UPLOAD_FILE);

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
        setIsLoading(false);
      }
    } catch (error) {
      setIsLoading(false);
    }
  }

  async function uploadPost(values, coverUrl) {
    try {
      const { data } = await createPost({
        variables: {
          body: values.body,
          title: values.title,
          coverPostUrl: coverUrl
        }
      });

      console.log(data);

      if (data.createPost.success) {
        navigation.navigate("Profile");
      } else {
        alert("Something happend, plase try again");
      }
    } catch (error) {
      // Sentry Catch
    }

    setIsLoading(false);
  }

  return (
    <Fragment>
      <SafeAreaView backgroundColor={theme.styled.BOX_BACKGROUND} />
      <SafeAreaView
        style={{ flex: 1 }}
        backgroundColor={theme.styled.BACKGROUND}
      >
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

                  <Cover
                    setCover={file => setFieldValue("coverPostUrl", file)}
                  />

                  <Button
                    disabled={
                      values.title === "" ||
                      values.coverPostUrl === "" ||
                      isLoading
                    }
                    action={handleSubmit}
                    text="POST"
                    color={[theme.colors.PRIMARY, theme.colors.PRIMARY]}
                    textColor="#fff"
                  />
                </View>
              )}
            </Formik>
          </ScrollView>

          {isLoading && <Loading />}
        </Container>
      </SafeAreaView>
    </Fragment>
  );
}

export default withTheme(MarkdownForm);
