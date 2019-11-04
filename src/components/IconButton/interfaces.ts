import { FC } from 'react';
import { ButtonPropsInterface } from '../Button';

export interface IconButtonPropsInterface extends ButtonPropsInterface {
  component: FC;
}
