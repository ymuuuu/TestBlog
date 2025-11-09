"use client";

import { useLanguage } from '../contexts/LanguageContext';
import { useEffect, useState } from 'react';

export default function LanguageSwitcher() {
  const { language, toggleLanguage } = useLanguage();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Return null during SSR to avoid hydration mismatch
  if (!mounted) {
    return null;
  }

  return (
    <button
      onClick={toggleLanguage}
      className="language-btn"
      style={{
        background: 'transparent',
        border: 'none',
        cursor: 'pointer',
        padding: '0',
        marginRight: '15px',
      }}
      aria-label="Toggle language"
      title={language === 'en' ? 'Switch to Arabic' : 'Switch to English'}
    >
      <div className="icon">
        <span style={{ fontSize: '16px', fontWeight: 'bold', color: '#ff6600' }}>
          {language === 'en' ? 'ع' : 'EN'}
        </span>
      </div>
    </button>
  );
}

