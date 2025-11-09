'use client';

import { useEffect, useState } from 'react';

export default function Preloader() {
  const [isLoading, setIsLoading] = useState(true);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    
    // Hide preloader after page loads
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  // Don't render anything until mounted to avoid hydration mismatch
  if (!mounted) {
    return (
      <div className="preloader" style={{ display: 'none' }}>
        <div className="loader">
          <div className="outer-circle"></div>
          <div className="inner-circle"></div>
          <div className="dot"></div>
        </div>
      </div>
    );
  }

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

