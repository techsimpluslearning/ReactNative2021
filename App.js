import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Home from './src/screens/main';
import Login from './src/screens/login';

const Stack = createStackNavigator();
const screenOptions = {
  headerShown: false,
};

const App = props => {
  return (
    <NavigationContainer screenOptions={{headerShown: false}}>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Login" component={Login} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
