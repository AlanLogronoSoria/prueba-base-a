import { useState } from 'react';

import {
  Alert,
  Button,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
} from 'react-native';

import { router } from 'expo-router';

import { register } from '@/features/auth/api/register';

export default function RegisterScreen() {
  const [email, setEmail] =
    useState('');

  const [password, setPassword] =
    useState('');

  const handleRegister = async () => {
    try {
      if (!email.includes('@')) {
        Alert.alert(
          'Error',
          'Ingrese un email válido'
        );

        return;
      }

      if (password.length < 6) {
        Alert.alert(
          'Error',
          'La contraseña debe tener mínimo 6 caracteres'
        );

        return;
      }

      await register(email, password);

      Alert.alert(
        'Éxito',
        'Usuario registrado'
      );

      router.replace('/(auth)/login');
    } catch (error) {
      console.error(error);

      Alert.alert(
        'Error',
        'No se pudo registrar'
      );
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>
        Register
      </Text>

      <TextInput
        placeholder="Email"
        style={styles.input}
        value={email}
        onChangeText={setEmail}
        autoCapitalize="none"
        keyboardType="email-address"
      />

      <TextInput
        placeholder="Password"
        secureTextEntry
        style={styles.input}
        value={password}
        onChangeText={setPassword}
      />

      <Button
        title="Register"
        onPress={handleRegister}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#fff',
  },

  title: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },

  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    padding: 14,
    marginBottom: 12,
  },
});