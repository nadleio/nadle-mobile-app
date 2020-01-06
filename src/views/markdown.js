import React, { useState, useRef, useEffect } from "react";
import {
  StatusBar,
  KeyboardAvoidingView,
  Keyboard,
  Platform
} from "react-native";
import { SafeAreaView } from "react-navigation";
import styled, { withTheme } from "styled-components";

import Preview from "../components/markdown/Preview/Preview";
import Gif from "../components/Gif";
import Gist from "../components/Gist/Gist";
import ModalLink from "../components/markdown/ModalLink";
import Buttons from "../components/markdown/Buttons";
import SetTable from "../components/markdown/SetTable";
import Draft from "../components/markdown/Draft/Draft";
import Input from "../components/Form/Input";

import Header from "../components/markdown/Header";
import Photo from "../components/Photo";
import BeginSign from "../components/markdown/functions/BeginSign";
import OneSign from "../components/markdown/functions/OneSign";
import TwoSigns from "../components/markdown/functions/TwoSigns";
import LinksFunc from "../components/markdown/functions/Links";
import JustAddSign from "../components/markdown/functions/JustAddSign";
import CodeBlock from "../components/markdown/functions/CodeBlock";
import MarkDownTitles from "../components/markdown/MarkDownTitles";
import Table from "../components/markdown/functions/Table";

const InputContainer = styled.View`
  flex: 1;
  padding: 0 5% 0 5%;
  background-color: ${props => props.theme.styled.BACKGROUND};
`;

