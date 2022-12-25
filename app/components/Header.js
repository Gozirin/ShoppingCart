import React, { Component } from 'react';
import { View, Image, Text, StyleSheet, Dimensions } from 'react-native';



export default class Header extends Component {
  render() {
    return (
      <View style={styles.header}>
        <Image
        source={require('../img/img3.jpeg')}
        style={styles.logo}/>
        
        <Text style={styles.title}>
        General Shopping Online</Text>
     
      </View>
    );
  }
}

const styles = StyleSheet.create({
    header:{
       height: 80,
       marginTop: 20,
       flexDirection: 'row',
       backgroundColor: '#ffff',
       alignItems: 'center',
       justifyContent: 'center',
       padding: 20,
       width: Dimensions.get('window').width,
       borderBottomWidth: 4,
       borderBottomColor: '#ccc'
    },

    logo:{
        width: 70,
        height: 70,
        marginTop: 20,
        marginBottom:20,

    },

    title: {
        marginTop: 20,
        marginLeft: 10,
        fontWeight: 'bold',
        fontSize: 15,
        fontStyle: 'italic',
        // color: '#000'

    },
});