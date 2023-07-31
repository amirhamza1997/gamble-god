'use client';
import React, { MouseEventHandler } from 'react';

interface InputProps {
  value: string;
  checked: boolean;
  onChange: (value: string) => void;
}

const Radio: React.FC<InputProps> = (props) => {
  return (
    <button
      className='border-yellow border rounded-full p-1 w-5 h-5'
      onClick={() => props.onChange(props.value)}
    >
      {props.checked && (
        <div className='bg-yellow w-full h-full rounded-full' />
      )}
    </button>
  );
};

export default Radio;
