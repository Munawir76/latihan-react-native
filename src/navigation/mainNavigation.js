import * as React from 'react';
import {View, Text} from 'react-native/types';

import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MaterialCommunity from 'react-native-vector-icons/MaterialCommunityIcons';

import Home from './screen/home';
import Setting from './screen/setting';
import Detail from './screen/details';

const Tab = createBottomTabNavigator();

export default function MainNavigation() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName={'Home'}
        screenOptions={({route}) => ({
          headerShown: false,
          tabBarActiveTintColor: 'red',
          tabBarInactiveTintColor: 'black',
          tabBarStyle: {
            height: 60,
            padding: 10,
            alignItems: 'center',
            justifyContent: 'center',
          },
        })}>
        <Tab.Screen
          name={'Home'}
          component={Home}
          options={props => {
            const {navigation} = props;
            return {
              tabBarIcon: ({focused, size, color}) => {
                return (
                  <MaterialCommunity name={'home'} size={size} color={color} />
                );
              },
            };
          }}></Tab.Screen>
        <Tab.Screen
          name={'Detail'}
          component={Detail}
          options={props => {
            const {navigation} = props;
            return {
              tabBarIcon: ({focused, size, color}) => {
                return (
                  <MaterialCommunity
                    name={'format-list-bulleted'}
                    size={size}
                    color={color}
                  />
                );
              },
            };
          }}></Tab.Screen>
        <Tab.Screen
          name={'Setting'}
          component={Setting}
          options={props => {
            const {navigation} = props;
            return {
              tabBarIcon: ({focused, size, color}) => {
                return (
                  <MaterialCommunity name={'cog'} size={size} color={color} />
                );
              },
            };
          }}></Tab.Screen>
      </Tab.Navigator>
    </NavigationContainer>
  );
}
