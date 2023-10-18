import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { AlertNotificationRoot } from 'react-native-alert-notification';
import { UserContextProvider, LibraryContextProvider } from './contexts';
import { StackNavigation } from './navigation';

function App(): JSX.Element {
  return (
    <UserContextProvider>
      <LibraryContextProvider>
        <AlertNotificationRoot>
          <NavigationContainer>
            <StackNavigation />
          </NavigationContainer>
        </AlertNotificationRoot>
      </LibraryContextProvider>    
    </UserContextProvider>
  );
}

export default App;
