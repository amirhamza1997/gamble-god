import React, { ReactNode, useState } from 'react';
import { useRouter } from 'next/navigation';
import InputField from './InputField';
import Link from 'next/link';
import { useLogin } from '@/hooks/auth';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
  // if (!isOpen) return null;

  const router = useRouter();

  const { mutate: login, isLoading } = useLogin();

  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const handleChange = (event: { target: { name: string; value: string } }) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(formData);

    login(formData);
  };

  const redirectToSignUp = () => {
    router.push('/signup');
    onClose();
  };

  return (
    <div
      className={`fixed inset-0 flex items-center justify-center z-50 ${
        isOpen ? 'block' : 'none'
      }`}
    >
      <div
        className='fixed inset-0 bg-black opacity-50 transition-opacity'
        onClick={onClose}
      />
      <form
        onSubmit={handleSubmit}
        className='bg-white p-4 rounded shadow-lg z-10'
      >
        {children}
        <div className='flex flex-col gap-3'>
          <InputField
            label='Email'
            value={formData.email}
            name='email'
            onChange={handleChange}
            placeholder='Enter Your Email'
          />
          <InputField
            label='Passsword'
            value={formData.password}
            name='password'
            onChange={handleChange}
            placeholder='Enter Your Password'
          />
        </div>
        <div className='flex gap-5 justify-end'>
          <button
            className='mt-4 px-4 py-2 bg-blue-500 text-fadeBlack bg-[#D6AA28] rounded hover:bg-blue-600'
            type='submit'
          >
            Login
          </button>
          <button
            className='mt-4 px-4 py-2 bg-blue-500 text-fadeBlack bg-[#D6AA28] rounded hover:bg-blue-600'
            onClick={redirectToSignUp}
          >
            Sign Up
          </button>
        </div>
      </form>
    </div>
  );
};

export default Modal;
