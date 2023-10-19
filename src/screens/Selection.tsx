import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { ActivityIndicator, SafeAreaView, ScrollView, View, FlatList } from 'react-native';
import { FlexBox, WelcomeSection, Heading, BookCard } from '../components';
import { Colors, Fonts, LibraryActions, Routes } from '../constants';
import { useLibraryContext } from '../contexts';
import { getBooksByCategory } from '../api';
import { globalStyles } from '../styles';
import { useQuery } from 'react-query';
import { IBook } from '../interfaces';

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

  const handleBookSelection = (book: IBook) => {
    dispatchLibrary({ type: LibraryActions.SELECT_BOOK, payload: {
      id: book.id,
      title: book.volumeInfo.title,
    }});
  };

  return (
    <SafeAreaView style={[globalStyles.flex, globalStyles.backgroundWhite]}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 100 }}
      >
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
                      <BookCard
                        title={volumeInfo.title}
                        image={volumeInfo.imageLinks ? volumeInfo.imageLinks.smallThumbnail : undefined}
                        rating={volumeInfo.averageRating}
                        authors={volumeInfo.authors}
                        isSelected={libraryState.selectedBook?.title === volumeInfo.title}
                        onPress={() => handleBookSelection(item)}
                      />
                    )
                  }}
                />
              )}
            </FlexBox>
          </View>
        </FlexBox>
      </ScrollView>
    </SafeAreaView>
  )
}

export default Selection;
