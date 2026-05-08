import * as Location from 'expo-location';

export const getCurrentLocation =
  async () => {
    const { status } =
      await Location.requestForegroundPermissionsAsync();

    if (status !== 'granted') {
      throw new Error(
        'Permiso denegado'
      );
    }

    const location =
      await Location.getCurrentPositionAsync(
        {}
      );

    return location;
  };