function MarkdownView({ theme, navigation }) {
  const [modal, setModal] = useState(false);
  const [text, setText] = useState("");
  const [selection, setSelection] = useState({ start: 0, end: 0 });
  const [showAlert, setShowAlert] = useState(false);
  const [modalGif, setModalGif] = useState(false);
  const [modalGist, setModalGist] = useState(false);
  const [first, setFirst] = useState(false);
  const [titleAlert, setTitleAlert] = useState(false);
  const [tableAlert, setTableAlert] = useState(false);
  const [editable, setEditable] = useState(false);
  const [modalDraft, setModalDraft] = useState(false);

  const inputRef = useRef("refComponent");

  var selectionNumber = Platform.OS === "android" ? 1 : 2;
  var block = Platform.OS === "android" ? 3 : 4;

  useEffect(() => {
    setTimeout(() => {
      setEditable(true);
    }, 100);
  }, []);

  async function startSign(simbol) {
    const response = await BeginSign(
      selection.start,
      selection.end,
      text,
      simbol
    );
    setText(response);
  }

  function italics() {
    text.length == 0 ? setFirst(true) : setFirst(false);

    OneSign(selection.start, selection.end, text, "**").then(request => {
      setText(request.content);

      setSelection({
        start: request.erase ? selection.end + 1 : selection.end - 1,
        end: request.erase ? selection.end + 1 : selection.end - 1
      });
    });
  }

  function twoSimbols(simbol) {
    text.length == 0 ? setFirst(true) : setFirst(false);

    TwoSigns(selection.start, selection.end, text, simbol).then(request => {
      setText(request.content);
      setSelection({
        start: request.erase
          ? selection.end + 2
          : selection.end - selectionNumber,
        end: request.erase ? selection.end + 2 : selection.end - selectionNumber
      });
    });
  }

  async function table(row, column) {
    const response = await Table(text, selection.start, row, column);
    setText(response);
  }

  async function links(textContent, link) {
    const response = await LinksFunc(selection.start, textContent, link, text);
    setText(response);
  }

  async function centerLine() {
    const response = await JustAddSign(selection.start, "\n\n" + "---", text);
    setText(response + "\n\n");
  }

  async function showGif(url) {
    setModalGif(false);
    const response = await JustAddSign(
      selection.start,
      "\n\n" + `![](${url})`,
      text
    );
    setText(response + "\n");
  }

  async function setPhoto() {
    const image = await Photo();

    if (image !== "error") {
      const response = await JustAddSign(
        selection.start,
        "\n\n" + `![](data:${image.mime};base64,${image.data})`,
        text
      );
      setText(response + "\n");
    }
  }

  function codeBlock() {
    CodeBlock(selection.start, selection.end, text, "``````").then(request => {
      setText(request.content);
      setSelection({
        start: request.erase ? selection.end + 4 : selection.end - block,
        end: request.erase ? selection.end + 4 : selection.end - block
      });
    });
  }

  async function gist(content, type) {
    const response = await JustAddSign(
      selection.start,
      "\n" + "```" + type + "\n" + content + "\n" + "```",
      text
    );
    setText(response + "\n");
  }

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior="padding"
      keyboardVerticalOffset={Platform.OS === "android" ? 25 : 0}
    >
      <SafeAreaView backgroundColor={theme.styled.BOX_BACKGROUND} />
      <StatusBar barStyle={theme.styled.STATUS_BAR} />

      <Header
        text={text}
        setModal={() => setModal(true)}
        setModalDraft={() => setModalDraft(true)}
        goToForm={() => navigation.navigate("MarkdownForm", { text: text })}
      />

      <InputContainer>
        <Input
          ref={inputRef}
          style={{
            borderBottomWidth: 0,
            textAlignVertical: "top",
            marginTop: 20
          }}
          underlineColorAndroid="rgba(0,0,0,0)"
          autoCorrect={false}
          onChangeText={text => {
            setText(text);
            setFirst(false);
          }}
          placeholder="Start writing a history here"
          selection={
            Platform.OS === "ios"
              ? {
                  start: first ? 2 : selection.start,
                  end: first ? 2 : selection.end
                }
              : {
                  start: first ? 0 : selection.start,
                  end: first ? 0 : selection.end
                }
          }
          value={text}
          multiline
          returnKeyType="next"
          onSelectionChange={({ nativeEvent: { selection } }) => {
            setSelection(selection);
          }}
          autoCapitalize="none"
          editable={editable}
        />
      </InputContainer>

      <Buttons
        header={() => setTitleAlert(true)}
        link={() => setShowAlert(true)}
        gif={() => setModalGif(true)}
        table={() => setTableAlert(true)}
        gist={() => setModalGist(true)}
        blocks={() => startSign(">")}
        pointList={() => startSign("-")}
        line={() => twoSimbols("~~~~")}
        bold={() => twoSimbols("****")}
        codeLine={() => twoSimbols("````")}
        italic={() => italics()}
        code={() => codeBlock()}
        centerLine={() => centerLine()}
        image={() => setPhoto()}
        dimiss={() => Keyboard.dismiss()}
      />

      {modal && <Preview close={() => setModal(false)} content={text} />}

      {modalDraft && (
        <Draft
          text={text}
          setDraft={text => {
            setText(text);
            setModalDraft(false);
          }}
          close={() => setModalDraft(false)}
        />
      )}

      {modalGif && (
        <Gif
          show={modalGif}
          close={() => setModalGif(false)}
          gif={value => showGif(value)}
        />
      )}

      {modalGist && (
        <Gist
          show={modalGist}
          close={() => setModalGist(false)}
          gist={(content, type) => {
            setModalGist(false);
            gist(content, type);
          }}
        />
      )}

      {showAlert && (
        <ModalLink
          showModalLink={showAlert}
          action={(title, link) => {
            links(title, link);
            setShowAlert(false);
          }}
          close={() => setShowAlert(false)}
        />
      )}

      {titleAlert && (
        <MarkDownTitles
          alert={titleAlert}
          close={() => setTitleAlert(false)}
          action={value => {
            setTitleAlert(false);
            startSign(value);
          }}
        />
      )}

      {tableAlert && (
        <SetTable
          alert={tableAlert}
          close={() => setTableAlert(false)}
          action={(row, column) => {
            setTableAlert(false);
            table(Number(row), Number(column));
          }}
        />
      )}
    </KeyboardAvoidingView>
  );
}

MarkdownView.navigationOptions = { header: null };
export default withTheme(MarkdownView);
