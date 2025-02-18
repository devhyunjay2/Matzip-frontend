import {Dimensions, Image, StyleSheet, View} from 'react-native';
import React from 'react';
import CustomButton from '../../components/CustomButton';
import {SafeAreaView} from 'react-native-safe-area-context';
import {StackScreenProps} from '@react-navigation/stack';
import {AuthStackParamList} from '../../navigation/AuthStackNavigations';
import {authNavigations} from '../../constants';

type AuthHomeScreenPops = StackScreenProps<AuthStackParamList>;
const AuthHomeScreen = ({navigation}: AuthHomeScreenPops) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.imageComtainer}>
        <Image
          resizeMode="contain"
          style={styles.image}
          source={require('../../assets/MATZIP.png')}
        />
      </View>
      <View style={styles.buttonContainer}>
        <CustomButton
          label={'로그인 하기'}
          onPress={() => {
            navigation.navigate(authNavigations.LOGIN);
          }}
        />
        <CustomButton
          variant="outlined"
          label={'회원가입 하기'}
          onPress={() => {
            navigation.navigate(authNavigations.SIGNUP);
          }}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 30,
    alignItems: 'center',
  },
  imageComtainer: {
    flex: 1.5,
    width: Dimensions.get('screen').width / 2,
  },
  image: {
    width: '100%',
    height: '100%',
  },
  buttonContainer: {
    flex: 1,
    gap: 10,
  },
});

export default AuthHomeScreen;
