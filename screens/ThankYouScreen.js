import React, { useState } from 'react'
import { Button, StyleSheet, Text, SafeAreaView } from 'react-native';

const ThankYouScreen = ({ navigation }) => {
    return (
        <SafeAreaView style={styles.container}>
            <Text >hello there</Text>
        </SafeAreaView>
    );
  };

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff1111',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });

export default ThankYouScreen;