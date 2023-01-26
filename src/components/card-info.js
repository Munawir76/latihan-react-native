import React from 'react';
import {Text, View, TouchableOpacity} from 'react-native';

import MaterialCommunity from 'react-native-vector-icons/MaterialCommunityIcons';

export default function CardInfo() {
  return (
    <View style={{flex: 1, margin: 20}}>
      <TouchableOpacity
        style={{
          flexDirection: 'row',
          backgroundColor: '#bebeb6',
          paddingHorizontal: 20,
          paddingVertical: 20,
          borderRadius: 6,
          height: 120,
        }}>
        <View
          style={{flex: 1, justifyContent: 'center', alignItems: 'flex-start'}}>
          <MaterialCommunity size={50} name="coffee"></MaterialCommunity>
        </View>
        <View
          style={{flex: 1, justifyContent: 'center', alignItems: 'flex-end'}}>
          <Text style={{fontWeight: 'bold', fontSize: 30}}>229</Text>
          <Text style={{fontSize: 20, color: 'red'}}>Ini card pertama</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}
