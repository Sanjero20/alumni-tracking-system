import { ReactNode, MouseEventHandler } from 'react';

type ButtonProps = {
  children: ReactNode;
  type: 'button' | 'submit' | 'reset' | undefined;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  className?: string;
};

function Button({
  children,
  className,
  type = 'button',
  onClick,
}: ButtonProps) {
  return (
    <button
      type={type}
      className={`rounded-3xl bg-primary px-10 py-2 font-bold text-white ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default Button;
