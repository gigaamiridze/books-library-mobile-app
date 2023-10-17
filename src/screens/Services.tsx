import React from 'react';
import { SafeAreaView, View } from 'react-native';
import { FlexBox, WelcomeSection, Heading } from '../components';
import { globalStyles } from '../styles';
import { Fonts } from '../constants';

function Services() {
  return (
    <SafeAreaView style={[globalStyles.flex, globalStyles.backgroundWhite]}>
      <FlexBox 
        flexDirection='column' 
        rowGap={60}
      >
        <WelcomeSection 
          smallTitle='All Your Favorite Books In One Place'
          bigTitle='Largest Digital Library Of Bestselling eBooks'
        />
        <View style={globalStyles.paddingHorizontal}>
          <FlexBox flexDirection='column' rowGap={20}>
            <Heading
              title='Main Services'
              type={2}
              fontFamily={Fonts.SECONDARY}
              textAlign='center'
            />
          </FlexBox>
        </View>
      </FlexBox>
    </SafeAreaView>
  )
}

export default Services;
