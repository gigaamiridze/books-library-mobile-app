import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView, ScrollView, View } from 'react-native';
import { FlexBox, WelcomeSection, Heading } from '../components';
import { Fonts, Routes } from '../constants';
import { globalStyles } from '../styles';

function Categories() {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={[globalStyles.flex, globalStyles.backgroundWhite]}>
      <ScrollView 
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 90 }}
      >
        <FlexBox 
          flexDirection='column' 
          rowGap={60}
        >
          <WelcomeSection 
            smallTitle='Explore your favorite book category'
            bigTitle='Categories'
            backTitle='Back To Home'
            onBack={() => navigation.navigate(Routes.SERVICES)}
          />
          <View style={globalStyles.paddingHorizontal}>
            <FlexBox flexDirection='column' rowGap={40}>
              <Heading
                title='Select a category'
                type={2}
                fontFamily={Fonts.SECONDARY}
                textAlign='center'
              />
            </FlexBox>
          </View>
        </FlexBox>
      </ScrollView>
    </SafeAreaView>
  )
}

export default Categories;
