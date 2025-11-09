"use client";

import * as React from "react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export function ModeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // useEffect only runs on the client, so now we can safely show the UI
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="theme-btn">
        <div className="icon">
          <span className="fa fa-sun"></span>
        </div>
      </div>
    );
  }

  const isDark = theme === "dark";

  return (
    <button
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="theme-btn"
      style={{
        background: "transparent",
        border: "none",
        cursor: "pointer",
        padding: "0",
      }}
      aria-label="Toggle theme"
      title={isDark ? "Switch to Light Mode" : "Switch to Dark Mode"}
    >
      <div className="icon">
        {isDark ? (
          <span className="fa fa-sun" style={{ color: "#ff6600", fontSize: "20px" }}></span>
        ) : (
          <span className="fa fa-moon" style={{ color: "#ff6600", fontSize: "20px" }}></span>
        )}
      </div>
    </button>
  );
}

