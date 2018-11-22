import React, { PureComponent } from 'react';
import { TouchableWithoutFeedback, View, DatePickerAndroid } from 'react-native';
import TextInput from '../TextInput';

export class datePicker extends PureComponent {
  openDatePicker = async () => {
    try {
      const { action, year, month, day } = await DatePickerAndroid.open({
        date: new Date(),
      });
      if (action !== DatePickerAndroid.dismissedAction) {
        this.props.onChange(this.props.name, `${month + 1}/${day}/${year}`);
      }
    } catch ({ code, message }) {
      console.warn('Cannot open date picker', message);
    }
  };

  render() {
    const { ...rest } = this.props;
    return (
      <TouchableWithoutFeedback onPress={this.openDatePicker}>
        <View pointerEvents="box-only">
          <TextInput editable={false} {...rest} />
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

export default datePicker;
