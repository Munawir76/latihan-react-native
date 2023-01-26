import * as React from 'react';
import {Alert, Text, View} from 'react-native';
import ListSetting from '../../components/list-setting';

export default function Setting() {
  return (
    <View style={{flex: 1}}>
      <ListSetting />
      <View style={{alignItems: 'center', justifyContent: 'center'}}></View>
    </View>
  );
}
