import { CLASSNAME, DATA_ANIMATION_EFFECT, AnimationEffect } from 'src/constants';
import { generateAnimateClassName, isAnimationEffect } from 'src/utils';

export class Observer {
  observer: IntersectionObserver;
  constructor() {
    this.observer = new IntersectionObserver((entries) => {
      entries.forEach((eachEntry) => {
        const { target } = eachEntry;
        const animationEffect = target.getAttribute(DATA_ANIMATION_EFFECT);
        let className = '';
        if (animationEffect && isAnimationEffect(animationEffect)) {
          className = generateAnimateClassName(animationEffect as AnimationEffect);
        }
        if (eachEntry.isIntersecting) {
          if (target.classList.contains(className)) {
            target.classList.remove(CLASSNAME);
            target.classList.remove(className);
          } else {
            target.classList.add(CLASSNAME);
            target.classList.add(className);
          }
        } else if (target.classList.contains(className)) {
          target.classList.remove(CLASSNAME);
          target.classList.remove(className);
        }
      });
    });
  }
}
