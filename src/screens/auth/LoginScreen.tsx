import {StyleSheet, View} from 'react-native';
import React from 'react';
import InputField from '../../components/InputField';
import useForm from '../../hooks/useForm';
import {SafeAreaView} from 'react-native-safe-area-context';
import CustomButton from '../../components/CustomButton';

const LoginScreen = () => {
  const login = useForm({initialValue: {email: '', password: ''}});

  const handleSubmit = () => {
    console.log('로그인완료');
  };
  return (
    <SafeAreaView>
      <View style={styles.constainer}>
        <InputField
          placeholder="이메일"
          error={'이메일을 입력하세요.'}
          touched={login.touched.email}
          {...login.getTextInputProps('email')}
          inputMode="email"
        />
        <InputField
          placeholder="비밀번호"
          error={'비밀번호를 입력하세요.'}
          touched={login.touched.password}
          {...login.getTextInputProps('password')}
          //  비밀번호마스킹 처리
          secureTextEntry
        />
      </View>
      <CustomButton
        label="로그인"
        variant="filled"
        size="large"
        onPress={handleSubmit}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  constainer: {
    flex: 1,
    margin: 30,
  },
  inputContainer: {
    gap: 20,
  },
});

export default LoginScreen;
