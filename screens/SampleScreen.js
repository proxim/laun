import React, { useState } from 'react'
import { Button, StyleSheet, Text, SafeAreaView } from 'react-native';

const SampleScreen = ({ navigation, route }) => {
    return <Text>someInfo: {route.params.someInfo}</Text>;
  };

export default SampleScreen;