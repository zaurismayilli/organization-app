import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import Form from '~/components/Form';

import { IForm } from '~/models';
import { fetchOrganizationSuccess } from '~/store/actions/organizationActon';

const Organization = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();

  const dispatch = useDispatch();

  const onSubmit = (payload: any) => {
    const organization = Object.assign(payload, { id: new Date().getTime() });
    dispatch(fetchOrganizationSuccess({ organizations: organization }));
    navigate('/user-create');
  };

  const title = 'Organization Form';
  const inputs: IForm[] = [
    {
      label: 'Organization Name',
      name: 'organization_name',
      minLength: 3,
      maxLength: 20,
    },
    {
      label: 'Phone Number',
      name: 'phone_number',
      minLength: 3,
      maxLength: 20,
    },
    {
      label: 'Address',
      name: 'address',
      minLength: 3,
      maxLength: 20,
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

export default Organization;
