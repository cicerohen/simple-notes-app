import { variantType, sizeType } from './types';

export interface ButtonStyledPropsInterface {
  variant?: variantType;
  size?: sizeType;
  disabled?: boolean;
}

export interface ButtonPropsInterface extends ButtonStyledPropsInterface {
  children?: string | JSX.Element;
  className?: string;
}
