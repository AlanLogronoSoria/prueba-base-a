import { supabase } from '@/shared/lib/supabase';

export const updateTask = async (
  id: string,
  title: string,
  description: string
) => {
  const { error } = await supabase
    .from('tasks')
    .update({
      title,
      description,
    })
    .eq('id', id);

  if (error) {
    throw error;
  }
};