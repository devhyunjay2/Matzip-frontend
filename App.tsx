import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import AuthStackNavigations from './src/navigation/AuthStackNavigations';
import {QueryClientProvider} from '@tanstack/react-query';
import queryClient from './src/api/queryClient';

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <NavigationContainer>
        <AuthStackNavigations />
      </NavigationContainer>
    </QueryClientProvider>
  );
}

export default App;
