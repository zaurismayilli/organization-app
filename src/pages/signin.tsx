import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import Form from '~/components/Form';
import { RegExpValidations } from '~/consts';
import { useDispatch } from 'react-redux';

import { EInputType, IForm } from '~/models';
import { fetchOrganizeUserSuccess } from '~/store/actions/organizeUserActon';

const SignIn = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onSubmit = (payload: any) => {
    dispatch(fetchOrganizeUserSuccess({ user: payload }));
    navigate('/taskboard/list');
  };

  const title = 'Customer Sign In Form';
  const inputs: IForm[] = [
    {
      label: 'Email',
      name: 'email',
      type: EInputType.EMAIL,
      minLength: 3,
      maxLength: 20,
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
  ];
  return (
    <Form
      {...{ inputs, title }}
      onSubmit={handleSubmit(onSubmit)}
      {...{ register, errors }}
    />
  );
};

export default SignIn;
