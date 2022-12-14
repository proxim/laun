import * as React from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Dashboard from './screens/Dashboard';
import TimerScreen from './screens/TimerScreen';
import TimerScreenDryer from './screens/TimerScreenDryer';
import SampleScreen from './screens/SampleScreen';
import ThankYouScreen from './screens/ThankYouScreen';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer style={styles.container}>

      <Stack.Navigator>

        <Stack.Screen 
          name="Dash"
          component={Dashboard} 
        />
        <Stack.Screen 
          name="Timer"
          component={TimerScreen}
        />
        <Stack.Screen 
          name="TimerDryer"
          component={TimerScreenDryer}
        />
        <Stack.Screen 
          name="SampleScreen"
          component={SampleScreen}
        />
        <Stack.Screen
          name="ThankYou"
          component={ThankYouScreen}
        />

      </Stack.Navigator>

    </NavigationContainer>
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

export default App;