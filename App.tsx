import React from 'react';
import { Text } from 'react-native';
import { UserContextProvider, LibraryContextProvider } from './src/contexts';

function App(): JSX.Element {
  return (
    <UserContextProvider>
      <LibraryContextProvider>
        <Text>Library Kiosk App</Text>
      </LibraryContextProvider>    
    </UserContextProvider>
  );
}

export default App;
