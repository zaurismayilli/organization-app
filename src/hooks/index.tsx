import { useSelector } from 'react-redux';
import { userRole } from '~/consts';

export const useAuth = () => {
  const { user } = useSelector(({ organizeUserReducer }: any) => {
    return {
      user: organizeUserReducer.user?.user,
    };
  });

  return user?.email;
};

export const useAdmin = () => {
  const { user } = useSelector(({ organizeUserReducer }: any) => {
    return {
      user: organizeUserReducer.user?.user,
    };
  });

  return user?.role === userRole.ADMIN;
};
