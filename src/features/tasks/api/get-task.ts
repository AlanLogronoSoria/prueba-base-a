import { supabase } from '@/shared/lib/supabase';

export const getTasks = async () => {
  const { data, error } = await supabase
    .from('tasks')
    .select('*')
    .order('created_at', {
      ascending: false,
    });

  if (error) {
    throw error;
  }

  return data;
};