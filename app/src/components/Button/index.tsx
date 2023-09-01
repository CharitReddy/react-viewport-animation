import { FC } from 'react';
import { useAnimate } from 'src/hooks';
import './style.css';

export interface ButtonProps {
  onClick: () => void;
}

export const Button: FC<ButtonProps> = ({ onClick }) => {
  const { ref } = useAnimate({
    animationEffect: 'rubberBand',
    animationDuration: 500,
    animationDelay: 1,
  });

  return (
    <button ref={ref} onClick={onClick} className="button">
      Hello
    </button>
  );
};
