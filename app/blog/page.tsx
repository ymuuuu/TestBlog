'use client';

import Header from '../components/Header';
import Footer from '../components/Footer';
import MarketingOne from '../components/MarketingOne';
import ClientsBoxOne from '../components/ClientsBoxOne';
import Link from 'next/link';
import { attributes as post1 } from '../../content/blog/2024-11-14-modern-construction-techniques.md';
import { attributes as post2 } from '../../content/blog/2024-11-10-sustainable-building-practices.md';

export default function Blog() {
  // Array of blog posts
  const blogPosts = [
    { ...post1, slug: '2024-11-14-modern-construction-techniques' },
    { ...post2, slug: '2024-11-10-sustainable-building-practices' },
  ];

  // Sort posts by date (newest first)
  const sortedPosts = blogPosts.sort((a: any, b: any) => 
    new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  return (
    <>
      <Header />

      {/* Page Title */}
      <section className="page-title" style={{ backgroundImage: 'url(/assets/images/background/6.jpg)' }}>
        <div className="auto-container">
          <h2>Blog</h2>
          <div className="d-flex justify-content-between align-items-center flex-wrap">
            <ul className="bread-crumb clearfix">
              <li><Link href="/">Home</Link></li>
              <li>Blog</li>
            </ul>
            <div className="page-title_text">
              Insights, tips, and industry news from construction experts
            </div>
          </div>
        </div>
      </section>
      {/* End Page Title */}

      {/* Sidebar Page Container */}
      <div className="sidebar-page-container">
        <div className="auto-container">
          <div className="row clearfix">

            {/* Content Side / Blog List */}
            <div className="content-side col-lg-12 col-md-12 col-sm-12">
              <div className="row clearfix">

                {sortedPosts.map((post: any, index: number) => (
                  <div key={index} className="news-block_two col-lg-6 col-md-6 col-sm-12">
                    <div className="news-block_two-inner">
                      <div className="news-block_two-image">
                        <Link href={`/blog/${post.slug}`}>
                          <img src={post.featured_image} alt={post.title} />
                        </Link>
                      </div>
                      <div className="news-block_two-content">
                        <div className="news-block_two-more">
                          {post.categories && post.categories[0] && (
                            <span className="category">{post.categories[0]}</span>
                          )}
                        </div>
                        <h3 className="news-block_two-heading">
                          <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                        </h3>
                        <div className="news-block_two-text">{post.excerpt}</div>
                        <div className="news-block_two-more">
                          <Link href={`/blog/${post.slug}`}>
                            Read More <i className="fa fa-long-arrow-alt-right"></i>
                          </Link>
                        </div>
                        <div className="news-block_two-date">
                          {new Date(post.date).toLocaleDateString('en-US', {
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric'
                          })}
                          {post.author && <span> • By {post.author}</span>}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}

              </div>
            </div>

          </div>
        </div>
      </div>
      {/* End Sidebar Page Container */}

      <MarketingOne />
      <ClientsBoxOne />

      <Footer />
    </>
  );
}

