import { useEffect } from 'react';

import { router } from 'expo-router';

import { useAuth } from '@/shared/hooks/useAuth';

export default function AuthGuard({
  children,
}: any) {
  const { session } = useAuth();

  useEffect(() => {
    if (!session) {
      router.replace('/(auth)/login');
    }
  }, [session]);

  return children;
}