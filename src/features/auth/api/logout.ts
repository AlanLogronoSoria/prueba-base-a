import { supabase } from '@/shared/lib/supabase';

export const logout = async () => {
  const { error } =
    await supabase.auth.signOut();

  if (error) {
    throw error;
  }
};