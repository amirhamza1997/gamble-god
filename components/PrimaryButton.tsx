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
}

const PrimaryButton: React.FC<InputProps> = (props) => {
  return (
    <button className='rounded-lg bg-[#1D1D1D] px-8 py-2 text-[#D6AA28]'>
      {props.children}
    </button>
  );
};

export default PrimaryButton;
