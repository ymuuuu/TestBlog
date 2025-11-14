import Header from '../../components/Header';
import Footer from '../../components/Footer';
import MarketingOne from '../../components/MarketingOne';
import ClientsBoxOne from '../../components/ClientsBoxOne';
import Link from 'next/link';
import { attributes as project1, react as Project1Content } from '../../../content/projects/downtown-corporate-tower.md';
import { attributes as project2, react as Project2Content } from '../../../content/projects/riverside-residential-complex.md';

// Generate static params for all projects
export function generateStaticParams() {
  return [
    { slug: 'downtown-corporate-tower' },
    { slug: 'riverside-residential-complex' },
  ];
}

export default async function ProjectDetail({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;

  // Map slugs to their respective projects
  const projects: any = {
    'downtown-corporate-tower': {
      attributes: project1,
      Content: Project1Content
    },
    'riverside-residential-complex': {
      attributes: project2,
      Content: Project2Content
    },
  };

  const currentProject = projects[slug];

  if (!currentProject) {
    return (
      <>
        <Header />
        <div className="auto-container" style={{ padding: '100px 0', textAlign: 'center' }}>
          <h2>Project Not Found</h2>
          <Link href="/projects" className="theme-btn btn-style-one">
            <span className="btn-wrap">
              <span className="text-one">Back to Projects</span>
              <span className="text-two">Back to Projects</span>
            </span>
          </Link>
        </div>
        <Footer />
      </>
    );
  }

  const { attributes, Content } = currentProject;

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
              <li><Link href="/projects">Projects</Link></li>
              <li>{attributes.title}</li>
            </ul>
            <div className="page-title_text">
              {attributes.categories && attributes.categories.join(' • ')}
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
              <div className="service-detail">
                <div className="service-detail_inner">
                  <div className="service-detail_image">
                    <img src={attributes.featured_image} alt={attributes.title} />
                  </div>
                  <h2 className="service-detail_heading">{attributes.title}</h2>
                  
                  {/* Project Info Grid */}
                  <div className="row clearfix" style={{ marginBottom: '30px' }}>
                    {attributes.location && (
                      <div className="col-lg-6 col-md-6 col-sm-12">
                        <div style={{ padding: '15px', background: '#f9f9f9', marginBottom: '15px' }}>
                          <strong><i className="fa fa-map-marker-alt" style={{ marginRight: '10px', color: '#ff6600' }}></i>Location:</strong> {attributes.location}
                        </div>
                      </div>
                    )}
                    {attributes.client && (
                      <div className="col-lg-6 col-md-6 col-sm-12">
                        <div style={{ padding: '15px', background: '#f9f9f9', marginBottom: '15px' }}>
                          <strong><i className="fa fa-user" style={{ marginRight: '10px', color: '#ff6600' }}></i>Client:</strong> {attributes.client}
                        </div>
                      </div>
                    )}
                    {attributes.value && (
                      <div className="col-lg-6 col-md-6 col-sm-12">
                        <div style={{ padding: '15px', background: '#f9f9f9', marginBottom: '15px' }}>
                          <strong><i className="fa fa-dollar-sign" style={{ marginRight: '10px', color: '#ff6600' }}></i>Project Value:</strong> {attributes.value}
                        </div>
                      </div>
                    )}
                    {attributes.completion_date && (
                      <div className="col-lg-6 col-md-6 col-sm-12">
                        <div style={{ padding: '15px', background: '#f9f9f9', marginBottom: '15px' }}>
                          <strong><i className="fa fa-calendar-check" style={{ marginRight: '10px', color: '#ff6600' }}></i>Completed:</strong> {attributes.completion_date}
                        </div>
                      </div>
                    )}
                    {attributes.duration && (
                      <div className="col-lg-6 col-md-6 col-sm-12">
                        <div style={{ padding: '15px', background: '#f9f9f9', marginBottom: '15px' }}>
                          <strong><i className="fa fa-clock" style={{ marginRight: '10px', color: '#ff6600' }}></i>Duration:</strong> {attributes.duration}
                        </div>
                      </div>
                    )}
                    {attributes.builder && (
                      <div className="col-lg-6 col-md-6 col-sm-12">
                        <div style={{ padding: '15px', background: '#f9f9f9', marginBottom: '15px' }}>
                          <strong><i className="fa fa-hard-hat" style={{ marginRight: '10px', color: '#ff6600' }}></i>Builder:</strong> {attributes.builder}
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Project Content */}
                  <div className="service-detail_text">
                    <Content />
                  </div>

                  {/* Project Gallery */}
                  {attributes.gallery && attributes.gallery.length > 0 && (
                    <div className="project-gallery" style={{ marginTop: '40px' }}>
                      <h3>Project Gallery</h3>
                      <div className="row clearfix">
                        {attributes.gallery.map((image: string, index: number) => (
                          <div key={index} className="col-lg-4 col-md-6 col-sm-12" style={{ marginBottom: '20px' }}>
                            <img src={image} alt={`${attributes.title} - Image ${index + 1}`} style={{ width: '100%', borderRadius: '5px' }} />
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  <div className="service-detail_navigation" style={{ marginTop: '40px' }}>
                    <Link href="/projects" className="theme-btn btn-style-one">
                      <span className="btn-wrap">
                        <span className="text-one">
                          <i className="fa fa-arrow-left" style={{ marginRight: '10px' }}></i>
                          Back to Projects
                        </span>
                        <span className="text-two">
                          <i className="fa fa-arrow-left" style={{ marginRight: '10px' }}></i>
                          Back to Projects
                        </span>
                      </span>
                    </Link>
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
                      <h5>Project Categories</h5>
                    </div>
                    <ul className="cat-list">
                      <li><Link href="/projects">Residential</Link></li>
                      <li><Link href="/projects">Commercial</Link></li>
                      <li><Link href="/projects">Industrial</Link></li>
                      <li><Link href="/projects">Infrastructure</Link></li>
                      <li><Link href="/projects">Renovation</Link></li>
                    </ul>
                  </div>
                </div>

                {/* Status Widget */}
                {attributes.status && (
                  <div className="sidebar-widget">
                    <div className="widget-content" style={{ background: attributes.status === 'Completed' ? '#28a745' : '#ff6600', padding: '30px', borderRadius: '5px', color: '#fff', textAlign: 'center' }}>
                      <h4 style={{ color: '#fff', marginBottom: '10px' }}>Project Status</h4>
                      <h3 style={{ color: '#fff', fontSize: '24px' }}>{attributes.status}</h3>
                    </div>
                  </div>
                )}

                {/* Services Widget */}
                {attributes.services && attributes.services.length > 0 && (
                  <div className="sidebar-widget">
                    <div className="widget-content">
                      <div className="sidebar-title">
                        <h5>Services Provided</h5>
                      </div>
                      <ul className="service-list" style={{ listStyle: 'none', padding: 0 }}>
                        {attributes.services.map((service: string, index: number) => (
                          <li key={index} style={{ padding: '10px 0', borderBottom: '1px solid #e0e0e0' }}>
                            <i className="fa fa-check-circle" style={{ marginRight: '10px', color: '#ff6600' }}></i>
                            {service}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )}

                {/* Contact Widget */}
                <div className="sidebar-widget contact-widget">
                  <div className="widget-content" style={{ backgroundImage: 'url(/assets/images/background/pattern-10.png)' }}>
                    <div className="sidebar-title">
                      <h5>Start Your Project</h5>
                    </div>
                    <div className="text">Ready to bring your vision to life?</div>
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

