import { ScrollView, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import CustomSafeAreaView from '../../components/global/CustomSafeAreaView';
import CustomInput from '../../components/global/Input/CustomInput';
import BackButton from '../../components/global/BackButton';
import CenteredLogo from '../../components/global/CenteredLogo';

const EmailScreen = () => {
  return (
    <CustomSafeAreaView>
      <BackButton />
      <ScrollView>
        <CenteredLogo />

        <CustomInput />
      </ScrollView>
    </CustomSafeAreaView>
  );
};

export default EmailScreen;

const styles = StyleSheet.create({});
