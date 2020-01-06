import React, { useState } from "react";
import { ScrollView, View } from "react-native";
import styled, { withTheme } from "styled-components";
import { Formik } from "formik";

import Header from "../components/Header";
import Input from "../components/Form/Input";
import Button from "../components/Button";

import Organization from "../components/MarkDownForm/Organization";
import Cover from "../components/MarkDownForm/Cover";

const Container = styled.View`
  flex: 1;
  background-color: ${props => props.theme.styled.BACKGROUND};
`;

function MarkdownForm({ theme, navigation }) {
  const [isLoading, setIsLoading] = useState(false);
  const [cover, setCover] = useState("");
  const initialValues = {
    title: "",
    organization: {
      id: 0,
      name: "Choose where is going this post"
    }
  };

  function uploadPost(values) {
    setIsLoading(true);
    setIsLoading(false);
    console.log(values);
  }

  return (
    <Container>
      <Header title="Details" back={() => navigation.goBack()} />

      <ScrollView>
        <Formik
          enableReinitialize
          initialValues={initialValues}
          onSubmit={values => uploadPost(values)}
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

              <Cover cover={cover} setCover={url => setCover(url)} />

              <Organization
                organization={values.organization}
                setOrganization={data => setFieldValue("organization", data)}
              />

              <Button
                isLoading={isLoading}
                disabled={values.title === "" || cover === "" || isLoading}
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
    </Container>
  );
}

export default withTheme(MarkdownForm);
