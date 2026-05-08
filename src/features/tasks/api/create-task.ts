import { supabase } from '@/shared/lib/supabase';

export const createTask = async (
  title: string,
  description: string
) => {
  const { data, error } = await supabase
    .from('tasks')
    .insert([
      {
        title,
        description,
      },
    ])
    .select();

  if (error) {
    throw error;
  }

  return data;
};