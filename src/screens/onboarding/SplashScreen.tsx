import { View, Text, StyleSheet } from 'react-native';
import React, { useEffect } from 'react';
import CustomSafeAreaView from '../../components/global/CustomSafeAreaView';
import DotLoading from '../../components/global/DotLoading';
import { useAppDispatch } from '../../redux/reduxHook';
import { token_storage } from '../../redux/storage';
import { resetAndNavigate } from '../../utils/Navigation.util';
import { jwtDecode } from 'jwt-decode';
import Toast from 'react-native-toast-message';
import { refresh_tokens } from '../../redux/api.config';
import { CheckProfile } from '../../redux/actions/UserAction';

interface DecodedToken {
  exp: number;
}

const SplashScreen = () => {
  const dispatch = useAppDispatch();

  const tokenCheck = async () => {
    const access = token_storage.getString('app_access_token');
    const refresh = token_storage.getString('app_refresh_token');

    if (!access || !refresh) {
      resetAndNavigate('LoginScreen');
      return;
    }

    const decodedAccess = jwtDecode<DecodedToken>(access);
    const decodedRefresh = jwtDecode<DecodedToken>(refresh);

    const currentTime = Date.now() / 1000;

    // Refresh token expired → logout
    if (decodedRefresh?.exp < currentTime) {
      resetAndNavigate('LoginScreen');
      Toast.show({
        type: 'warningToast',
        props: { msg: 'Session expired, please login again' },
      });
      return;
    }

    // Access token expired → refresh
    if (decodedAccess?.exp < currentTime) {
      try {
        await refresh_tokens('app', true);
      } catch (error) {
        resetAndNavigate('LoginScreen');
        return;
      }
    }

    // Token valid
    await dispatch(CheckProfile());
  };

  useEffect(() => {
    async function deeplinks() {
      await tokenCheck();
    }
    const timerId = setTimeout(deeplinks, 100);
    return () => clearTimeout(timerId);
  }, []);
  return (
    <CustomSafeAreaView>
      <View style={styles.container}>
        <DotLoading />
      </View>
    </CustomSafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default SplashScreen;
