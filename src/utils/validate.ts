import {
  EMAIL_ERROR_TEXT,
  EMAIL_REGEX,
  PASSWORD_ERROR_TEXT,
  PASSWORD_REGEX,
  PASSWORDCONFIRM_ERROR_TEXT,
} from '../constants';

type UserInformation = {
  email: string;
  password: string;
};

function validateUser(values: UserInformation) {
  const errors = {
    email: '',
    password: '',
  };
  if (!EMAIL_REGEX.test(values.email)) {
    errors.email = EMAIL_ERROR_TEXT;
  }
  if (!PASSWORD_REGEX.test(values.password)) {
    errors.password = PASSWORD_ERROR_TEXT;
  }
  return errors;
}

function validateLogin(values: UserInformation) {
  return validateUser(values);
}

function validateSignup(values: UserInformation & {passwordConfirm: string}) {
  const errors = validateUser(values);
  const signupErrors = {...errors, passwordConfirm: ''};

  if (values.password !== values.passwordConfirm) {
    signupErrors.passwordConfirm = PASSWORDCONFIRM_ERROR_TEXT;
  }
  return signupErrors;
}

export {validateLogin, validateSignup};
