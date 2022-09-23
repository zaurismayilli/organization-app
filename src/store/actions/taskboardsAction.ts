import { AnyAction } from 'redux';
import { taskboardsType } from '../constant';

const fetchTaskboardsRequest = (payload: AnyAction) => {
  return { type: taskboardsType.FETCH_TASKBOARDS_REQUEST, payload };
};

const fetchTaskboardsSuccess = (taskboard: any) => {
  return { type: taskboardsType.FETCH_TASKBOARDS_SUCCESS, payload: taskboard };
};

const fetchTaskboardsFail = (errors: AnyAction) => {
  return { type: taskboardsType.FETCH_TASKBOARDS_FAIL, payload: errors };
};

export { fetchTaskboardsRequest, fetchTaskboardsSuccess, fetchTaskboardsFail };
