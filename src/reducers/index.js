import { AsyncStorage } from 'react-native';
import { persistCombineReducers } from 'redux-persist';
import { toastReducer as toast } from 'react-native-redux-toast';
import app from './app';
import nav from './nav';
import user from './user';
import dashboard from './dashboard'

const config = {
  blacklist: ['app', 'nav', 'toast'],
  key: 'primary',
  storage: AsyncStorage,
};

const reducers = persistCombineReducers(config, {
  app,
  nav,
  toast,
  user,
  dashboard
});

export default reducers;