import React, { useState } from 'react'
import { StyleSheet, Text, Image, SafeAreaView, Button, Platform,
    StatusBar } from 'react-native';
import WasherModal from '../components/WasherModal';
import DryerModal from '../components/DryerModal';

const Dashboard = ({ navigation }) => {
    return(
        <SafeAreaView style={styles.welcome}>
            <Text>Laundry Status</Text>
            <WasherModal 
                navigation={navigation}
            />
            <DryerModal 
                navigation={navigation}
            />
        </SafeAreaView>
    )
};

const styles = StyleSheet.create({
    welcome: {
        fontSize: 50,
        flex: 0.5,
        justifyContent: "center",
        textAlign: "center",
        margin: 10,
        fontFamily: "SFUIDisplay-Bold"
    }
});

export default Dashboard;