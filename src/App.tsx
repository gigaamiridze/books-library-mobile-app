import React from 'react';
import Toast from 'react-native-toast-message';
import { NavigationContainer } from '@react-navigation/native';
import { UserContextProvider, LibraryContextProvider } from './contexts';
import { StackNavigation } from './navigation';

function App(): JSX.Element {  
  return (
    <UserContextProvider>
      <LibraryContextProvider>
        <NavigationContainer>
          <Toast visibilityTime={2000} />
          <StackNavigation />
        </NavigationContainer>
      </LibraryContextProvider>    
    </UserContextProvider>
  );
}

export default App;
