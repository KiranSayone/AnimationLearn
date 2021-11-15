import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import landingScreen from './src/modules/landingScreen';
import autoCenterBall from './src/modules/autoCenterBall';
import hiddenMessage from './src/modules/hiddenMessage';
import loader from './src/modules/loader';
import {NavigationContainer} from '@react-navigation/native';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: true}}>
        <Stack.Screen name="Home" component={landingScreen} />
        <Stack.Screen name="Hidden Message" component={hiddenMessage} />
        <Stack.Screen name="Loader" component={loader} />
        <Stack.Screen name="AutoCenterBall" component={autoCenterBall} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
