import React from "react";
import DialogInput from "react-native-dialog-input";

export function CreateBucket(props) {
  return (
    <DialogInput
      isDialogVisible={props.visible}
      title={"Bucket"}
      message={"Create a new bucket"}
      hintInput={"Write here"}
      dialogStyle={{ backgroundColor: "white" }}
      submitInput={inputText => {
        props.close();
      }}
      closeDialog={() => {
        props.close();
      }}
    />
  );
}
