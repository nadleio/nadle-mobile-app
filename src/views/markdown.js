import React, { useState } from "react";
import {
  View,
  TextInput,
  StatusBar,
  KeyboardAvoidingView,
  Keyboard,
  Button
} from "react-native";

import { SafeAreaView } from "react-navigation";

import { ViewFlex } from "../assets/styles/styles";
import { PaddingHorizontal } from "../assets/styles/styles";

import { Alert } from "../components/alerts/Alert";
import { Preview } from "../components/markdown/Preview";
import { Header, Row } from "../components/markdown/styles";
import { Gif } from "../components/Gif";
import { Buttons } from "../components/markdown/Buttons";
import { Photo } from "../components/Photo";
import { ModalView } from "../components/ModalView";
import { BeginSign } from "../components/markdown/functions/BeginSign";
import { OneSign } from "../components/markdown/functions/OneSign";
import { TwoSigns } from "../components/markdown/functions/TwoSigns";
import { LinksFunc } from "../components/markdown/functions/Links";
import { JustAddSign } from "../components/markdown/functions/JustAddSign";
import { CodeBlock } from "../components/markdown/functions/CodeBlock";
import { MarkDownTitles } from "../components/markdown/MarkDownTitles";
import { SetTable } from "../components/markdown/SetTable";
import { Table } from "../components/markdown//functions/Table";

