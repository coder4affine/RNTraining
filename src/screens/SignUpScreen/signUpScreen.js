import React, { PureComponent } from 'react';
import { Text, View, SafeAreaView } from 'react-native';

export class signUpScreen extends PureComponent {
  static navigationOptions = () => ({
    headerTintColor: '#000',
    headerTransparent: true,
  });

  render() {
    return (
      <SafeAreaView>
        <Text> signUpScreen </Text>
      </SafeAreaView>
    );
  }
}

export default signUpScreen;
