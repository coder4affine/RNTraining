import { Dimensions, Platform, NativeModules } from 'react-native';
import normalizeFont from './normalizeFont';

const { width, height } = Dimensions.get('window');

const { StatusBarManager } = NativeModules;

const isIPhoneX = NativeModules.DeviceInfo.isIPhoneX_deprecated;

const iosStatusBarHeight = isIPhoneX ? 44 : 20;

global.FONT = normalizeFont;

global.HEIGHT = height;

global.WIDTH = width;

global.OS = Platform.OS;

global.isIPhoneX = isIPhoneX;

global.STATUSBAR_HEIGHT = Platform.OS === 'ios' ? iosStatusBarHeight : StatusBarManager.HEIGHT;

global.wait = ms => new Promise(res => setTimeout(res, ms));

global.action = (type, payload) => ({
  type,
  payload,
});

global.Log = ({ ...params }) => {
  if (__DEV__) console.log(params);
};
