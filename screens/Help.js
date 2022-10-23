import React, {Component} from 'react';
import {View, Text, Image, StyleSheet, SafeAreaView, Platform, StatusBar} from 'react-native';

export default class Help extends Component{
  render(){
    return(
      <View style = {{backgroundColor: '#A2CCE8', width: '100%', height: '100%'}}>
      <SafeAreaView style = {styles.area}/>

      <Text style = {styles.title}>Using the App</Text>
      
      <Text style = {styles.intro}>There are buttons on the homescreen that can help you based on your needs at the moment.</Text>

      <Text style = {styles.text}>Talk to Me</Text>
      <Text style = {styles.subText}>It will provide you recordings of one way conversations. Improvise and respond to the recordings to make it sound like a real conversation. </Text>

      <Text style = {styles.text}>Map View (Future scope)</Text>
      <Text style = {styles.subText}>It will take your location and show where you are on a map. This will help you navigate.</Text>

      <Text style = {styles.text}>Location History (Future scope)</Text>
      <Text style = {styles.subText}>It will tell you about the history of crime in the area you are currently in.</Text>

      <Text style = {styles.text}>Calm Yourself</Text>
      <Text style = {styles.subText}>It provides simple instructions to calm yourself. They are written in large fonts to make everything clear.</Text>

      <Text style = {styles.text}>How to Survive</Text>
      <Text style = {styles.subText}>It doesn't hurt to read up on basic survival tips on your free time!</Text>


      </View>
    )
  }
}

const styles = StyleSheet.create({
  area: {
    marginTop: Platform.OS === 'android' ? StatusBar.currentHeight: 0
  },

  title: {
    textAlign: 'center',
    fontSize: 45,
    paddingBottom: 5,
    color: '#BA32FF'
  },

  intro: {
    paddingBottom: 20,
    marginLeft: 10
  },
  
  text: {
    marginLeft: 10,
    paddingTop: 10,
    fontSize: 25,
    color: 'purple',
    marginTop: 10
  },

  subText: {
    marginLeft: 20,
    fontSize: 15,
    color: '#C45CC7'
  }
})