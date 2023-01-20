import * as React from 'react';
import {Alert, Text, View} from 'react-native';

export default function Home() {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text
        onPress={() => alert('Ini Home Screen')}
        style={{fontSize: 26, fontWeight: 'bold'}}>
        Home Screen
      </Text>
    </View>
  );
}
