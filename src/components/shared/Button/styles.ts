import { StyleSheet } from 'react-native';
import { Colors } from '../../../constants';

export const styles = StyleSheet.create({
  button: {
    backgroundColor: 'transparent',
    height: 40,
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: Colors.PURPLE,
    borderRadius: 8,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    columnGap: 10,
  },
  disabledButton: {
    backgroundColor: Colors.WHITE,
    borderColor: Colors.GAINSBORO,
  },
});
