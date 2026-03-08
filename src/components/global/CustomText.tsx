import {
  View,
  Text,
  TextStyle,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import React, { FC } from 'react';
import { FONTS } from '../../constants/Fonts';
import { RFValue } from 'react-native-responsive-fontsize';
import { Colors } from '../../constants/Colors';

interface Props {
  variant?:
    | 'h1'
    | 'h2'
    | 'h3'
    | 'h4'
    | 'h5'
    | 'h6'
    | 'h7'
    | 'h8'
    | 'h9'
    | 'body';
  fontFamily?: FONTS;
  fontSize?: number;
  style?: TextStyle | TextStyle[];
  children?: React.ReactNode;
  numberOfLines?: number;
  onLayout?: (event: object) => void;
}

const CustomText: FC<Props> = ({
  variant = 'body',
  fontFamily = FONTS.Regular,
  fontSize,
  style,
  onLayout,
  children,
  numberOfLines,
}) => {
  let computedFontSize: number;
  switch (variant) {
    case 'h1':
      computedFontSize = RFValue(fontSize || 22);
      break;
    case 'h2':
      computedFontSize = RFValue(fontSize || 20);
      break;
    case 'h3':
      computedFontSize = RFValue(fontSize || 18);
      break;
    case 'h4':
      computedFontSize = RFValue(fontSize || 16);
      break;
    case 'h5':
      computedFontSize = RFValue(fontSize || 14);
      break;
    case 'h6':
      computedFontSize = RFValue(fontSize || 12);
      break;
    case 'h7':
      computedFontSize = RFValue(fontSize || 12);
      break;
    case 'h8':
      computedFontSize = RFValue(fontSize || 10);
      break;
    case 'h9':
      computedFontSize = RFValue(fontSize || 9);
      break;
    default:
      computedFontSize = RFValue(fontSize || 12);
  }
  const fontFamilyStyle = {
    fontFamily:
      fontFamily === FONTS.Black
        ? 'Roboto-Black'
        : fontFamily === FONTS.Light
        ? 'Roboto-Light'
        : fontFamily === FONTS.Medium
        ? 'Roboto-Medium'
        : fontFamily === FONTS.Number
        ? 'Roboto-Regular'
        : fontFamily === FONTS.NumberSemiBold
        ? 'Manrope-SemiBold'
        : fontFamily === FONTS.Lato
        ? 'Lato-Regular'
        : fontFamily === FONTS.Thin
        ? 'Roboto-Thin'
        : 'Roboto-Regular',
  };
  return (
    <View>
      <Text
        style={[
          styles.text,
          {
            color: Colors.text,
            fontSize: computedFontSize,
          },
          fontFamilyStyle,
          style,
        ]}
        numberOfLines={numberOfLines !== undefined ? numberOfLines : undefined}
        onLayout={onLayout}
      >
        {children}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    textAlign: 'left',
  },
  mention: {
    textAlign: 'left',
  },
});

export default CustomText;
