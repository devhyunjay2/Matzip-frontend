import React from 'react';

import useAuth from '../../hooks/queries/useAuth';
import AuthStackNavigations from '../AuthStackNavigations';
import MainDrawerNavigator from '../drawer/MainDrawerNavigator';

const RootNavigator = () => {
  const {isLogin} = useAuth();

  return <>{isLogin ? <MainDrawerNavigator /> : <AuthStackNavigations />}</>;
};

export default RootNavigator;
