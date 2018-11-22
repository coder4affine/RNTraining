import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Text, View, Button, AsyncStorage } from 'react-native';

export class settingsScreen extends PureComponent {
  static propTypes = {
    navigation: PropTypes.object.isRequired,
  };

  signOut = async () => {
    await AsyncStorage.clear();
    this.props.navigation.navigate('AuthLoading');
  };

  render() {
    return (
      <View>
        <Text> settingsScreen </Text>
        <Button title="Sign Out" onPress={this.signOut} />
      </View>
    );
  }
}

export default settingsScreen;
