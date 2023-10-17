import React from 'react';
import { ActivityIndicator, TouchableOpacity } from 'react-native';
import { IButtonProps } from '../../../interfaces';
import { Heading } from '../../../components';
import { Colors } from '../../../constants';
import { styles } from './styles';

function Button(props: IButtonProps) {
  const { title, width, height, backgroundColor, titleColor, isSelected, isDisabled, onPress } = props;

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
        height ? { height } : null,
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
      {isDisabled && <ActivityIndicator size={22} color={Colors.GAINSBORO} />}
    </TouchableOpacity>
  )
}

export default Button;
