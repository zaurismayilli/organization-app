import { users } from '~/assets/mock';
import { IAction } from '~/models';
import { usersType } from '../constant';

const initialUsers = {
  loading: false,
  errors: [],
  users,
};

export const usersReducer = (state = initialUsers, action: IAction) => {
  switch (action.type) {
    case usersType.FETCH_USERS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case usersType.FETCH_USERS_SUCCESS:
      return {
        ...state,
        loading: false,
        errors: [],
        users: [...state.users, action.payload],
      };
    case usersType.FETCH_USERS_FAIL:
      return {
        ...state,
        loading: false,
        errors: [...state.errors, action.payload],
      };
    default:
      return state;
  }
};
