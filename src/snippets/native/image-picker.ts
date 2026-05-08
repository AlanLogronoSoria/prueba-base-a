import * as ImagePicker from 'expo-image-picker';

export const pickImage = async () => {
  const permission =
    await ImagePicker.requestMediaLibraryPermissionsAsync();

  if (!permission.granted) {
    throw new Error(
      'Permiso galería denegado'
    );
  }

  return await ImagePicker.launchImageLibraryAsync({
    mediaTypes:
      ImagePicker.MediaTypeOptions.Images,
    allowsEditing: true,
    quality: 1,
  });
};

export const takePhoto = async () => {
  const permission =
    await ImagePicker.requestCameraPermissionsAsync();

  if (!permission.granted) {
    throw new Error(
      'Permiso cámara denegado'
    );
  }

  return await ImagePicker.launchCameraAsync({
    mediaTypes:
      ImagePicker.MediaTypeOptions.Images,
    allowsEditing: true,
    quality: 1,
  });
};