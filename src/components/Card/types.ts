import { FlattenSimpleInterpolation } from 'styled-components';

export type cardActiveMixinType = ({
  borderColor
}: {
  borderColor: string;
}) => FlattenSimpleInterpolation;

export interface CardPropsInterface {
  children?: JSX.Element | Array<JSX.Element>;
  className?: string;
}
