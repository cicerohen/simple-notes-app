import { FlattenSimpleInterpolation } from 'styled-components';

export type variantType =
  | 'initial'
  | 'primary'
  | 'secondary'
  | 'danger'
  | 'warning'
  | 'success';

export type sizeType = 'small' | 'medium' | 'large';

export type variantMixinType = ({
  color,
  backgroundColor
}: {
  color: string;
  backgroundColor: string;
}) => FlattenSimpleInterpolation;
