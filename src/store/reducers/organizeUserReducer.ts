import { IAction } from '~/models';
import { organizeUserType } from '../constant';

const initialUsers = {
  loading: false,
  errors: [],
  user: null,
};

export const organizeUserReducer = (state = initialUsers, action: IAction) => {
  switch (action.type) {
    case organizeUserType.FETCH_ORGANIZE_USER_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case organizeUserType.FETCH_ORGANIZE_USER_SUCCESS:
      return {
        ...state,
        loading: false,
        errors: [],
        user: action.payload,
      };
    case organizeUserType.FETCH_ORGANIZE_USER_FAIL:
      return {
        ...state,
        loading: false,
        errors: action.payload,
      };
    default:
      return state;
  }
};
