import { Share } from "react-native";

async function ShareIt(url) {
  try {
    await Share.share({
      message: url
    });
  } catch (error) {
    alert(error.message);
  }
}

export default ShareIt;
