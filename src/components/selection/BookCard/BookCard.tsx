import React from 'react';
import { TouchableOpacity, Image, View, Text } from 'react-native';
import { IBookCardProps } from '../../../interfaces';
import { Heading } from '../../../components';
import { Colors } from '../../../constants';
import { images } from '../../../assets';
import { styles } from './styles';

function BookCard(props: IBookCardProps) {
  const { title, image, rating, authors, isSelected, onPress } = props;

  return (
    <TouchableOpacity
      style={[
        styles.cardContainer,
        isSelected && { borderColor: Colors.PURPLE }
      ]}
      onPress={onPress}
    >
      {!image
        ? (
          <Image 
            source={{ uri: image }} 
            style={styles.image}
            resizeMode='cover' 
            alt={title} 
          />
        )
        : (
          <Image 
            source={images.defaultBookCover} 
            style={styles.image}
            resizeMode='cover' 
            alt='Default Book Cover' 
          />
        )
      }
      <View style={styles.infoContent}>
        <Text>{rating}</Text>
        <Heading
          title={title}
          type={4}
          fontWeight='600'
          numberOfLines={1}
        />
        {authors?.length > 0 && (
          <Heading
            title={`By ${authors[0]}`}
            type={5}
            fontWeight='600'
            numberOfLines={1}
          />
        )}
      </View>
    </TouchableOpacity>
  )
}

export default BookCard;
