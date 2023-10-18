import React, { useState } from 'react';
import { ActivityIndicator, SafeAreaView, View, FlatList, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { FlexBox, WelcomeSection, Heading } from '../components';
import { useLibraryContext } from '../contexts';
import { Colors, Fonts, Routes } from '../constants';
import { getBooksByCategory } from '../api';
import { globalStyles } from '../styles';
import { useQuery } from 'react-query';

function Selection() {
  const [page, setPage] = useState<number>(0);
  const navigation = useNavigation();
  const { libraryState, dispatchLibrary } = useLibraryContext();

  const {
    data: books,
    isLoading,
    isError,
    isFetching,
    isPreviousData,
  } = useQuery(['books', page], () => getBooksByCategory(page, 5, libraryState.selectedCategory), {
    keepPreviousData: true,
    staleTime: 300000, // 5 minutes in milliseconds
    cacheTime: 3600000, // 1 hour in milliseconds
  });

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
            {isLoading || isFetching ? (
              <ActivityIndicator size='large' color={Colors.PURPLE} />
            ) : isError ? (
              <Heading
                title='Something went wrong. Please try again.'
                type={5}
                fontWeight='500'
              />
            ) : (
              <FlatList
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={{ columnGap: 20 }}
                data={books}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => {
                  const { volumeInfo } = item;

                  return (
                    <Text>{volumeInfo.title}</Text>
                  )
                }}
              />
            )}
          </FlexBox>
        </View>
      </FlexBox>
    </SafeAreaView>
  )
}

export default Selection;
