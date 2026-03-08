import { Storage } from 'redux-persist';
import { createMMKV } from 'react-native-mmkv';

const storage = createMMKV();

export const token_storage = createMMKV({
  id: 'user_storage',
  encryptionKey: 'YOUR_RSA_KEY',
});

const reduxStorage: Storage = {
  setItem: (key, value) => {
    storage.set(key, value);
    return Promise.resolve(true);
  },
  getItem: key => {
    const value = storage.getString(key);
    return Promise.resolve(value ?? null);
  },
  removeItem: key => {
    storage.remove(key);
    return Promise.resolve();
  },
};

export default reduxStorage;
