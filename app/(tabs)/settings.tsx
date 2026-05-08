import { pickImage, takePhoto } from '@/snippets/native/image-picker';
import { getCurrentLocation } from '@/snippets/native/location';
import { generatePDF } from '@/snippets/native/pdf';
import { useState } from 'react';
import {
  Alert,
  Image,
  SafeAreaView,
  StyleSheet,
  Switch,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

export default function SettingsScreen() {
  const [enabled, setEnabled] =
    useState(false);

  const [image, setImage] = useState<
    string | null
  >(null);

  const [coords, setCoords] =
  useState<any>(null);

  const handlePickImage = async () => {
    try {
      const result = await pickImage();

      if (!result.canceled) {
        setImage(result.assets[0].uri);
      }
    } catch (error) {
      console.error(error);

      Alert.alert(
        'Error',
        'No se pudo seleccionar la imagen'
      );
    }
  };

  const handleGeneratePDF = async () => {
  try {
    await generatePDF();
  } catch (error) {
    console.error(error);

    Alert.alert(
      'Error',
      'No se pudo generar el PDF'
    );
  }
};
  
  const handleGetLocation = async () => {
  try {
    const location =
      await getCurrentLocation();

    setCoords(
      location.coords
    );
  } catch (error) {
    console.error(error);

    Alert.alert(
      'Error',
      'No se pudo obtener ubicación'
    );
  }
};

const handleTakePhoto = async () => {
  try {
    const result = await takePhoto();

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  } catch (error) {
    console.error(error);

    Alert.alert(
      'Error',
      'No se pudo tomar la foto'
    );
  }
};

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>
        Configuración
      </Text>

      <View style={styles.row}>
        <Text>Notificaciones</Text>

        <Switch
          value={enabled}
          onValueChange={setEnabled}
        />
      </View>

      <TouchableOpacity
        style={styles.button}
        onPress={handlePickImage}
      >
        <Text style={styles.buttonText}>
          Seleccionar Imagen
        </Text>
      </TouchableOpacity>

      {image && (
        <Image
          source={{ uri: image }}
          style={styles.image}
        />
      )}

      <Text style={styles.version}>
        Version 1.0.0
      </Text>

      <TouchableOpacity
          style={styles.button}
          onPress={handleGetLocation}
        >
          <Text style={styles.buttonText}>
            Obtener Ubicación
          </Text>
      </TouchableOpacity>
      {coords && (
        <View>
          <Text>
            Latitud: {coords.latitude}
          </Text>

          <Text>
            Longitud: {coords.longitude}
          </Text>
        </View>
      )}

      <TouchableOpacity
        style={styles.button}
        onPress={handleGeneratePDF}
      >
        <Text style={styles.buttonText}>
          Generar PDF
        </Text>
    </TouchableOpacity>

    <TouchableOpacity
      style={styles.button}
      onPress={handleTakePhoto}
    >
      <Text style={styles.buttonText}>
        Tomar Foto
      </Text>
    </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },

  title: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 20,
  },

  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },

  button: {
    backgroundColor: '#000',
    padding: 14,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 20,
  },

  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },

  image: {
    width: 200,
    height: 200,
    borderRadius: 12,
    marginBottom: 20,
    alignSelf: 'center',
  },

  version: {
    color: '#666',
  },
});