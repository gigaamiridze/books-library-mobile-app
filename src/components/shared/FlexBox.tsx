import React from 'react';
import { View } from 'react-native';
import { IFlexBoxProps } from '../../interfaces';

function FlexBox(props: IFlexBoxProps) {
  const { flexDirection, alignItems, justifyContent, flexWrap, gap, rowGap, columnGap, children } = props;

  return (
    <View style={[
      flexDirection && { flexDirection },
      alignItems && { alignItems },
      justifyContent && { justifyContent },
      flexWrap && { flexWrap },
      gap ? { gap } : null,
      rowGap ? { rowGap } : null,
      columnGap ? { columnGap } : null,
    ]}>
      {children}
    </View>
  )
}

export default FlexBox;
