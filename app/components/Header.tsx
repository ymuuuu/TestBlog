'use client';

import Link from 'next/link';
import Image from 'next/image';
import { ModeToggle } from './ModeToggle';

export default function Header() {
  return (
    <>
      {/* Main Header / Header Style Three */}
      <header className="main-header header-style-three">
        {/* Header Lower */}
        <div className="header-lower">
          <div className="auto-container">
            <div className="inner-container">
              <div className="d-flex justify-content-between align-items-center">
                
                <div className="logo-box d-flex align-items-center flex-wrap">
                  <div className="logo">
                    <Link href="/">
                      <img src="/assets/images/logo-2.svg" alt="Constrc" title="Constrc" />
                    </Link>
                  </div>
                  {/* Social Box */}
                  <div className="social-box">
                    <a href="https://facebook.com/" target="_blank" rel="noopener noreferrer">
                      <i className="fa-brands fa-facebook-f"></i>
                    </a>
                    <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
                      <i className="fa-brands fa-twitter"></i>
                    </a>
                    <a href="https://youtube.com/" target="_blank" rel="noopener noreferrer">
                      <i className="fa-brands fa-youtube"></i>
                    </a>
                    <a href="https://instagram.com/" target="_blank" rel="noopener noreferrer">
                      <i className="fa-brands fa-instagram"></i>
                    </a>
                  </div>
                </div>
                
                <div className="nav-outer d-flex flex-wrap">
                  {/* Main Menu */}
                  <nav className="main-menu navbar-expand-md">
                    <div className="navbar-header">
                      {/* Toggle Button */}
                      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                      </button>
                    </div>
                    
                    <div className="navbar-collapse show clearfix" id="navbarSupportedContent">
                      <ul className="navigation clearfix">
                        <li className="current">
                          <Link href="/">Home</Link>
                        </li>
                        <li className="dropdown">
                          <a href="#">About</a>
                          <ul>
                            <li><Link href="/about">About us</Link></li>
                            <li><Link href="/faq">Faq</Link></li>
                            <li><Link href="/testimonial">Testimonial</Link></li>
                            <li><Link href="/privacy">Privacy Policy</Link></li>
                            <li><Link href="/terms">Terms & Condition</Link></li>
                          </ul>
                        </li>
                        <li className="dropdown">
                          <a href="#">Services</a>
                          <ul>
                            <li><Link href="/services">services</Link></li>
                            <li><Link href="/services-2">services 02</Link></li>
                            <li><Link href="/service-detail">services detail</Link></li>
                          </ul>
                        </li>
                        <li className="dropdown">
                          <a href="#">project</a>
                          <ul>
                            <li><Link href="/projects">project</Link></li>
                            <li><Link href="/project-detail">project detail</Link></li>
                          </ul>
                        </li>
                        <li className="dropdown">
                          <a href="#">Contact</a>
                          <ul>
                            <li><Link href="/contact">Contact</Link></li>
                          </ul>
                        </li>
                      </ul>
                    </div>
                  </nav>
                  
                  {/* Main Menu End */}
                  <div className="outer-box d-flex align-items-center flex-wrap">
                    {/* Dark Mode Toggle */}
                    <div style={{ marginRight: '15px' }}>
                      <ModeToggle />
                    </div>
                    
                    {/* Search Btn */}
                    <div className="search-box-btn search-box-outer">
                      <span className="icon fa fa-search"></span>
                    </div>
                    
                    {/* Button Box */}
                    <div className="main-header_button">
                      <Link href="/about" className="theme-btn btn-style-three">
                        <span className="btn-wrap">
                          <span className="text-one">
                            GET A QUOTE <i><img src="/assets/images/icons/arrow-1.svg" alt="" /></i>
                          </span>
                          <span className="text-two">
                            GET A QUOTE <i><img src="/assets/images/icons/arrow-1.svg" alt="" /></i>
                          </span>
                        </span>
                      </Link>
                    </div>
                    
                    {/* About Widget */}
                    <span className="about-widget">
                      <span className="hamburger">
                        <span className="top-bun"></span>
                        <span className="meat"></span>
                        <span className="bottom-bun"></span>
                      </span>
                    </span>
                    
                    {/* Mobile Navigation Toggler */}
                    <div className="mobile-nav-toggler">
                      <span className="icon fa-classic fa-solid fa-bars fa-fw"></span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* End Header Lower */}
        
        {/* Mobile Menu */}
        <div className="mobile-menu">
          <div className="menu-backdrop"></div>
          <div className="close-btn">
            <span className="icon fa-xmark"></span>
          </div>
          
          <nav className="menu-box">
            <div className="nav-logo">
              <Link href="/">
                <img src="/assets/images/mobile-logo.svg" alt="" title="" />
              </Link>
            </div>
            <div className="menu-outer">
              {/* Here Menu Will Come Automatically Via Javascript / Same Menu as in Header */}
            </div>
          </nav>
        </div>
        {/* End Mobile Menu */}
      </header>
      {/* End Main Header */}
      
      {/* About Sidebar */}
      <div className="about-sidebar">
        <div className="gradient-layer"></div>
        {/* Close Button */}
        <div className="close-sidebar-widget close-button">
          <span className="fa-solid fa-xmark fa-fw"></span>
        </div>
        <div className="sidebar-inner">
          <div className="upper-box">
            <div className="image">
              <img src="/assets/images/resource/about-1.jpg" alt="" />
            </div>
            <div className="content-box">
              <h3>About <span>Constrc</span></h3>
              <div className="text">
                our clients, oue employees, and our community through our commitmrnt to leadership, excellence in craft, and attention to detail.
              </div>
              <ul className="about-sidebar_list">
                <li>Testimonials</li>
                <li>Outsourcing</li>
                <li>Privacy Policy</li>
                <li>HR Training</li>
                <li>Careers</li>
              </ul>
            </div>
          </div>
          {/* Social Box */}
          <div className="social-box">
            <a href="https://facebook.com/" target="_blank" rel="noopener noreferrer">
              <i className="fa-brands fa-facebook-f"></i>
            </a>
            <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
              <i className="fa-brands fa-twitter"></i>
            </a>
            <a href="https://youtube.com/" target="_blank" rel="noopener noreferrer">
              <i className="fa-brands fa-youtube"></i>
            </a>
            <a href="https://instagram.com/" target="_blank" rel="noopener noreferrer">
              <i className="fa-brands fa-instagram"></i>
            </a>
          </div>
        </div>
      </div>
      {/* End About Sidebar */}

      {/* Search Popup */}
      <div className="search-popup">
        <div className="color-layer"></div>
        <button className="close-search">
          <span className="fa-xmark"></span>
        </button>
        <form method="post" action="/search">
          <div className="form-group">
            <input type="search" name="search-field" placeholder="Search Here" required />
            <button className="fa fa-solid fa-magnifying-glass fa-fw" type="submit"></button>
          </div>
        </form>
      </div>
      {/* End Search Popup */}

      {/* Color Palate / Color Switcher */}
      <div className="color-palate">
        <div className="color-trigger">
          <i className="fa fa-solid fa-gear fa-fw"></i>
        </div>
        <div className="color-palate-inner">
          <div className="color-palate-head">
            <h6>Choose Options</h6>
          </div>
          
          {/* Colors */}
          <div className="various-color clearfix">
            <div className="colors-list">
              <span className="palate default-color active" data-theme-file="/assets/css/color-themes/default-color.css"></span>
              <span className="palate blue-color" data-theme-file="/assets/css/color-themes/blue-color.css"></span>
              <span className="palate olive-color" data-theme-file="/assets/css/color-themes/olive-color.css"></span>
              <span className="palate orange-color" data-theme-file="/assets/css/color-themes/orange-color.css"></span>
              <span className="palate purple-color" data-theme-file="/assets/css/color-themes/purple-color.css"></span>
              <span className="palate green-color" data-theme-file="/assets/css/color-themes/green-color.css"></span>
              <span className="palate brown-color" data-theme-file="/assets/css/color-themes/brown-color.css"></span>
              <span className="palate yellow-color" data-theme-file="/assets/css/color-themes/yellow-color.css"></span>
            </div>
          </div>
                
          <h6>RTL Version</h6>
          <ul className="rtl-version option-box">
            <li className="rtl">RTL Version</li>
            <li>LTR Version</li>
          </ul>
          <h6>Want Sticky Header</h6>
          <ul className="header-version option-box">
            <li className="box">No</li>
            <li>Yes</li>
          </ul>
          <h6>Dark Verion</h6>
          <ul className="dark-version option-box">
            <li className="box">Yes</li>
            <li>No</li>
          </ul>
          
          <div className="purchase-box">
            You will find much more options for colors and styling in admin panel. This color picker is used only for demonstation purposes.
          </div>
        </div>
      </div>
      {/* End Color Palate / Color Switcher */}
    </>
  );
}

