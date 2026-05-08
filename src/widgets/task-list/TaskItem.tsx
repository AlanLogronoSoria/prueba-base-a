import TaskCard from '@/features/tasks/ui/TaskCard';

export default function TaskItem({
  item,
  onDelete,
  onUpdate,
}: any) {
  return (
    <TaskCard
      id={item.id}
      title={item.title}
      description={item.description}
      onDelete={onDelete}
      onUpdate={onUpdate}
    />
  );
}