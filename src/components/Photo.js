import ImagePicker from "react-native-image-crop-picker";

export const Photo = () => {
  return new Promise(resolve => {
    ImagePicker.openPicker({
      width: 720,
      height: 720,
      cropping: true,
      includeBase64: true
    })
      .then(image => {
        resolve(image);
      })
      .catch(() => {
        resolve("error");
      });
  });
};
