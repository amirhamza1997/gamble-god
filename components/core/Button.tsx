import React from 'react';

type ReactNodeWithoutObject =
  | React.ReactNode
  | string
  | number
  | boolean
  | null
  | undefined;

interface InputProps {
  children: ReactNodeWithoutObject;
  className?: string;
  onClick?: any;
}

const Button: React.FC<InputProps> = ({ children, onClick }) => {
  return (
    <button onClick={onClick} className='relative bg-[#D6AA28] rounded-md p-4 mt-3 text-lg text-dark-pink font-semibold'>
      {children}
    </button>
  );
};

export default Button;
