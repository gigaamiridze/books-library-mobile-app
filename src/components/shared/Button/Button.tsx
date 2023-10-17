import React from 'react';
import { TouchableOpacity } from 'react-native';
import { Heading } from '../../../components';
import { Colors } from '../../../constants';
import { styles } from './styles';

export interface IButtonProps {
  title: string;
  width?: number; 
  backgroundColor?: string;
  titleColor?: string;
  isDisabled?: boolean;
  isSelected?: boolean;
  padding?: number;
  onPress?: () => void;
}

function Button(props: IButtonProps) {
  const { title, width, backgroundColor, titleColor, isSelected, isDisabled, padding, onPress } = props;

  const getTitleColor = () => {
    if (titleColor) return titleColor;
    if (isSelected) return Colors.WHITE;
    if (isDisabled) return Colors.GAINSBORO;
    return Colors.PURPLE;
  }

  return (
    <TouchableOpacity
      activeOpacity={0.5}
      disabled={isDisabled}
      onPress={onPress}
      style={[
        styles.button,
        width ? { width } : null,
        padding ? { padding } : null,
        backgroundColor ? { backgroundColor } : null,
        isDisabled && styles.disabledButton,
        isSelected && { backgroundColor: Colors.PURPLE },
      ]}
    >
      <Heading 
        title={title}
        type={5}
        color={getTitleColor()}
      />
    </TouchableOpacity>
  )
}

export default Button;
