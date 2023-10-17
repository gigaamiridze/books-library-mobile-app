import React from 'react';
import MaterialIcons from 'react-native-vector-icons/Ionicons';
import { ITabBarIcon } from '../../interfaces';
import { Colors } from '../../constants';

function TabBarIcon(props: ITabBarIcon) {
  const { focused, fillIcon, outlineIcon } = props;

  return (
    <MaterialIcons 
      size={30}
      name={focused ? fillIcon : outlineIcon}
      color={focused ? Colors.PURPLE : Colors.CADET_BLUE}
    />
  )
}

export default TabBarIcon;
