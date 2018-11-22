import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Text, View, Button, AsyncStorage } from 'react-native';

export class signInScreen extends PureComponent {
  static propTypes = {
    navigation: PropTypes.object.isRequired,
  };

  signIn = async () => {
    await AsyncStorage.setItem('userToken', 'yagnesh');
    this.props.navigation.navigate('App');
  };

  render() {
    return (
      <View>
        <Text> signInScreen </Text>
        <Button title="Sign In" onPress={this.signIn} />
      </View>
    );
  }
}

export default signInScreen;
