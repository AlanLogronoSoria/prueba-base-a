import {
  Alert,
  Button,
  SafeAreaView,
  StyleSheet,
  Text,
} from 'react-native';

import { router } from 'expo-router';

import { logout } from '@/features/auth/api/logout';

export default function ProfileScreen() {
  const handleLogout = async () => {
    try {
      await logout();

      router.replace('/(auth)/login');
    } catch (error) {
      console.error(error);

      Alert.alert(
        'Error',
        'No se pudo cerrar sesión'
      );
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>
        Perfil
      </Text>

      <Text style={styles.subtitle}>
        Usuario autenticado
      </Text>

      <Button
        title="Cerrar Sesión"
        onPress={handleLogout}
      />
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
    marginBottom: 10,
  },

  subtitle: {
    marginBottom: 20,
    color: '#666',
  },
});