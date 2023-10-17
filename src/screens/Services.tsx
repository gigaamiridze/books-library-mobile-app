import React from 'react';
import { SafeAreaView } from 'react-native';
import { FlexBox, WelcomeSection } from '../components';
import { globalStyles } from '../styles';

function Services() {
  return (
    <SafeAreaView style={[globalStyles.flex, globalStyles.backgroundWhite]}>
      <FlexBox 
        flexDirection='column' 
        rowGap={40}
      >
        <WelcomeSection 
          smallTitle='All Your Favorite Books In One Place'
          bigTitle='Largest Digital Library Of Bestselling eBooks'
        />
      </FlexBox>
    </SafeAreaView>
  )
}

export default Services;
