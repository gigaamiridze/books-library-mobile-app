import React from 'react';
import { SafeAreaView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { FlexBox, WelcomeSection } from '../components';
import { globalStyles } from '../styles';
import { Routes } from '../constants';

function Categories() {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={[globalStyles.flex, globalStyles.backgroundWhite]}>
      <FlexBox 
        flexDirection='column' 
        rowGap={40}
      >
        <WelcomeSection 
          smallTitle='Explore your favorite book category'
          bigTitle='Categories'
          backTitle='Back To Home'
          onBack={() => navigation.navigate(Routes.SERVICES)}
        />
      </FlexBox>
    </SafeAreaView>
  )
}

export default Categories;
