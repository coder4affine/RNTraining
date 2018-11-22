import React from 'react';
import {
  createStackNavigator,
  createAppContainer,
  createSwitchNavigator,
  createDrawerNavigator,
  createBottomTabNavigator,
} from 'react-navigation';
import LoadingScreen from './screens/LoadingScreen';
import SignInScreen from './screens/SignInScreen';
import WelcomeScreen from './screens/WelcomeScreen';
import SignUpScreen from './screens/SignUpScreen';
import HomeScreen from './screens/HomeScreen';
import SettingsScreen from './screens/SettingsScreen';
import DrawerScreen from './screens/DrawerScreen';
import IconButton from './components/IconButton';

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

const AuthStack = createStackNavigator({
  Welcome: WelcomeScreen,
  SignIn: SignInScreen,
  SignUp: SignUpScreen,
});

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
