'use client';

import { useEffect, useState } from 'react';

export default function Preloader() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Hide preloader after page loads
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  if (!isLoading) return null;

  return (
    <div className="preloader">
      <div className="loader">
        <div className="outer-circle"></div>
        <div className="inner-circle"></div>
        <div className="dot"></div>
      </div>
    </div>
  );
}

