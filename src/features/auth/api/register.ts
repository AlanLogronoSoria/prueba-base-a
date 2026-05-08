import { supabase } from '@/shared/lib/supabase';

export const register = async (
  email: string,
  password: string
) => {
  const { data, error } =
    await supabase.auth.signUp({
      email,
      password,
    });

  if (error) {
    throw error;
  }

  return data;
};