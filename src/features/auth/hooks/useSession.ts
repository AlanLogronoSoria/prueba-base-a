import { useAuth } from '@/shared/hooks/useAuth';

export const useSession = () => {
  const { user, loading } = useAuth();

  return {
    user,
    loading,
    isAuthenticated: !!user,
  };
};