import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
// import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
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
    data: null,
    error: false,
    loading: false,
  };

  // componentWillMount() {
  //   this.setState({ loading: true });
  //   fetch('https://reqres.in/api/users?page=1')
  //     .then(data => data.json())
  //     .then(json => this.setState({ loading: false, data: json }))
  //     .catch(err => this.setState({ loading: false, error: err }));
  // }

  _handleSubmit = async (values, bag) => {
    try {
      this.props.signIn();
      setTimeout(() => {
        this.props.signInSuccess('yagnesh');
      }, 1000);
      // const token = await api(values);
      // await AsyncStorage.setItem('token', token.token);
      this.props.navigation.navigate('App');
    } catch (error) {
      bag.setSubmitting(false);
      bag.setErrors(JSON.parse(error.message));
    }
  };

  render() {
    const { user, data, loading, error } = this.state;
    return (
      <SafeAreaView style={{ margin: 20 }}>
        <Text> signInScreen </Text>
        <SignInForm initialValues={user} onSubmit={this._handleSubmit} />
        <Text>{loading ? 'Loading...' : 'I m ready'}</Text>
        {data && <Text>{JSON.stringify(data)}</Text>}
        {error && <Text>{JSON.stringify(error)}</Text>}
        <Button title="Sign Up" onPress={() => this.navigate('SignUp')} />
      </SafeAreaView>
    );
  }
}

function mapStateToProps(state) {
  return {
    login: state.login,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    signIn: () => dispatch({ type: 'LOGIN', payload: null }),
    signInSuccess: payload => dispatch({ type: 'LOGIN_SUCCESS', payload }),
    signInError: payload => dispatch({ type: 'LOGIN_ERROR', payload }),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(signInScreen);
