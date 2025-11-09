'use client';

import Header from './components/Header';
import Footer from './components/Footer';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <Header />

      {/* Slider Three */}
      <section className="slider-three">
        <div className="slider-three_big-title">
          <span className="up-down_animation">Construction</span>
        </div>
        <div className="main-slider swiper-container">
          <div className="swiper-wrapper">
            {/* Slide 1 */}
            <div className="swiper-slide">
              <div className="slider-three_image-layer" style={{ backgroundImage: 'url(/assets/images/main-slider/4.jpg)' }}></div>
              <div className="slider-three_color-layer"></div>
              <div className="auto-container">
                <div className="slider-three_content">
                  <div className="slider-three_video">
                    <a href="https://www.youtube.com/watch?v=kxPCFljwJws" className="lightbox-video play-box">
                      <span className="fa fa-play">
                        <i className="ripple"></i>
                      </span>
                    </a>
                  </div>
                  <div className="slider-three_content-inner">
                    <div className="slider-three_title">
                      Good <span>Experience</span>
                    </div>
                    <h1 className="slider-three_heading">Construction</h1>
                    <div className="d-flex align-items-center flex-wrap">
                      <div className="slider-three_text">
                        It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout
                      </div>
                      <div className="slider-three_button">
                        <Link href="/about" className="theme-btn btn-style-one">
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
                    <div className="slider-three_arrow" style={{ backgroundImage: 'url(/assets/images/main-slider/slider-three_arrow.png)' }}></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Slide 2 */}
            <div className="swiper-slide">
              <div className="slider-three_image-layer" style={{ backgroundImage: 'url(/assets/images/main-slider/3.jpg)' }}></div>
              <div className="slider-three_color-layer"></div>
              <div className="auto-container">
                <div className="slider-three_content">
                  <div className="slider-three_video">
                    <a href="https://www.youtube.com/watch?v=kxPCFljwJws" className="lightbox-video play-box">
                      <span className="fa fa-play">
                        <i className="ripple"></i>
                      </span>
                    </a>
                  </div>
                  <div className="slider-three_content-inner">
                    <div className="slider-three_title">
                      Good <span>Experience</span>
                    </div>
                    <h1 className="slider-three_heading">Construction</h1>
                    <div className="d-flex align-items-center flex-wrap">
                      <div className="slider-three_text">
                        It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout
                      </div>
                      <div className="slider-three_button">
                        <Link href="/about" className="theme-btn btn-style-one">
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
                    <div className="slider-three_arrow" style={{ backgroundImage: 'url(/assets/images/main-slider/slider-three_arrow.png)' }}></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Slide 3 */}
            <div className="swiper-slide">
              <div className="slider-three_image-layer" style={{ backgroundImage: 'url(/assets/images/main-slider/2.jpg)' }}></div>
              <div className="slider-three_color-layer"></div>
              <div className="auto-container">
                <div className="slider-three_content">
                  <div className="slider-three_video">
                    <a href="https://www.youtube.com/watch?v=kxPCFljwJws" className="lightbox-video play-box">
                      <span className="fa fa-play">
                        <i className="ripple"></i>
                      </span>
                    </a>
                  </div>
                  <div className="slider-three_content-inner">
                    <div className="slider-three_title">
                      Good <span>Experience</span>
                    </div>
                    <h1 className="slider-three_heading">Construction</h1>
                    <div className="d-flex align-items-center flex-wrap">
                      <div className="slider-three_text">
                        It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout
                      </div>
                      <div className="slider-three_button">
                        <Link href="/about" className="theme-btn btn-style-one">
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
                    <div className="slider-three_arrow" style={{ backgroundImage: 'url(/assets/images/main-slider/slider-three_arrow.png)' }}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Pagination */}
          <div className="slider-one_pagination"></div>
        </div>
        <div className="slider-three_construction">
          <img src="/assets/images/main-slider/construction.png" alt="" />
        </div>
      </section>
      {/* End Main Slider Section */}

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

      {/* About Three */}
      <section className="about-three">
        <div className="about-three_pattern" style={{ backgroundImage: 'url(/assets/images/background/about-three_pattern.png)' }}></div>
        <div className="auto-container">
          <div className="about-three_big-title">about</div>
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

      {/* Service Three */}
      <section className="service-three">
        <div className="outer-container" style={{ backgroundImage: 'url(/assets/images/background/service-three_pattern.png)' }}>
          <div className="auto-container">
            <div className="sec-title centered">
              <div className="sec-title_title">Our services</div>
              <h2 className="sec-title_heading">
                Construction Service <br /> To Our Clients
              </h2>
            </div>
            
            <div className="row clearfix">
              {/* Service Block */}
              <div className="service-block_three col-lg-4 col-md-6 col-sm-12">
                <div className="service-block_three-inner">
                  <div className="service-block_three_hover-image" style={{ backgroundImage: 'url(/assets/images/resource/service-2.jpg)' }}></div>
                  <div className="service-block_three-pattern" style={{ backgroundImage: 'url(/assets/images/background/service-1_bg.jpg)' }}></div>
                  <div className="service-block_three-upper">
                    <div className="service-block_three-icon">
                      <img src="/assets/images/icons/service-1.svg" alt="" />
                    </div>
                    <h4 className="service-block_three-heading">
                      <Link href="/service-detail">Building <br /> Construction</Link>
                    </h4>
                  </div>
                  <div className="service-block_three-text">
                    After more than twenty years of success in the wood products industry.
                  </div>
                  <Link href="/service-detail" className="service-block_three-more">
                    Read More <i className="fa-classic fa-solid fa-arrow-right fa-fw"></i>
                  </Link>
                </div>
              </div>

              {/* Service Block */}
              <div className="service-block_three col-lg-4 col-md-6 col-sm-12">
                <div className="service-block_three-inner">
                  <div className="service-block_three_hover-image" style={{ backgroundImage: 'url(/assets/images/resource/service-2.jpg)' }}></div>
                  <div className="service-block_three-pattern" style={{ backgroundImage: 'url(/assets/images/background/service-1_bg.jpg)' }}></div>
                  <div className="service-block_three-upper">
                    <div className="service-block_three-icon">
                      <img src="/assets/images/icons/service-2.svg" alt="" />
                    </div>
                    <h4 className="service-block_three-heading">
                      <Link href="/service-detail">Commercial <br /> Renovate</Link>
                    </h4>
                  </div>
                  <div className="service-block_three-text">
                    After more than twenty years of success in the wood products industry.
                  </div>
                  <Link href="/service-detail" className="service-block_three-more">
                    Read More <i className="fa-classic fa-solid fa-arrow-right fa-fw"></i>
                  </Link>
                </div>
              </div>

              {/* Service Block */}
              <div className="service-block_three col-lg-4 col-md-6 col-sm-12">
                <div className="service-block_three-inner">
                  <div className="service-block_three_hover-image" style={{ backgroundImage: 'url(/assets/images/resource/service-2.jpg)' }}></div>
                  <div className="service-block_three-pattern" style={{ backgroundImage: 'url(/assets/images/background/service-1_bg.jpg)' }}></div>
                  <div className="service-block_three-upper">
                    <div className="service-block_three-icon">
                      <img src="/assets/images/icons/service-3.svg" alt="" />
                    </div>
                    <h4 className="service-block_three-heading">
                      <Link href="/service-detail">Automation <br /> & Robotics</Link>
                    </h4>
                  </div>
                  <div className="service-block_three-text">
                    After more than twenty years of success in the wood products industry.
                  </div>
                  <Link href="/service-detail" className="service-block_three-more">
                    Read More <i className="fa-classic fa-solid fa-arrow-right fa-fw"></i>
                  </Link>
                </div>
              </div>

              {/* Service Block */}
              <div className="service-block_three col-lg-4 col-md-6 col-sm-12">
                <div className="service-block_three-inner">
                  <div className="service-block_three_hover-image" style={{ backgroundImage: 'url(/assets/images/resource/service-2.jpg)' }}></div>
                  <div className="service-block_three-pattern" style={{ backgroundImage: 'url(/assets/images/background/service-1_bg.jpg)' }}></div>
                  <div className="service-block_three-upper">
                    <div className="service-block_three-icon">
                      <img src="/assets/images/icons/service-4.svg" alt="" />
                    </div>
                    <h4 className="service-block_three-heading">
                      <Link href="/service-detail">Residential <br /> Construction</Link>
                    </h4>
                  </div>
                  <div className="service-block_three-text">
                    After more than twenty years of success in the wood products industry.
                  </div>
                  <Link href="/service-detail" className="service-block_three-more">
                    Read More <i className="fa-classic fa-solid fa-arrow-right fa-fw"></i>
                  </Link>
                </div>
              </div>

              {/* Service Block */}
              <div className="service-block_three col-lg-4 col-md-6 col-sm-12">
                <div className="service-block_three-inner">
                  <div className="service-block_three_hover-image" style={{ backgroundImage: 'url(/assets/images/resource/service-2.jpg)' }}></div>
                  <div className="service-block_three-pattern" style={{ backgroundImage: 'url(/assets/images/background/service-1_bg.jpg)' }}></div>
                  <div className="service-block_three-upper">
                    <div className="service-block_three-icon">
                      <img src="/assets/images/icons/service-5.svg" alt="" />
                    </div>
                    <h4 className="service-block_three-heading">
                      <Link href="/service-detail">Architecture <br /> Design</Link>
                    </h4>
                  </div>
                  <div className="service-block_three-text">
                    After more than twenty years of success in the wood products industry.
                  </div>
                  <Link href="/service-detail" className="service-block_three-more">
                    Read More <i className="fa-classic fa-solid fa-arrow-right fa-fw"></i>
                  </Link>
                </div>
              </div>

              {/* Service Block */}
              <div className="service-block_three col-lg-4 col-md-6 col-sm-12">
                <div className="service-block_three-inner">
                  <div className="service-block_three_hover-image" style={{ backgroundImage: 'url(/assets/images/resource/service-2.jpg)' }}></div>
                  <div className="service-block_three-pattern" style={{ backgroundImage: 'url(/assets/images/background/service-1_bg.jpg)' }}></div>
                  <div className="service-block_three-upper">
                    <div className="service-block_three-icon">
                      <img src="/assets/images/icons/service-6.svg" alt="" />
                    </div>
                    <h4 className="service-block_three-heading">
                      <Link href="/service-detail">Building <br /> Construction</Link>
                    </h4>
                  </div>
                  <div className="service-block_three-text">
                    After more than twenty years of success in the wood products industry.
                  </div>
                  <Link href="/service-detail" className="service-block_three-more">
                    Read More <i className="fa-classic fa-solid fa-arrow-right fa-fw"></i>
                  </Link>
                </div>
              </div>
            </div>
            
            <div className="service-three_btn text-center">
              <Link href="/services" className="theme-btn btn-style-three">
                <span className="btn-wrap">
                  <span className="text-one">
                    Load More <i><img src="/assets/images/icons/arrow-1.svg" alt="" /></i>
                  </span>
                  <span className="text-two">
                    Load More <i><img src="/assets/images/icons/arrow-1.svg" alt="" /></i>
                  </span>
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section>
      {/* End Service Three */}

      {/* Choose One */}
      <section className="choose-one">
        <div className="outer-container" style={{ backgroundImage: 'url(/assets/images/background/4.jpg)' }}>
          <div className="choose-one_pattern" style={{ backgroundImage: 'url(/assets/images/background/choose-pattern.png)' }}></div>
          <div className="auto-container">
            <div className="sec-title light">
              <div className="d-flex justify-content-between align-items-end flex-wrap">
                <div className="left-box">
                  <div className="sec-title_title">Why choose</div>
                  <h2 className="sec-title_heading">
                    Why You Choose <br /> The Constrc
                  </h2>
                </div>
                <div className="right-box">
                  {/* Button Box */}
                  <div className="choose-one_button d-flex justify-content-end">
                    <Link href="/about" className="theme-btn btn-style-one">
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
                  <div className="sec-title_text">
                    We improve the supply chain management process. Our <br /> commitment to sustainable construction helps improve <br /> the communities in which we build.
                  </div>
                </div>
              </div>
            </div>
            
            <div className="row clearfix">
              {/* Image Column */}
              <div className="choose-one_image-column col-lg-7 col-md-12 col-sm-12">
                <div className="choose-one_image-outer">
                  <div className="choose-one_image">
                    <img src="/assets/images/resource/choose-1.jpg" alt="" />
                  </div>
                </div>
                <div className="choose-one_image-two">
                  <img src="/assets/images/resource/choose-2.jpg" alt="" />
                </div>
              </div>
              
              {/* Content Column */}
              <div className="choose-one_content-column col-lg-5 col-md-12 col-sm-12">
                <div className="choose-one_content-outer">
                  {/* Choose Block One */}
                  <div className="choose-block_one">
                    <div className="choose-block_one-inner">
                      <div className="choose-block_one-icon">
                        <img src="/assets/images/icons/choose-1.svg" alt="" />
                      </div>
                      <h4 className="choose-block_one-title">Healthy & Safety</h4>
                      <div className="choose-block_one-text">
                        After more than twenty years of success in the wood products industry,the bilder family founded
                      </div>
                      <div className="choose-block_one-number">01</div>
                    </div>
                  </div>
                  
                  {/* Choose Block Two */}
                  <div className="choose-block_one">
                    <div className="choose-block_one-inner">
                      <div className="choose-block_one-icon">
                        <img src="/assets/images/icons/choose-2.svg" alt="" />
                      </div>
                      <h4 className="choose-block_one-title">Experience & Quality</h4>
                      <div className="choose-block_one-text">
                        After more than twenty years of success in the wood products industry,the bilder family founded
                      </div>
                      <div className="choose-block_one-number">02</div>
                    </div>
                  </div>
                  
                  {/* Choose Block Three */}
                  <div className="choose-block_one">
                    <div className="choose-block_one-inner">
                      <div className="choose-block_one-icon">
                        <img src="/assets/images/icons/choose-3.svg" alt="" />
                      </div>
                      <h4 className="choose-block_one-title">Professional Ethics</h4>
                      <div className="choose-block_one-text">
                        After more than twenty years of success in the wood products industry,the bilder family founded
                      </div>
                      <div className="choose-block_one-number">03</div>
                    </div>
                  </div>
                  
                  {/* Choose Block Four */}
                  <div className="choose-block_one">
                    <div className="choose-block_one-inner">
                      <div className="choose-block_one-icon">
                        <img src="/assets/images/icons/choose-4.svg" alt="" />
                      </div>
                      <h4 className="choose-block_one-title">Environmental</h4>
                      <div className="choose-block_one-text">
                        After more than twenty years of success in the wood products industry,the bilder family founded
                      </div>
                      <div className="choose-block_one-number">04</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* End Choose One */}

      {/* Project Three */}
      <section className="project-three">
        <div className="project-one_circle"></div>
        <div className="project-three_pattern" style={{ backgroundImage: 'url(/assets/images/icons/project-three.png)' }}></div>
        <div className="auto-container">
          <div className="sec-title title-anim">
            <div className="d-flex justify-content-between align-items-end flex-wrap">
              <div className="left-box">
                <div className="sec-title_title">Our Projects</div>
                <h2 className="sec-title_heading">We Provide Effective Solution</h2>
              </div>
              <div className="right-box">
                {/* Button Box */}
                <div className="project-three_button d-flex justify-content-end">
                  <Link href="/projects" className="theme-btn btn-style-three">
                    <span className="btn-wrap">
                      <span className="text-one">
                        View More <i><img src="/assets/images/icons/arrow-1.svg" alt="" /></i>
                      </span>
                      <span className="text-two">
                        View More <i><img src="/assets/images/icons/arrow-1.svg" alt="" /></i>
                      </span>
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          
          <div className="row clearfix">
            {/* Project Block One */}
            <div className="project-block_two col-lg-6 col-md-12 col-sm-12">
              <div className="project-block_two-inner">
                <div className="project-block_two-image">
                  <Link href="/project-detail"><img src="/assets/images/gallery/6.jpg" alt="" /></Link>
                </div>
                <div className="project-block_two-content">
                  <div className="project-block_two-tag">Architecture</div>
                  <h3 className="project-block_two-title">
                    <Link href="/project-detail">Develop Comprehensive</Link>
                  </h3>
                  <ul className="project-block_two-meta">
                    <li><span>Location: </span>United State</li>
                    <li><span>Builder: </span>Boxro Thamos</li>
                  </ul>
                </div>
              </div>
            </div>
            
            {/* Project Block Two */}
            <div className="project-block_two col-lg-6 col-md-12 col-sm-12">
              <div className="project-block_two-inner">
                <div className="project-block_two-image">
                  <Link href="/project-detail"><img src="/assets/images/gallery/7.jpg" alt="" /></Link>
                </div>
                <div className="project-block_two-content">
                  <div className="project-block_two-tag">Builder</div>
                  <h3 className="project-block_two-title">
                    <Link href="/project-detail">Work With Energetic Team</Link>
                  </h3>
                  <ul className="project-block_two-meta">
                    <li><span>Location: </span>United State</li>
                    <li><span>Builder: </span>Boxro Thamos</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Clients Box One */}
        <div className="clients-box_one">
          <div className="auto-container">
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
          </div>
        </div>
        {/* End Clients Box One */}
      </section>
      {/* End Project Three */}

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

      {/* Marketing Two */}
      <section className="marketing-two style-two">
        <div className="outer-container">
          <div className="brands-mode">
            <div className="brand-conetnt">
              <h1>MANAGEMENT</h1>
              <span className="marketing-two_icon"></span>
              <h1 className="light">DESIGN</h1>
              <span className="marketing-two_icon"></span>
              <h1>CONSTRUCTIC</h1>
              <span className="marketing-two_icon"></span>
            </div>
            <div className="brand-conetnt">
              <h1>MANAGEMENT</h1>
              <span className="marketing-two_icon"></span>
              <h1 className="light">DESIGN</h1>
              <span className="marketing-two_icon"></span>
              <h1>CONSTRUCTIC</h1>
              <span className="marketing-two_icon"></span>
            </div>
          </div>
          
          <div className="brands-mode">
            <div className="brand-conetnt two">
              <span className="marketing-two_icon"></span>
              <h1>design</h1>
              <span className="marketing-two_icon"></span>
              <h1 className="light">DEVELOPMENT</h1>
              <span className="marketing-two_icon"></span>
              <h1>QUALITY</h1>
              <span className="marketing-two_icon"></span>
              <h1>SAFETY</h1>
            </div>
            <div className="brand-conetnt two">
              <h1>design</h1>
              <span className="marketing-two_icon"></span>
              <h1 className="light">DEVELOPMENT</h1>
              <span className="marketing-two_icon"></span>
              <h1>QUALITY</h1>
              <span className="marketing-two_icon"></span>
              <h1>SAFETY</h1>
            </div>
          </div>
        </div>
      </section>
      {/* End Marketing Two */}

      {/* Testimonial Three */}
      <section className="testimonial-three">
        <div className="auto-container">
          <div className="testimonial-three_bg" style={{ backgroundImage: 'url(/assets/images/background/testimonial-three_bg.jpg)' }}>
            <div className="testimonial-one_shadow" style={{ backgroundImage: 'url(/assets/images/background/pattern-8.png)' }}></div>
          </div>
          <div className="inner-container">
            <div className="sec-title light">
              <div className="sec-title_title">Our Testimonial</div>
              <h2 className="sec-title_heading">
                Trusted by World <br /> Leading Companies
              </h2>
            </div>
            
            <div className="two-item_carousel swiper-container">
              <div className="swiper-wrapper">
                {/* Slide 1 */}
                <div className="swiper-slide">
                  <div className="testimonial-block_three">
                    <div className="testimonial-block_three-inner">
                      <div className="testimonial-block_three-rating">
                        <span className="fa fa-star"></span>
                        <span className="fa fa-star"></span>
                        <span className="fa fa-star"></span>
                        <span className="fa fa-star"></span>
                        <span className="fa fa-star"></span>
                      </div>
                      <h4 className="testimonial-block_three-title">&quot;Best Services in the London</h4>
                      <div className="testimonial-block_three-text">
                        &quot;They know their business and their approach, professional efforts and manner of doing business works well as a team player with the owners and their other consultants&apos;&apos;.
                      </div>
                      <div className="testimonial-block_three-author">
                        <div className="testimonial-block_three-image">
                          <img src="/assets/images/resource/author-7.png" alt="" />
                        </div>
                        John Smith <span>Construction Engineer</span>
                      </div>
                      <div className="testimonial-block_three-quote">
                        <img src="/assets/images/icons/quote.svg" alt="" />
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Slide 2 */}
                <div className="swiper-slide">
                  <div className="testimonial-block_three">
                    <div className="testimonial-block_three-inner">
                      <div className="testimonial-block_three-rating">
                        <span className="fa fa-star"></span>
                        <span className="fa fa-star"></span>
                        <span className="fa fa-star"></span>
                        <span className="fa fa-star"></span>
                        <span className="fa fa-star"></span>
                      </div>
                      <h4 className="testimonial-block_three-title">Services in the Morocco</h4>
                      <div className="testimonial-block_three-text">
                        &quot;They know their business and their approach, professional efforts and manner of doing business works well as a team player with the owners and their other consultants&apos;&apos;.
                      </div>
                      <div className="testimonial-block_three-author">
                        <div className="testimonial-block_three-image">
                          <img src="/assets/images/resource/author-6.png" alt="" />
                        </div>
                        John Smith <span>Construction Engineer</span>
                      </div>
                      <div className="testimonial-block_three-quote">
                        <img src="/assets/images/icons/quote.svg" alt="" />
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Slide 3 */}
                <div className="swiper-slide">
                  <div className="testimonial-block_three">
                    <div className="testimonial-block_three-inner">
                      <div className="testimonial-block_three-rating">
                        <span className="fa fa-star"></span>
                        <span className="fa fa-star"></span>
                        <span className="fa fa-star"></span>
                        <span className="fa fa-star"></span>
                        <span className="fa fa-star"></span>
                      </div>
                      <h4 className="testimonial-block_three-title">&quot;Best Services in the London</h4>
                      <div className="testimonial-block_three-text">
                        &quot;They know their business and their approach, professional efforts and manner of doing business works well as a team player with the owners and their other consultants&apos;&apos;.
                      </div>
                      <div className="testimonial-block_three-author">
                        <div className="testimonial-block_three-image">
                          <img src="/assets/images/resource/author-7.png" alt="" />
                        </div>
                        John Smith <span>Construction Engineer</span>
                      </div>
                      <div className="testimonial-block_three-quote">
                        <img src="/assets/images/icons/quote.svg" alt="" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Slider Arrows */}
              <div className="testimonial-three_arrow">
                <div className="two-item_carousel-prev fas fa-angle-left fa-fw"></div>
                <div className="two-item_carousel-next fas fa-angle-right fa-fw"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* End Testimonial Three */}

      {/* Contact Two */}
      <section className="contact-two">
        <div className="auto-container">
          <div className="inner-container" style={{ backgroundImage: 'url(/assets/images/background/pattern-9.png)' }}>
            <div className="row clearfix">
              {/* Form Column */}
              <div className="contact-two_form-column col-lg-6 col-md-12 col-sm-12">
                <div className="contact-two_form-outer" style={{ backgroundImage: 'url(/assets/images/background/pattern-10.png)' }}>
                  <div className="title-box">
                    <h2>Contact Now</h2>
                    <div className="text">
                      We work with ambitious leaders who want to define the <br /> future, not hide from it.
                    </div>
                  </div>
                  
                  {/* Contact Form Two */}
                  <div className="contact-form_two">
                    <form method="post" action="/contact" id="contact-form">
                      <div className="form-group">
                        <label>Name *</label>
                        <input type="text" name="username" placeholder="Write Name" required />
                      </div>
                      
                      <div className="form-group">
                        <label>Mobile No. *</label>
                        <input type="text" name="number" placeholder="+1 -- ---" required />
                      </div>
                      
                      <div className="form-group">
                        <label>Email address*</label>
                        <input type="email" name="email" placeholder="envato@gmail.com" required />
                      </div>
                      
                      <div className="form-group">
                        {/* Button Box */}
                        <button className="theme-btn btn-style-one">
                          <span className="btn-wrap">
                            <span className="text-one">
                              BOOK NOW <i><img src="/assets/images/icons/arrow-1.svg" alt="" /></i>
                            </span>
                            <span className="text-two">
                              BOOK NOW <i><img src="/assets/images/icons/arrow-1.svg" alt="" /></i>
                            </span>
                          </span>
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
              
              {/* Info Column */}
              <div className="contact-two_info-column col-lg-6 col-md-12 col-sm-12">
                <div className="contact-two_info-outer">
                  <div className="sec-title light">
                    <div className="sec-title_title">Contact Us</div>
                    <h2 className="sec-title_heading">
                      Let&apos;s Work <br /> Together
                    </h2>
                  </div>
                  
                  {/* Info Block Two */}
                  <div className="info-block_two">
                    <div className="info-block_two-inner">
                      <div className="info-block_two-icon fa-classic fa-solid fa-phone fa-fw"></div>
                      <strong>Call Us</strong>
                      +00 (47) 939 4888
                    </div>
                  </div>
                  
                  {/* Info Block Two */}
                  <div className="info-block_two">
                    <div className="info-block_two-inner">
                      <div className="info-block_two-icon fa-classic fa-solid fa-envelope fa-fw"></div>
                      <strong>Our Email Us</strong>
                      example@gmail.com
                    </div>
                  </div>
                  
                  {/* Info Block Two */}
                  <div className="info-block_two">
                    <div className="info-block_two-inner">
                      <div className="info-block_two-icon fa-classic fa-solid fa-clock fa-fw"></div>
                      <strong>Opening Hours</strong>
                      Mon - Fri: 09am - 07pm
                    </div>
                  </div>
                  
                  {/* Info Block Two */}
                  <div className="info-block_two">
                    <div className="info-block_two-inner">
                      <div className="info-block_two-icon fa-classic fa-solid fa-map fa-fw"></div>
                      <strong>Location</strong>
                      1712 Down Street Monmouth
                    </div>
                  </div>
                </div>
                
                <div className="contact-two_image">
                  <img src="/assets/images/resource/construction-worker.png" alt="" />
                </div>
              </div>
            </div>
          </div>
    </div>
      </section>
      {/* End Contact Two */}

      <Footer />
    </>
  );
}
