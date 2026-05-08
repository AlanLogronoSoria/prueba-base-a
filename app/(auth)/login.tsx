import { useState } from 'react';

import {
  Alert,
  Button,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
} from 'react-native';

import { login } from '@/features/auth/api/login';
import { router } from 'expo-router';
import { TouchableOpacity } from 'react-native';

export default function LoginScreen() {
  const [email, setEmail] =
    useState('');

  const [password, setPassword] =
    useState('');

  const handleLogin = async () => {
    try {
      await login(email, password);

      Alert.alert(
        'Éxito',
        'Sesión iniciada'
      );

      router.replace('/(tabs)');
    } catch (error) {
      console.error(error);

      Alert.alert(
        'Error',
        'No se pudo iniciar sesión'
      );
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>
        Login
      </Text>

      <TextInput
        placeholder="Email"
        style={styles.input}
        value={email}
        onChangeText={setEmail}
      />

      <TextInput
        placeholder="Password"
        secureTextEntry
        style={styles.input}
        value={password}
        onChangeText={setPassword}
      />

      <Button
        title="Login"
        onPress={handleLogin}
      />

        <TouchableOpacity
        onPress={() =>
          router.push('/(auth)/register')
        }
      >
        <Text style={styles.link}>
          ¿No tienes cuenta? Regístrate
        </Text>
  </TouchableOpacity>

    </SafeAreaView>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },

  title: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 20,
  },

  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    padding: 14,
    marginBottom: 12,
  },
  link: {
  marginTop: 20,
  textAlign: 'center',
  color: 'blue',
},
});