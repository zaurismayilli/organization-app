import { AnyAction } from 'redux';

export enum EInputType {
  TEXT = 'text',
  PASSWORD = 'password',
  EMAIL = 'email',
  DATE = 'date',
  SELECT = 'select',
}

export enum EValidationType {
  REQUIRED = 'required',
  MAX_LENGTH = 'maxLength',
  MIN_LENGTH = 'minLength',
  PATTERN = 'pattern',
  VALIDATE = 'validate',
}

export interface IForm {
  label?: string;
  name: string;
  type?: EInputType;
  maxLength?: number;
  minLength?: number;
  pattern?: {
    email: RegExp;
  };
  required?: boolean;
  validate?(e?: any): void;
  multiline?: boolean;
  options?: [];
}

export interface IThead {
  thead: [];
}

export interface ITaskBoard {
  title: string;
  description: string;
  deadline: number;
  status: string;
  assign: string[];
}

export interface IUser {
  name: string;
  surname: string;
  email: string;
  password: string;
  organize_id: string;
}
export interface IAction {
  type: string;
  payload: AnyAction;
}
