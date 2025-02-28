import {useMutation, useQuery} from '@tanstack/react-query';
import {
  getAccessToken,
  getProfile,
  logout,
  postLogin,
  postSignup,
} from '../../api/auth';
import {removeEncryptStorage, setEncryptStorage} from '../../utils';
import {useEffect} from 'react';
import queryClient from '../../api/queryClient';
import {removeHeader, setHeader} from '../../utils/header';
import {UseMutationCustomOptions} from '../../types/common';

function useSignup(mutationOptions?: UseMutationCustomOptions) {
  return useMutation({
    mutationFn: postSignup,
    ...mutationOptions,
  });
}

function useLogin(mutationOptions?: UseMutationCustomOptions) {
  return useMutation({
    mutationFn: postLogin,
    onSuccess: ({accessToken, refreshToken}) => {
      setEncryptStorage('refreshToken', refreshToken);
      setHeader('Authorization', `Bearer ${accessToken}`);
    },
    //성공실패와 관련없이 실행
    onSettled: () => {
      queryClient.refetchQueries({queryKey: ['auth', 'getAccessToken']});

      // 훅을 무효화
      queryClient.invalidateQueries({queryKey: ['auth', 'getProfile']});
    },
    ...mutationOptions,
  });
}

function useGetRefreshToken() {
  const {isSuccess, data, isError} = useQuery({
    queryKey: ['auth', 'getAccessToken'],
    queryFn: getAccessToken,
    // accessToken 의 유효시간
    staleTime: 1000 * 60 * 30 - 1000 * 60 * 3,
    refetchInterval: 1000 * 60 * 30 - 1000 * 60 * 3,
    //    다른걸하고 와도 다시 연결
    refetchOnReconnect: true,
    refetchIntervalInBackground: true,
  });

  useEffect(() => {
    if (isSuccess) {
      setHeader('Authorization', `Bearer ${data?.accessToken}`);
      setEncryptStorage('refreshToken', data?.refreshToken);
    }
  }, [data?.accessToken, data?.refreshToken, isSuccess]);

  useEffect(() => {
    if (isError) {
      removeHeader('Authorization');
      removeEncryptStorage('refreshToken');
    }
  }, [isError]);

  return {isSuccess, isError};
}

function useGetProfile(queryOptions?: UseMutationCustomOptions) {
  return useQuery({
    queryKey: ['auth', ' getProfile'],
    queryFn: getProfile,
    ...queryOptions,
  });
}

function useLogout() {
  return useMutation({
    mutationFn: logout,
    onSuccess: () => {
      removeHeader('Authorization');
      removeEncryptStorage('refreshToken');
    },
  });
}

function useAuth() {
  const signupMutation = useSignup();
  const refreshTokenQuery = useGetRefreshToken();
  const getProfileQuery = useGetProfile({
    // enable: refreshTokenQuery.isSuccess,
  });
  const isLogin = getProfileQuery.isSuccess;
  const loginMutation = useLogin();
  const logout = useLogout();

  return {
    signupMutation,
    refreshTokenQuery,
    loginMutation,
    isLogin,
    getProfileQuery,
    logout,
  };
}

export default useAuth;
