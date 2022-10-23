import React, {Component} from 'react';
import {View, TouchableOpacity, Text, Image, StyleSheet} from 'react-native';


export default class HomeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      
    };
  }

  render(){
    return(
      <View style = {styles.container}>
      <Image source = {require('../Images/Logo4.png')} style = {styles.logo}/>

      <View>
      <TouchableOpacity style = {styles.button}
      onPress = {() => this.props.navigation.navigate("Talk")}>
      <Text style = {styles.buttonText}>Talk to Me</Text>
      </TouchableOpacity>
      
      <TouchableOpacity style = {styles.buttonI}
      onPress = {() => this.props.navigation.navigate("Calm")}>
      <Text style = {styles.buttonText}>Calm Youself</Text>
      </TouchableOpacity>

      <TouchableOpacity style = {styles.buttonI}
      onPress = {() => this.props.navigation.navigate("Survival")}>
      <Text style = {styles.buttonText}>How to Survive</Text>
      </TouchableOpacity>

      <TouchableOpacity style = {styles.buttonI}
      onPress = {() => this.props.navigation.navigate("Help")}>
      <Text style = {styles.buttonText}>How to Use App</Text>
      </TouchableOpacity>
      

      <TouchableOpacity>
      </TouchableOpacity>

      </View>
      </View>
    )
  }
}


const styles = StyleSheet.create({
  container: {
    backgroundColor: 'rgb(87, 102, 112)',
    width: '100%',
    height: '100%'
  },

  logo: {
    width: 200,
    height: 200,
    alignSelf: 'center',
    marginTop: 50
  },

  button:{
    backgroundColor: 'grey',
    padding: 4,
    width: 150,
    height: 40,
    alignSelf: 'center',
    textAlign: 'center',
    marginTop: 60,
    borderRadius: 10
  },

  buttonI:{
    backgroundColor: 'grey',
    padding: 5,
    width: 150,
    height: 40,
    alignSelf: 'center',
    textAlign: 'center',
    marginTop: 30,
    borderRadius: 10
  },

  buttonText: {
    color: 'white',
    padding: 5,
    textAlign: 'center'
  }
})