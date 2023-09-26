'use client'
// https://github.com/delbaoliveira/website/blob/main/ui/challenge/TextSlider.tsx
import React from 'react';

import { useInterval } from 'react-use';
import Image from 'next/image';
import classNames from '@lib/classNames';
import avatar from '@public/static/avatar.png';

interface BigTextProps {
  slides: Array<string>;
}

export default function BigText({ slides }: BigTextProps) {
  const [currentSlide, setSlide] = React.useState(0);

  const totalSlides = slides.length;

  useInterval(() => {
    if (totalSlides - 1 === currentSlide) {
      setSlide(0);
    } else {
      setSlide(currentSlide + 1);
    }
  }, 2000);

  return (
    <div className="z-10 flex max-w-2xl  flex-col m-auto items-center text-6xl font-extrabold tracking-tight sm:text-[5rem] md:text-[10rem]">
      <div className="flex flex-col items-center">
        <p className="text-2xl tracking-normal sm:text-3xl">Welcome!</p>
        {slides.map((text, index) => {
          return (
            <span key={text} className="relative block text-center">
              <span
                className={classNames(
                  'absolute transition duration-1000',
                  currentSlide !== index ? 'opacity-100' : 'opacity-0'
                )}
                aria-hidden={true}
              >
                {text}
              </span>

              <span
                className={classNames(
                  'bg-gradient-to-r decoration-clone bg-clip-text text-transparent',
                  index === 0 ? 'from-yellow-400 via-red-500 to-pink-500' : '',
                  index === 1 ? 'from-purple-400 via-pink-500 to-red-500' : '',
                  index === 2 ? 'from-green-400 to-blue-500' : ''
                )}
              >
                {text}
              </span>
            </span>
          );
        })}
        <p className="mt-4 text-2xl tracking-normal sm:text-3xl">
          Digital Craftsman.
        </p>
        <div className="flex content-center">
          <p className="text-tertiary mt-12 text-lg font-medium tracking-normal">
            Hope you enjoy. 🚀
          </p>
          <Image
            alt="Will Vernon"
            height={100}
            width={100}
            src={avatar}
            sizes="100vw"
            priority
            className=" "
          />
        </div>
      </div>
    </div>
  );
}
