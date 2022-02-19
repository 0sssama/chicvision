import { MouseEventHandler } from "react";

type Props = {
  children?: JSX.Element | JSX.Element[] | string | string[];
  onClick?: MouseEventHandler<HTMLButtonElement>;
  className?: string;
  type: string;
};

function Button({ children, type, onClick, className }: Props) {
  return (
    <button onClick={onClick} className={`cv-button ${type} ${className}`}>
      {children}
    </button>
  );
}

export default Button;
