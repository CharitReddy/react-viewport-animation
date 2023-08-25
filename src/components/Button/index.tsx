import { FC } from 'react';
import './style.css';

export interface ButtonProps {
  onClick: () => void;
}

export const Button: FC<ButtonProps> = ({ onClick }) => {
  return (
    <button onClick={onClick} className="button">
      Hello
    </button>
  );
};
