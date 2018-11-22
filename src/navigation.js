import React from 'react';
import { Animated, Easing } from 'react-native';
import {
  createStackNavigator,
  createAppContainer,
  createSwitchNavigator,
  createDrawerNavigator,
  createBottomTabNavigator,
} from 'react-navigation';
import StackViewStyleInterpolator from 'react-navigation-stack/dist/views/StackView/StackViewStyleInterpolator';
import LoadingScreen from './screens/LoadingScreen';
import SignInScreen from './screens/SignInScreen';
import SignUpScreen from './screens/SignUpScreen';
import HomeScreen from './screens/HomeScreen';
import SettingsScreen from './screens/SettingsScreen';
import DrawerScreen from './screens/DrawerScreen';
import IconButton from './components/IconButton';

const TransitionConfiguration = () => ({
  transitionSpec: {
    duration: 500,
    timing: Animated.timing,
    easing: Easing.easing,
  },
  screenInterpolator: StackViewStyleInterpolator.forFade,
});

const AppTab = createBottomTabNavigator({
  Home: {
    screen: HomeScreen,
  },
  Settings: {
    screen: SettingsScreen,
  },
});

const AppStack = createStackNavigator({
  AppTab: {
    screen: AppTab,
    navigationOptions: ({ navigation }) => ({
      title: 'My App',
      headerLeft: <IconButton onPress={() => navigation.toggleDrawer()} iconName="md-menu" />,
    }),
  },
});

const AppDrawer = createDrawerNavigator(
  {
    Home: AppStack,
  },
  {
    contentComponent: DrawerScreen,
  },
);

const AuthStack = createStackNavigator(
  {
    SignIn: SignInScreen,
    SignUp: SignUpScreen,
  },
  {
    headerMode: 'screen',
    transitionConfig: TransitionConfiguration,
  },
);

const AppNavigator = createSwitchNavigator(
  {
    AuthLoading: LoadingScreen,
    Auth: AuthStack,
    App: AppDrawer,
  },
  {
    initialRouteName: 'AuthLoading',
  },
);

export default createAppContainer(AppNavigator);
