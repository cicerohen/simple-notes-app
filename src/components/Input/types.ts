import { FormEvent } from 'react';

export interface InputPropsInterface {
  type?: string;
  placeholder?: string;
  className?: string;
  value?: string | number;
  onChange?: (event: FormEvent<HTMLInputElement>) => void;
}
