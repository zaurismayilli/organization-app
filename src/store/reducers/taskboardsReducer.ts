import { taskList } from '~/assets/mock';
import { IAction } from '~/models';
import { taskboardsType } from '../constant';

const initialData = {
  loading: false,
  errors: [],
  taskboards: taskList,
};

export const taskboardsReducer = (state = initialData, action: IAction) => {
  switch (action.type) {
    case taskboardsType.FETCH_TASKBOARDS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case taskboardsType.FETCH_TASKBOARDS_SUCCESS:
      return {
        ...state,
        loading: false,
        errors: [],
        taskboards: [...state.taskboards, action.payload],
      };
    case taskboardsType.FETCH_TASKBOARDS_FAIL:
      return {
        ...state,
        loading: false,
        errors: action.payload,
      };
    default:
      return state;
  }
};
