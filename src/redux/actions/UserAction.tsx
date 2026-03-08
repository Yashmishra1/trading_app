import { resetAndNavigate } from '../../utils/Navigation.util';
import { appAxios } from '../api.config';

export const CheckProfile = () => async (dispatch: any) => {
  try {
    const res = await appAxios.get('/auth/profile');
    const { userId, email, login_pin_exist, phone_exist, name } = res.data;

    if (!phone_exist) {
      resetAndNavigate('PhoneScreen');
    } else if (!name) {
      resetAndNavigate('PersonalDetailScreen');
    } else if (!login_pin_exist) {
      resetAndNavigate('PinScreen');
    } else {
      resetAndNavigate('AuthVerificationScreen');
    }
  } catch (error) {
    console.log('Profile', error);
  }
};
