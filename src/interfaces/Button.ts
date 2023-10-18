import { ReactNode } from 'react';

export interface IButtonProps {
  title?: string;
  backgroundColor?: string;
  titleColor?: string;
  isDisabled?: boolean;
  isSelected?: boolean;
  padding?: number;
  children?: ReactNode;
  onPress?: () => void;
}
