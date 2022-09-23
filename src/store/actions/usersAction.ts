import { AnyAction } from 'redux';
import { usersType } from '../constant';

const fetchUsersRequest = (payload: AnyAction) => {
  return { type: usersType.FETCH_USERS_REQUEST, payload };
};

const fetchUsersSuccess = ({ users }: any) => {
  return { type: usersType.FETCH_USERS_SUCCESS, payload: users };
};

const fetchUsersFail = ({ errors }: AnyAction) => {
  return { type: usersType.FETCH_USERS_FAIL, payload: errors };
};

export { fetchUsersRequest, fetchUsersSuccess, fetchUsersFail };
