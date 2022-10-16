import React, { useState, useEffect } from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native'
import { CountdownCircleTimer } from 'react-native-countdown-circle-timer'
import { sendText } from '../clients/TwilioClient';
import LText from './LText';

const CountdownTimer = ({ resetCount }) => (
    <CountdownCircleTimer
        key={resetCount}
        isPlaying
        duration={60 * .5}
        colors={['#004777', '#F7B801', '#A30000', '#A30000']}
        colorsTime={[resetCount*.6, resetCount*.3, resetCount*.1, 0]}
        onComplete={() => {sendText('Your laundry is finished!')}}
    >
    {({ remainingTime }) => 
    <LText style={styles.text}>
        Laundry done in{'\n'}
        {new Date(remainingTime * 1000).toISOString().substring(14, 19)}
    </LText>}
  </CountdownCircleTimer>
)

const styles = StyleSheet.create({
    text: {
        textAlign: 'center',
        justifyContent: 'center',
    },
  });

export default CountdownTimer;