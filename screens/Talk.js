import React, {Component} from 'react';
import {View, StyleSheet, Image, TouchableOpacity, Text, SafeAreaView, Platform, StatusBar} from 'react-native';
import {Audio} from 'expo-av';


class SoundButton extends React.Component {
  playRecording = async () => {
    Audio.Sound.createAsync(
      {uri: 'https://uploadnow.io/files/RQHbkLV'},
      {shouldPlay: true}
    );
  }
}

export default class Talk extends Component{
  render(){
    return(
      <View style = {styles.background}>
      <SafeAreaView style = {styles.safe} />

      <Text style = {styles.title}> Talk to Me </Text>
      <Text style = {styles.subtitle}> Let's chat. How've you been? :)</Text>

      <TouchableOpacity style = {styles.button}
      onPress = {this.playRecording}>
      <Text style = {styles.buttonText}>5 minute call</Text>
      <Text style = {styles.buttonSub}>We just have general chat. We talk about how I met an old friend, Maple at my cafe.</Text>
      </TouchableOpacity>

      <TouchableOpacity style = {styles.button}>
      <Text style = {styles.buttonText}>5 minute call</Text>
      <Text style = {styles.buttonSub}>We just have a casual talk about my dog, David and his little shannanigans.</Text>
      </TouchableOpacity>

      </View>
    )
  }
}

const styles = StyleSheet.create({
  background: {
    backgroundColor: 'rgb(50, 50, 50)',
    width: '100%',
    height: '100%'
  },

  safe: {
    marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
  },

  title: {
    fontSize: 40,
    textAlign: 'center',
    color: '#F5F5F5',
    marginTop: 20
  },

  subtitle: {
    fontSize: 13,
    color: '#F5F5F5',
    marginLeft: 3,
    marginRight: 3,
    textAlign:'center'
  },

  button: {
    backgroundColor: 'grey',
    padding: 0,
    width: '75%',
    height: '13%',
    alignSelf: 'center',
    textAlign: 'center',
    marginTop: 60,
    borderRadius: 10,
    borderStyle: 'solid',
    borderWidth: 2,
    borderColor: '#f5f5f5'
  },

  buttonText: {
    color: 'white',
    textAlign: 'left',
    fontSize: 20,
    marginLeft: 5
  },
  
  buttonSub: {
    color: '#f5f5f5',
    textAlign: 'right',
    fontSize: 12,
    marginRight: 5,
  }
})