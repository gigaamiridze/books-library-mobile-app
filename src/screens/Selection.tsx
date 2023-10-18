import React from 'react';
import { SafeAreaView, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { FlexBox, WelcomeSection, Heading } from '../components';
import { Fonts, Routes } from '../constants';
import { globalStyles } from '../styles';

function Selection() {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={[globalStyles.flex, globalStyles.backgroundWhite]}>
      <FlexBox 
        flexDirection='column' 
        rowGap={60}
      >
        <WelcomeSection 
          smallTitle='Explore your favorite books'
          bigTitle='Selection'
          backTitle='Back To Category Page'
          onBack={() => navigation.navigate(Routes.CATEGORIES)}
        />
        <View style={globalStyles.paddingHorizontal}>
          <FlexBox flexDirection='column' alignItems='center' rowGap={40}>
            <Heading
              title='Select a book'
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

export default Selection;