function MarkdownView() {
  const [modal, setModal] = useState(false);
  const [text, setText] = useState("");
  const [selection, setSelection] = useState({ start: 0, end: 0 });
  const [showAlert, setShowAlert] = useState(false);
  const [modalGif, setModalGif] = useState(false);
  const [first, setFirst] = useState(false);
  const [photoAlert, setPhotoAlert] = useState(false);
  const [titleAlert, setTitleAlert] = useState(false);
  const [tableAlert, setTableAlert] = useState(false);

  function header(value) {
    var sign;

    switch (value) {
      case "H1":
        sign = "#";
        break;
      case "H2":
        sign = "##";
        break;
      case "H3":
        sign = "###";
        break;
    }
    BeginSign(selection.start, selection.end, text, sign).then(request => {
      setText(request);
    });
  }

  function blocks() {
    BeginSign(selection.start, selection.end, text, ">").then(request => {
      setText(request);
    });
  }

  function pointList() {
    BeginSign(selection.start, selection.end, text, "-").then(request => {
      setText(request);
    });
  }

  function codeLine() {
    text.length == 0 ? setFirst(true) : setFirst(false);

    OneSign(selection.start, selection.end, text, "``").then(request => {
      setText(request.content);
      setSelection({
        start: request.erase ? selection.end + 1 : selection.end - 1,
        end: request.erase ? selection.end + 1 : selection.end - 1
      });
    });
  }

  function italics() {
    text.length == 0 ? setFirst(true) : setFirst(false);

    OneSign(selection.start, selection.end, text, "__").then(request => {
      setText(request.content);
      setSelection({
        start: request.erase ? selection.end + 1 : selection.end - 1,
        end: request.erase ? selection.end + 1 : selection.end - 1
      });
    });
  }

  function bold() {
    text.length == 0 ? setFirst(true) : setFirst(false);

    TwoSigns(selection.start, selection.end, text, "****").then(request => {
      setText(request.content);
      setSelection({
        start: request.erase ? selection.end + 2 : selection.end - 2,
        end: request.erase ? selection.end + 2 : selection.end - 2
      });
    });
  }

  function table(row, column) {
    Table(text, selection.start, row, column).then(request => {
      setText(request);
    });
  }

  function textLine() {
    text.length == 0 ? setFirst(true) : setFirst(false);

    TwoSigns(selection.start, selection.end, text, "~~~~").then(request => {
      setText(request.content);
      setSelection({
        start: request.erase ? selection.end + 2 : selection.end - 2,
        end: request.erase ? selection.end + 2 : selection.end - 2
      });
    });
  }

  function links(textContent, link) {
    LinksFunc(selection.start, textContent, link, text).then(request => {
      setText(request);
    });
  }

  function centerLine() {
    JustAddSign(selection.start, "\n\n" + "---", text).then(request => {
      setText(request + "\n\n");
    });
  }

  function showGif(url) {
    setModalGif(false);
    JustAddSign(selection.start, "\n\n" + `![](${url})`, text).then(request => {
      setText(request + "\n");
    });
  }

  function setPhoto() {
    Photo().then(image => {
      image == "error"
        ? setPhotoAlert(false)
        : JustAddSign(
            selection.start,
            "\n\n" + `![](data:${image.mime};base64,${image.data})`,
            text
          ).then(request => {
            setPhotoAlert(false);
            setText(request + "\n");
          });
    });
  }

  function codeBlock() {
    CodeBlock(selection.start, selection.end, text, "~~~~~~~~").then(
      request => {
        setText(request.content);
        setSelection({
          start: request.erase ? selection.end + 5 : selection.end - 5,
          end: request.erase ? selection.end + 5 : selection.end - 5
        });
      }
    );
  }

  return (
    <KeyboardAvoidingView style={{ flex: 1 }} behavior="padding">
      <SafeAreaView backgroundColor="white" />
      <StatusBar barStyle="dark-content" />

      <Row>
        <Button
          // onPress={() => setModal(true)}
          disabled={true}
          title="Tutorial"
          color="#833fff"
        />

        <Header>
          <Button
            onPress={() => setModal(true)}
            disabled={text.length == 0}
            title="Preview"
            color="#833fff"
          />
          <Button disabled={text.length == 0} title="Next" color="#833fff" />
        </Header>
      </Row>

      <ViewFlex>
        <View paddingHorizontal="5%">
          <View marginTop={20}>
            <TextInput
              style={{ fontSize: 16 }}
              onChangeText={text => {
                setText(text);
                setFirst(false);
              }}
              placeholder="Start writing a history here"
              autoCapitalize="none"
              selection={{
                start: first ? 2 : selection.start,
                end: first ? 2 : selection.end
              }}
              value={text}
              multiline
              returnKeyType="next"
              onKeyPress={this.onKeyPress}
              onSelectionChange={({ nativeEvent: { selection } }) => {
                setSelection({
                  start: selection.start,
                  end: selection.end
                });
              }}
            />
          </View>
        </View>
      </ViewFlex>

      <Buttons
        header={() => setTitleAlert(true)}
        line={() => textLine()}
        bold={() => bold()}
        italic={() => italics()}
        code={() => codeBlock()}
        codeLine={() => codeLine()}
        link={() => setShowAlert(true)}
        gif={() => setModalGif(true)}
        centerLine={() => centerLine()}
        blocks={() => blocks()}
        pointList={() => pointList()}
        image={() => setPhotoAlert(true)}
        table={() => setTableAlert(true)}
        dimiss={() => Keyboard.dismiss()}
      />

      {modal && (
        <ModalView
          show={modal}
          hide={() => setModal(false)}
          content={
            <PaddingHorizontal>
              <Preview
                hide={() => setModal(false)}
                show={modal}
                content={text}
              />
            </PaddingHorizontal>
          }
        />
      )}

      {modalGif && (
        <Gif
          show={modalGif}
          set={value => setModalGif(value)}
          gif={value => showGif(value)}
        />
      )}

      {showAlert && (
        <Alert
          isShowingAlert={showAlert}
          action={(title, link) => {
            links(title, link), setShowAlert(false);
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
            header(value);
          }}
        />
      )}

      {tableAlert && (
        <SetTable
          alert={tableAlert}
          close={() => setTableAlert(false)}
          action={(row, column) => {
            setTableAlert(false);
            table(row, column);
          }}
        />
      )}

      {photoAlert && setPhoto()}
    </KeyboardAvoidingView>
  );
}

MarkdownView.navigationOptions = { header: null };
export default MarkdownView;
