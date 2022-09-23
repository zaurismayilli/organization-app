import { AnyAction } from 'redux';
import { organizationType } from '../constant';

const fetchOrganizationRequest = (payload: AnyAction) => {
  return { type: organizationType.FETCH_ORGANIZATIONS_REQUEST, payload };
};

const fetchOrganizationSuccess = (organizations: any) => {
  return {
    type: organizationType.FETCH_ORGANIZATIONS_SUCCESS,
    payload: organizations,
  };
};

const fetchOrganizationFail = (errors: AnyAction) => {
  return { type: organizationType.FETCH_ORGANIZATIONS_FAIL, payload: errors };
};

export {
  fetchOrganizationRequest,
  fetchOrganizationSuccess,
  fetchOrganizationFail,
};
