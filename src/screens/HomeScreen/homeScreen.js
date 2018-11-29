import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { Text, View } from 'react-native';

export class homeScreen extends PureComponent {
  render() {
    const { login } = this.props;
    return (
      <View>
        {login.data && <Text>{login.data}</Text>}
        <Text> homeScreen </Text>
      </View>
    );
  }
}

function mapStateToProps(state) {
  return {
    login: state.login,
  };
}

export default connect(mapStateToProps)(homeScreen);
