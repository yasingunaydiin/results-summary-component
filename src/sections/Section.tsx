'use client';

import React from 'react';
import Image from 'next/image';
import ReactionImage from '@/assets/icon-reaction.png';
import MemoryImage from '@/assets/icon-memory.png';
import VerbalImage from '@/assets/icon-verbal.png';
import VisualImage from '@/assets/icon-visual.png';

const summaryArray = [
  {
    image: ReactionImage.src,
    title: 'Reaction',
    outOf: '80',
    hundred: '/ 100',
    bgColor: 'bg-custom-light-red',
    txtColor: 'text-custom-light-red-text',
  },
  {
    image: MemoryImage.src,
    title: 'Memory',
    outOf: '92',
    hundred: '/ 100',
    bgColor: 'bg-custom-orangey-yellow',
    txtColor: 'text-custom-orangey-yellow-text',
  },
  {
    image: VerbalImage.src,
    title: 'Verbal',
    outOf: '61',
    hundred: '/ 100',
    bgColor: 'bg-custom-green-teal',
    txtColor: 'text-custom-green-teal-text',
  },
  {
    image: VisualImage.src,
    title: 'Visual',
    outOf: '72',
    hundred: '/ 100',
    bgColor: 'bg-custom-cobalt-blue',
    txtColor: 'text-custom-cobalt-blue-text',
  },
];

export const Section = () => {
  return (
    <div className="lg:flex lg:justify-center lg:items-center lg:mt-[150px] lg:p-5">
      {/* Left Side Result Card */}
      <div className="sm:rounded-b-[30px] lg:rounded-[30px] text-white flex flex-col items-center min-h-[400px] lg:min-h-[550px] lg:w-[350px] lg:py-8 lg:px-6 bg-gradient-to-b from-custom-light-slate-blue to-custom-light-royal-blue">
        <div className="text-center sm:mt-[50px]">
          <h1 className="text-2xl font-bold mb-4 text-gray-300">Your Result</h1>
          <div className="flex flex-col items-center justify-center mx-auto rounded-full h-[150px] w-[150px] bg-gradient-to-b from-custom-light-slate-blue to-custom-light-royal-blue">
            <h1 className="text-6xl font-semibold">76</h1>
            <p className="text-lg text-gray-400">of 100</p>
          </div>
          <h1 className="text-3xl mt-4 font-medium">Great</h1>
          <p className="mt-3 sm:w-[300px] lg:w-[230px] text-gray-300">
            You scored higher than 65% of the people who have taken these tests.
          </p>
        </div>
      </div>

      {/* Right Side Summary */}
      <div className="lg:w-[350px] bg-white lg:rounded-3xl lg:shadow-2xl">
        <div className="p-5">
          <h1 className="text-2xl font-bold text-gray-600">Summary</h1>
        </div>
        <div className="p-4">
          {summaryArray.map((item, index) => (
            <div
              key={index}
              className={`${item.bgColor} h-[70px] w-full mb-5 rounded-xl flex items-center justify-between p-4`}
            >
              <div className="flex items-center">
                <Image
                  src={item.image}
                  alt={`${item.title} Icon`}
                  width={25}
                  height={25}
                />
                <h1 className={`${item.txtColor} ml-4 text-lg font-semibold`}>
                  {item.title}
                </h1>
              </div>
              <div className="flex items-center">
                <p className="text-lg font-bold">{item.outOf}</p>
                <p className="ml-1 text-lg font-bold text-gray-300">
                  {item.hundred}
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-center pb-5">
          <button className="text-white font-bold bg-custom-dark-gray-blue rounded-full h-[60px] w-[300px]">
            Continue
          </button>
        </div>
      </div>
    </div>
  );
};
