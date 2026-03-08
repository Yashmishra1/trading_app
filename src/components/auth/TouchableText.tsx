import React, { FC } from 'react';
import { StyleSheet, Text, TextStyle, TouchableOpacity } from 'react-native';
import { Colors } from '../../constants/Colors';
import { FONTS } from '../../constants/Fonts';
import { RFPercentage } from 'react-native-responsive-fontsize';

interface TouchableTextInterface {
  firstText: string;
  style?: TextStyle;
  onPress?: () => void;
}
const TouchableText: React.FC<TouchableTextInterface> = ({
  firstText,
  style,
  onPress,
}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Text
        style={[
          styles.bottomText,
          {
            color: Colors.active_tab,
          },
          style,
        ]}
      >
        {firstText}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  bottomText: {
    fontFamily: FONTS.Medium,
    fontSize: RFPercentage(1.6),
    textDecorationLine: 'underline',
  },
});

export default TouchableText;
