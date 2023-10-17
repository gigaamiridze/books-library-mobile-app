import { FontWeightType } from './Font';
import { IColors } from '../interfaces';
import { Fonts } from '../constants';

export interface IHeadingProps {
  title: string;
  type: 1 | 2 | 3 | 4 | 5 | 6;
  color?: keyof IColors;
  fontFamily?: Fonts.PRIMARY | Fonts.SECONDARY;
  fontWeight?: FontWeightType;
  numberOfLines?: number;
  lineHeight?: number;
  letterSpacing?: number;
  textAlign?: 'left' | 'right' | 'center' | 'justify' | 'auto';
  textTransform?: 'capitalize' | 'uppercase' | 'lowercase' | 'none';
}
