import React from "react";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper";
import axios from 'axios'
import baseApiUrl from '@/utils/baseApiUrl'

const ProjectSlider = () => {
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
      <div className="projects-area with-black-background pb-100">
        <div className="container-fluid">
          <div className="section-title">
            <span>PROJECTS</span>
            <h2>
              Our Latest <b>Incredible</b> Client&apos;s Projects
            </h2>
            <p>
              We are leading technology solutions providing company all over the
              world doing over 40 years lorem ipsum dolor sit amet.
            </p>
          </div>

          {projects && (
            <div className="px-3 text-center">
              <Swiper
                slidesPerView={1}
                spaceBetween={30}
                navigation={true}
                autoplay={{
                  delay: 6000,
                  disableOnInteraction: true,
                }}
                breakpoints={{
                  0: {
                    slidesPerView: 1,
                  },
                  768: {
                    slidesPerView: 2,
                  },
                  1024: {
                    slidesPerView: 3,
                  },
                  1200: {
                    slidesPerView: 4,
                  },
                }}
                modules={[Autoplay, Navigation]}
                className="mySwiper projects-slides"
              >
                {projects.data.slice(0, 5).map((project) => (
                  <SwiperSlide key={project.id}>
                    <div
                      className="projects-item text-start"
                      data-aos="fade-up"
                      data-aos-delay="50"
                      data-aos-duration="500"
                      data-aos-once="true"
                    >
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
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          )}
        </div>

        {/* Shape Images */}
        <div className="projects-bg-shape-1">
          <img src="/images/projects/projects-bg-shape.png" alt="image" />
        </div>
        <div className="projects-shape-1">
          <img src="/images/projects/projects-shape-1.png" alt="image" />
        </div>
        <div className="projects-shape-2">
          <img src="/images/projects/projects-shape-2.png" alt="image" />
        </div>
        <div className="projects-shape-3">
          <img src="/images/projects/projects-shape-3.png" alt="image" />
        </div>
      </div>
    </>
  );
};

export default ProjectSlider;
