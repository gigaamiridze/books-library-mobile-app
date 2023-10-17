import { StyleSheet } from 'react-native';
import { Colors } from '../../../constants';
import { verticalScale, horizontalScale } from '../../../styles';

export const styles = StyleSheet.create({
  button: {
    backgroundColor: 'transparent',
    height: verticalScale(40),
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: Colors.PURPLE,
    borderRadius: horizontalScale(8),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    columnGap: horizontalScale(10),
  },
  disabledButton: {
    backgroundColor: Colors.WHITE,
    borderColor: Colors.GAINSBORO,
  },
});
