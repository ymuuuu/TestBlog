"use client";

import { useTheme } from "next-themes";
import { useEffect } from "react";

export function ThemeBodyClass() {
  const { theme } = useTheme();

  useEffect(() => {
    if (typeof document !== "undefined") {
      const body = document.body;
      
      // Remove both light and dark classes
      body.classList.remove("light", "dark");
      
      // Add the current theme class
      if (theme && theme !== "system") {
        body.classList.add(theme);
      }
    }
  }, [theme]);

  return null;
}

