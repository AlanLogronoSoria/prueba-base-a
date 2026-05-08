import { useState } from 'react';

import { createTask } from '@/features/tasks/api/create-task';
import { deleteTask } from '@/features/tasks/api/delete-task';
import { updateTask } from '@/features/tasks/api/update-task';
import { useTasks } from '@/features/tasks/hooks/useTasks';
import TaskForm from '@/features/tasks/ui/TaskForm';
import {
  Alert,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import Loading from '@/shared/ui/Loading';

import TaskList from '@/widgets/task-list/TaskList';

export default function HomeScreen() {
  const {
    tasks,
    loading,
    fetchTasks,
  } = useTasks();

  const [creating, setCreating] =
    useState(false);

  const handleCreateTask = async (
    values: any
  ) => {
    try {
      setCreating(true);

      await createTask(
        values.title,
        values.description
      );

      await fetchTasks();

      Alert.alert(
        'Éxito',
        'Tarea creada correctamente'
      );
    } catch (error) {
      console.error(error);

      Alert.alert(
        'Error',
        'No se pudo crear la tarea'
      );
    } finally {
      setCreating(false);
    }
  };

  const handleUpdateTask = async (
  id: string,
  title: string,
  description: string
) => {
  try {
    await updateTask(
      id,
      title,
      description
    );

    await fetchTasks();

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

  const handleDeleteTask = async (
    id: string
  ) => {
    try {
      await deleteTask(id);

      await fetchTasks();

      Alert.alert(
        'Éxito',
        'Tarea eliminada'
      );
    } catch (error) {
      console.error(error);

      Alert.alert(
        'Error',
        'No se pudo eliminar'
      );
    }
  };

  if (loading) {
    return <Loading />;
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>
          Task Manager
        </Text>

        <Text style={styles.subtitle}>
          CRUD con Supabase
        </Text>
      </View>

      <View style={styles.formContainer}>
        <TaskForm
          onSubmitTask={handleCreateTask}
        />
      </View>

      <View style={styles.listContainer}>
        <TaskList
          data={tasks}
          onDelete={handleDeleteTask}
          onUpdate={handleUpdateTask}
        />
      </View>

      {creating && (
        <Text style={styles.creatingText}>
          Creando tarea...
        </Text>
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#f5f5f5',
  },

  header: {
    marginBottom: 20,
  },

  title: {
    fontSize: 28,
    fontWeight: 'bold',
  },

  subtitle: {
    fontSize: 16,
    color: '#666',
    marginTop: 4,
  },

  formContainer: {
    marginBottom: 20,
  },

  listContainer: {
    flex: 1,
  },

  creatingText: {
    textAlign: 'center',
    marginTop: 10,
    color: '#666',
  },
});