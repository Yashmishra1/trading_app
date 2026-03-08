import { View, Text, Image, StyleSheet } from 'react-native';
import React from 'react';
import CustomSafeAreaView from '../../components/global/CustomSafeAreaView';
import { useAppDispatch } from '../../redux/reduxHook';
import Logo from '../../assets/images/logo.png';
import CustomText from '../../components/global/CustomText';
import { FONTS } from '../../constants/Fonts';
import { screenHeight, screenWidth } from '../../utils/Scaling';
import SocialLoginButton from '../../components/auth/SocialLoginButton';
import GoogleIcon from '../../assets/images/google.png';
import Icon from 'react-native-vector-icons/Ionicons';
import { signInWithApple, signWithGoogle } from '../../redux/SocialLogin';
import TouchableText from '../../components/auth/TouchableText';
import { navigate } from '../../utils/Navigation.util';

const LoginScreen = () => {
  const dispatch = useAppDispatch();
  return (
    <CustomSafeAreaView>
      <View style={styles.container}>
        <View style={styles.imageContainer}>
          <Image source={Logo} style={styles.img} />
        </View>

        <CustomText variant="h1" fontFamily={FONTS.Medium}>
          Trading made simple
        </CustomText>
        <CustomText variant="h7" style={styles.subText} fontFamily={FONTS.Bold}>
          Trade • Invest • Success
        </CustomText>

        <SocialLoginButton
          icon={<Image source={GoogleIcon} style={styles.gImg} />}
          text="Continue with google"
          onPress={async () => await signWithGoogle(dispatch)}
        />
        <SocialLoginButton
          icon={<Icon name="logo-apple" size={18} color="black" />}
          text="Continue with google"
          onPress={async () => await signInWithApple(dispatch)}
        />
      </View>

      <TouchableText
        firstText="Sign in with email id"
        onPress={() => navigate('EmailScreen')}
        style={styles.touchText}
      />
      <CustomText variant="h9" style={styles.text} fontFamily={FONTS.Medium}>
        Made by Yash Mishra
      </CustomText>
    </CustomSafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    paddingTop: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageContainer: {
    width: screenWidth,
    height: screenHeight * 0.25,
  },
  touchText: {
    marginVertical: 30,
    marginTop: 15,
  },
  img: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
  logo: {},
  subText: {
    marginTop: 10,
    opacity: 0.6,
    marginBottom: 16,
  },
  text: {
    opacity: 0.6,
    position: 'absolute',
    bottom: 10,
    left: 0,
    right: 0,
    textAlign: 'center',
  },
  gImg: {
    width: 20,
    height: 20,
  },
});
export default LoginScreen;
