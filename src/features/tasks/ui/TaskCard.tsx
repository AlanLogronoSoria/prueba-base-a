import { useState } from 'react';

import {
  Alert,
  Button,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';

type Props = {
  id: string;
  title: string;
  description: string;
  onDelete: (id: string) => void;
  onUpdate?: (
    id: string,
    title: string,
    description: string
  ) => Promise<void>;
};

export default function TaskCard({
  id,
  title,
  description,
  onDelete,
  onUpdate,
}: Props) {
  const [editing, setEditing] =
    useState(false);

  const [newTitle, setNewTitle] =
    useState(title);

  const [
    newDescription,
    setNewDescription,
  ] = useState(description);

  const handleDelete = () => {
    Alert.alert(
      'Eliminar',
      '¿Deseas eliminar esta tarea?',
      [
        {
          text: 'Cancelar',
          style: 'cancel',
        },
        {
          text: 'Eliminar',
          style: 'destructive',
          onPress: () => onDelete(id),
        },
      ]
    );
  };

  const handleUpdate = async () => {
    try {
      if (!onUpdate) {
        Alert.alert(
          'Error',
          'Función de actualización no disponible'
        );
        return;
      }

      await onUpdate(
        id,
        newTitle,
        newDescription
      );

      setEditing(false);

      Alert.alert(
        'Éxito',
        'Tarea actualizada'
      );
    } catch (error) {
      console.error(error);

      Alert.alert(
        'Error',
        'No se pudo actualizar'
      );
    }
  };

  return (
    <View style={styles.card}>
      {editing ? (
        <>
          <TextInput
            style={styles.input}
            value={newTitle}
            onChangeText={setNewTitle}
            placeholder="Título"
          />

          <TextInput
            style={styles.input}
            value={newDescription}
            onChangeText={
              setNewDescription
            }
            placeholder="Descripción"
          />

          <Button
            title="Guardar"
            onPress={handleUpdate}
          />
        </>
      ) : (
        <>
          <Text style={styles.title}>
            {title}
          </Text>

          <Text style={styles.description}>
            {description}
          </Text>

          <View style={styles.actions}>
            <Button
              title="Editar"
              onPress={() =>
                setEditing(true)
              }
            />

            <Button
              title="Eliminar"
              onPress={handleDelete}
            />
          </View>
        </>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    padding: 16,
    borderRadius: 12,
    marginBottom: 12,
  },

  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },

  description: {
    marginTop: 6,
    color: '#666',
    marginBottom: 10,
  },

  actions: {
    flexDirection: 'row',
    justifyContent:
      'space-between',
    marginTop: 10,
  },

  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    padding: 12,
    marginBottom: 10,
  },
});