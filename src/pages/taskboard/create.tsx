import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';

import Form from '~/components/Form';

import { EInputType, IForm } from '~/models';
import { fetchTaskboardsSuccess } from '~/store/actions/taskboardsAction';

const TaskBoardCreate = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();

  const dispatch = useDispatch();

  const onSubmit = (payload: any) => {
    const newTaskboard = Object.assign(payload, { status: 'pending' });
    dispatch(fetchTaskboardsSuccess(newTaskboard));
    navigate('/taskboard/list');
  };

  const { users } = useSelector(({ usersReducer }: any) => {
    return {
      users: usersReducer.users,
    };
  });

  const title = 'Create Taskboard Form';
  const inputs: IForm[] = [
    {
      label: 'Title',
      name: 'title',
      minLength: 3,
      maxLength: 20,
    },
    {
      label: 'Description',
      name: 'description',
      minLength: 3,
      maxLength: 40,
      multiline: true,
    },
    {
      label: 'Assign',
      name: 'assign',
      options: users,
      type: EInputType.SELECT,
    },
    {
      name: 'deadline',
      type: EInputType.DATE,
    },
  ];

  return (
    <Form
      {...{ inputs, title }}
      onSubmit={handleSubmit(onSubmit)}
      {...{ register, errors }}
    />
  );
};

export default TaskBoardCreate;
