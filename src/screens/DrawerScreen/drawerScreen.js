import React, { PureComponent } from 'react';
import { Text, View, SafeAreaView, ScrollView } from 'react-native';

export class drawerScreen extends PureComponent {
  render() {
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <ScrollView>
          <View>
            <Text>Hello</Text>
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
}

export default drawerScreen;
