'use client';

import Header from '../components/Header';
import Footer from '../components/Footer';
import Link from 'next/link';

export default function ProjectDetail() {
  return (
    <>
      <Header />

      {/* Page Title */}
      <section className="page-title" style={{ backgroundImage: 'url(/assets/images/background/6.jpg)' }}>
        <div className="auto-container">
          <h2>Project Details</h2>
          <div className="d-flex justify-content-between align-items-center flex-wrap">
            <ul className="bread-crumb clearfix">
              <li><Link href="/">Home</Link></li>
              <li>Project Details</li>
            </ul>
            <div className="page-title_text">
              Whether you&apos;re building, remodeling, buying, or selling, we bring seamless project execution under one roof.
            </div>
          </div>
        </div>
      </section>
      {/* End Page Title */}

      {/* Project Detail */}
      <section className="project-detail" style={{ backgroundImage: 'url(/assets/images/background/pattern-13.png)' }}>
        <div className="auto-container">
          <div className="project-detail_location">
            <i><img src="/assets/images/icons/location.svg" alt="" /></i> Spotswood, NJ
          </div>
          <h2 className="project-detail_heading">Mixed-Use Development</h2>
          <div className="project-detail_image">
            <img src="/assets/images/gallery/8.jpg" alt="" />
          </div>
          <ul className="project-detail_list">
            <li>
              <span className="icon"><img src="/assets/images/icons/project-1.svg" alt="" /></span>
              Status
              <strong>Under Construction</strong>
            </li>
            <li>
              <span className="icon"><img src="/assets/images/icons/project-2.svg" alt="" /></span>
              Project Type
              <strong>Apartment</strong>
            </li>
            <li>
              <span className="icon"><img src="/assets/images/icons/project-3.svg" alt="" /></span>
              Project Area
              <strong>35,346.74 Sq. Ft.</strong>
            </li>
            <li>
              <span className="icon"><img src="/assets/images/icons/project-4.svg" alt="" /></span>
              Commencement date
              <strong>28 May, 2023</strong>
            </li>
            <li>
              <span className="icon"><img src="/assets/images/icons/project-5.svg" alt="" /></span>
              Price Range
              <strong>$800k – $2.9M</strong>
            </li>
          </ul>
          <h3>Project description</h3>
          <p>
            Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia conseuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloreue laudantium, totam rem aperiam.
          </p>
          <p>
            Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur quae ab illoentore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloreue laudantium
          </p>
          <div className="middle-box">
            <div className="row clearfix">
              {/* Column */}
              <div className="column col-lg-7 col-md-12 col-sm-12">
                <div className="project-detail_image">
                  <img src="/assets/images/gallery/9.jpg" alt="" />
                </div>
              </div>
              {/* Column */}
              <div className="column col-lg-5 col-md-12 col-sm-12">
                <h3>Key Details</h3>
                <ul className="project-detail_list-two">
                  <li><span>Location: </span>Central Business District.</li>
                  <li><span>Total Built-Up Area: </span>350,000 sq. ft.</li>
                  <li><span>Number of Floors: </span>20, including two underground levels for parking.</li>
                  <li><span>Special Features: </span>Vertical garden facade, collaborative workspaces, and an energy-efficient HVAC system.</li>
                  <li><span>Amenities: </span>Gym, café, daycare, and rooftop event space.</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="row clearfix">
            {/* Column */}
            <div className="column col-lg-7 col-md-12 col-sm-12">
              <h3>Our approach & solution</h3>
              <p>
                Developing and maintaining transformation programs in finance, logistics/supply chains, information technology, training and procurement to help foster cost effectiveness and efficiency without the loss of Defense capability. Taking advantage of opportunities to help reduce costs while maintaining operational capability through partnerships.
              </p>
            </div>
            {/* Column */}
            <div className="column col-lg-5 col-md-12 col-sm-12">
              <h3>result</h3>
              <p>
                Taking advantage of opportunities to help reduce costs while maintaining operational capability through partnerships. Developing and maintaining transformation programs in finance, logistics/supply chains, information technology, training and procurement to help foster cost effectiveness and efficiency without the loss of Defense capability.
              </p>
            </div>
          </div>
          <div className="more-projects d-flex justify-content-between align-items-center flex-wrap">
            <a href="#"><i className="fa-classic fa-solid fa-angles-left fa-fw"></i> prev project</a>
            <a href="#">next project <i className="fa-classic fa-solid fa-angles-right fa-fw"></i></a>
          </div>
        </div>
      </section>
      {/* End Project Detail */}

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

