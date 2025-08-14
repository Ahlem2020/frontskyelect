import { useRouter } from 'next/router';
import authService from '../services/authService';

export const useAuth = () => {
  const router = useRouter();

  const logout = async () => {
    await authService.logout();
    router.push('/components/authentication/signin');
  };

  const isAuthenticated = () => {
    return authService.isAuthenticated();
  };

  const getUser = () => {
    return authService.getUser();
  };

  const getToken = () => {
    return authService.getToken();
  };

  return {
    logout,
    isAuthenticated,
    getUser,
    getToken,
  };
};
