import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

import Form from '~/components/Form';
import { RegExpValidations } from '~/consts';

import { EInputType, IForm } from '~/models';
import { userRole } from '~/consts';
import { useDispatch } from 'react-redux';
import { fetchOrganizeUserSuccess } from '~/store/actions/organizeUserActon';

const SignUp = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const onSubmit = (payload: any) => {
    const newUser = Object.assign(payload, { role: userRole.ADMIN });
    dispatch(fetchOrganizeUserSuccess({ user: newUser }));
    navigate('/organization');
  };

  const title = 'Sign Up Form';
  const inputs: IForm[] = [
    {
      label: 'Name',
      name: 'name',
      minLength: 3,
      maxLength: 20,
    },
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

export default SignUp;
