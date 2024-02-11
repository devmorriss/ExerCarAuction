'use client';

import { useParamsStore } from '@/hooks/useParamsStore';
import React from 'react';
import { AiOutlineCar } from 'react-icons/ai';

export default function Logo() {
  const reset = useParamsStore((state) => state.reset);

  return (
    <div
      onClick={reset}
      className='cursor-pointer flex items-center gap-2 text-3xl font-semibold text-red-600'
    >
      <AiOutlineCar size={35} />
      <div>Car Auction</div>
    </div>
  );
}
