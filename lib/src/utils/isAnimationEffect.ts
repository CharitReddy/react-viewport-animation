import { ANIMATION_KEYFRAMES } from 'src/constants';

export const isAnimationEffect = (value: string) =>
  Object.keys(ANIMATION_KEYFRAMES).includes(value);
