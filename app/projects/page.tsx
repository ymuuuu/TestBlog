'use client';

import Header from '../components/Header';
import Footer from '../components/Footer';
import MarketingOne from '../components/MarketingOne';
import ClientsBoxOne from '../components/ClientsBoxOne';
import Link from 'next/link';
import { attributes as project1 } from '../../content/projects/downtown-corporate-tower.md';
import { attributes as project2 } from '../../content/projects/riverside-residential-complex.md';

export default function Projects() {
  // Array of projects
  const projects = [
    { ...project1, slug: 'downtown-corporate-tower' },
    { ...project2, slug: 'riverside-residential-complex' },
  ];

  // Sort projects by date (newest first)
  const sortedProjects = projects.sort((a: any, b: any) => 
    new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  return (
    <>
      <Header />

      {/* Page Title */}
      <section className="page-title" style={{ backgroundImage: 'url(/assets/images/background/6.jpg)' }}>
        <div className="auto-container">
          <h2>Our Projects</h2>
          <div className="d-flex justify-content-between align-items-center flex-wrap">
            <ul className="bread-crumb clearfix">
              <li><Link href="/">Home</Link></li>
              <li>Projects</li>
            </ul>
            <div className="page-title_text">
              Explore our portfolio of successful construction projects across various sectors
            </div>
          </div>
        </div>
      </section>
      {/* End Page Title */}

      {/* Project Four */}
      <section className="project-four" style={{ backgroundImage: 'url(/assets/images/background/pattern-13.png)' }}>
        <div className="auto-container">
          <div className="sec-title centered">
            <div className="sec-title_title">Our Projects</div>
            <h2 className="sec-title_heading">
              We Provide Effective Solutions <br /> in Construction
            </h2>
          </div>
          
          <div className="row clearfix">
            {sortedProjects.map((project: any, index: number) => (
              <div key={index} className="project-block_three col-lg-6 col-md-6 col-sm-12">
                <div className="project-block_three-inner">
                  <div className="project-block_three-image">
                    <img src={project.featured_image} alt={project.title} />
                    <div className="project-block_three-overlay">
                      {project.categories && project.categories[0] && (
                        <div className="project-block_three-designation">{project.categories[0]}</div>
                      )}
                      <div className="project-block_three-location">
                        <i><img src="/assets/images/icons/location-2.svg" alt="" /></i> {project.location}
                      </div>
                      <h3 className="project-block_three-title">
                        <Link href={`/projects/${project.slug}`}>{project.title}</Link>
                      </h3>
                      <div className="project-block_three-text" style={{fontSize: '14px', marginBottom: '15px'}}>
                        {project.excerpt}
                      </div>
                      {/* Button Box */}
                      <div className="project-block_three_button">
                        <Link href={`/projects/${project.slug}`} className="theme-btn btn-style-one">
                          <span className="btn-wrap">
                            <span className="text-one">
                              explore project <i><img src="/assets/images/icons/arrow-1.svg" alt="" /></i>
                            </span>
                            <span className="text-two">
                              explore project <i><img src="/assets/images/icons/arrow-1.svg" alt="" /></i>
                            </span>
                          </span>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* End Project Four */}

      <MarketingOne />
      <ClientsBoxOne />

      <Footer />
    </>
  );
}
