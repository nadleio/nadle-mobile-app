import { Share } from "react-native";

export const ShareIt = async url => {
  try {
    await Share.share({
      message: url
    });
  } catch (error) {
    alert(error.message);
  }
};
