import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Text, AsyncStorage, SafeAreaView, Alert } from 'react-native';
import SignInForm from './signInForm';

import Button from '../../components/Button';

const api = user =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      if (user.username === 'yagnesh') {
        reject({ username: 'username already use' });
      } else {
        resolve();
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

  signIn = async () => {
    await AsyncStorage.setItem('userToken', 'yagnesh');
    this.props.navigation.navigate('App');
  };

  navigate = path => {
    this.props.navigation.navigate(path);
  };

  _handleSubmit = async (values, bag) => {
    try {
      await api(values);
      Alert.alert('Welcome');
    } catch (error) {
      bag.setSubmitting(false);
      bag.setErrors(error);
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
