import React from 'react';
import { ActivityIndicator } from 'react-native';
import { ILoaderButtonProps } from '../../interfaces';
import { Button } from '../../components';
import { Colors } from '../../constants';

function LoaderButton(props: ILoaderButtonProps) {
  const { title, isDisabled, onPress } = props;
  
  return (
    <Button
      title={title}
      backgroundColor={Colors.PURPLE}
      titleColor={Colors.WHITE}
      isDisabled={isDisabled}
      onPress={onPress}
    >
      {isDisabled && (
        <ActivityIndicator size={16} color={Colors.GAINSBORO} />
      )}
    </Button>
  )
}

export default LoaderButton;
