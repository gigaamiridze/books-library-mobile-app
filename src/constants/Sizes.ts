import { Dimensions } from 'react-native';
const { height, width } = Dimensions.get('window');

export enum Sizes {
  X_SMALL = 10,
  SMALL = 12,
  MEDIUM = 16,
  LARGE = 20,
  X_LARGE = 24,
  XX_LARGE = 44,
  WIDTH = width,
  HEIGHT = height,
}
