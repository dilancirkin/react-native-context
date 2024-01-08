import {View, Text, Button} from 'react-native';
import React from 'react';
import Navigation from './src/navigations/Navigation';
import {UserProvider} from './src/context/UserContext';

const App = () => {
  return (
    <UserProvider>
      <Navigation />
    </UserProvider>
  );
};

export default App;
