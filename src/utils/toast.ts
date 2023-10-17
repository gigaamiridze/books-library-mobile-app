import Toast from 'react-native-toast-message';

type ToastType = 'info' | 'success' | 'error'; 

export const showToast = (type: ToastType, text1: string, text2: string) => {
  Toast.show({ type, text1, text2 });
}
