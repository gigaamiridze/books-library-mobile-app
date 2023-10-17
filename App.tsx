import React from 'react';
import { Text } from 'react-native';
import Toast from 'react-native-toast-message';
import { UserContextProvider, LibraryContextProvider } from './src/contexts';

function App(): JSX.Element {  
  return (
    <UserContextProvider>
      <LibraryContextProvider>
        <Toast visibilityTime={2000} />
        <Text>Library Kiosk App</Text>
      </LibraryContextProvider>    
    </UserContextProvider>
  );
}

export default App;
