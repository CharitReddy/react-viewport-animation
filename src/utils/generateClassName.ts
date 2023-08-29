import { AnimationEffect } from 'src/constants';

export const generateAnimateClassName = (animationEffect: AnimationEffect) =>
  `animate__${animationEffect}`;
