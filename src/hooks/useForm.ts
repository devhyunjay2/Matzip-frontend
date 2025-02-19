import {useState} from 'react';

interface useFormProps<T> {
  initialValue: T;
}

function useForm<T>({initialValue}: useFormProps<T>) {
  const [values, setValues] = useState(initialValue);

  const handleChangeText = (name: keyof T, text: string) => {
    setValues({
      ...values,
      [name]: text,
    });
  };

  const [touched, setTouched] = useState<Record<string, boolean>>({
    email: false,
    password: false,
  });

  const handleBlur = (name: keyof T) => {
    setTouched({
      ...touched,
      [name]: true,
    });
  };

  const getTextInputProps = (name: keyof T) => {
    const value = values[name];
    const onChangeText = (text: string) => {
      handleChangeText(name, text);
    };
    const onBlur = () => handleBlur(name);

    return {value, onChangeText, onBlur};
  };

  return {touched, getTextInputProps};
}

export default useForm;
