'use client';

import Header from './components/Header';
import Footer from './components/Footer';
import Link from 'next/link';

export default function NotFound() {
  return (
    <>
      <Header />

      {/* Page Title */}
      <section className="page-title" style={{ backgroundImage: 'url(/assets/images/background/6.jpg)' }}>
        <div className="auto-container">
          <h2>Error 404</h2>
          <div className="d-flex justify-content-between align-items-center flex-wrap">
            <ul className="bread-crumb clearfix">
              <li><Link href="/">Home</Link></li>
              <li>404</li>
            </ul>
            <div className="page-title_text">
              Whether you&apos;re building, remodeling, buying, or selling, we bring seamless project execution under one roof.
            </div>
          </div>
        </div>
      </section>
      {/* End Page Title */}

      {/* Error One */}
      <section className="error-one">
        <div className="auto-container">
          <div className="error-one_image">
            <img src="/assets/images/icons/error.png" alt="" />
          </div>
          <div className="error-one_content">
            <h2>Oops! Page Not found.</h2>
            <div className="error-one_text">Sorry, we could not find the page you are looking for</div>
            <div className="error-one_button">
              <Link href="/" className="theme-btn btn-style-three">
                <span className="btn-wrap">
                  <span className="text-one">
                    Back To Home Page <i><img src="/assets/images/icons/arrow-1.svg" alt="" /></i>
                  </span>
                  <span className="text-two">
                    Back To Home Page <i><img src="/assets/images/icons/arrow-1.svg" alt="" /></i>
                  </span>
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section>
      {/* End Error One */}

      {/* Clients Box One */}
      <div className="clients-box_one style-two">
        <div className="clients-one_slider swiper-container">
          <div className="swiper-wrapper">
            <div className="swiper-slide">
              <div className="client-image">
                <a href="#"><img src="/assets/images/clients/1.png" alt="" /></a>
              </div>
            </div>

            <div className="swiper-slide">
              <div className="client-image">
                <a href="#"><img src="/assets/images/clients/2.png" alt="" /></a>
              </div>
            </div>

            <div className="swiper-slide">
              <div className="client-image">
                <a href="#"><img src="/assets/images/clients/3.png" alt="" /></a>
              </div>
            </div>

            <div className="swiper-slide">
              <div className="client-image">
                <a href="#"><img src="/assets/images/clients/4.png" alt="" /></a>
              </div>
            </div>

            <div className="swiper-slide">
              <div className="client-image">
                <a href="#"><img src="/assets/images/clients/3.png" alt="" /></a>
              </div>
            </div>
          </div>
        </div>
        
        <div className="text-center">
          <div className="client-one_subtitle">we&apos;re proud to partner with best-in-class clients</div>
        </div>
      </div>
      {/* End Clients Box One */}

      <Footer />
    </>
  );
}

