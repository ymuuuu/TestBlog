'use client';

import Header from '../components/Header';
import Footer from '../components/Footer';
import Link from 'next/link';

export default function Blog() {
  return (
    <>
      <Header />

      {/* Page Title */}
      <section className="page-title" style={{ backgroundImage: 'url(/assets/images/background/6.jpg)' }}>
        <div className="auto-container">
          <h2>Blog</h2>
          <div className="d-flex justify-content-between align-items-center flex-wrap">
            <ul className="bread-crumb clearfix">
              <li><Link href="/">Home</Link></li>
              <li>Blog</li>
            </ul>
            <div className="page-title_text">
              Whether you&apos;re building, remodeling, buying, or selling, we bring seamless project execution under one roof.
            </div>
          </div>
        </div>
      </section>
      {/* End Page Title */}

      {/* Coming Soon Section */}
      <section className="coming-soon">
        <div className="page-top_pattern" style={{ backgroundImage: 'url(/assets/images/background/pattern-13.png)' }}></div>
        <div className="content">
          <div className="content-inner">
            <div className="auto-container">
              <div className="logo">
                <Link href="/">
                  <img src="/assets/images/coming-soon-logo.svg" alt="" />
                </Link>
              </div>
              
              {/* Emailed Form */}
              <div className="emailed-form">
                <h3>Our Blog is Coming Soon</h3>
                <div className="text">
                  We&apos;re working on bringing you insightful content about construction, <br />
                  architecture, and industry best practices. Subscribe to be notified when we launch!
                </div>
                <form method="post" action="/">
                  <div className="form-group">
                    <input type="email" name="email" placeholder="Your Email" required />
                    <button type="submit">
                      <span className="fa fa-paper-plane"></span>
                    </button>
                  </div>
                </form>
                
                <div className="error-one_button" style={{ marginTop: '3rem' }}>
                  <Link href="/" className="theme-btn btn-style-three">
                    <span className="btn-wrap">
                      <span className="text-one">
                        Back To Home <i><img src="/assets/images/icons/arrow-1.svg" alt="" /></i>
                      </span>
                      <span className="text-two">
                        Back To Home <i><img src="/assets/images/icons/arrow-1.svg" alt="" /></i>
                      </span>
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* End Coming Soon Section */}

      {/* Marketing One */}
      <section className="marketing-one">
        <div className="outer-container">
          <div className="animation_mode">
            <h1>High-Quality Craftsmanship</h1>
            <span className="marketing-one_icon"><img src="/assets/images/icons/star.png" alt="" /></span>
            <h1 className="light">Home Construction</h1>
            <span className="marketing-one_icon"><img src="/assets/images/icons/star.png" alt="" /></span>
            <h1>Building Construction</h1>
            <span className="marketing-one_icon"><img src="/assets/images/icons/star.png" alt="" /></span>
          </div>
          <div className="animation_mode-two">
            <h1>Architecture & Building</h1>
            <span className="marketing-one_icon"><img src="/assets/images/icons/star-1.png" alt="" /></span>
            <h1 className="light">Material Recycling</h1>
            <span className="marketing-one_icon"><img src="/assets/images/icons/star-1.png" alt="" /></span>
            <h1>Tools and Equipment</h1>
            <span className="marketing-one_icon"><img src="/assets/images/icons/star-1.png" alt="" /></span>
            <h1>Building Construction</h1>
          </div>
        </div>
      </section>
      {/* End Marketing One */}

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

