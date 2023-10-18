import React, { useState } from 'react';
import { useQuery } from 'react-query';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView, ScrollView, View, ActivityIndicator, FlatList } from 'react-native';
import { FlexBox, WelcomeSection, Heading, Button, Pagination } from '../components';
import { Colors, Fonts, LibraryActions, Routes } from '../constants';
import { useLibraryContext } from '../contexts';
import { getBookCategories } from '../api';
import { globalStyles } from '../styles';

function Categories() {
  const [page, setPage] = useState<number>(0);
  const navigation = useNavigation();
  const { libraryState: { selectedCategory }, dispatchLibrary } = useLibraryContext();

  const {
    data: categories,
    isLoading,
    isError,
    isFetching,
    isPreviousData,
  } = useQuery(['categories', page], () => getBookCategories(page, 10), {
    keepPreviousData: true,
    staleTime: 300000, // 5 minutes in milliseconds
    cacheTime: 3600000, // 1 hour in milliseconds
  });

  const handleCategorySelection = (newCategory: string) => {
    dispatchLibrary({ type: LibraryActions.SELECT_CATEGORY, payload: newCategory });
  }

  return (
    <SafeAreaView style={[globalStyles.flex, globalStyles.backgroundWhite]}>
      <ScrollView showsVerticalScrollIndicator={false}>
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
            <FlexBox flexDirection='column' alignItems='center' rowGap={40}>
              <Heading
                title='Select a category'
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
                  contentContainerStyle={{ columnGap: 10 }}
                  data={categories}
                  keyExtractor={(item) => item.id}
                  renderItem={({ item }) => (
                    <Button
                      title={item.title}
                      isSelected={selectedCategory === item.title}
                      onPress={() => handleCategorySelection(item.title)}
                    />
                  )}
                />
              )}
              <Pagination 
                data={categories}
                currentPage={page}
                setcurrentPage={setPage}
                isPreviousData={isPreviousData}
                isFetching={isFetching}
              />
            </FlexBox>
          </View>
        </FlexBox>
      </ScrollView>
    </SafeAreaView>
  )
}

export default Categories;
