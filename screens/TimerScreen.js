import React, { useState } from 'react'
import { Button, StyleSheet, Text, SafeAreaView } from 'react-native';
import CountdownTimer from '../components/CountdownTimer';

const TimerScreen = ({ navigation }) => {
    const [resetCount, setResetCount] = useState(0);
    return (
        <SafeAreaView style={styles.container}>
            
        <CountdownTimer resetCount={resetCount}/>

        <Button title='restart' onPress={() => setResetCount(prevCount => prevCount + 1)}/>
        <Button
            title='go to sample screen'
            onPress={() =>
                navigation.navigate('SampleScreen', {someInfo: 'Some context here!'})
            }
        />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });

export default TimerScreen;