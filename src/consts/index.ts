export const userRole = {
  ADMIN: 'ADMIN',
  MODERATOR: 'MODERATOR',
};

export const validationError = {
  REQUIRED: 'This field is required',
  MIN_LENGTH: 'Characters should have at least ',
  MAX_LENGTH: 'Characters should have at max ',
  PATTERN: {
    EMAIL: 'Email is not valid',
    ALPHABETICAL: 'Alphabetical characters only',
  },
  VALIDATE: 'Password do not match',
};

export const RegExpValidations = {
  EMAIL: /^\S+@\S+\.\S+$/,
};
