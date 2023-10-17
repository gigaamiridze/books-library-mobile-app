import React from 'react';
import { Text } from 'react-native';
import { UserContextProvider } from './src/contexts';

function App(): JSX.Element {
  return (
    <UserContextProvider>    
      <Text>Library Kiosk App</Text>
    </UserContextProvider>
  );
}

export default App;
