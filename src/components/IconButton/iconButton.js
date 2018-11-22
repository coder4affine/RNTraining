import React from 'react';
import PropTypes from 'prop-types';
import { TouchableOpacity, View, ViewPropTypes } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const IconButton = ({ onPress, iconName, iconSize, iconColor, containerStyle }) => (
  <TouchableOpacity onPress={onPress}>
    <View style={[{ paddingHorizontal: 10 }, containerStyle]}>
      <Icon name={iconName} size={iconSize} color={iconColor} />
    </View>
  </TouchableOpacity>
);

IconButton.propTypes = {
  onPress: PropTypes.func.isRequired,
  iconName: PropTypes.string.isRequired,
  iconSize: PropTypes.number,
  iconColor: PropTypes.string,
  containerStyle: ViewPropTypes.style,
};

IconButton.defaultProps = {
  iconSize: 24,
  iconColor: '#000',
};

export default IconButton;
