import { View, Text, Image, StyleSheet } from 'react-native';
import React from 'react';
import CustomSafeAreaView from '../../components/global/CustomSafeAreaView';
import { useAppDispatch } from '../../redux/reduxHook';
import 
const LoginScreen = () => {
  const dispatch = useAppDispatch();
  return (
    <CustomSafeAreaView>
      <View style={styles.container}>
        <View style={styles.imageContainer}>
          <Image source={Logo} style={styles.logo} />
        </View>
      </View>
    </CustomSafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {},
  imageContainer: {},
  img: {},
});
export default LoginScreen;
