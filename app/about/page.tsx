'use client';

import Header from '../components/Header';
import Footer from '../components/Footer';
import Link from 'next/link';

export default function About() {
  return (
    <>
      <Header />

      {/* Page Title */}
      <section className="page-title" style={{ backgroundImage: 'url(/assets/images/background/6.jpg)' }}>
        <div className="auto-container">
          <h2>About us</h2>
          <div className="d-flex justify-content-between align-items-center flex-wrap">
            <ul className="bread-crumb clearfix">
              <li><Link href="/">Home</Link></li>
              <li>About Us</li>
            </ul>
            <div className="page-title_text">
              Whether you&apos;re building, remodeling, buying, or selling, we bring seamless project execution under one roof.
            </div>
          </div>
        </div>
      </section>
      {/* End Page Title */}

      {/* About One */}
      <section className="about-one">
        <div className="about-one_pattern-layer" style={{ backgroundImage: 'url(/assets/images/background/pattern-1.png)' }}></div>
        <div className="about-one_cap" style={{ backgroundImage: 'url(/assets/images/icons/about-cap.png)' }}></div>
        <div className="auto-container">
          <div className="sec-title title-anim">
            <div className="sec-title_title">WHO WE ARE</div>
            <h2 className="sec-title_heading">
              The largest privately held real estate investors and managers in the world
            </h2>
          </div>
          
          <div className="row clearfix">
            {/* Image Column */}
            <div className="about-one_image-column col-lg-7 col-md-12 col-sm-12">
              <div className="about-one_image-outer">
                <div className="row clearfix">
                  <div className="column col-lg-4 col-md-12 col-sm-12">
                    <div className="image">
                      <img src="/assets/images/resource/about-2.jpg" alt="" />
                      <div className="about-construction_image">
                        <img src="/assets/images/icons/about.png" alt="" />
                      </div>
                    </div>
                    
                    {/* Button Box */}
                    <div className="about-one_button">
                      <Link href="/about" className="theme-btn btn-style-three">
                        <span className="btn-wrap">
                          <span className="text-one">
                            learn more <i><img src="/assets/images/icons/arrow-1.svg" alt="" /></i>
                          </span>
                          <span className="text-two">
                            learn more <i><img src="/assets/images/icons/arrow-1.svg" alt="" /></i>
                          </span>
                        </span>
                      </Link>
                    </div>
                  </div>
                  <div className="column col-lg-8 col-md-12 col-sm-12">
                    <div className="image">
                      <img src="/assets/images/resource/about-3.jpg" alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Content Column */}
            <div className="about-one_content-column col-lg-5 col-md-12 col-sm-12">
              <div className="about-one_content-outer">
                {/* Feature Block One */}
                <div className="feature-block_one">
                  <h4 className="feature-block_one-title">Our vision</h4>
                  <div className="feature-block_one-text">
                    To empower businesses with cutting-edge web solutions that enhance their digital presence and drive growth.
                  </div>
                </div>
                
                {/* Feature Block One */}
                <div className="feature-block_one">
                  <h4 className="feature-block_one-title">Our mission</h4>
                  <div className="feature-block_one-text">
                    Our solutions are designed to meet the needs of modern enterprises, ensuring they thrive in today&apos;s competitive online landscape.
                  </div>
                </div>
                
                <div className="row clearfix">
                  {/* Feature Block Two */}
                  <div className="feature-block_two col-lg-6 col-md-6 col-sm-6">
                    <div className="feature-block_two-inner">
                      <h4 className="feature-block_two-title">global reach</h4>
                      <div className="feature-block_two-icon">
                        <i><img src="/assets/images/icons/feature-1.svg" alt="" /></i>
                      </div>
                      <div className="feature-block_two_count">
                        <span className="odometer" data-count="85"></span><sup>+</sup>
                      </div>
                      <div className="feature-block_two_text">offices worldwide</div>
                    </div>
                  </div>
                  
                  {/* Feature Block Two */}
                  <div className="feature-block_two col-lg-6 col-md-6 col-sm-6">
                    <div className="feature-block_two-inner">
                      <h4 className="feature-block_two-title">local expertise</h4>
                      <div className="feature-block_two-icon">
                        <i><img src="/assets/images/icons/feature-2.svg" alt="" /></i>
                      </div>
                      <div className="feature-block_two_count">
                        <span className="odometer" data-count="1500"></span><sup>+</sup>
                      </div>
                      <div className="feature-block_two_text">employees</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* End About One */}

      {/* Customer One */}
      <section className="customer-one">
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
            </div>
          </div>
        </div>
      </section>
      {/* End Customer One */}

      {/* About Three */}
      <section className="about-three">
        <div className="about-three_big-title">about</div>
        <div className="about-three_pattern" style={{ backgroundImage: 'url(/assets/images/background/about-three_pattern.png)' }}></div>
        <div className="auto-container">
          <div className="row clearfix">
            {/* Content Column */}
            <div className="about-three_content-column col-lg-6 col-md-12 col-sm-12">
              <div className="about-three_content-outer">
                {/* Sec Title */}
                <div className="sec-title title-anim">
                  <div className="sec-title_title">WHO WE ARE</div>
                  <h2 className="sec-title_heading">Leading Global Builder and Developer</h2>
                  <div className="sec-title_text">
                    After more than twenty years of success in the wood products industry, the Bilder family founded its capital venture in 2009 investing in real estate in the western United States.
                  </div>
                </div>
                <ul className="about-three_list">
                  <li><i className="fa-classic fa-solid fa-circle-check fa-fw"></i>Innovation Eco power Technologies</li>
                  <li><i className="fa-classic fa-solid fa-circle-check fa-fw"></i>Regularly Maintaining and organizing your Tools</li>
                  <li><i className="fa-classic fa-solid fa-circle-check fa-fw"></i>Regularly organizing and Maintaining your Tools</li>
                </ul>
                <div className="about-three_info">
                  <div className="d-flex justify-content-between align-items-center flex-wrap">
                    <div className="about-three_text">
                      We have multiple models of engagement: We can work directly with individuals for private residences, partner.
                    </div>
                    <div className="about-three_author">
                      John Smith
                      <i>CEO & Founder</i>
                      <span><img src="/assets/images/resource/author-6.png" alt="" /></span>
                    </div>
                  </div>
                </div>
                <div className="lower-box d-flex align-items-center flex-wrap">
                  {/* Button Box */}
                  <div className="about-three_button">
                    <Link href="/about" className="theme-btn btn-style-three">
                      <span className="btn-wrap">
                        <span className="text-one">
                          learn more <i><img src="/assets/images/icons/arrow-1.svg" alt="" /></i>
                        </span>
                        <span className="text-two">
                          learn more <i><img src="/assets/images/icons/arrow-1.svg" alt="" /></i>
                        </span>
                      </span>
                    </Link>
                  </div>
                  
                  {/* Phone Box */}
                  <div className="about-three_phone">
                    <div className="about-three_phone-inner">
                      <span className="about-three_phone-icon fa-classic fa-solid fa-phone fa-fw"></span>
                      Call Us 24/7 <br />
                      <a href="tel:+00-47-939-4888">+00(47) 939 4888</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Image Column */}
            <div className="about-three_images-column col-lg-6 col-md-12 col-sm-12">
              <div className="about-three_images-outer">
                <div className="about-three_image">
                  <img src="/assets/images/resource/about-5.jpg" alt="" />
                </div>
                <div className="about-three_image-two">
                  <img src="/assets/images/resource/about-6.jpg" alt="" />
                </div>
                <div className="about-three_image-three">
                  <img src="/assets/images/resource/about-7.jpg" alt="" />
                </div>
                <div className="about-three_award">
                  <span><img src="/assets/images/icons/award.svg" alt="" /></span>
                  We&apos;re a global award <br /> wining company
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* End About Three */}

      {/* Counter Three */}
      <section className="counter-three">
        <div className="counter-three_pattern" style={{ backgroundImage: 'url(/assets/images/background/pattern-4.png)' }}></div>
        <div className="auto-container">
          <div className="row clearfix">
            {/* Counter Block */}
            <div className="counter-block_three col-lg-3 col-md-6 col-sm-12">
              <div className="counter-block_three-inner wow fadeInLeft" data-wow-delay="0ms" data-wow-duration="1500ms">
                <div className="counter-block_three-count">
                  <span className="odometer" data-count="643"></span>+
                </div>
                <h4 className="counter-block_three-title">Completed Projects</h4>
                <div className="counter-block_three-text">
                  After more than twenty years of success in the wood products.
                </div>
              </div>
            </div>

            {/* Counter Block */}
            <div className="counter-block_three col-lg-3 col-md-6 col-sm-12">
              <div className="counter-block_three-inner wow fadeInLeft" data-wow-delay="0ms" data-wow-duration="1500ms">
                <div className="counter-block_three-count">
                  <span className="odometer" data-count="4"></span>K+
                </div>
                <h4 className="counter-block_three-title">Experienced workers</h4>
                <div className="counter-block_three-text">
                  After more than twenty years of success in the wood products.
                </div>
              </div>
            </div>

            {/* Counter Block */}
            <div className="counter-block_three col-lg-3 col-md-6 col-sm-12">
              <div className="counter-block_three-inner wow fadeInLeft" data-wow-delay="0ms" data-wow-duration="1500ms">
                <div className="counter-block_three-count">
                  <span className="odometer" data-count="89"></span>%
                </div>
                <h4 className="counter-block_three-title">happy customer</h4>
                <div className="counter-block_three-text">
                  After more than twenty years of success in the wood products.
                </div>
              </div>
            </div>

            {/* Counter Block */}
            <div className="counter-block_three col-lg-3 col-md-6 col-sm-12">
              <div className="counter-block_three-inner wow fadeInLeft" data-wow-delay="0ms" data-wow-duration="1500ms">
                <div className="counter-block_three-count">
                  <span className="odometer" data-count="45"></span>+
                </div>
                <h4 className="counter-block_three-title">construction Award</h4>
                <div className="counter-block_three-text">
                  After more than twenty years of success in the wood products.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* End Counter Three */}

      <Footer />
    </>
  );
}

