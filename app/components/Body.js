import { Text, View, StyleSheet } from 'react-native'
import React, { Component } from 'react'
import CompoImage from './CompoImage';


export default class Body extends Component {
  render() {
    return (
        
        // COLUMN 1 //
      <View style={styles.container}>
        <View style={styles.column1}>
        <CompoImage imageSource={require('../img/img3.jpeg')}/>
        </View>
        
        <View style={styles.column2}>
        <CompoImage imageSource={require('../img/img4.jpeg')}/>
        </View>
        
        <View style={styles.full}>
        <CompoImage imageSource={require('../img/img5.png')}/>                          
        </View>


         {/* // COLUMN 2 // */}
        <View style={styles.column2}>
            <CompoImage imageSource={require('../img/img5.png')}/>
        </View>
        
        <View style={styles.column1}>
        <CompoImage imageSource={require('../img/img2.jpeg')}/>
        </View>
        
        <View style={styles.full}>
        <CompoImage imageSource={require('../img/img3.jpeg')}/>                          
        </View>


         {/* // COLUMN 3 // */}
        <View style={styles.column2}>
            <CompoImage imageSource={require('../img/img2.jpeg')}/>
        </View>

        <View style={styles.column1}>
        <CompoImage imageSource={require('../img/img3.jpeg')}/>
        </View>
        
        <View style={styles.full}>
        <CompoImage imageSource={require('../img/img5.png')}/>                          
        </View>
      </View>
    );
  }
}


const styles = StyleSheet.create({
    container: {
        flex:1,  
        flexDirection: 'column',
        // flexWrap: 'wrap',
        padding: 5,
        backgroundColor: '#3b5998',
    },

    column1:{
        flex: 1,
        padding: 5,
        marginBottom: 15,
    },

    column2: {
        flex:2,
        padding: 5,
        marginBottom: 15,
    },
    full: {
       witth: '100%', 
       alignItems: 'center',
       justifyContent:'center',
       padding: 5,
       marginBottom: 15,
    }
});