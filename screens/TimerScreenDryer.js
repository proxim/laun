import React, { useState } from 'react'
import { Button, StyleSheet, SafeAreaView } from 'react-native';
import CountdownTimer from '../components/CountdownTimer';

const TimerScreenDryer = ({ navigation }) => {
    const [resetCount, setResetCount] = useState(0);

    //<Button title='restart' onPress={() => setResetCount(prevCount => prevCount + 1)}/>}
    
    return (
        <SafeAreaView style={styles.container}>

        <CountdownTimer resetCount={resetCount}/>

        
        <Button
            title='Collect laundry'
            onPress={() =>
                // go to thank you page
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

export default TimerScreenDryer;