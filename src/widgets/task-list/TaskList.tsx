import { FlatList } from 'react-native';

import EmptyState from '@/shared/ui/EmptyState';

import TaskItem from './TaskItem';

export default function TaskList({
  data,
  onDelete,
  onUpdate,
}: any) {
  return (
    <FlatList
      data={data}
      keyExtractor={(item) => item.id}
      ListEmptyComponent={
        <EmptyState message="No hay tareas" />
      }
      renderItem={({ item }) => (
        <TaskItem
          item={item}
          onDelete={onDelete}
          onUpdate={onUpdate}
        />
      )}
    />
  );
}