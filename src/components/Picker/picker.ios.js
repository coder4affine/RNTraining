import React, { Component, Fragment } from 'react';
import { PickerIOS, View, StyleSheet, Modal, Button, TouchableWithoutFeedback } from 'react-native';
import TextInput from '../TextInput';

export default class picker extends Component {
  state = {
    value: '',
    open: false,
  };

  setValue = value => {
    this.setState({ value });
  };

  selectValue = () => {
    const { value } = this.state;
    this.setState({ open: false });
    this.props.onChange(this.props.name, value);
  };

  openPicker = () => {
    this.setState({ open: true });
  };

  render() {
    const { data, selectedValue, ...rest } = this.props;
    const { open, value } = this.state;
    const selectedData = data.find(x => x.value === selectedValue);
    let selectedText = '';
    if (selectedData) {
      selectedText = selectedData.label;
    }
    return (
      <Fragment>
        <TouchableWithoutFeedback onPress={this.openPicker}>
          <View pointerEvents="box-only">
            <TextInput
              iconName="md-arrow-dropdown"
              onFocus={this.openDatePicker}
              editable={false}
              value={selectedText}
              {...rest}
            />
          </View>
        </TouchableWithoutFeedback>
        {open && (
          <Modal transparent animationType="fade">
            <View
              style={[
                StyleSheet.absoluteFill,
                { backgroundColor: 'rgba(0,0,0, 0.2)', justifyContent: 'flex-end' },
              ]}
            >
              <View style={{ backgroundColor: '#fff', paddingBottom: 34 }}>
                <View style={{ flexDirection: 'row', justifyContent: 'flex-end' }}>
                  <Button title="Done" onPress={this.selectValue} />
                </View>
                <PickerIOS {...rest} selectedValue={value} onValueChange={this.setValue}>
                  {data.map(item => (
                    <PickerIOS.Item key={item.value} label={item.label} value={item.value} />
                  ))}
                </PickerIOS>
              </View>
            </View>
          </Modal>
        )}
      </Fragment>
    );
  }
}
