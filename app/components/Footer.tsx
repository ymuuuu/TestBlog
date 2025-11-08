import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="footer-three" style={{ backgroundImage: 'url(/assets/images/background/footer.png)' }}>
      <div className="footer-three_pattern" style={{ backgroundImage: 'url(/assets/images/background/pattern-12.png)' }}></div>
      <div className="footer-three_shadow" style={{ backgroundImage: 'url(/assets/images/background/pattern-11.png)' }}></div>
      <div className="auto-container">
        {/* Widgets Section */}
        <div className="widgets-section">
          <div className="row clearfix">
            {/* Big Column */}
            <div className="big-column col-lg-6 col-md-12 col-sm-12">
              <div className="row clearfix">
                {/* Footer Column */}
                <div className="footer-three_column col-lg-6 col-md-6 col-sm-12">
                  <div className="logo-widget">
                    <div className="footer-three_logo">
                      <Link href="/">
                        <img src="/assets/images/logo.svg" alt="" title="" />
                      </Link>
                    </div>
                    <div className="footer-three_text">
                      our clients, oue employees, and our community through our commitmrnt to leadership, excellence in craft, and attention to detail.
                    </div>
                  </div>
                </div>

                {/* Footer Column */}
                <div className="footer-three_column col-lg-6 col-md-6 col-sm-12">
                  <div className="links-widget">
                    <h4 className="footer-three_widget-title">Our Services</h4>
                    <ul className="footer-three_links">
                      <li><Link href="/services">Building Construction</Link></li>
                      <li><Link href="/services">Architecture Design</Link></li>
                      <li><Link href="/services">Project Management</Link></li>
                      <li><Link href="/services">Building Maintenance</Link></li>
                      <li><Link href="/services">Flooring & Roofing</Link></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Big Column */}
            <div className="big-column col-lg-6 col-md-12 col-sm-12">
              <div className="row clearfix">
                {/* Footer Column */}
                <div className="footer-three_column col-lg-6 col-md-6 col-sm-12">
                  <div className="info-widget">
                    <h4 className="footer-three_widget-title">our contact</h4>
                    <ul className="footer-three_contacts">
                      <li>
                        <span className="icon fas fa-map-marker-alt fa-fw"></span>
                        1712 Down Street Monmouth Alex Junction, Florida 0852
                      </li>
                      <li>
                        <span className="icon fas fa-phone fa-fw"></span>
                        +(123) 456 789 00
                      </li>
                      <li>
                        <span className="icon fas fa-envelope fa-fw"></span>
                        info@example.com
                      </li>
                    </ul>
                    {/* Social Box */}
                    <div className="footer-three_socials">
                      <span>Follow Us:</span>
                      <a href="https://facebook.com/" target="_blank" rel="noopener noreferrer">
                        <i className="fa-brands fa-facebook-f"></i>
                      </a>
                      <a href="https://instagram.com/" target="_blank" rel="noopener noreferrer">
                        <i className="fa-brands fa-instagram"></i>
                      </a>
                      <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
                        <i className="fa-brands fa-twitter"></i>
                      </a>
                      <a href="https://dribbble.com/" target="_blank" rel="noopener noreferrer">
                        <i className="fa-brands fa-dribbble"></i>
                      </a>
                    </div>
                  </div>
                </div>

                {/* Footer Column */}
                <div className="footer-three_column col-lg-5 col-md-5 col-sm-12">
                  <div className="post-widget">
                    <h4 className="footer-three_widget-title">Our News</h4>
                    {/* News Widget Block */}
                    <div className="news-widget-block">
                      <div className="news-widget_image">
                        <img src="/assets/images/resource/post-thumb-1.jpg" alt="" />
                      </div>
                      <h6 className="news-widget_title">
                        <Link href="/blog">Exploring Health Coaching Techniques</Link>
                      </h6>
                      <div className="news-widget_post-date">12 January, 2025</div>
                    </div>
                    {/* News Widget Block */}
                    <div className="news-widget-block">
                      <div className="news-widget_image">
                        <img src="/assets/images/resource/post-thumb-2.jpg" alt="" />
                      </div>
                      <h6 className="news-widget_title">
                        <Link href="/blog">How Can You Growing Agriculture</Link>
                      </h6>
                      <div className="news-widget_post-date">18 Feb, 2025</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="footer-three_bottom d-flex justify-content-center align-items-center">
            {/* Copyright */}
            <div className="footer-three_copyright">
              Copyright &copy; 2025 - All rights Reserved
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

