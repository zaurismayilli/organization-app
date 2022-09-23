import { validationError } from '~/consts';
import { EValidationType } from '~/models';

export const validation = (type: string, pattern: { email: RegExp }) => {
  switch (type) {
    case EValidationType.REQUIRED:
      return validationError.REQUIRED;
    case EValidationType.MAX_LENGTH:
      return validationError.MAX_LENGTH;
    case EValidationType.MIN_LENGTH:
      return validationError.MAX_LENGTH;
    case EValidationType.VALIDATE:
      return validationError.VALIDATE;
    case EValidationType.PATTERN:
      if (pattern.email) return validationError.PATTERN.EMAIL;
      return validationError.PATTERN.ALPHABETICAL;
  }
};
