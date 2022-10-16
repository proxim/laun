import React, { useState } from 'react'
import { StyleSheet, SafeAreaView } from 'react-native';
import CountdownTimer from '../components/CountdownTimer';
import AppButton from '../components/AppButton';

const TimerScreenDryer = ({ navigation }) => {
    const [resetCount, setResetCount] = useState(0);
    //<Button title='restart' onPress={() => setResetCount(prevCount => prevCount + 1)}/>}
    
    return (
        <SafeAreaView style={styles.container}>

        <CountdownTimer resetCount={resetCount}/>

        
        <AppButton
            title='Collect laundry'
            onPress={() =>
                // go to thank you page
                navigation.navigate('ThankYou')
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