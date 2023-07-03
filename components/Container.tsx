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
}

const Container: React.FC<InputProps> = (props) => {
  return (
    <div className={`max-w-[1100px] mx-auto ${props.className}`}>
      {props.children}
    </div>
  );
};

export default Container;
