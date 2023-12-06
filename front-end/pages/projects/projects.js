import React from 'react'
import Link from 'next/link'
import NavbarTwo from '@/components/Layout/NavbarTwo'
import CTO from '@/components/Common/CTO'
import ContactForm from '@/components/Common/ContactForm'
import Footer from '@/components/Layout/Footer'
import axios from 'axios'
import baseApiUrl from '@/utils/baseApiUrl'

export default function Projects() {
  const [projects, setProjects] = React.useState()
  React.useEffect(() => {
    const getProjects = async () => {
      const response = await axios.get(`${baseApiUrl}/api/projects?populate=*`)
      setProjects(response.data)
      // console.log(response.data)
    }
    getProjects()
  }, [])
  return (
    <>
      <NavbarTwo />

      <div
        className="page-banner-area mt-94"
        style={{ backgroundImage: `url(/images/page-banner/banner-bg-3.jpg` }}
      >
        <div className="container">
          <div
            className="page-banner-content"
            data-aos="fade-right"
            data-aos-delay="50"
            data-aos-duration="500"
            data-aos-once="true"
          >
            <h2>Projects</h2>
            <ul>
              <li>
                <Link href="/">
                  <a>Home</a>
                </Link>
              </li>
              <li>Projects</li>
            </ul>
          </div>
        </div>
      </div>

      {projects && (
        <div className="projects-area pt-100 pb-75">
          <div className="container">
            <div className="section-title">
              <span>PROJECTS</span>
              <h2>
                Our Latest <b>Incredible</b> Client&apos;s Projects
              </h2>
            </div>

            <div className="row justify-content-center">
              {projects.data.map((project) => (
                <div className="col-lg-4 col-md-6" key={project.id}>
                  <div className="projects-item bg-F2F1F3">
                    <div className="projects-image">
                      <Link href={`/projects/${project.attributes.slug}`}>
                        <a>
                          <img
                            src={
                              project.attributes.image.data.attributes.url
                            }
                            alt={
                              project.attributes.image.data.attributes
                                .alternativeText
                            }
                          />
                        </a>
                      </Link>
                    </div>
                    <div className="projects-content">
                      <h3>
                        <Link href={`/projects/${project.attributes.slug}`}>
                          <a>{project.attributes.title}</a>
                        </Link>
                      </h3>
                      <Link href={`/projects/${project.attributes.slug}`}>
                        <a className="projects-btn">{project.attributes.btnText}</a>
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="projects-bg-shape-1">
            <img src="/images/projects/projects-bg-shape.png" alt="image" />
          </div>
        </div>
      )}

      <CTO />

      <ContactForm />

      <Footer />
    </>
  )
}
