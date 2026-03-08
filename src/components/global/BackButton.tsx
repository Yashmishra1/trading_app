import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { FC } from 'react';
import { Icon } from 'react-native-vector-icons/Icon';
import { Colors } from '../../constants/Colors';
import { RFValue } from 'react-native-responsive-fontsize';
import { goBack, navigate } from '../../utils/Navigation.util';

interface BackButtonProps {
  path?: string;
}

const BackButton: FC<BackButtonProps> = ({ path }) => {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => {
        path ? navigate(path) : goBack();
      }}
    >
      <Icon name="arrow-back" color={Colors.text} size={RFValue(20)} />
    </TouchableOpacity>
  );
};

export default BackButton;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    paddingVertical: 4,
    marginBottom: 8,
  },
});
