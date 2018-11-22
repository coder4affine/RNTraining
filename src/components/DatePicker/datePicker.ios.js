import React, { Component, Fragment } from 'react';
import {
  DatePickerIOS,
  View,
  StyleSheet,
  Modal,
  Button,
  TouchableWithoutFeedback,
} from 'react-native';
import moment from 'moment';
import TextInput from '../TextInput';

export default class datePicker extends Component {
  state = {
    chosenDate: new Date(),
    open: false,
  };

  constructor(props) {
    super(props);
    this.openDatePicker = this.openDatePicker.bind(this);
  }

  openDatePicker = () => {
    this.setState({ open: true });
  };

  setDate = newDate => {
    this.setState({ chosenDate: newDate });
  };

  selectDate = () => {
    this.setState({ open: false });
    const { chosenDate } = this.state;
    this.props.onChange(this.props.name, moment(chosenDate).format('MM-DD-YYYY'));
  };

  render() {
    const { ...rest } = this.props;
    const { open } = this.state;
    return (
      <Fragment>
        <TouchableWithoutFeedback onPress={this.openDatePicker}>
          <View pointerEvents="box-only">
            <TextInput editable={false} {...rest} />
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
                  <Button title="Done" onPress={this.selectDate} />
                </View>
                <DatePickerIOS date={this.state.chosenDate} onDateChange={this.setDate} />
              </View>
            </View>
          </Modal>
        )}
      </Fragment>
    );
  }
}
