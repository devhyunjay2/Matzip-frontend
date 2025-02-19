import {
  Dimensions,
  Pressable,
  StyleSheet,
  Text,
  TextInputProps,
  View,
} from 'react-native';
import React, {useRef} from 'react';
import {TextInput} from 'react-native-gesture-handler';
import {colors} from '../constants/colors';

interface InputFieldProps extends TextInputProps {
  disabled?: boolean;
  error?: string;
  touched?: boolean;
}

const InputField = ({
  disabled = false,
  error,
  touched = false,
  ...props
}: InputFieldProps) => {
  //1. 참조객체를 만듬 -TextInput 요소를 참조
  const innerRef = useRef<TextInput | null>(null);

  // 2. focus()를 호출해서 강제로 입력창을 활성화
  const handlePressInput = () => {
    innerRef.current?.focus();
  };
  return (
    <Pressable onPress={handlePressInput}>
      <View style={[styles.constainer, disabled && styles.disabled]}>
        <TextInput
          editable={!disabled}
          placeholderTextColor={colors.GRAY_500}
          style={[
            styles.input,
            disabled && styles.disabled,

            Boolean(error) && styles.inputError,
          ]}
          autoCapitalize="none"
          spellCheck={false}
          autoCorrect={false}
          {...props}
        />
        {Boolean(error) && touched && <Text style={styles.error}>{error}</Text>}
      </View>
    </Pressable>
  );
};

export default InputField;

// .get('screen') 상태바 포함/ Dimensions.get('window'): 상태바 제외
const deviceHeight = Dimensions.get('screen').height;

const styles = StyleSheet.create({
  constainer: {
    borderWidth: 1,
    borderColor: colors.GRAY_200,
    padding: deviceHeight > 700 ? 15 : 10,
  },
  input: {
    fontSize: 16,
    color: colors.BLACK,
    padding: 0,
  },
  disabled: {
    backgroundColor: colors.GRAY_200,
  },

  inputError: {
    borderWidth: 1,
    borderColor: colors.RED_300,
  },
  error: {
    color: colors.RED_500,
    fontSize: 12,
    paddingTop: 5,
  },
});
