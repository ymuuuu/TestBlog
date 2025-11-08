'use client';

import Header from '../components/Header';
import Link from 'next/link';

export default function ComingSoon() {
  return (
    <>
      <Header />

      {/* Page Title */}
      <section className="page-title" style={{ backgroundImage: 'url(/assets/images/background/6.jpg)' }}>
        <div className="auto-container">
          <h2>Coming Soon</h2>
          <div className="d-flex justify-content-between align-items-center flex-wrap">
            <ul className="bread-crumb clearfix">
              <li><Link href="/">Home</Link></li>
              <li>Coming Soon</li>
            </ul>
            <div className="page-title_text">
              Whether you&apos;re building, remodeling, buying, or selling, we bring seamless project execution under one roof.
            </div>
          </div>
        </div>
      </section>
      {/* End Page Title */}

      {/* Coming Soon */}
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
              <div className="time-counter">
                {/* Time Countdown */}
                <div className="time-countdown clearfix" data-countdown="2027/12/1"></div>

                {/* Clock / Bg Clock */}
                <div className="clock-wrapper">
                  <div className="clock-base">
                    <div className="click-indicator">
                      <div><span></span></div>
                      <div><span></span></div>
                      <div><span></span></div>
                      <div><span></span></div>
                      <div><span></span></div>
                      <div><span></span></div>
                      <div><span></span></div>
                      <div><span></span></div>
                      <div><span></span></div>
                      <div><span></span></div>
                      <div><span></span></div>
                      <div><span></span></div>
                    </div>
                    <div className="clock-hour"></div>
                    <div className="clock-minute"></div>
                    <div className="clock-second"></div>
                    <div className="clock-center"></div>
                  </div>
                </div>
              </div>
              {/* Emailed Form */}
              <div className="emailed-form">
                <h3>Our Website is under construction.</h3>
                <div className="text">
                  stay tuned for something amazing! <br />
                  Subscribe to be notified
                </div>
                <form method="post" action="/">
                  <div className="form-group">
                    <input type="email" name="email" placeholder="Your Email" required />
                    <button type="submit">
                      <span className="fa fa-paper-plane"></span>
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* End Coming Soon */}
    </>
  );
}

