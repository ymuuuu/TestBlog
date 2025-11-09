import type { Metadata } from "next";
import { Raleway, Lexend_Deca, Manrope } from "next/font/google";
import "./globals.css";
import Script from "next/script";
import Preloader from "./components/Preloader";
import Cursor from "./components/Cursor";
import ProgressWrap from "./components/ProgressWrap";
import { ThemeProvider } from "./components/ThemeProvider";
import { ThemeBodyClass } from "./components/ThemeBodyClass";

const raleway = Raleway({
  variable: "--font-raleway",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
});

const lexendDeca = Lexend_Deca({
  variable: "--font-lexend-deca",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Constrc Construction Business",
  description: "Leading Global Builder and Developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Stylesheets */}
        <link href="/assets/css/bootstrap.css" rel="stylesheet" />
        <link href="/assets/css/style.css" rel="stylesheet" />
        <link href="/assets/css/meanmenu.min.css" rel="stylesheet" />
        <link href="/assets/css/responsive.css" rel="stylesheet" />
        <link href="/assets/css/color-switcher-design.css" rel="stylesheet" />
        <link id="theme-color-file" href="/assets/css/color-themes/default-color.css" rel="stylesheet" />
        <link href="/assets/css/dark-body.css" rel="stylesheet" />
        <link rel="icon" href="/assets/images/favicon.png" type="image/x-icon" />
      </head>
      <body className={`${raleway.variable} ${lexendDeca.variable} ${manrope.variable}`} suppressHydrationWarning>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={false}
          disableTransitionOnChange
        >
          <ThemeBodyClass />
          <Cursor />
          <Preloader />
          
          <div className="page-wrapper">
            {children}
          </div>
          
          <ProgressWrap />

          {/* Scripts */}
          <Script src="/assets/js/jquery.js" strategy="beforeInteractive" />
          <Script src="/assets/js/popper.min.js" strategy="beforeInteractive" />
          <Script src="/assets/js/bootstrap.min.js" strategy="afterInteractive" />
          <Script src="/assets/js/appear.js" strategy="afterInteractive" />
          <Script src="/assets/js/parallax.min.js" strategy="afterInteractive" />
          <Script src="/assets/js/tilt.jquery.min.js" strategy="afterInteractive" />
          <Script src="/assets/js/jquery.paroller.min.js" strategy="afterInteractive" />
          <Script src="/assets/js/wow.js" strategy="afterInteractive" />
          <Script src="/assets/js/swiper.min.js" strategy="afterInteractive" />
          <Script src="/assets/js/backtotop.js" strategy="afterInteractive" />
          <Script src="/assets/js/odometer.js" strategy="afterInteractive" />
          <Script src="/assets/js/parallax-scroll.js" strategy="afterInteractive" />
          <Script src="/assets/js/gsap.min.js" strategy="afterInteractive" />
          <Script src="/assets/js/SplitText.min.js" strategy="afterInteractive" />
          <Script src="/assets/js/ScrollTrigger.min.js" strategy="afterInteractive" />
          <Script src="/assets/js/ScrollToPlugin.min.js" strategy="afterInteractive" />
          <Script src="/assets/js/ScrollSmoother.min.js" strategy="afterInteractive" />
          <Script src="/assets/js/jquery.marquee.min.js" strategy="afterInteractive" />
          <Script src="/assets/js/validate.js" strategy="afterInteractive" />
          <Script src="/assets/js/typeit.js" strategy="afterInteractive" />
          <Script src="/assets/js/magnific-popup.min.js" strategy="afterInteractive" />
          <Script src="/assets/js/nav-tool.js" strategy="afterInteractive" />
          <Script src="/assets/js/jquery-ui.js" strategy="afterInteractive" />
          <Script src="/assets/js/element-in-view.js" strategy="afterInteractive" />
          <Script src="/assets/js/color-settings.js" strategy="afterInteractive" />
          <Script src="/assets/js/script.js" strategy="afterInteractive" />
        </ThemeProvider>
      </body>
    </html>
  );
}
