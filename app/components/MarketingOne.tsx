"use client";

import { useEffect } from "react";

export default function MarketingOne() {
  useEffect(() => {
    // Wait for jQuery and marquee plugin to load
    const initMarquee = () => {
      if (typeof window !== "undefined" && (window as any).$ && (window as any).$.fn.marquee) {
        const $ = (window as any).$;
        
        if ($(".animation_mode").length && !$(".animation_mode").data("marquee-initialized")) {
          $(".animation_mode").marquee({
            speed: 50,
            gap: 20,
            delayBeforeStart: 0,
            direction: "left",
            duplicated: true,
          });
          $(".animation_mode").data("marquee-initialized", true);
        }

        if ($(".animation_mode-two").length && !$(".animation_mode-two").data("marquee-initialized")) {
          $(".animation_mode-two").marquee({
            speed: 50,
            gap: 20,
            delayBeforeStart: 0,
            direction: "right",
            duplicated: true,
          });
          $(".animation_mode-two").data("marquee-initialized", true);
        }
      }
    };

    // Try initializing immediately
    initMarquee();

    // Also try after a delay to ensure scripts are loaded
    const timer = setTimeout(initMarquee, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="marketing-one">
      <div className="outer-container">
        <div className="animation_mode">
          <h1>High-Quality Craftsmanship</h1>
          <span className="marketing-one_icon">
            <img src="/assets/images/icons/star.png" alt="" />
          </span>
          <h1 className="light">Home Construction</h1>
          <span className="marketing-one_icon">
            <img src="/assets/images/icons/star.png" alt="" />
          </span>
          <h1>Building Construction</h1>
          <span className="marketing-one_icon">
            <img src="/assets/images/icons/star.png" alt="" />
          </span>
        </div>
        <div className="animation_mode-two">
          <h1>Architecture & Building</h1>
          <span className="marketing-one_icon">
            <img src="/assets/images/icons/star-1.png" alt="" />
          </span>
          <h1 className="light">Material Recycling</h1>
          <span className="marketing-one_icon">
            <img src="/assets/images/icons/star-1.png" alt="" />
          </span>
          <h1>Tools and Equipment</h1>
          <span className="marketing-one_icon">
            <img src="/assets/images/icons/star-1.png" alt="" />
          </span>
          <h1>Building Construction</h1>
        </div>
      </div>
    </section>
  );
}

