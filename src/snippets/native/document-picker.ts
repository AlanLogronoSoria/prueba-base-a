import * as DocumentPicker from 'expo-document-picker';

export const pickPDF = async () => {
  return await DocumentPicker.getDocumentAsync({
    type: 'application/pdf',
    copyToCacheDirectory: true,
  });
};