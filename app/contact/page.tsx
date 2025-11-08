'use client';

import Header from '../components/Header';
import Footer from '../components/Footer';
import Link from 'next/link';

export default function Contact() {
  return (
    <>
      <Header />

      {/* Page Title */}
      <section className="page-title" style={{ backgroundImage: 'url(/assets/images/background/6.jpg)' }}>
        <div className="auto-container">
          <h2>Contact Us</h2>
          <div className="d-flex justify-content-between align-items-center flex-wrap">
            <ul className="bread-crumb clearfix">
              <li><Link href="/">Home</Link></li>
              <li>Contact Us</li>
            </ul>
            <div className="page-title_text">
              Whether you&apos;re building, remodeling, buying, or selling, we bring seamless project execution under one roof.
            </div>
          </div>
        </div>
      </section>
      {/* End Page Title */}

      {/* Contact Three */}
      <section className="contact-three" id="contact">
        <div className="page-top_pattern" style={{ backgroundImage: 'url(/assets/images/background/pattern-13.png)' }}></div>
        <div className="auto-container">
          <div className="row clearfix">
            {/* Form Column */}
            <div className="contact-three_form-column col-lg-7 col-md-6 col-sm-12">
              <div className="contact-three_form-outer">
                {/* Sec Title */}
                <div className="sec-title">
                  <div className="sec-title_title">Keep In Touch</div>
                  <h3 className="sec-title_heading">
                    Get in touch with our <br /> lovely team
                  </h3>
                </div>
                
                {/* Contact Form */}
                <div className="contact-form">
                  <form method="post" action="/contact" id="contact-form">
                    <div className="row clearfix">
                      <div className="form-group col-lg-6 col-md-6 col-sm-12">
                        <input type="text" name="username" placeholder="First Name" required />
                      </div>
                      
                      <div className="form-group col-lg-6 col-md-6 col-sm-12">
                        <input type="text" name="lastname" placeholder="Last Name" required />
                      </div>
                      
                      <div className="form-group col-lg-6 col-md-6 col-sm-12">
                        <input type="email" name="email" placeholder="Email address" required />
                      </div>
                      
                      <div className="form-group col-lg-6 col-md-6 col-sm-12">
                        <input type="text" name="services" placeholder="Services" required />
                      </div>
                      
                      <div className="form-group col-lg-12 col-md-12 col-sm-12">
                        <textarea name="message" placeholder="Your Massage"></textarea>
                      </div>
                      
                      <div className="form-group">
                        {/* Button Box */}
                        <button className="theme-btn btn-style-three">
                          <span className="btn-wrap">
                            <span className="text-one">
                              Submit Now <i><img src="/assets/images/icons/arrow-1.svg" alt="" /></i>
                            </span>
                            <span className="text-two">
                              Submit Now <i><img src="/assets/images/icons/arrow-1.svg" alt="" /></i>
                            </span>
                          </span>
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            
            {/* Info Column */}
            <div className="contact-three_info-column col-lg-5 col-md-6 col-sm-12">
              <div className="contact-three_info-outer">
                <h3>
                  Contact <br /> Information
                </h3>
                <div className="contact-info_text">
                  We&apos;ve grown up with the internet revolution, <br /> and we know how to deliver on its
                </div>
                
                {/* Info Block */}
                <div className="contact-info_block">
                  <div className="contact-info_block-inner">
                    <div className="contact-info_block-icon">
                      <i className="fa-classic fa-solid fa-location-dot fa-fw"></i>
                    </div>
                    <h4>Location</h4>
                    <p>
                      1712 Down Street Monmouth Alex <br /> Junction, Florida 0852
                    </p>
                  </div>
                </div>

                {/* Info Block */}
                <div className="contact-info_block">
                  <div className="contact-info_block-inner">
                    <div className="contact-info_block-icon">
                      <i className="fa-classic fa-solid fa-phone fa-fw"></i>
                    </div>
                    <h4>Phone</h4>
                    <p>
                      +12 35 35783,     +23 586 2254 <br /> info@gmail.com,     demo@item.com
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* End Contact Three */}

      {/* Map One */}
      <section className="map-one">
        <div className="auto-container">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d805184.6331292129!2d144.49266890254142!3d-37.97123689954809!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad646b5d2ba4df7%3A0x4045675218ccd90!2sMelbourne%20VIC%2C%20Australia!5e0!3m2!1sen!2s!4v1574408946759!5m2!1sen!2s"
            allowFullScreen
          ></iframe>
        </div>
      </section>
      {/* End Map One */}

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

