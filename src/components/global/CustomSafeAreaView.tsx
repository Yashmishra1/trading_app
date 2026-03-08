import { View, Text, ViewStyle, StyleSheet } from 'react-native';
import React, { FC } from 'react';
import { SafeAreaView as Safe } from 'react-native-safe-area-context';
import NoInternet from './NoInternet';

interface CustomSafeAreaViewProps {
  children: React.ReactNode;
  style?: ViewStyle;
}
const CustomSafeAreaView: FC<CustomSafeAreaViewProps> = ({
  children,
  style,
}) => {
  return (
    <>
      <Safe style={[styles.container, style]} edges={['top', 'left', 'right']}>
        <View style={[styles.container, style]}>{children}</View>
      </Safe>
      <NoInternet />
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 5,
    paddingHorizontal: 10,
  },
});

export default CustomSafeAreaView;
