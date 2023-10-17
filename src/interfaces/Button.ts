export interface IButtonProps {
  title: string;
  width?: number; 
  height?: number;
  backgroundColor?: string;
  titleColor?: string;
  isDisabled?: boolean;
  isSelected?: boolean;
  onPress?: () => void;
}
