import React from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import MaterialCommunity from 'react-native-vector-icons/MaterialCommunityIcons';

export default function ListSetting() {
  return (
    <View>
      <View style={{flex: 1}}>
        <TouchableOpacity
          style={{
            flexDirection: 'row',
            backgroundColor: 'red',
            paddingHorizontal: 20,
            paddingVertical: 20,
            borderRadius: 6,
            height: 90,
          }}>
          <View
            style={{
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <View
              style={{
                flex: 1,
                justifyContent: 'space-between',
              }}>
              <MaterialCommunity size={40} name="cog" color="white">
                <Text
                  onPress={() => alert('Ini Home Screen')}
                  style={{
                    fontSize: 26,
                    fontWeight: 'bold',
                  }}>
                  Setting Screensss
                </Text>
              </MaterialCommunity>
            </View>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}
