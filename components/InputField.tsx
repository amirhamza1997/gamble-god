'use client';
import React, { ChangeEventHandler } from 'react';

interface InputProps {
  label?: string;
  placeholder?: string;
  name: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
}

const InputField = (props: InputProps) => {
  return (
    <div className='w-full'>
      <label htmlFor='' className='text-[#515152] mx-2 font-semibold'>
        {props.label}
      </label>
      <input
        type='text'
        placeholder={props.placeholder}
        name={props.name}
        value={props.value}
        onChange={props.onChange}
        required={props.required}
        className='border-[1px] border-[#315787] w-full text-[#515152] rounded-md p-3 placeholder:italic focus:outline-none'
      />
    </div>
  );
};

export default InputField;
