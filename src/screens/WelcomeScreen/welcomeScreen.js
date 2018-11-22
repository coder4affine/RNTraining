import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Text, View, Button } from 'react-native';

export class welcomeScreen extends PureComponent {
  static propTypes = {
    navigation: PropTypes.object.isRequired,
  };

  navigate = path => {
    this.props.navigation.navigate(path);
  };

  render() {
    return (
      <View>
        <Text> welcomeScreen </Text>

        <Button title="Sign In" onPress={() => this.navigate('SignIn')} />
        <Button title="Sign Up" onPress={() => this.navigate('SignUp')} />
      </View>
    );
  }
}

export default welcomeScreen;
