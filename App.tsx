import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import AuthStackNavigations from './src/navigation/AuthStackNavigations';

function App() {
  return (
    <NavigationContainer>
      <AuthStackNavigations />
    </NavigationContainer>
  );
}

export default App;
