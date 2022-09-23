import { useForm } from 'react-hook-form';

import Form from '~/components/Form';
import { RegExpValidations } from '~/consts';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { EInputType, IForm } from '~/models';
import { fetchUsersSuccess } from '~/store/actions/usersAction';

const UserCreate = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const onSubmit = (payload: any) => {
    dispatch(fetchUsersSuccess({ users: payload }));
    navigate('/taskboard/create');
  };

  const title = 'User Create Form';
  const inputs: IForm[] = [
    {
      label: 'Name',
      name: 'name',
      minLength: 3,
      maxLength: 20,
    },
    {
      label: 'Surname',
      name: 'surname',
      minLength: 3,
      maxLength: 20,
    },
    {
      label: 'Email',
      name: 'email',
      type: EInputType.EMAIL,
      minLength: 3,
      maxLength: 30,
      pattern: {
        email: RegExpValidations.EMAIL,
      },
    },
    {
      label: 'Password',
      name: 'password',
      type: EInputType.PASSWORD,
      minLength: 3,
      maxLength: 6,
    },
    {
      label: 'Confirm password',
      name: 'confirm_password',
      type: EInputType.PASSWORD,
      minLength: 3,
      maxLength: 6,
      validate: (val: string) => {
        if (watch('password') != val) {
          return 'Your passwords do no match';
        }
      },
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

export default UserCreate;
