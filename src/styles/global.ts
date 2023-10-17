import { StyleSheet } from 'react-native';
import { Colors, Sizes } from '../constants';

export const globalStyles = StyleSheet.create({
  flex: {
    flex: 1,
  },
  backgroundWhite: {
    backgroundColor: Colors.WHITE,
  },
  paddingHorizontal: {
    paddingHorizontal: Sizes.LARGE,
  },
  screenContainer: {
    flex: 1,
    backgroundColor: Colors.WHITE,
    paddingHorizontal: Sizes.LARGE,
  },
}); 
