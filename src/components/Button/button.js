import React from 'react';
import PropTypes from 'prop-types';
import { TouchableOpacity, ActivityIndicator, View, Text, ViewPropTypes } from 'react-native';

const button = ({ loading, disable, title, onPress, buttonStyle, textStyle }) => (
  <TouchableOpacity onPress={() => !disable && onPress()}>
    <View
      style={[
        {
          flexDirection: 'row',
          height: 44,
          borderRadius: 4,
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#2f2844',
          marginVertical: 8,
        },
        buttonStyle,
      ]}
    >
      {loading && <ActivityIndicator />}
      <Text style={[{ color: '#ffffff', fontSize: FONT(12), fontWeight: '500' }, textStyle]}>
        {title}
      </Text>
    </View>
  </TouchableOpacity>
);

button.propTypes = {
  loading: PropTypes.bool,
  disable: PropTypes.bool,
  title: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired,
  buttonStyle: ViewPropTypes.style,
  textStyle: ViewPropTypes.style,
};

export default button;
