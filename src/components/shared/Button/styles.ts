import { StyleSheet } from 'react-native';
import { Colors } from '../../../constants';

export const styles = StyleSheet.create({
  button: {
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: Colors.PURPLE,
    borderRadius: 8,
    padding: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
  disabledButton: {
    backgroundColor: Colors.WHITE,
    borderColor: Colors.GAINSBORO,
  },
});
