import { FlattenSimpleInterpolation } from 'styled-components';

export type buttonVariantType =
  | 'initial'
  | 'primary'
  | 'secondary'
  | 'danger'
  | 'warning'
  | 'success';

export type sizeType = 'small' | 'medium' | 'large';

export type buttonVariantMixinType = ({
  color,
  backgroundColor
}: {
  color: string;
  backgroundColor: string;
}) => FlattenSimpleInterpolation;

export interface ButtonStyledPropsInterface {
  variant?: buttonVariantType;
  size?: sizeType;
  disabled?: boolean;
}

export interface ButtonPropsInterface extends ButtonStyledPropsInterface {
  children?: string | JSX.Element;
  className?: string;
  onClick?: () => void;
}
