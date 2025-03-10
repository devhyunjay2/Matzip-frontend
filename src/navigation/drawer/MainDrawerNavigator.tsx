import {Text, View} from 'react-native';
import React from 'react';
import useAuth from '../../hooks/queries/useAuth';
import CustomButton from '../../components/CustomButton';

const MainDrawerNavigator = () => {
  const {logoutMutation} = useAuth();

  return (
    <View>
      <Text>MainDrawerNavigator</Text>
      <CustomButton
        onPress={() => {
          logoutMutation.mutate();
        }}
        label={'로그아웃'}
      />
    </View>
  );
};

export default MainDrawerNavigator;
