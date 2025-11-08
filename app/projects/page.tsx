'use client';

import Header from '../components/Header';
import Footer from '../components/Footer';
import Link from 'next/link';

export default function Projects() {
  return (
    <>
      <Header />

      {/* Page Title */}
      <section className="page-title" style={{ backgroundImage: 'url(/assets/images/background/6.jpg)' }}>
        <div className="auto-container">
          <h2>Our Projects</h2>
          <div className="d-flex justify-content-between align-items-center flex-wrap">
            <ul className="bread-crumb clearfix">
              <li><Link href="/">Home</Link></li>
              <li>Projects</li>
            </ul>
            <div className="page-title_text">
              Whether you&apos;re building, remodeling, buying, or selling, we bring seamless project execution under one roof.
            </div>
          </div>
        </div>
      </section>
      {/* End Page Title */}

      {/* Project Four */}
      <section className="project-four" style={{ backgroundImage: 'url(/assets/images/background/pattern-13.png)' }}>
        <div className="auto-container">
          <div className="sec-title centered">
            <div className="sec-title_title">Our Projects</div>
            <h2 className="sec-title_heading">
              We Provide Effective Solution <br /> in Construction
            </h2>
          </div>
          
          <div className="row clearfix">
            {/* Project Block Three - 1 */}
            <div className="project-block_three col-lg-4 col-md-6 col-sm-12">
              <div className="project-block_three-inner">
                <div className="project-block_three-image">
                  <img src="/assets/images/gallery/10.jpg" alt="" />
                  <div className="project-block_three-overlay">
                    <div className="project-block_three-designation">Architecture</div>
                    <div className="project-block_three-location">
                      <i><img src="/assets/images/icons/location-2.svg" alt="" /></i> Spotswood, NJ
                    </div>
                    <h3 className="project-block_three-title">
                      <Link href="/project-detail">Develop Comprehensive</Link>
                    </h3>
                    {/* Button Box */}
                    <div className="project-block_three_button">
                      <Link href="/project-detail" className="theme-btn btn-style-one">
                        <span className="btn-wrap">
                          <span className="text-one">
                            explore project <i><img src="/assets/images/icons/arrow-1.svg" alt="" /></i>
                          </span>
                          <span className="text-two">
                            explore project <i><img src="/assets/images/icons/arrow-1.svg" alt="" /></i>
                          </span>
                        </span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Project Block Three - 2 */}
            <div className="project-block_three col-lg-4 col-md-6 col-sm-12">
              <div className="project-block_three-inner">
                <div className="project-block_three-image">
                  <img src="/assets/images/gallery/11.jpg" alt="" />
                  <div className="project-block_three-overlay">
                    <div className="project-block_three-designation">Architecture</div>
                    <div className="project-block_three-location">
                      <i><img src="/assets/images/icons/location-2.svg" alt="" /></i> Spotswood, NJ
                    </div>
                    <h3 className="project-block_three-title">
                      <Link href="/project-detail">Work With Energetic Team</Link>
                    </h3>
                    {/* Button Box */}
                    <div className="project-block_three_button">
                      <Link href="/project-detail" className="theme-btn btn-style-one">
                        <span className="btn-wrap">
                          <span className="text-one">
                            explore project <i><img src="/assets/images/icons/arrow-1.svg" alt="" /></i>
                          </span>
                          <span className="text-two">
                            explore project <i><img src="/assets/images/icons/arrow-1.svg" alt="" /></i>
                          </span>
                        </span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Project Block Three - 3 */}
            <div className="project-block_three col-lg-4 col-md-6 col-sm-12">
              <div className="project-block_three-inner">
                <div className="project-block_three-image">
                  <img src="/assets/images/gallery/12.jpg" alt="" />
                  <div className="project-block_three-overlay">
                    <div className="project-block_three-designation">Architecture</div>
                    <div className="project-block_three-location">
                      <i><img src="/assets/images/icons/location-2.svg" alt="" /></i> Spotswood, NJ
                    </div>
                    <h3 className="project-block_three-title">
                      <Link href="/project-detail">Commercial & Residential Building</Link>
                    </h3>
                    {/* Button Box */}
                    <div className="project-block_three_button">
                      <Link href="/project-detail" className="theme-btn btn-style-one">
                        <span className="btn-wrap">
                          <span className="text-one">
                            explore project <i><img src="/assets/images/icons/arrow-1.svg" alt="" /></i>
                          </span>
                          <span className="text-two">
                            explore project <i><img src="/assets/images/icons/arrow-1.svg" alt="" /></i>
                          </span>
                        </span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Project Block Three - 4 */}
            <div className="project-block_three col-lg-4 col-md-6 col-sm-12">
              <div className="project-block_three-inner">
                <div className="project-block_three-image">
                  <img src="/assets/images/gallery/13.jpg" alt="" />
                  <div className="project-block_three-overlay">
                    <div className="project-block_three-designation">Architecture</div>
                    <div className="project-block_three-location">
                      <i><img src="/assets/images/icons/location-2.svg" alt="" /></i> Spotswood, NJ
                    </div>
                    <h3 className="project-block_three-title">
                      <Link href="/project-detail">Mixed-Use Development</Link>
                    </h3>
                    {/* Button Box */}
                    <div className="project-block_three_button">
                      <Link href="/project-detail" className="theme-btn btn-style-one">
                        <span className="btn-wrap">
                          <span className="text-one">
                            explore project <i><img src="/assets/images/icons/arrow-1.svg" alt="" /></i>
                          </span>
                          <span className="text-two">
                            explore project <i><img src="/assets/images/icons/arrow-1.svg" alt="" /></i>
                          </span>
                        </span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Project Block Three - 5 */}
            <div className="project-block_three col-lg-4 col-md-6 col-sm-12">
              <div className="project-block_three-inner">
                <div className="project-block_three-image">
                  <img src="/assets/images/gallery/14.jpg" alt="" />
                  <div className="project-block_three-overlay">
                    <div className="project-block_three-designation">Architecture</div>
                    <div className="project-block_three-location">
                      <i><img src="/assets/images/icons/location-2.svg" alt="" /></i> Spotswood, NJ
                    </div>
                    <h3 className="project-block_three-title">
                      <Link href="/project-detail">Premier Office Tower</Link>
                    </h3>
                    {/* Button Box */}
                    <div className="project-block_three_button">
                      <Link href="/project-detail" className="theme-btn btn-style-one">
                        <span className="btn-wrap">
                          <span className="text-one">
                            explore project <i><img src="/assets/images/icons/arrow-1.svg" alt="" /></i>
                          </span>
                          <span className="text-two">
                            explore project <i><img src="/assets/images/icons/arrow-1.svg" alt="" /></i>
                          </span>
                        </span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Project Block Three - 6 */}
            <div className="project-block_three col-lg-4 col-md-6 col-sm-12">
              <div className="project-block_three-inner">
                <div className="project-block_three-image">
                  <img src="/assets/images/gallery/15.jpg" alt="" />
                  <div className="project-block_three-overlay">
                    <div className="project-block_three-designation">Architecture</div>
                    <div className="project-block_three-location">
                      <i><img src="/assets/images/icons/location-2.svg" alt="" /></i> Spotswood, NJ
                    </div>
                    <h3 className="project-block_three-title">
                      <Link href="/project-detail">Greenview Apartments</Link>
                    </h3>
                    {/* Button Box */}
                    <div className="project-block_three_button">
                      <Link href="/project-detail" className="theme-btn btn-style-one">
                        <span className="btn-wrap">
                          <span className="text-one">
                            explore project <i><img src="/assets/images/icons/arrow-1.svg" alt="" /></i>
                          </span>
                          <span className="text-two">
                            explore project <i><img src="/assets/images/icons/arrow-1.svg" alt="" /></i>
                          </span>
                        </span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Project Block Three - 7 */}
            <div className="project-block_three col-lg-4 col-md-6 col-sm-12">
              <div className="project-block_three-inner">
                <div className="project-block_three-image">
                  <img src="/assets/images/gallery/16.jpg" alt="" />
                  <div className="project-block_three-overlay">
                    <div className="project-block_three-designation">Architecture</div>
                    <div className="project-block_three-location">
                      <i><img src="/assets/images/icons/location-2.svg" alt="" /></i> Spotswood, NJ
                    </div>
                    <h3 className="project-block_three-title">
                      <Link href="/project-detail">Residential Complex</Link>
                    </h3>
                    {/* Button Box */}
                    <div className="project-block_three_button">
                      <Link href="/project-detail" className="theme-btn btn-style-one">
                        <span className="btn-wrap">
                          <span className="text-one">
                            explore project <i><img src="/assets/images/icons/arrow-1.svg" alt="" /></i>
                          </span>
                          <span className="text-two">
                            explore project <i><img src="/assets/images/icons/arrow-1.svg" alt="" /></i>
                          </span>
                        </span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Project Block Three - 8 */}
            <div className="project-block_three col-lg-4 col-md-6 col-sm-12">
              <div className="project-block_three-inner">
                <div className="project-block_three-image">
                  <img src="/assets/images/gallery/17.jpg" alt="" />
                  <div className="project-block_three-overlay">
                    <div className="project-block_three-designation">Architecture</div>
                    <div className="project-block_three-location">
                      <i><img src="/assets/images/icons/location-2.svg" alt="" /></i> Spotswood, NJ
                    </div>
                    <h3 className="project-block_three-title">
                      <Link href="/project-detail">Urban Heights Residence</Link>
                    </h3>
                    {/* Button Box */}
                    <div className="project-block_three_button">
                      <Link href="/project-detail" className="theme-btn btn-style-one">
                        <span className="btn-wrap">
                          <span className="text-one">
                            explore project <i><img src="/assets/images/icons/arrow-1.svg" alt="" /></i>
                          </span>
                          <span className="text-two">
                            explore project <i><img src="/assets/images/icons/arrow-1.svg" alt="" /></i>
                          </span>
                        </span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Project Block Three - 9 */}
            <div className="project-block_three col-lg-4 col-md-6 col-sm-12">
              <div className="project-block_three-inner">
                <div className="project-block_three-image">
                  <img src="/assets/images/gallery/18.jpg" alt="" />
                  <div className="project-block_three-overlay">
                    <div className="project-block_three-designation">Architecture</div>
                    <div className="project-block_three-location">
                      <i><img src="/assets/images/icons/location-2.svg" alt="" /></i> Spotswood, NJ
                    </div>
                    <h3 className="project-block_three-title">
                      <Link href="/project-detail">Vista at Councill Square</Link>
                    </h3>
                    {/* Button Box */}
                    <div className="project-block_three_button">
                      <Link href="/project-detail" className="theme-btn btn-style-one">
                        <span className="btn-wrap">
                          <span className="text-one">
                            explore project <i><img src="/assets/images/icons/arrow-1.svg" alt="" /></i>
                          </span>
                          <span className="text-two">
                            explore project <i><img src="/assets/images/icons/arrow-1.svg" alt="" /></i>
                          </span>
                        </span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Styled Pagination */}
          <ul className="styled-pagination text-center">
            <li className="prev">
              <a href="#"><i className="fa-solid fa-angle-left fa-fw"></i></a>
            </li>
            <li><a href="#" className="active">1</a></li>
            <li><a href="#">2</a></li>
            <li><a href="#">3</a></li>
            <li className="next">
              <a href="#"><i className="fa-solid fa-angle-right fa-fw"></i></a>
            </li>
          </ul>
          {/* End Styled Pagination */}
        </div>
      </section>
      {/* End Project Four */}

      {/* Counter One */}
      <section className="counter-one">
        <div className="counter-one_pattern" style={{ backgroundImage: 'url(/assets/images/background/pattern-3.png)' }}></div>
        <div className="auto-container">
          <div className="row clearfix">
            {/* Counter Block */}
            <div className="counter-block_one col-lg-3 col-md-6 col-sm-12">
              <div className="counter-block_one-inner wow fadeInLeft" data-wow-delay="0ms" data-wow-duration="1500ms">
                <div className="counter-block_one-outline"></div>
                <div className="counter-block_one-count">
                  <span className="odometer" data-count="48"></span><sup>+</sup>
                </div>
                <div className="counter-block_one-text">
                  completed <br /> projects
                </div>
              </div>
            </div>

            {/* Counter Block */}
            <div className="counter-block_one col-lg-3 col-md-6 col-sm-12">
              <div className="counter-block_one-inner wow fadeInLeft" data-wow-delay="0ms" data-wow-duration="1500ms">
                <div className="counter-block_one-outline"></div>
                <div className="counter-block_one-count">
                  <span className="odometer" data-count="52"></span><sup>+</sup>
                </div>
                <div className="counter-block_one-text">
                  projects in <br /> development
                </div>
              </div>
            </div>

            {/* Counter Block */}
            <div className="counter-block_one col-lg-3 col-md-6 col-sm-12">
              <div className="counter-block_one-inner wow fadeInLeft" data-wow-delay="0ms" data-wow-duration="1500ms">
                <div className="counter-block_one-outline"></div>
                <div className="counter-block_one-count">
                  <span className="odometer" data-count="2.3"></span>b<sup>+</sup>
                </div>
                <div className="counter-block_one-text">
                  total projects <br /> cost
                </div>
              </div>
            </div>

            {/* Counter Block */}
            <div className="counter-block_one col-lg-3 col-md-6 col-sm-12">
              <div className="counter-block_one-inner wow fadeInLeft" data-wow-delay="0ms" data-wow-duration="1500ms">
                <div className="counter-block_one-outline"></div>
                <div className="counter-block_one-count">
                  <span className="odometer" data-count="18"></span>m<sup>+</sup>
                </div>
                <div className="counter-block_one-text">
                  square feet <br /> of property
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* End Counter One */}

      {/* Contact One */}
      <section className="contact-one">
        <div className="auto-container">
          <div className="sec-title">
            <div className="d-flex justify-content-between align-items-end flex-wrap">
              <div className="left-box">
                <div className="sec-title_title">contact us</div>
                <h2 className="sec-title_heading">Let&apos;s Work Together</h2>
              </div>
              <div className="right-box">
                <div className="sec-title_text">
                  We&apos;d love to share more with you, please complete this form and <br /> our dedicated team will get back to you shortly.
                </div>
              </div>
            </div>
          </div>
          
          <div className="row clearfix">
            {/* Info Column */}
            <div className="column col-lg-6 col-md-12 col-sm-12">
              <div className="row clearfix">
                {/* Info Block One */}
                <div className="info-block_one col-lg-6 col-md-6 col-sm-6">
                  <div className="info-block_one-inner">
                    <div className="info-block_one-icon fa-classic fa-solid fa-phone fa-fw"></div>
                    <strong>Call Us</strong>
                    +00 (47) 939 4888
                  </div>
                </div>
                
                {/* Info Block One */}
                <div className="info-block_one col-lg-6 col-md-6 col-sm-6">
                  <div className="info-block_one-inner">
                    <div className="info-block_one-icon fa-classic fa-solid fa-envelope fa-fw"></div>
                    <strong>Our Email Us</strong>
                    example@gmail.com
                  </div>
                </div>
                
                {/* Info Block One */}
                <div className="info-block_one col-lg-6 col-md-6 col-sm-6">
                  <div className="info-block_one-inner">
                    <div className="info-block_one-icon fa-classic fa-solid fa-clock fa-fw"></div>
                    <strong>Opening Hours</strong>
                    Mon - Fri: 09am - 07pm
                  </div>
                </div>
                
                {/* Info Block One */}
                <div className="info-block_one col-lg-6 col-md-6 col-sm-6">
                  <div className="info-block_one-inner">
                    <div className="info-block_one-icon fa-classic fa-solid fa-map fa-fw"></div>
                    <strong>Location</strong>
                    1712 Down Street Monmouth
                  </div>
                </div>
              </div>
            </div>
            
            {/* Form Column */}
            <div className="column col-lg-6 col-md-12 col-sm-12">
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
                      <textarea placeholder="Your Massage"></textarea>
                    </div>
                    
                    <div className="form-group">
                      <div className="d-flex justify-content-between align-items-end flex-wrap">
                        <div className="contact-form_text">
                          We&apos;re excited to connect with you! <br /> Required fields are marked *
                        </div>
                        {/* Button Box */}
                        <button className="theme-btn btn-style-three">
                          <span className="btn-wrap">
                            <span className="text-one">
                              Contact Now <i><img src="/assets/images/icons/arrow-1.svg" alt="" /></i>
                            </span>
                            <span className="text-two">
                              Contact Now <i><img src="/assets/images/icons/arrow-1.svg" alt="" /></i>
                            </span>
                          </span>
                        </button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
          
          <div className="video-image">
            <img src="/assets/images/resource/video.jpg" alt="" />
            <a href="https://www.youtube.com/watch?v=kxPCFljwJws" className="contact-one_video lightbox-video">
              <span className="fa-classic fa-solid fa-play fa-fw">
                <i className="ripple"></i>
              </span>
            </a>
          </div>
        </div>
      </section>
      {/* End Contact One */}

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

