'use client';
import React from 'react';
import Radio from './core/Radio';

interface InputProps {
  title: string;
  subTitle: string;
  description: string;
  onChange: (value: string) => void;
  selected: boolean;
  value: string;
}

const PriceStack: React.FC<InputProps> = (props) => {
  return (
    <div
      className={`border-2 bg-dark-pink z-[1] ${
        props.selected ? 'border-yellow' : 'border-pink'
      } rounded-md p-3 text-white flex gap-2 items-baseline cursor-pointer`}
      onClick={() => props.onChange(props.value)}
    >
      <Radio
        value={props.value}
        checked={props.selected}
        onChange={(value: string) => props.onChange(value)}
      />
      <div className='flex-1'>
        <div className='flex justify-between'>
          <h3 className='text-xl pb-2'>{props.title}</h3>
          <span className={props.selected ? 'text-yellow' : 'text-white'}>
            {props.subTitle}
          </span>
        </div>
        <p className='text-sm'>{props.description}</p>
      </div>
    </div>
  );
};

export default PriceStack;
