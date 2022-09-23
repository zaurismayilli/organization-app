import { Fragment, SyntheticEvent } from 'react';
import { Box, Button, TextField, Typography } from '@mui/material';
import { EInputType, IForm } from '../../models/index';

import { isEmpty } from 'lodash';

import './index.scss';
import { validation } from '~/helpers';

interface IFormProps {
  inputs: IForm[];
  onSubmit(e?: SyntheticEvent): void;
  title: string;
  register: any;
  errors: any;
}

const Form = ({ inputs, onSubmit, title, register, errors }: IFormProps) => {
  const formInputs = inputs.map(
    ({
      label,
      name,
      type = EInputType.TEXT,
      maxLength,
      minLength,
      validate,
      options,
      pattern = {},
      required = true,
      ...rest
    }) => {
      return (
        <Fragment key={name}>
          {type === EInputType.SELECT ? (
            <select
              multiple
              className="form-group__select"
              {...register(name, { required })}
            >
              {options?.map(({ name }) => (
                <option key={name}> {name} </option>
              ))}
            </select>
          ) : (
            <TextField
              {...register(name, {
                required,
                maxLength,
                minLength,
                validate,
                pattern: pattern?.email,
              })}
              className="form-group__input"
              {...{ label, name, type, ...rest }}
              helperText={
                errors[name] && validation(errors[name].type, pattern)
              }
              error={!isEmpty(errors[name])}
              variant="outlined"
            />
          )}
        </Fragment>
      );
    }
  );
  return (
    <Box
      onSubmit={onSubmit}
      component="form"
      className="form-group"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <Typography
        className="form-group__title"
        align="center"
        variant="h3"
        component="h2"
      >
        {title}
      </Typography>
      {formInputs}
      <Button
        disabled={!isEmpty(errors)}
        className="form-group__button"
        type="submit"
        variant="contained"
      >
        continue
      </Button>
    </Box>
  );
};

export default Form;
