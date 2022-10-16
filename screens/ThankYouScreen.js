import React, { useState } from 'react'
import { Button, StyleSheet, Text, SafeAreaView } from 'react-native';

const ThankYouScreen = ({ navigation }) => {
    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.text}>Thank you for moving someone’s laundry!</Text>
        </SafeAreaView>
    );
  };

  const styles = StyleSheet.create({
    container: {
      // flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      // width: 315,
      // height: 150,
      // left: 37,
      top: 179,
      borderRadius: 25,
      backgroundColor: '#B6F0FF',
      height: 300,
      margin: 50,
      alignItems: 'center',
      justifyContent: 'center'
    },
    text: {
      fontSize: 25,
      textAlign:'center',
      fontFamily: 'Arial',
      // fontWeight: 'bold',
    }
  });

export default ThankYouScreen;