import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Text, AsyncStorage, SafeAreaView } from 'react-native';
import SignInForm from './signInForm';

import Button from '../../components/Button';

const api = user =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      if (user.username === 'yagnesh') {
        reject(new Error(JSON.stringify({ username: 'username already use' })));
      } else {
        resolve({ token: user.username });
      }
    }, 3000);
  });

export class signInScreen extends PureComponent {
  static navigationOptions = () => ({
    header: null,
  });

  static propTypes = {
    navigation: PropTypes.object.isRequired,
  };

  state = {
    user: { username: '', password: '' },
  };

  _handleSubmit = async (values, bag) => {
    try {
      const token = await api(values);
      await AsyncStorage.setItem('token', token.token);
      this.props.navigation.navigate('App');
    } catch (error) {
      bag.setSubmitting(false);
      bag.setErrors(JSON.parse(error.message));
    }
  };

  render() {
    const { user } = this.state;
    return (
      <SafeAreaView style={{ margin: 20 }}>
        <Text> signInScreen </Text>
        <SignInForm initialValues={user} onSubmit={this._handleSubmit} />

        <Button title="Sign Up" onPress={() => this.navigate('SignUp')} />
      </SafeAreaView>
    );
  }
}

export default signInScreen;
