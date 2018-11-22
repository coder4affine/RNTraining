import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { View, ActivityIndicator, AsyncStorage } from 'react-native';

export class loadingScreen extends PureComponent {
  static propTypes = {
    navigation: PropTypes.object.isRequired,
  };

  constructor(props) {
    super(props);
    this.loadApp();
  }

  loadApp = async () => {
    const userToken = await AsyncStorage.getItem('userToken');
    this.props.navigation.navigate(userToken ? 'App' : 'Auth');
  };

  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator />
      </View>
    );
  }
}

export default loadingScreen;
