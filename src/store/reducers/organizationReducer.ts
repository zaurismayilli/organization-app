import { organizationList } from '~/assets/mock';
import { IAction } from '~/models';
import { organizationType } from '../constant';

const initialUsers = {
  loading: false,
  errors: [],
  organizations: organizationList,
};

export const organizationReducer = (state = initialUsers, action: IAction) => {
  switch (action.type) {
    case organizationType.FETCH_ORGANIZATIONS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case organizationType.FETCH_ORGANIZATIONS_SUCCESS:
      return {
        ...state,
        loading: false,
        errors: [],
        user: [...state.organizations, action.payload],
      };
    case organizationType.FETCH_ORGANIZATIONS_FAIL:
      return {
        ...state,
        loading: false,
        errors: action.payload,
      };
    default:
      return state;
  }
};
