'use client';

import Header from '../components/Header';
import Footer from '../components/Footer';
import Link from 'next/link';

export default function Services() {
  return (
    <>
      <Header />

      {/* Page Title */}
      <section className="page-title" style={{ backgroundImage: 'url(/assets/images/background/6.jpg)' }}>
        <div className="auto-container">
          <h2>Our Services</h2>
          <div className="d-flex justify-content-between align-items-center flex-wrap">
            <ul className="bread-crumb clearfix">
              <li><Link href="/">Home</Link></li>
              <li>Services</li>
            </ul>
            <div className="page-title_text">
              Whether you&apos;re building, remodeling, buying, or selling, we bring seamless project execution under one roof.
            </div>
          </div>
        </div>
      </section>
      {/* End Page Title */}

      {/* Customer One */}
      <section className="customer-one style-two">
        <div className="auto-container">
          <div className="customer-one_bg">
            <div className="customer-one_pattern" style={{ backgroundImage: 'url(/assets/images/background/pattern-1.png)' }}></div>
          </div>
          <div className="inner-container">
            <div className="sec-title centered">
              <div className="sec-title_title">Our Expertise Area</div>
              <h2 className="sec-title_heading">
                What We Build for <br /> Customer
              </h2>
            </div>
            
            <div className="row clearfix">
              {/* Customer Block One */}
              <div className="customer-block_one col-lg-4 col-md-6 col-sm-12">
                <div className="customer-block_one-inner wow fadeInLeft" data-wow-delay="0ms" data-wow-duration="1500ms">
                  <div className="customer-block_one-bg" style={{ backgroundImage: 'url(/assets/images/background/choose-one_bg.jpg)' }}></div>
                  <div className="customer-block_one-number">01</div>
                  <div className="customer-block_one-icon">
                    <img src="/assets/images/icons/customer-1.svg" alt="" />
                  </div>
                  <h3 className="customer-block_one-title">
                    <Link href="/service-detail">Industrial</Link>
                  </h3>
                  <div className="customer-block_one-text">
                    After more than twenty years of success in the wood products industry,the Bilder family founded its capital venture.
                  </div>
                  <Link className="customer-block_one-more" href="/service-detail">
                    Read More <i className="fa-classic fa-solid fa-plus fa-fw"></i>
                  </Link>
                </div>
              </div>
              
              {/* Customer Block Two */}
              <div className="customer-block_one col-lg-4 col-md-6 col-sm-12">
                <div className="customer-block_one-inner wow fadeInUp" data-wow-delay="0ms" data-wow-duration="1500ms">
                  <div className="customer-block_one-bg" style={{ backgroundImage: 'url(/assets/images/background/choose-one_bg.jpg)' }}></div>
                  <div className="customer-block_one-number">02</div>
                  <div className="customer-block_one-icon">
                    <img src="/assets/images/icons/customer-2.svg" alt="" />
                  </div>
                  <h3 className="customer-block_one-title">
                    <Link href="/service-detail">Commercial</Link>
                  </h3>
                  <div className="customer-block_one-text">
                    After more than twenty years of success in the wood products industry,the Bilder family founded its capital venture.
                  </div>
                  <Link className="customer-block_one-more" href="/service-detail">
                    Read More <i className="fa-classic fa-solid fa-plus fa-fw"></i>
                  </Link>
                </div>
              </div>
              
              {/* Customer Block Three */}
              <div className="customer-block_one col-lg-4 col-md-6 col-sm-12">
                <div className="customer-block_one-inner wow fadeInRight" data-wow-delay="0ms" data-wow-duration="1500ms">
                  <div className="customer-block_one-bg" style={{ backgroundImage: 'url(/assets/images/background/choose-one_bg.jpg)' }}></div>
                  <div className="customer-block_one-number">03</div>
                  <div className="customer-block_one-icon">
                    <img src="/assets/images/icons/customer-3.svg" alt="" />
                  </div>
                  <h3 className="customer-block_one-title">
                    <Link href="/service-detail">International</Link>
                  </h3>
                  <div className="customer-block_one-text">
                    After more than twenty years of success in the wood products industry,the Bilder family founded its capital venture.
                  </div>
                  <Link className="customer-block_one-more" href="/service-detail">
                    Read More <i className="fa-classic fa-solid fa-plus fa-fw"></i>
                  </Link>
                </div>
              </div>
              
              {/* Customer Block Four */}
              <div className="customer-block_one col-lg-4 col-md-6 col-sm-12">
                <div className="customer-block_one-inner wow fadeInLeft" data-wow-delay="0ms" data-wow-duration="1500ms">
                  <div className="customer-block_one-bg" style={{ backgroundImage: 'url(/assets/images/background/choose-one_bg.jpg)' }}></div>
                  <div className="customer-block_one-number">04</div>
                  <div className="customer-block_one-icon">
                    <img src="/assets/images/icons/customer-1.svg" alt="" />
                  </div>
                  <h3 className="customer-block_one-title">
                    <Link href="/service-detail">Residential</Link>
                  </h3>
                  <div className="customer-block_one-text">
                    After more than twenty years of success in the wood products industry,the Bilder family founded its capital venture.
                  </div>
                  <Link className="customer-block_one-more" href="/service-detail">
                    Read More <i className="fa-classic fa-solid fa-plus fa-fw"></i>
                  </Link>
                </div>
              </div>
              
              {/* Customer Block Five */}
              <div className="customer-block_one col-lg-4 col-md-6 col-sm-12">
                <div className="customer-block_one-inner wow fadeInUp" data-wow-delay="0ms" data-wow-duration="1500ms">
                  <div className="customer-block_one-bg" style={{ backgroundImage: 'url(/assets/images/background/choose-one_bg.jpg)' }}></div>
                  <div className="customer-block_one-number">05</div>
                  <div className="customer-block_one-icon">
                    <img src="/assets/images/icons/customer-2.svg" alt="" />
                  </div>
                  <h3 className="customer-block_one-title">
                    <Link href="/service-detail">Architecture</Link>
                  </h3>
                  <div className="customer-block_one-text">
                    After more than twenty years of success in the wood products industry,the Bilder family founded its capital venture.
                  </div>
                  <Link className="customer-block_one-more" href="/service-detail">
                    Read More <i className="fa-classic fa-solid fa-plus fa-fw"></i>
                  </Link>
                </div>
              </div>
              
              {/* Customer Block Six */}
              <div className="customer-block_one col-lg-4 col-md-6 col-sm-12">
                <div className="customer-block_one-inner wow fadeInRight" data-wow-delay="0ms" data-wow-duration="1500ms">
                  <div className="customer-block_one-bg" style={{ backgroundImage: 'url(/assets/images/background/choose-one_bg.jpg)' }}></div>
                  <div className="customer-block_one-number">06</div>
                  <div className="customer-block_one-icon">
                    <img src="/assets/images/icons/customer-3.svg" alt="" />
                  </div>
                  <h3 className="customer-block_one-title">
                    <Link href="/service-detail">Renovation</Link>
                  </h3>
                  <div className="customer-block_one-text">
                    After more than twenty years of success in the wood products industry,the Bilder family founded its capital venture.
                  </div>
                  <Link className="customer-block_one-more" href="/service-detail">
                    Read More <i className="fa-classic fa-solid fa-plus fa-fw"></i>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* End Customer One */}

      {/* Testimonial One */}
      <section className="testimonial-one">
        <div className="testimonial-one_circle"></div>
        <div className="auto-container">
          <div className="d-flex justify-content-between align-items-center flex-wrap">
            {/* Testimonial One Options */}
            <div className="testimonial-one_options d-flex align-items-center flex-wrap">
              <div className="testimonial-one_reviews">
                5.9K Reviews
                <div className="rating">
                  <span className="fa fa-star"></span>
                  <span className="fa fa-star"></span>
                  <span className="fa fa-star"></span>
                  <span className="fa fa-star"></span>
                  <span className="fa fa-star"></span>
                </div>
              </div>
              <ul className="testimonial-one__authors">
                <li><img src="/assets/images/main-slider/author-1.png" alt="" /></li>
                <li><img src="/assets/images/main-slider/author-2.png" alt="" /></li>
                <li><img src="/assets/images/main-slider/author-3.png" alt="" /></li>
                <li><img src="/assets/images/main-slider/author-4.png" alt="" /></li>
              </ul>
              <div className="testimonial-one__trusted">
                Trusted by
                <span>world leading companies</span>
              </div>
            </div>
            {/* End Testimonial One Options */}
            
            {/* Testimonial One Button */}
            <div className="testimonial-one_button">
              <Link href="/about" className="theme-btn btn-style-three">
                <span className="btn-wrap">
                  <span className="text-one">
                    Discover More <i><img src="/assets/images/icons/arrow-1.svg" alt="" /></i>
                  </span>
                  <span className="text-two">
                    Discover More <i><img src="/assets/images/icons/arrow-1.svg" alt="" /></i>
                  </span>
                </span>
              </Link>
            </div>
            {/* End Testimonial One Button */}
          </div>
          
          <div className="testimonial-one_carousel">
            <div className="single-item_carousel swiper-container">
              <div className="swiper-wrapper">
                {/* Slide 1 */}
                <div className="swiper-slide">
                  <div className="testimonial-block_one">
                    <div className="testimonial-block_one-inner">
                      <div className="testimonial-block_one-text">
                        &quot;They know their business and their approach, professional efforts and manner of doing business works well as a team player with the owners and their other consultants.&quot;
                      </div>
                      <div className="testimonial-block_one-designation">
                        Ralph Adams <span>Construction Admin., Assistant Project Manager</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Slide 2 */}
                <div className="swiper-slide">
                  <div className="testimonial-block_one">
                    <div className="testimonial-block_one-inner">
                      <div className="testimonial-block_one-text">
                        &quot;They know their business and their approach, professional efforts and manner of doing business works well as a team player with the owners and their other consultants.&quot;
                      </div>
                      <div className="testimonial-block_one-designation">
                        Ralph Adams <span>Construction Admin., Assistant Project Manager</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Slide 3 */}
                <div className="swiper-slide">
                  <div className="testimonial-block_one">
                    <div className="testimonial-block_one-inner">
                      <div className="testimonial-block_one-text">
                        &quot;They know their business and their approach, professional efforts and manner of doing business works well as a team player with the owners and their other consultants.&quot;
                      </div>
                      <div className="testimonial-block_one-designation">
                        Ralph Adams <span>Construction Admin., Assistant Project Manager</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Pagination */}
              <div className="single-item_carousel-pagination"></div>
            </div>
          </div>
        </div>
      </section>
      {/* End Testimonial One */}

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

      {/* Faq One */}
      <section className="faq-one">
        <div className="faq-one_pattern" style={{ backgroundImage: 'url(/assets/images/background/pattern-4.png)' }}></div>
        <div className="auto-container">
          <div className="row clearfix">
            {/* Image Column */}
            <div className="faq-one_image-column col-lg-5 col-md-6 col-sm-12">
              <div className="faq-one_image">
                <img src="/assets/images/resource/faq.png" alt="" />
              </div>
            </div>
            
            {/* Accordian Column */}
            <div className="faq-one_accordian-column col-lg-7 col-md-6 col-sm-12">
              <div className="faq-one_accordian-outer">
                {/* Sec Title */}
                <div className="sec-title">
                  <div className="sec-title_title">Construction Company</div>
                  <h2 className="sec-title_heading">regular Question for Customer </h2>
                </div>
                
                {/* Accordion Box */}
                <ul className="accordion-box">
                  {/* Block 1 */}
                  <li className="accordion block active-block">
                    <div className="acc-btn active">
                      <div className="icon-outer">
                        <span className="icon fa-classic fa-solid fa-arrow-right fa-fw"></span>
                      </div>
                      What kind of warranty or guarantee does Elevate offer?
                    </div>
                    <div className="acc-content current">
                      <div className="content">
                        <div className="text">
                          Fusce lacinia nulla consequat porta et viverra velit etiam, varius per condimentum lacus ultricies a placerat venatis semper donec id accumsan augue eleifend facili sis. Lectus arcu odio erat congue sociosqu ultricies
                        </div>
                      </div>
                    </div>
                  </li>

                  {/* Block 2 */}
                  <li className="accordion block">
                    <div className="acc-btn">
                      <div className="icon-outer">
                        <span className="icon fa-classic fa-solid fa-arrow-right fa-fw"></span>
                      </div>
                      Why should I choose elevate for my construction project?
                    </div>
                    <div className="acc-content">
                      <div className="content">
                        <div className="text">
                          Fusce lacinia nulla consequat porta et viverra velit etiam, varius per condimentum lacus ultricies a placerat venatis semper donec id accumsan augue eleifend facili sis. Lectus arcu odio erat congue sociosqu ultricies
                        </div>
                      </div>
                    </div>
                  </li>

                  {/* Block 3 */}
                  <li className="accordion block">
                    <div className="acc-btn">
                      <div className="icon-outer">
                        <span className="icon fa-classic fa-solid fa-arrow-right fa-fw"></span>
                      </div>
                      What is the process for working with Elevate?
                    </div>
                    <div className="acc-content">
                      <div className="content">
                        <div className="text">
                          Fusce lacinia nulla consequat porta et viverra velit etiam, varius per condimentum lacus ultricies a placerat venatis semper donec id accumsan augue eleifend facili sis. Lectus arcu odio erat congue sociosqu ultricies
                        </div>
                      </div>
                    </div>
                  </li>

                  {/* Block 4 */}
                  <li className="accordion block">
                    <div className="acc-btn">
                      <div className="icon-outer">
                        <span className="icon fa-classic fa-solid fa-arrow-right fa-fw"></span>
                      </div>
                      What types of projects does Elevate specialize in?
                    </div>
                    <div className="acc-content">
                      <div className="content">
                        <div className="text">
                          Fusce lacinia nulla consequat porta et viverra velit etiam, varius per condimentum lacus ultricies a placerat venatis semper donec id accumsan augue eleifend facili sis. Lectus arcu odio erat congue sociosqu ultricies
                        </div>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          
          {/* Clients Box One */}
          <div className="clients-box_one">
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
        </div>
      </section>
      {/* End Faq One */}
      
      {/* Marketing One */}
      <section className="marketing-one">
        <div className="outer-container">
          <div className="animation_mode">
            <h1>High-Quality Craftsmanship</h1>
            <span className="marketing-one_icon"><img src="/assets/images/icons/star.png" alt="" /></span>
            <h1>Home Construction</h1>
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

      <Footer />
    </>
  );
}

