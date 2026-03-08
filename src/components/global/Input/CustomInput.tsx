import { StyleSheet, Text, TextInput, TextStyle, View } from 'react-native';
import React, { JSX } from 'react';

interface InputProps {
  lable?: string;
  iconName?: string;
  eror?: string;
  leftIcon?: JSX.Element;
  rightIcon?: JSX.Element;
  rightText?: JSX.Element;
  disabled?: boolean;
  disabledBackground?: boolean;
  password?: boolean;
  textTop?: boolean;
  containerStyle?: TextStyle;
  required?: boolean;
  textInputStyle?: TextStyle;
  onFocus?: () => void;
}
const CustomInput: React.FC<
  InputProps & React.ComponentProps<typeof TextInput>
> = ({
  label,
  iconName,
  error,
  leftIcon,
  rightIcon,
  rightText,
  disabled,
  disabledBackground,
  password,
  textTop,
  containerStyle,
  required,
  textInputStyle,
  onFocus,
  ...props
}) => {
  return (
    <View style={styles.inputMainContainer}>
      <TextInput />
    </View>
  );
};

const styles = StyleSheet.create({
  inputMainContainer: {
    marginVertical: 12,
  },
});
export default CustomInput;
