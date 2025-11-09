'use client';

import { useEffect, useState } from 'react';

export default function Cursor() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <>
      <div className="cursor"></div>
      <div className="cursor-follower"></div>
    </>
  );
}

