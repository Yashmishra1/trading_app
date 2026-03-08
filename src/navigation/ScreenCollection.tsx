import AuthVerificationScreen from '../screens/auth/AuthVerificationScreen';
import EmailScreen from '../screens/auth/EmailScreen';
import LoginScreen from '../screens/auth/LoginScreen';
import PhoneScreen from '../screens/auth/PhoneScreen';
import SplashScreen from '../screens/onboarding/SplashScreen';
import Stocks from '../screens/stocks/Stocks';

export const authStack = [
  {
    name: 'SplashScreen',
    component: SplashScreen,
  },
  {
    name: 'LoginScreen',
    component: LoginScreen,
  },
  {
    name: 'EmailScreen',
    component: EmailScreen,
  },
  {
    name: 'PhoneScreen',
    componet: PhoneScreen,
  },
  {
    name: 'AuthVerificationScreen',
    component: AuthVerificationScreen,
  },
];

export const dashboardStack = [
  {
    name: 'Stock',
    component: Stocks,
  },
];

export const mergedStacks = [...authStack, ...dashboardStack];
