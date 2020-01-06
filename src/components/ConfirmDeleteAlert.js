import { Alert } from "react-native";

export function ConfirmDeleteAlert(messagge, type) {
  return new Promise(resolve => {
    Alert.alert(type, messagge, [
      { text: "Cancel", style: "cancel" },
      { text: type, onPress: () => resolve("ok"), style: "destructive" }
    ]);
  });
}
