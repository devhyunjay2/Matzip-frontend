import {View} from 'react-native';
import React from 'react';
import CustomButton from '../../components/CustomButton';
import {SafeAreaView} from 'react-native-safe-area-context';
import {StackScreenProps} from '@react-navigation/stack';
import {AuthStackParamList} from '../../navigation/AuthStackNavigations';
import {authNavigations} from '../../constants';

type AuthHomeScreenPops = StackScreenProps<AuthStackParamList>;
const AuthHomeScreen = ({navigation}: AuthHomeScreenPops) => {
  return (
    <SafeAreaView>
      <View>
        <CustomButton
          label={'로그인화면으로 이동'}
          onPress={() => {
            navigation.navigate(authNavigations.LOGIN);
          }}
        />
      </View>
    </SafeAreaView>
  );
};

export default AuthHomeScreen;
