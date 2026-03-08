import LoginScreen from '../screens/auth/LoginScreen';
import SplashScreen from '../screens/onboarding/SplashScreen';

export const authStack = [
  {
    name: 'SplashScreen',
    component: SplashScreen,
  },
  {
    name: 'LoginScreen',
    component: LoginScreen,
  },
];

export const dashboardStack = [];

export const mergedStacks = [...authStack, ...dashboardStack];
