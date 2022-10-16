import React, { useState } from 'react'
import { Button, StyleSheet, Text, SafeAreaView } from 'react-native';
import LText from '../components/LText';
import AppButton from '../components/AppButton';

const ThankYouScreen = ({ navigation }) => {
    return (
        <SafeAreaView style={styles.container}>
            <LText>Thank you for collecting your laundry!</LText>
            <AppButton 
              title='return Home'
              onPress={() =>
                navigation.navigate('Dash', 'Dashboard')
              } 
            />
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
    }
  });

export default ThankYouScreen;