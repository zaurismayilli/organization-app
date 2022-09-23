import { AnyAction } from 'redux';
import { organizeUserType } from '../constant';

const fetchOrganizeUserRequest = (payload: AnyAction) => {
  return { type: organizeUserType.FETCH_ORGANIZE_USER_REQUEST, payload };
};

const fetchOrganizeUserSuccess = (user: any) => {
  return { type: organizeUserType.FETCH_ORGANIZE_USER_SUCCESS, payload: user };
};

const fetchOrganizeUserFail = (errors: AnyAction) => {
  return { type: organizeUserType.FETCH_ORGANIZE_USER_FAIL, payload: errors };
};

export {
  fetchOrganizeUserRequest,
  fetchOrganizeUserSuccess,
  fetchOrganizeUserFail,
};
