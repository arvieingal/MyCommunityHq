"use client"
import React, { useState } from 'react';
import Image from 'next/image';

const Landing = () => {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div className="bg-gradient-to-t from-white to-blue-400 h-screen flex flex-col relative">
      <div className='w-32 h-4'>
        <img src="/option_2.png" alt="logo" />
      </div>
      <div className="flex">
        <div className="pl-40">
          <div className="font-Kaushan_Script italic text-4xl text-[#1B0EB4] font-semibold mb-2 pt-[15rem]">
            <p className='pl-20 text-[6rem]'>Welcome to</p>
          </div>
          <div className="font-Kaushan_Script italic text-4xl text-[#1B0EB4] font-semibold mb-4">
            <p className='pl-10 text-[6rem] pt-14'> MyCommunityHQ</p>
          </div>
          <div className="font-Poppins text-[#1B0EB4] font-light tracking-widest">
            <p className='text-[1.6rem] pt-8 '> Unleash Your Potential, Let's Transform the Community</p>
          </div>
        </div>
        <div className="pl-40 ">
          <img src="/img1_landing.png" alt="image" className="w-[90rem] h-[50rem]" />
        </div>
        <div className='flex pr-20'>
          <button className='bg-white w-[9rem] h-10 rounded-full pr-20' onClick={openModal}>Sign Up</button>
        </div>
        <div className='absolute pl-[110rem]'>
          <button className='bg-[#854df4] h-10 w-[6rem] rounded-full text-white' onClick={openModal}>Login</button>
        </div>
      </div>
      {showModal && (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-8">
            <h2 className="text-2xl font-bold mb-4">Log in to your Account</h2>
            <p>Welcome back! Select method to log in</p>
            <div className='flex space-x-4 pt-12'>
              <div>
                <button className='border w-40 h-14 rounded-full'>Google</button>
              </div>
              <div>
                <button className='border w-40 h-14 rounded-full'>Facebook</button>
              </div>
            </div>
            <div className="flex items-center space-x-120 pt-6">
              <div className="border-t flex-grow w-[1rem]"></div>
              <div className="px-4 font-bold">or</div>
              <div className="border-t flex-grow  w-[1rem]"></div>
            </div>
            <div className="w-full max-w-xs">
              <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                <div className="mb-4">
                  <label className="block text-gray-300 text-normal font-Poppins mb-2" htmlFor="username">
                    Email or Username
                  </label>
                  <input className="shadow appearance-none border rounded-full border-indigo-900 w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Last Name, First Name" />
                </div>
                <div className="mb-6">
                  <label className="block text-gray-300 text-normal font-Poppins mb-2" htmlFor="password">
                    Password
                  </label>
                  <input className="shadow appearance-none border border-indigo-900  rounded-full w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="Enter Password" />
                </div>
                <div>
                <div className="flex items-center">
    
<div className="flex items-center">
    <input id="link-checkbox" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
    </input>
    <label htmlFor="link-checkbox" className="ms-2 text-sm text-gray-900 dark:text-gray-300">Remember me</label>
    <button className=' dark:text-gray-300 text-sm pl-4'>Forgot Password?</button>
</div>
</div>
                </div>
                <div className='flex items-center justify-center pt-8 '>
                  <button className='bg-[#854df4] h-8 w-80 text-white rounded-full'>Log in</button>
                </div>
                <button className="bg-[#854df4] text-white rounded-full px-4 py-2 mt-4" onClick={closeModal}>Back</button>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Landing;
