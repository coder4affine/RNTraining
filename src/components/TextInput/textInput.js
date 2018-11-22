import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { View, Text, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

export class textInput extends PureComponent {
  static propTypes = {
    label: PropTypes.string.isRequired,
    error: PropTypes.string,
    inputRef: PropTypes.func,
  };

  static defaultProps = {
    inputRef: () => {},
  };

  onChange = value => {
    this.props.onChange(this.props.name, value);
  };

  onBlur = () => {
    this.input.setNativeProps({
      style: {
        borderWidth: 0,
      },
    });
    this.props.onTouch(this.props.name);
  };

  onFocus = () => {
    this.input.setNativeProps({
      style: {
        borderWidth: 1,
        borderColor: '#6d55c0',
      },
    });
  };

  render() {
    const { label, error, iconName, inputRef, ...rest } = this.props;
    return (
      <View
        style={{
          marginVertical: 8,
        }}
      >
        <Text
          style={[{ fontWeight: '500', fontSize: FONT(12), color: '#777777', marginBottom: 7 }]}
        >
          {label}
        </Text>
        {iconName && (
          <View
            style={{
              position: 'absolute',
              right: OS === 'ios' ? 10 : 12,
              top: OS === 'ios' ? 30 : 40,
              zIndex: 1,
            }}
          >
            <Icon name={iconName} size={24} />
          </View>
        )}
        <TextInput
          onChangeText={this.onChange}
          onBlur={this.onBlur}
          placeholder={label}
          ref={el => {
            this.input = el;
            inputRef(el);
          }}
          onFocus={this.onFocus}
          style={{
            borderRadius: 4,
            borderWidth: 1,
            borderColor: '#e8e8e8',
            backgroundColor: '#f4f2fb',
            padding: 8,
          }}
          underlineColorAndroid="transparent"
          {...rest}
        />
        {error && <Text style={{ color: 'red', fontSize: FONT(9) }}>{error}</Text>}
      </View>
    );
  }
}

export default textInput;
