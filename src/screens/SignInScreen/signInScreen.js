import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Text, View, Button, AsyncStorage, SafeAreaView } from 'react-native';

export class signInScreen extends PureComponent {
  static navigationOptions = () => ({
    header: null,
  });

  static propTypes = {
    navigation: PropTypes.object.isRequired,
  };

  signIn = async () => {
    await AsyncStorage.setItem('userToken', 'yagnesh');
    this.props.navigation.navigate('App');
  };

  navigate = path => {
    this.props.navigation.navigate(path);
  };

  render() {
    return (
      <SafeAreaView>
        <Text> signInScreen </Text>
        <Button title="Sign In" onPress={this.signIn} />
        <Button title="Sign Up" onPress={() => this.navigate('SignUp')} />
      </SafeAreaView>
    );
  }
}

export default signInScreen;
