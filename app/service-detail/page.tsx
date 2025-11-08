'use client';

import Header from '../components/Header';
import Footer from '../components/Footer';
import Link from 'next/link';

export default function ServiceDetail() {
  return (
    <>
      <Header />

      {/* Page Title */}
      <section className="page-title" style={{ backgroundImage: 'url(/assets/images/background/6.jpg)' }}>
        <div className="auto-container">
          <h2>Service Details</h2>
          <div className="d-flex justify-content-between align-items-center flex-wrap">
            <ul className="bread-crumb clearfix">
              <li><Link href="/">Home</Link></li>
              <li>Service Details</li>
            </ul>
            <div className="page-title_text">
              Whether you&apos;re building, remodeling, buying, or selling, we bring seamless project execution under one roof.
            </div>
          </div>
        </div>
      </section>
      {/* End Page Title */}

      {/* Sidebar Page Container */}
      <div className="sidebar-page-container left-sidebar">
        <div className="auto-container">
          <div className="row clearfix">
            {/* Sidebar Side */}
            <div className="sidebar-side col-lg-4 col-md-12 col-sm-12">
              <aside className="sidebar sticky-top">
                {/* Category Widget */}
                <div className="sidebar-widget category-widget">
                  <div className="sidebar-title">
                    <h4>More Services</h4>
                  </div>
                  <ul className="category-list">
                    <li>
                      <Link href="#">
                        <span className="icon fa-classic fa-solid fa-arrow-right fa-fw"></span>
                        Building Construction
                      </Link>
                    </li>
                    <li>
                      <Link href="#">
                        <span className="icon fa-classic fa-solid fa-arrow-right fa-fw"></span>
                        Residential Construction
                      </Link>
                    </li>
                    <li>
                      <Link href="#">
                        <span className="icon fa-classic fa-solid fa-arrow-right fa-fw"></span>
                        commercial Construction
                      </Link>
                    </li>
                    <li>
                      <Link href="#">
                        <span className="icon fa-classic fa-solid fa-arrow-right fa-fw"></span>
                        Architecture Design
                      </Link>
                    </li>
                    <li>
                      <Link href="#">
                        <span className="icon fa-classic fa-solid fa-arrow-right fa-fw"></span>
                        Renovation Planning
                      </Link>
                    </li>
                    <li>
                      <Link href="#">
                        <span className="icon fa-classic fa-solid fa-arrow-right fa-fw"></span>
                        Structural Engineering
                      </Link>
                    </li>
                  </ul>
                </div>
                
                {/* Rating Widget */}
                <div className="sidebar-widget rating-widget">
                  <div className="widget-content" style={{ backgroundImage: 'url(/assets/images/icons/rating-shadow.png)' }}>
                    <div className="rating-widget_rating">4.9</div>
                    <div className="rating-widget_authors">
                      <ul>
                        <li><img src="/assets/images/main-slider/author-1.png" alt="" /></li>
                        <li><img src="/assets/images/main-slider/author-2.png" alt="" /></li>
                        <li><img src="/assets/images/main-slider/author-3.png" alt="" /></li>
                        <li><img src="/assets/images/main-slider/author-4.png" alt="" /></li>
                      </ul>
                      <div className="rating-widget_reviews">
                        Our Client <br /> (5k + Reviews)
                      </div>
                    </div>
                    <div className="company-logo">
                      <img src="/assets/images/icons/logo-icon.png" alt="" />
                    </div>
                    <h4 className="rating-widget_phone">
                      Any Questions? Let&apos;s talk <a href="#">+(084) 123 - 456 88</a>
                    </h4>
                    {/* Button Box */}
                    <div className="rating-widget_title-button">
                      <Link href="/about" className="theme-btn btn-style-one">
                        <span className="btn-wrap">
                          <span className="text-one">
                            get a call back <i><img src="/assets/images/icons/arrow-1.svg" alt="" /></i>
                          </span>
                          <span className="text-two">
                            get a call back <i><img src="/assets/images/icons/arrow-1.svg" alt="" /></i>
                          </span>
                        </span>
                      </Link>
                    </div>
                  </div>
                </div>
              </aside>
            </div>
            
            {/* Content Side */}
            <div className="content-side col-lg-8 col-md-12 col-sm-12">
              {/* Service Detail */}
              <div className="service-detail">
                <div className="service-detail_inner">
                  <div className="service-detail_image">
                    <img src="/assets/images/resource/service-3.jpg" alt="" />
                    <div className="service-detail_tag">
                      <span>Commercial Construction</span>
                    </div>
                  </div>
                  <h2 className="service-detail_title">About the service</h2>
                  <p>
                    Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudtium, totam rem aperiam, eaque ipsa quae ab illoentore veritatis et quasi architecto.
                  </p>
                  <p>
                    Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia conseuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloreue laudantium, totam rem aperiam.
                  </p>
                  <h3 className="service-detail_subtitle">Why choose us</h3>
                  <p>
                    Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia conseuntur magni.
                  </p>
                  <div className="service-detail_blocks">
                    <div className="row clearfix">
                      {/* Service Block Two */}
                      <div className="service-block_two col-lg-6 col-md-6 col-sm-12">
                        <div className="service-block_two-inner">
                          <div className="service-block_two-number">01</div>
                          <strong>Expertise</strong>
                          Our goal is zero incidents and our lost time frequency rate is industry leading.
                        </div>
                      </div>
                      
                      {/* Service Block Two */}
                      <div className="service-block_two col-lg-6 col-md-6 col-sm-12">
                        <div className="service-block_two-inner">
                          <div className="service-block_two-number">02</div>
                          <strong>Collaboration</strong>
                          Our goal is zero incidents and our lost time frequency rate is industry leading.
                        </div>
                      </div>
                      
                      {/* Service Block Two */}
                      <div className="service-block_two col-lg-6 col-md-6 col-sm-12">
                        <div className="service-block_two-inner">
                          <div className="service-block_two-number">03</div>
                          <strong>Design & Work</strong>
                          Our goal is zero incidents and our lost time frequency rate is industry leading.
                        </div>
                      </div>
                      
                      {/* Service Block Two */}
                      <div className="service-block_two col-lg-6 col-md-6 col-sm-12">
                        <div className="service-block_two-inner">
                          <div className="service-block_two-number">04</div>
                          <strong>Complete & Maintenance</strong>
                          Our goal is zero incidents and our lost time frequency rate is industry leading.
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="service-detail_image-two">
                    <img src="/assets/images/resource/service-4.jpg" alt="" />
                  </div>
                  
                  <h3 className="service-detail_subtitle">Services offered</h3>
                  
                  <ul className="service-detail_list">
                    <li>
                      <i className="fa-classic fa-solid fa-arrow-up-right-from-square fa-fw"></i>
                      <span>Conceptual Design:</span>
                      We start by developing preliminary design concepts that explore various spatial arrangements, circulation patterns, and architectural styles. These initial concepts serve as the foundation.
                    </li>
                    <li>
                      <i className="fa-classic fa-solid fa-arrow-up-right-from-square fa-fw"></i>
                      <span>Schematic Design:</span>
                      Building upon the approved concept, we develop sche- matic drawings that articulate the overall form, massing, and spatial organization of the project. These drawings provide a clear understand.
                    </li>
                    <li>
                      <i className="fa-classic fa-solid fa-arrow-up-right-from-square fa-fw"></i>
                      <span>Design Development:</span>
                      During this phase, we delve into the details, refining the design and incorporating structural, mechanical, and electrical considerations. We produce detailed drawings.
                    </li>
                  </ul>
                  
                  <div className="service-detail_accordian">
                    {/* Accordion Box */}
                    <ul className="accordion-box style-two">
                      {/* Block */}
                      <li className="accordion block active-block">
                        <div className="acc-btn active">
                          <div className="icon-outer">
                            <span className="icon fa-classic fa-solid fa-arrow-right fa-fw"></span>
                          </div>
                          What the first step of the home buying process?
                        </div>
                        <div className="acc-content current">
                          <div className="content">
                            <div className="text">
                              Fusce lacinia nulla consequat porta et viverra velit etiam, varius per condimentum lacus ultricies a placerat venatis semper donec id accumsan augue eleifend facili sis. Lectus arcu odio erat congue sociosqu ultricies
                            </div>
                          </div>
                        </div>
                      </li>
                      
                      {/* Block */}
                      <li className="accordion block">
                        <div className="acc-btn">
                          <div className="icon-outer">
                            <span className="icon fa-classic fa-solid fa-arrow-right fa-fw"></span>
                          </div>
                          How long does it take to buy a home?
                        </div>
                        <div className="acc-content">
                          <div className="content">
                            <div className="text">
                              Fusce lacinia nulla consequat porta et viverra velit etiam, varius per condimentum lacus ultricies a placerat venatis semper donec id accumsan augue eleifend facili sis. Lectus arcu odio erat congue sociosqu ultricies
                            </div>
                          </div>
                        </div>
                      </li>
                      
                      {/* Block */}
                      <li className="accordion block">
                        <div className="acc-btn">
                          <div className="icon-outer">
                            <span className="icon fa-classic fa-solid fa-arrow-right fa-fw"></span>
                          </div>
                          What is a seller&apos;s market?
                        </div>
                        <div className="acc-content">
                          <div className="content">
                            <div className="text">
                              Fusce lacinia nulla consequat porta et viverra velit etiam, varius per condimentum lacus ultricies a placerat venatis semper donec id accumsan augue eleifend facili sis. Lectus arcu odio erat congue sociosqu ultricies
                            </div>
                          </div>
                        </div>
                      </li>
                      
                      {/* Block */}
                      <li className="accordion block">
                        <div className="acc-btn">
                          <div className="icon-outer">
                            <span className="icon fa-classic fa-solid fa-arrow-right fa-fw"></span>
                          </div>
                          What kind of credit score do I need to buy a home?
                        </div>
                        <div className="acc-content">
                          <div className="content">
                            <div className="text">
                              Fusce lacinia nulla consequat porta et viverra velit etiam, varius per condimentum lacus ultricies a placerat venatis semper donec id accumsan augue eleifend facili sis. Lectus arcu odio erat congue sociosqu ultricies
                            </div>
                          </div>
                        </div>
                      </li>
                      
                      {/* Block */}
                      <li className="accordion block">
                        <div className="acc-btn">
                          <div className="icon-outer">
                            <span className="icon fa-classic fa-solid fa-arrow-right fa-fw"></span>
                          </div>
                          How much do I need for a down payment?
                        </div>
                        <div className="acc-content">
                          <div className="content">
                            <div className="text">
                              Fusce lacinia nulla consequat porta et viverra velit etiam, varius per condimentum lacus ultricies a placerat venatis semper donec id accumsan augue eleifend facili sis. Lectus arcu odio erat congue sociosqu ultricies
                            </div>
                          </div>
                        </div>
                      </li>
                      
                      {/* Block */}
                      <li className="accordion block">
                        <div className="acc-btn">
                          <div className="icon-outer">
                            <span className="icon fa-classic fa-solid fa-arrow-right fa-fw"></span>
                          </div>
                          What is earnest money?
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
            </div>
          </div>
        </div>
      </div>
      {/* End Sidebar Page Container */}

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

