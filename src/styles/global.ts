import { StyleSheet } from 'react-native';
import { horizontalScale } from './scaling';
import { Colors, Sizes } from '../constants';

export const globalStyles = StyleSheet.create({
  flex: {
    flex: 1,
  },
  backgroundWhite: {
    backgroundColor: Colors.WHITE,
  },
  paddingHorizontal: {
    paddingHorizontal: horizontalScale(Sizes.LARGE),
  },
  screenContainer: {
    flex: 1,
    backgroundColor: Colors.WHITE,
    paddingHorizontal: horizontalScale(Sizes.LARGE),
  },
}); 
