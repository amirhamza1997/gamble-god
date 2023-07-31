import Image from 'next/image';
import React, { ReactNode } from 'react';

interface InputProps {
  title: string;
  selected: boolean;
  points: {
    title: string;
    highlighted1: string;
    secondary: string;
    highlighted2?: string;
    recommented?: boolean;
  }[];
}

const Package: React.FC<InputProps> = ({ title, points, selected }) => {
  return (
    <div
      className={`border-2 rounded-md flex-1 border-${
        selected ? 'yellow' : 'pink'
      }`}
    >
      <h3 className={`text-center p-2 bg-${selected ? 'yellow' : 'pink'}`}>
        {title}
      </h3>
      <div className='flex flex-col gap-3 px-3 py-6'>
        {points.map((point, index) => (
          <Point key={index} {...point} />
        ))}
      </div>
    </div>
  );
};

export default Package;

interface PointProps {
  title?: string;
  highlighted1?: ReactNode;
  highlighted2?: ReactNode;
  secondary?: string;
  recommented?: boolean;
}

const Point = (props: PointProps) => {
  return (
    <div className='flex gap-2  items-start'>
      <Image src='/images/Vector.png' width={35} height={35} alt='' />

      <div className='text-base	flex-1'>
        <span>{props.title}</span>
        <br />
        {props.highlighted1 && (
          <span className='bg-[#D6AA28] rounded-sm px-2'>
            {props.highlighted1}
          </span>
        )}
        <br />
        {props.recommented && <span>**RECOMMENDED**</span>}
        <br />
        <br />
        {props.highlighted2 && (
          <span className='bg-[#D6AA28] rounded-sm px-2'>
            {props.highlighted2}
          </span>
        )}
        <p className='text-sm mt-2'>{props.secondary}</p>
      </div>
    </div>
  );
};
