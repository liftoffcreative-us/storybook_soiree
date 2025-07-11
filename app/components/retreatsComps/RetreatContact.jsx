'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import { useForm } from 'react-hook-form';

const RetreatContact = () => {
  const [responseMessage, setResponseMessage] = useState(null);
  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    // Handle form submission (e.g., send data to API route)
    console.log(data);
    const res = await fetch('api/retreats', {
      method: 'POST',
      cache: 'no-cache',
      body: JSON.stringify(data),
    });

    const newResponse = await res.json();
    setResponseMessage(newResponse.message);
  };

  return (
    <div className='w-screen flex flex-col items-center'>
      <Image
        src='/pinkBorder.svg'
        width={1920}
        height={200}
        alt='a pink paint stroke border'
        className='-mt-[10vh]'
      />
      <div className='w-screen flex flex-col items-center justify-center bg-ssLavender '>
        <h3 className='md:text-[2.5em] pb-4'>
          Need a Retreat for your Own Group or Book Club?
        </h3>
        <h5 className='md:text-[1.6em]'>
          We're here to help you plan and execute the perfect weekend away!
        </h5>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className='flex flex-col gap-6 w-[40%] items-start justify-center py-12'
        >
          <label className='-mb-2 ml-2 leading-0'>First Name</label>
          <input
            {...register('firstName', { required: '**This field is required' })}
            placeholder='First Name'
            className={
              errors.firstName?.message
                ? 'bg-red-100 border-2 border-red-500 rounded-md py-4 w-full placeholder-red-400 px-4'
                : 'bg-white border-2 border-gray-500 rounded-md py-4 w-full placeholder-gray-400 px-4 text-ssPurple'
            }
          />
          {errors.firstName?.message ? (
            <p className='text-red-200 -my-4'>{errors.firstName?.message}</p>
          ) : null}
          <label className='-mb-2 ml-2 leading-0'>First Name</label>
          <input
            {...register('lastName', { required: '**This field is required' })}
            placeholder='Last Name'
            className={
              errors.lastName?.message
                ? 'bg-red-100 border-2 border-red-500 rounded-md py-4 w-full placeholder-red-400 px-4'
                : 'bg-white border-2 border-gray-500 rounded-md py-4 w-full placeholder-gray-400 px-4 text-ssPurple'
            }
          />
          {errors.lastName?.message ? (
            <p className='text-red-200 -my-4'>{errors.lastName?.message}</p>
          ) : null}

          <label className='-mb-2 ml-2 leading-0'>Email</label>
          <input
            type='email'
            {...register('email', { required: '**A valid email is required' })}
            placeholder='Email Address'
            className={
              errors.lastName?.message
                ? 'bg-red-100 border-2 border-red-500 rounded-md py-4 w-full placeholder-red-400 px-4'
                : 'bg-white border-2 border-gray-500 rounded-md py-4 w-full placeholder-gray-400 px-4 text-ssPurple'
            }
          />
          {errors.email?.message ? (
            <p className='text-red-200 -my-4'>{errors.email?.message}</p>
          ) : null}

          <label className='-mb-2 ml-2 leading-0'>Message</label>
          <textarea
            {...register('message', {
              required:
                '**Make sure you let us know what you are needing information on',
            })}
            placeholder='Your Message'
            className='bg-white border-2 border-gray-500 rounded-md py-4 w-full placeholder-gray-400 px-4 text-ssPurple'
          />
          {errors.message?.message ? (
            <p className='text-red-200 -my-4'>{errors.message?.message}</p>
          ) : null}
          <h6 className='text-green-300 italic leading-0'>{responseMessage}</h6>

          <button
            disabled={
              responseMessage === 'Form Submitted Successfully' ? true : false
            }
            className='bg-purple-800 hover:bg-amber-500 rounded-lg px-12 py-4 disabled:bg-gray-400 disabled:cursor-default cursor-pointer'
            onClick={() => handleSubmit(onSubmit)}
          >
            SUBMIT
          </button>
        </form>
      </div>
      <div className='w-screen h-[20vh]'></div>
    </div>
  );
};

export default RetreatContact;
