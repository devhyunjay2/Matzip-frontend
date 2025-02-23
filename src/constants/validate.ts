const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const EMAIL_ERROR_TEXT = '올바른 이메일 형식이 아닙니다.';

const PASSWORD_REGEX =
  /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,20}$/;
const PASSWORD_ERROR_TEXT =
  '비밀번호는 영어,숫자,특수문자를 포함한 8자 ~20자 사이로 입력해주세요.';

const PASSWORDCONFIRM_ERROR_TEXT = '비밀번호가 일치하지 않습니다.';

export {
  EMAIL_REGEX,
  EMAIL_ERROR_TEXT,
  PASSWORD_REGEX,
  PASSWORD_ERROR_TEXT,
  PASSWORDCONFIRM_ERROR_TEXT,
};
