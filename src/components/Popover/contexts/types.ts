export type positionType = { x: number; y: number };
export type setPositionType = (position: positionType) => void;

export interface PopoverContextInterface {
  position?: positionType;
  setPosition?: (position: positionType) => void;
}

export interface PopoverProviderInterface {
  children?: any;
}
