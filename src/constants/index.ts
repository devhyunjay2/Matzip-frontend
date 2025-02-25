// 파일 모듈 재구성 -간편한게 접근, 가독성 증가
export * from './validate';
export * from './colors';

const authNavigations = {
  AUTH_HOME: 'AuthHome',
  LOGIN: 'Login',
  SIGNUP: 'Signup',
} as const;

export {authNavigations};
