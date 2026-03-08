import React, { FC } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import CustomText from '../global/CustomText';
import { FONTS } from '../../constants/Fonts';
import { Colors } from '../../constants/Colors';

interface SocialLoginProps {
  icon: React.ReactNode;
  text: string;
  onPress: () => void;
}

const SocialLoginButton: FC<SocialLoginProps> = ({ icon, text, onPress }) => {
  return (
    <TouchableOpacity style={[styles.container]} onPress={onPress}>
      {icon}

      <CustomText
        variant="h8"
        fontFamily={FONTS.Medium}
        style={styles.text}
      ></CustomText>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 25,
    padding: 16,
    width: '100%',
    marginVertical: 12,
    backgroundColor: Colors.sub_background,
    borderWidth: 1.5,
    borderColor: Colors.border,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.15,
    shadowRadius: 4,
    elevation: 5,
  },
  text: {
    marginLeft: 12,
    color: Colors.text,
    fontSize: 16,
  },
});
export default SocialLoginButton;
