import React, { useState } from 'react'
import { StyleSheet, SafeAreaView } from 'react-native';
import AppButton from '../components/AppButton';
import CountdownTimer from '../components/CountdownTimer';

const TimerScreen = ({ navigation }) => {
    const [resetCount, setResetCount] = useState(0);

    //<Button title='restart' onPress={() => setResetCount(prevCount => prevCount + 1)}/>}
    
    return (
        <SafeAreaView style={styles.container}>

        <CountdownTimer resetCount={resetCount}/>

        
        <AppButton
            title='go to sample screen'
            onPress={() =>
                navigation.navigate('SampleScreen', {someInfo: 'Some context here!'})
            }
        />

        <AppButton
            title='Move laundry to dryer'
            onPress={() =>
                // go back to dashboard and pull up dryer selection
                navigation.navigate('SampleScreen', {someInfo: 'Some context here!'})
            }
        />
        <AppButton
            title='Collect wet laundry'
            onPress={() =>
                // go back to dashboard
                navigation.navigate('SampleScreen', {someInfo: 'Some context here!'})
        <AppButton
            title='go to thank you screen'
            onPress={() =>
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

export default TimerScreen;