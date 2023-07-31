import React from 'react';

interface InputProps {
  title: string;
  subTitle: string;
  description: string[];
}

const DetailSection: React.FC<InputProps> = (props) => {
  return (
    <div className='flex-1'>
      <h3 className='text-[#D6AA28] pb-1'>{props.subTitle}</h3>
      <h1 className='font-bold text-4xl text-white'>{props.title}</h1>
      <p className='text-white'>
        <br />
        {props.description.map((str, index) => (
          <span key={index}>
            {str}
            <br />
            <br />
          </span>
        ))}
      </p>
    </div>
  );
};

export default DetailSection;
