import ImagePicker from "react-native-image-crop-picker";

const Photo = () => {
  return ImagePicker.openPicker({
    width: 720,
    height: 720,
    cropping: true,
    includeBase64: true
  });
};

export default Photo;
