import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Picker, View, Text } from 'react-native';

export class picker extends PureComponent {
  static propTypes = {
    label: PropTypes.string.isRequired,
    error: PropTypes.string,
    inputRef: PropTypes.func,
  };

  onChange = value => {
    this.props.onChange(this.props.name, value);
  };

  render() {
    const { label, error, inputRef, ...rest } = this.props;
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
        <View
          style={{
            borderRadius: 4,
            borderWidth: 1,
            borderColor: '#e8e8e8',
            backgroundColor: '#f4f2fb',
          }}
        >
          <Picker {...rest} style={{ height: 44 }} onValueChange={this.onChange}>
            <Picker.Item label="Select Value" value="" />
            <Picker.Item label="Java" value="java" />
            <Picker.Item label="JavaScript" value="js" />
          </Picker>
        </View>
        {error && <Text style={{ color: 'red', fontSize: FONT(9) }}>{error}</Text>}
      </View>
    );
  }
}

export default picker;
