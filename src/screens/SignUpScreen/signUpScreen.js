import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { SafeAreaView, Alert, ScrollView, KeyboardAvoidingView } from 'react-native';
import SignUpForm from './signUpForm';

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

export class signUpScreen extends PureComponent {
  static navigationOptions = () => ({
    title: 'Register',
  });

  static propTypes = {
    navigation: PropTypes.object.isRequired,
  };

  state = {
    user: {
      username: '',
      password: '',
      email: '',
      confirmPassword: '',
      firstName: '',
      lastName: '',
      gender: 'Male',
      birthDate: '',
    },
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
    let kavProps = {};
    if (OS === 'ios') {
      kavProps = {
        behavior: 'padding',
        keyboardVerticalOffset: 100,
      };
    }
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <KeyboardAvoidingView
          {...kavProps}
          style={{
            flex: 1,
          }}
        >
          <ScrollView>
            <SignUpForm initialValues={user} onSubmit={this._handleSubmit} />
          </ScrollView>
        </KeyboardAvoidingView>
      </SafeAreaView>
    );
  }
}

export default signUpScreen;
