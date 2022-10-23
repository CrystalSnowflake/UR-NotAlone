import React, {Component} from 'react';
import {View, Text, StyleSheet, ImageBackground, SafeAreaView, Platform, StatusBar, TouchableOpacity} from 'react-native';
import {Audio} from 'expo-av';

/*class SoundButton extends React.Component{
 const [sound, setSound] = React.useState();

  async function playSound() {
    const { sound } = await Audio.Sound.createAsync( require('../Recordings/inspiring-cinematic-ambient-116199.mp3')
    );
    await playSound(sound);

    await sound.playAsync();
  }

  render(){
    return(
      <View>
      <TouchableOpacity style = {styles.button}
      onPress = {this.playsound}>
      <Text style = {styles.text}>Test</Text>
      </TouchableOpacity>
      </View>
    )
  }
}*/

export default class CalmDown extends Component{
  

  render(){
    return(
      <View style = {styles.container}>
      <SafeAreaView style = {styles.area}/>
      <ImageBackground source = {require('../Images/plant.png')} style = {styles.image}>
      
      <Text style = {styles.title}>Calm Down</Text>

      <TouchableOpacity style = {styles.button}
      onPress = {this.playsound}>
      <Text style = {styles.text}>Piano music</Text>
      </TouchableOpacity>

      <TouchableOpacity style = {styles.buttonI}>
      <Text style = {styles.textI}> Lofi Beats </Text>
      </TouchableOpacity>

      </ImageBackground>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container:{
    backgroundColor: '#869BA9',
    width: '100%',
    height: '100%'
  },

  area: {
    marginTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0
  },

  title: {
    color: 'purple',
    textAlign: 'center',
    fontSize: 50
  },

  image: {
    width: '100%',
    height: '100%'
    
  },

  button: {
    width: '30%',
    height: '8%',
    marginLeft: 35,
    textAlign: 'center',
    marginTop: 40,
  },
  
  text: {
    backgroundColor: '#B4C8D5',
    color: 'white',
    padding: 6,
    textAlign: 'center',
    borderStyle: 'solid',
    borderWidth: 3,
    borderColor: 'white',
    borderRadius: 10,
    fontSize: 20
  },

  buttonI: {
    width: '30%',
    height: '8%',
    marginLeft: '60%',
    textAlign: 'center',
    marginTop: -10.5  
    },

  textI: {
    backgroundColor: '#B4C8D5',
    color: 'white',
    padding: 6,
    textAlign: 'center',
    borderStyle: 'solid',
    borderWidth: 3,
    borderColor: 'white',
    borderRadius: 10,
    fontSize: 20
  }
})