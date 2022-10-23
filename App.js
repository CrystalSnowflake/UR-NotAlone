import React, {Component} from 'react';
import {View, TouchableOpacity, Text, Image} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import HomeScreen from './screens/HomeScreen';
import Talk from './screens/Talk'
import CalmDown from './screens/Calm';
import Survive from './screens/Survive';
import Help from './screens/Help';  

const Stack = createStackNavigator();

export default class App extends React.Component{

  render(){
    return(
      <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" screenOptions={{
        headerShown: false
      }}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Talk" component={Talk} />
        <Stack.Screen name="Survival" component={Survive} />
        <Stack.Screen name = "Calm" component = {CalmDown}/>
        <Stack.Screen name = "Help" component = {Help}/>

      </Stack.Navigator>
    </NavigationContainer>
    )
  }
}
