import React, { useState } from 'react'
import { StyleSheet, SafeAreaView } from 'react-native';
import AppButton from '../components/AppButton';
import CountdownTimer from '../components/CountdownTimer';
import DryerModal from '../components/DryerModal';

const TimerScreen = ({ navigation }) => {
    const [resetCount, setResetCount] = useState(0);
    //<Button title='restart' onPress={() => setResetCount(prevCount => prevCount + 1)}/>}
    
    return (
        <SafeAreaView style={styles.container}>

        <CountdownTimer resetCount={resetCount}/>

        <DryerModal 
            navigation={navigation}
        />
        <AppButton
            title='Collect wet laundry'
            onPress={() =>
                // go back to dashboard
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