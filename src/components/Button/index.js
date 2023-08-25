import { jsx as _jsx } from "react/jsx-runtime";
import './style.css';
export const Button = ({ onClick }) => {
    return (_jsx("button", { onClick: onClick, className: "button", children: "Hello" }));
};
