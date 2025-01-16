// src/components/GoBackLink.tsx
"use client";
import { useRouter } from 'next/router';

const GoBackLink = () => {
  const router = useRouter( );

  const goBack = () => {
    router.back();
  };

  return (
    <button onClick={goBack} className="text-black/50 text-[0.9375rem] leading-[1.5625rem] font-normal underline">
      Go Back
    </button>
  );
};

export default GoBackLink;
