"use client";

import { useEffect } from 'react';
import { useLanguage } from '../contexts/LanguageContext';

export default function RTLLoader() {
  const { language, direction } = useLanguage();

  useEffect(() => {
    // Update HTML attributes
    document.documentElement.dir = direction;
    document.documentElement.lang = language;

    // Load or remove RTL CSS
    const rtlLinkId = 'rtl-stylesheet';
    let rtlLink = document.getElementById(rtlLinkId) as HTMLLinkElement;

    if (direction === 'rtl') {
      if (!rtlLink) {
        rtlLink = document.createElement('link');
        rtlLink.id = rtlLinkId;
        rtlLink.rel = 'stylesheet';
        rtlLink.href = '/assets/css/rtl.css';
        document.head.appendChild(rtlLink);
      }
    } else {
      if (rtlLink) {
        rtlLink.remove();
      }
    }
  }, [language, direction]);

  return null;
}

