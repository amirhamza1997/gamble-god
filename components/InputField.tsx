"use client"
import React, {ChangeEventHandler} from 'react'

interface InputProps {
    label?: string,
    placeholder?: string,
    name: string;
    value: string;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    required?: boolean;
    
}


const InputField = ( props: InputProps) => {

  return (
    <div>
        <label htmlFor="" className='text-[#515152]'>{props.label}</label>
        <input 
            type="text" placeholder={props.placeholder}
            name={props.name}
            value={props.value}
            onChange={props.onChange}
            required={props.required}
            className='border-2 border-[#555555] w-full p-1 rounded-md'/>
    </div>
  )
}

export default InputField
