import React from 'react';
import { SafeAreaView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { FlexBox, WelcomeSection } from '../components';
import { globalStyles } from '../styles';
import { Routes } from '../constants';

function Selection() {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={[globalStyles.flex, globalStyles.backgroundWhite]}>
      <FlexBox 
        flexDirection='column' 
        rowGap={40}
      >
        <WelcomeSection 
          smallTitle='Explore your favorite books'
          bigTitle='Selection'
          backTitle='Back To Category Page'
          onBack={() => navigation.navigate(Routes.CATEGORIES)}
        />
      </FlexBox>
    </SafeAreaView>
  )
}

export default Selection;
