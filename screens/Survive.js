import React, {Component} from 'react';
import {View, Image, Text, StyleSheet, SafeAreaView, Platform, StatusBar} from 'react-native';

export default class Survive extends Component{
  render(){
    return(
      <View style = {styles.background}>


      <SafeAreaView style = {styles.area}/>

      <Text style = {styles.title}>Tips on Self-Defence</Text>

      <Text style = {styles.text}>1. Trust your instincts.</Text>
      <Text style = {styles.subText}>If your inner self makes you hesitant in doing something, simply don't do it. Immediately get out of the situation. </Text>

      <Text style = {styles.text}>2. Element of surprise.</Text>
      <Text style = {styles.subText}>Usually if you readily get into a fighting stance, it tells the attacker that you know how to fight. So it is better to stay in a relaxed stance and attack when the they least expect it.</Text>

      <Text style = {styles.text}>3. DO NOT PANIC if you are knocked down.</Text>
      <Text style = {styles.subText}>Many potential threats like to get you on the ground to intimidate you and make you comply. Usually they cannot easily fight on the ground. Take advantage of that and either kick them really hard or simply aggressively aim your fingers to their eyes.</Text>


      </View>
    )
  }
}

const styles = StyleSheet.create({
  background: {
    backgroundColor: 'rgb(87, 102, 112)',
    width: '100%',
    height: '100%'
  },

  area: {
    marginTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0
  },

  title: {
    color: '#E9C8E5',
    fontSize: 30,
    textAlign: 'center',
    textDecorationLine: 'underline',
    marginTop: 15,
    marginBottom: 20
  },

  text: {
    color: '#E9B9E3',
    marginLeft: 15,
    fontSize: 25,
    paddingTop: 20
  },

  subText:{
    color: '#F5F5F5',
    marginLeft: 50,
    fontSize: 18
  }
})