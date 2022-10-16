import React, { useState } from 'react'
import { StyleSheet, Text, Image, SafeAreaView, Button, Platform,
    StatusBar } from 'react-native';
import WasherModal from '../components/WasherModal';
import DryerModal from '../components/DryerModal';

const Dashboard = ({ navigation }) => {
    return(
        <SafeAreaView style={styles.container}>
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
    container: {
        flex: 1,
        backgroundColor: '#fff',
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    },
});

export default Dashboard;