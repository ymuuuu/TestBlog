import Header from '../../components/Header';
import Footer from '../../components/Footer';
import MarketingOne from '../../components/MarketingOne';
import ClientsBoxOne from '../../components/ClientsBoxOne';
import Link from 'next/link';
import { attributes as post1, react as Post1Content } from '../../../content/blog/2024-11-14-modern-construction-techniques.md';
import { attributes as post2, react as Post2Content } from '../../../content/blog/2024-11-10-sustainable-building-practices.md';

// Generate static params for all blog posts
export function generateStaticParams() {
  return [
    { slug: '2024-11-14-modern-construction-techniques' },
    { slug: '2024-11-10-sustainable-building-practices' },
  ];
}

export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;

  // Map slugs to their respective posts
  const posts: any = {
    '2024-11-14-modern-construction-techniques': {
      attributes: post1,
      Content: Post1Content
    },
    '2024-11-10-sustainable-building-practices': {
      attributes: post2,
      Content: Post2Content
    },
  };

  const currentPost = posts[slug];

  if (!currentPost) {
    return (
      <>
        <Header />
        <div className="auto-container" style={{ padding: '100px 0', textAlign: 'center' }}>
          <h2>Blog Post Not Found</h2>
          <Link href="/blog" className="theme-btn btn-style-one">
            <span className="btn-wrap">
              <span className="text-one">Back to Blog</span>
              <span className="text-two">Back to Blog</span>
            </span>
          </Link>
        </div>
        <Footer />
      </>
    );
  }

  const { attributes, Content } = currentPost;

  return (
    <>
      <Header />

      {/* Page Title */}
      <section className="page-title" style={{ backgroundImage: 'url(/assets/images/background/6.jpg)' }}>
        <div className="auto-container">
          <h2>Blog Details</h2>
          <div className="d-flex justify-content-between align-items-center flex-wrap">
            <ul className="bread-crumb clearfix">
              <li><Link href="/">Home</Link></li>
              <li><Link href="/blog">Blog</Link></li>
              <li>{attributes.title}</li>
            </ul>
            <div className="page-title_text">
              Insights from construction experts
            </div>
          </div>
        </div>
      </section>
      {/* End Page Title */}

      {/* Sidebar Page Container */}
      <div className="sidebar-page-container">
        <div className="auto-container">
          <div className="row clearfix">

            {/* Content Side */}
            <div className="content-side col-lg-8 col-md-12 col-sm-12">
              <div className="blog-detail">
                <div className="blog-detail_inner">
                  <div className="blog-detail_image">
                    <img src={attributes.featured_image} alt={attributes.title} />
                  </div>
                  <div className="blog-detail_content">
                    <div className="blog-detail_date">
                      {new Date(attributes.date).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                      })}
                      {attributes.author && <span> • By {attributes.author}</span>}
                    </div>
                    <h2 className="blog-detail_heading">{attributes.title}</h2>
                    
                    {attributes.categories && attributes.categories.length > 0 && (
                      <div className="blog-detail_categories" style={{ marginBottom: '20px' }}>
                        {attributes.categories.map((cat: string, index: number) => (
                          <span key={index} className="category-tag" style={{
                            display: 'inline-block',
                            background: '#ff6600',
                            color: '#fff',
                            padding: '5px 15px',
                            marginRight: '10px',
                            borderRadius: '3px',
                            fontSize: '14px'
                          }}>
                            {cat}
                          </span>
                        ))}
                      </div>
                    )}
                    
                    <div className="blog-detail_text">
                      <Content />
                    </div>

                    {attributes.tags && attributes.tags.length > 0 && (
                      <div className="blog-detail_tags" style={{ marginTop: '30px', paddingTop: '30px', borderTop: '1px solid #e0e0e0' }}>
                        <strong>Tags: </strong>
                        {attributes.tags.map((tag: string, index: number) => (
                          <span key={index} style={{ marginRight: '10px' }}>
                            #{tag}
                          </span>
                        ))}
                      </div>
                    )}

                    <div className="blog-detail_navigation" style={{ marginTop: '40px' }}>
                      <Link href="/blog" className="theme-btn btn-style-one">
                        <span className="btn-wrap">
                          <span className="text-one">
                            <i className="fa fa-arrow-left" style={{ marginRight: '10px' }}></i>
                            Back to Blog
                          </span>
                          <span className="text-two">
                            <i className="fa fa-arrow-left" style={{ marginRight: '10px' }}></i>
                            Back to Blog
                          </span>
                        </span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Sidebar Side */}
            <div className="sidebar-side col-lg-4 col-md-12 col-sm-12">
              <aside className="sidebar">
                
                {/* Category Widget */}
                <div className="sidebar-widget categories-widget">
                  <div className="widget-content">
                    <div className="sidebar-title">
                      <h5>Categories</h5>
                    </div>
                    <ul className="cat-list">
                      <li><a href="#">Construction</a></li>
                      <li><a href="#">Technology</a></li>
                      <li><a href="#">Sustainability</a></li>
                      <li><a href="#">Design</a></li>
                      <li><a href="#">Safety</a></li>
                    </ul>
                  </div>
                </div>

                {/* Contact Widget */}
                <div className="sidebar-widget contact-widget">
                  <div className="widget-content" style={{ backgroundImage: 'url(/assets/images/background/pattern-10.png)' }}>
                    <div className="sidebar-title">
                      <h5>Get In Touch</h5>
                    </div>
                    <div className="text">Have a project in mind? Contact us today!</div>
                    <ul className="contact-list">
                      <li>
                        <span className="icon fa fa-phone"></span>
                        <strong>Phone</strong>
                        +00 (47) 939 4888
                      </li>
                      <li>
                        <span className="icon fa fa-envelope"></span>
                        <strong>Email</strong>
                        example@gmail.com
                      </li>
                    </ul>
                    <Link href="/contact" className="theme-btn btn-style-one">
                      <span className="btn-wrap">
                        <span className="text-one">Contact Us</span>
                        <span className="text-two">Contact Us</span>
                      </span>
                    </Link>
                  </div>
                </div>

              </aside>
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

