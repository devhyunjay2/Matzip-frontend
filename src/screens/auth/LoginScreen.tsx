import {StyleSheet, TextInput, View} from 'react-native';
import React, {useRef} from 'react';
import InputField from '../../components/InputField';
import useForm from '../../hooks/useForm';
import {SafeAreaView} from 'react-native-safe-area-context';
import CustomButton from '../../components/CustomButton';

import {validateLogin} from '../../utils';

const LoginScreen = () => {
  const passwordRef = useRef<TextInput | null>(null);

  const login = useForm({
    initialValue: {email: '', password: ''},
    validate: validateLogin,
  });

  const handleSubmit = () => {
    console.log(login.values);
  };
  return (
    <SafeAreaView style={styles.constainer}>
      <View style={styles.inputContainer}>
        <InputField
          autoFocus
          placeholder="이메일"
          error={login.errors?.email}
          touched={login.touched.email}
          {...login.getTextInputProps('email')}
          inputMode="email"
          blurOnSubmit={false}
          onSubmitEditing={() => passwordRef.current?.focus()}
        />
        <InputField
          ref={passwordRef}
          placeholder="비밀번호"
          error={login.errors?.password}
          touched={login.touched.password}
          {...login.getTextInputProps('password')}
          //  비밀번호마스킹 처리
          secureTextEntry
          blurOnSubmit={false}
          onSubmitEditing={handleSubmit}
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
