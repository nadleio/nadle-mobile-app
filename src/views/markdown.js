import React, { useState, useRef, useEffect } from "react";
import {
  View,
  TextInput,
  StatusBar,
  KeyboardAvoidingView,
  Keyboard,
  Platform
} from "react-native";

import { SafeAreaView } from "react-navigation";

import { ViewFlex } from "../assets/styles/styles";
import { PaddingHorizontal } from "../assets/styles/styles";

import { Alert } from "../components/alerts/Alert";
import { Preview } from "../components/markdown/Preview";
import { Header, IconContent, Save } from "../components/markdown/styles";
import { Gif } from "../components/Gif";
import { Gist } from "../components/Gist";
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
import { Information } from "../components/Text";
import { Icon } from "../components/Icon";
import { Draft } from "../components/markdown/Draft";

function MarkdownView(props) {
  const [modal, setModal] = useState(false);
  const [text, setText] = useState("");
  const [selection, setSelection] = useState({ start: 0, end: 0 });
  const [showAlert, setShowAlert] = useState(false);
  const [modalGif, setModalGif] = useState(false);
  const [modalGist, setModalGist] = useState(false);
  const [first, setFirst] = useState(false);
  const [photoAlert, setPhotoAlert] = useState(false);
  const [titleAlert, setTitleAlert] = useState(false);
  const [tableAlert, setTableAlert] = useState(false);
  const [editable, setEditable] = useState(false);
  const [modalDraft, setModalDraft] = useState(false);
  const inputRef = useRef("refComponent");

  var selectionNumber = Platform.OS === "android" ? 1 : 2;
  var block = Platform.OS === "android" ? 3 : 4;

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
    startSign(sign);
  }

  useEffect(() => {
    setTimeout(() => {
      setEditable(true);
    }, 100);
  }, []);

  function startSign(simbol) {
    BeginSign(selection.start, selection.end, text, simbol).then(request => {
      setText(request);
    });
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

  function table(row, column) {
    Table(text, selection.start, row, column).then(request => {
      setText(request);
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
    CodeBlock(selection.start, selection.end, text, "``````").then(request => {
      setText(request.content);
      setSelection({
        start: request.erase ? selection.end + 4 : selection.end - block,
        end: request.erase ? selection.end + 4 : selection.end - block
      });
    });
  }

  function gist(content, type) {
    JustAddSign(
      selection.start,
      "\n" + "```" + type + "\n" + content + "\n" + "```",
      text
    ).then(request => {
      setText(request + "\n");
    });
  }

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior="padding"
      keyboardVerticalOffset={Platform.OS === "android" ? 25 : 0}
    >
      <SafeAreaView backgroundColor="white" />
      <StatusBar barStyle="dark-content" />

      <Header>
        <IconContent>
          <Icon
            onPress={() => text.length != 0 && setModal(true)}
            color="black"
            size={22}
          >
            
          </Icon>

          <Icon color="black" size={22}>
            
          </Icon>

          <Save onPress={() => setModalDraft(true)} backgroundColor="#2a2a2a">
            <Information color="white" size={14}>
              DRAFT
            </Information>
          </Save>

          <Save
            onPress={() =>
              props.navigation.navigate("MarkdownForm", { text: text })
            }
          >
            <Information color="white" size={14}>
              NEXT
            </Information>
          </Save>
        </IconContent>
      </Header>

      <ViewFlex>
        <View paddingHorizontal="5%">
          <View marginTop={20}>
            <TextInput
              ref={inputRef}
              style={{ fontSize: 16, textAlignVertical: "top" }}
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
          </View>
        </View>
      </ViewFlex>

      <Buttons
        header={() => setTitleAlert(true)}
        line={() => twoSimbols("~~~~")}
        bold={() => twoSimbols("****")}
        italic={() => italics()}
        code={() => codeBlock()}
        codeLine={() => twoSimbols("````")}
        link={() => setShowAlert(true)}
        gif={() => setModalGif(true)}
        centerLine={() => centerLine()}
        blocks={() => startSign(">")}
        pointList={() => startSign("-")}
        image={() => setPhotoAlert(true)}
        table={() => setTableAlert(true)}
        gist={() => setModalGist(true)}
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

      {modalDraft && (
        <ModalView
          show={modalDraft}
          hide={() => setModalDraft(false)}
          content={
            <PaddingHorizontal>
              <Draft
                saveText={text}
                setDraft={text => {
                  setText(text);
                  setModalDraft(false);
                }}
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

      {modalGist && (
        <Gist
          show={modalGist}
          set={value => setModalGist(value)}
          gist={(content, type) => {
            setModalGist(false);
            gist(content, type);
          }}
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
