import { buttonVariantType, sizeType } from './types';

export interface ButtonStyledPropsInterface {
  variant?: buttonVariantType;
  size?: sizeType;
  disabled?: boolean;
}

export interface ButtonPropsInterface extends ButtonStyledPropsInterface {
  children?: string | JSX.Element;
  className?: string;
}
