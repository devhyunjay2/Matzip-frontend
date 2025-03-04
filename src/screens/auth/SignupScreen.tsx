import {StyleSheet, TextInput, View} from 'react-native';
import React, {useRef} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import InputField from '../../components/InputField';
import useForm from '../../hooks/useForm';
import {validateSignup} from '../../utils';
import CustomButton from '../../components/CustomButton';
import useAuth from '../../hooks/queries/useAuth';

const SignupScreen = () => {
  const passwordRef = useRef<TextInput | null>(null);
  const passwordConfirmRef = useRef<TextInput | null>(null);

  const signup = useForm({
    initialValue: {email: '', password: '', passwordConfirm: ''},
    validate: validateSignup,
  });

  const {signupMutation, loginMutation} = useAuth();

  const handleSubmit = () => {
    const {email, password} = signup.values;
    console.log(signup.values);
    console.log('회원가입 submit 호출1');

    // if (signupMutation) {
    //   console.log('signupMutation 정의 되어있음');
    //   return;
    // }
    console.log(signupMutation, 'signupMutation호출');

    signupMutation.mutate(
      {email, password},
      {
        onSuccess: () => {
          console.log('회원가입 submit 호출1.5');

          loginMutation.mutate({email, password});
        },
      },
    );
    console.log('회원가입 submit 호출2');
  };
  return (
    <SafeAreaView style={styles.constainer}>
      <View style={styles.inputContainer}>
        <InputField
          placeholder="이메일"
          error={signup.errors?.email}
          touched={signup.touched.email}
          {...signup.getTextInputProps('email')}
          returnKeyType="next"
          inputMode="email"
          // 이메일 입력후 비밀번호로 이동
          onSubmitEditing={() => passwordRef.current?.focus()}
        />
        <InputField
          ref={passwordRef}
          placeholder="비밀번호"
          // 자동 비밀번호생성 방지지
          textContentType="oneTimeCode"
          error={signup.errors?.password}
          touched={signup.touched.password}
          {...signup.getTextInputProps('password')}
          returnKeyType="next"
          //  비밀번호마스킹 처리
          secureTextEntry
          blurOnSubmit={false}
          onSubmitEditing={() => passwordConfirmRef.current?.focus()}
        />
        <InputField
          ref={passwordConfirmRef}
          placeholder="비밀번호 확인"
          error={signup.errors?.passwordConfirm}
          touched={signup.touched.passwordConfirm}
          {...signup.getTextInputProps('passwordConfirm')}
          returnKeyType="next"
          //  비밀번호마스킹 처리
          secureTextEntry
          onSubmitEditing={handleSubmit}
        />
      </View>
      <CustomButton label="회원가입" onPress={handleSubmit} />
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

export default SignupScreen;
