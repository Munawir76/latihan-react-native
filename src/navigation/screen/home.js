import * as React from 'react';
import {Alert, Text, View} from 'react-native';
import CardInfo from '../../components/card-info';

export default function Home() {
  return (
    <View style={{flex: 1}}>
      <CardInfo />
      <View style={{alignItems: 'center', justifyContent: 'center'}}>
        <Text
          onPress={() => alert('Ini Home Screen')}
          style={{fontSize: 26, fontWeight: 'bold', marginBottom: 5}}>
          Home Screen
        </Text>
      </View>
      <View></View>
    </View>
  );
}
