import { Alert } from "react-native";

export function ConfirmDeleteAlert(messagge, type) {
  return new Promise(resolve => {
    Alert.alert(type, messagge, [
      {
        text: "Cancel",
        onPress: () => console.log("Cancel Pressed"),
        style: "cancel"
      },
      {
        text: type,
        onPress: () => resolve("ok")
      }
    ]);
  });
}
