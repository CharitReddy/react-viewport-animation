import { useEffect, useMemo, useRef } from 'react';
import { Observer } from 'src/observer';
import {
  AnimationEffect,
  DATA_ANIMATION_DELAY,
  DATA_ANIMATION_DURATION,
  DATA_ANIMATION_EFFECT,
} from 'src/constants';
import 'animate.css';
import 'src/styles/custom.css';

export interface AnimateConfig {
  animationEffect?: AnimationEffect;
  animationDuration?: number;
  animationDelay?: number;
}

export const useAnimate = ({
  animationEffect,
  animationDuration,
  animationDelay,
}: AnimateConfig) => {
  const ref = useRef(null);

  useEffect(() => {
    const element: React.MutableRefObject<null | HTMLElement>['current'] = ref.current;
    const observer = new Observer();
    if (element) {
      if (animationEffect) {
        (element as HTMLElement).setAttribute(DATA_ANIMATION_EFFECT, animationEffect);
      }
      if (animationDuration) {
        (element as HTMLElement).setAttribute(DATA_ANIMATION_DURATION, `${animationDuration}`);
      }
      if (animationDelay) {
        (element as HTMLElement).setAttribute(DATA_ANIMATION_DELAY, `${animationDelay}`);
      }
      observer.observer.observe(element);
    }

    return () => {
      if (element) observer.observer.unobserve(element);
    };
  }, [animationDelay, animationDuration, animationEffect, ref]);

  return useMemo(() => ({ ref }), [ref]);
};
