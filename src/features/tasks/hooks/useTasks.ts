import { useEffect, useState } from 'react';

import { getTasks } from '../api/get-task';

export const useTasks = () => {
  const [tasks, setTasks] = useState<any[]>([]);
  const [loading, setLoading] =
    useState(true);

  const fetchTasks = async () => {
    try {
      const data = await getTasks();

      setTasks(data || []);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  return {
    tasks,
    loading,
    fetchTasks,
  };
};