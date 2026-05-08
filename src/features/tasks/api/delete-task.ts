import { supabase } from '@/shared/lib/supabase';

export const deleteTask = async (
  id: string
) => {
  const { error } = await supabase
    .from('tasks')
    .delete()
    .eq('id', id);

  if (error) {
    throw error;
  }
};