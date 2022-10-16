import React from 'react';
import { StyleSheet, TouchableOpacity } from "react-native";
import LText from './LText';


const AppButton = ({ onPress, title }) => (
    <TouchableOpacity onPress={onPress} style={styles.appButtonContainer}>
      <LText style={styles.appButtonText}>{title}</LText>
    </TouchableOpacity>
  );

  const styles = StyleSheet.create({

    appButtonContainer: {
      elevation: 8,
      backgroundColor: "#B6F0FF",
      borderRadius: 10,
      paddingVertical: 10,
      paddingHorizontal: 12
    },
    appButtonText: {
      color: "#000",
      fontWeight: "bold",
      alignSelf: "center",
    }
  });
  
  export default AppButton;