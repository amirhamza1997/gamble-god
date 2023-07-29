import React, { PropsWithChildren } from 'react';

type ReactNodeWithoutObject =
  | React.ReactElement
  | string
  | number
  | boolean
  | null
  | undefined;

interface InputProps {
  children: ReactNodeWithoutObject;
  className?: string
}

const PrimaryButton: React.FC<InputProps> = (props) => {
  return (
    <button className={`rounded-lg bg-[#1D1D1D] text-[#D6AA28] px-8 py-2 w-[100%]  ${props.className}`}>
      {props.children}
    </button>
  );
};

export default PrimaryButton;
