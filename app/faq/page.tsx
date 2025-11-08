'use client';

import Header from '../components/Header';
import Footer from '../components/Footer';
import Link from 'next/link';

export default function FAQ() {
  return (
    <>
      <Header />

      {/* Page Title */}
      <section className="page-title" style={{ backgroundImage: 'url(/assets/images/background/6.jpg)' }}>
        <div className="auto-container">
          <h2>FAQ&apos;s</h2>
          <div className="d-flex justify-content-between align-items-center flex-wrap">
            <ul className="bread-crumb clearfix">
              <li><Link href="/">Home</Link></li>
              <li>FAQ&apos;s</li>
            </ul>
            <div className="page-title_text">
              Whether you&apos;re building, remodeling, buying, or selling, we bring seamless project execution under one roof.
            </div>
          </div>
        </div>
      </section>
      {/* End Page Title */}

      {/* Faq One */}
      <section className="faq-one style-two" style={{ backgroundImage: 'url(/assets/images/background/pattern-13.png)' }}>
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
                <div className="sec-title title-anim">
                  <div className="sec-title_title">Construction Company</div>
                  <h2 className="sec-title_heading">regular Question for Customer </h2>
                </div>
                
                {/* Accordion Box */}
                <ul className="accordion-box style-two">
                  {/* Block */}
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
                  
                  {/* Block */}
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
                  
                  {/* Block */}
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
                  
                  {/* Block */}
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
                      What the first step of the home buying process?
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
      </section>
      {/* End Faq One */}

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

