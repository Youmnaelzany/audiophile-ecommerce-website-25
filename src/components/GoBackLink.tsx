"use client"
import { useRouter } from 'next/router';

const GoBackLink = () => {
  const router = useRouter();

  const goBack = () => {
    router.back();
  };

  return (
    <button onClick={goBack}>
      Go Back
    </button>
  );
};

export default GoBackLink;
