"use client";

import { useEffect, useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';

export default function RTLLoader() {
  const { language, direction } = useLanguage();
  const [mounted, setMounted] = useState(false);

  // Wait for component to mount before manipulating DOM
  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    // Only manipulate DOM after component is mounted (client-side only)
    if (!mounted) return;

    // Update HTML lang attribute for accessibility
    document.documentElement.lang = language;

    // Add or remove 'rtl' class from page-wrapper
    const pageWrapper = document.querySelector('.page-wrapper');
    
    if (pageWrapper) {
      if (direction === 'rtl') {
        pageWrapper.classList.add('rtl');
      } else {
        pageWrapper.classList.remove('rtl');
      }
    }

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
  }, [mounted, language, direction]);

  return null;
}

