import React from "react";
import Link from "next/link";
import axios from 'axios'
import baseApiUrl from '@/utils/baseApiUrl'

const AllServicesCard = () => {
  const [services, setServices] = React.useState()
  React.useEffect(() => {
    const getServices = async () => {
      const response = await axios.get(`${baseApiUrl}/api/services?populate=*`)
      setServices(response.data)
      // console.log(response.data)
    }
    getServices()
  }, [])
  return (
    <>
      <div className="services-area bg-with-14042C-color rounded-0 ptb-100">
        <div className="container">
          <div className="section-title">
            <span>SERVICES</span>
            <h2>
              We Provide the Best Quality <b>Services</b>
            </h2>
            <p>
              We are technology solutions providing company all over the world
              doing over 40 years. lorem ipsum dolor sit amet.
            </p>
          </div>

          {services && (
            <div className="row justify-content-center">
              {services.data.map((service) => (
                <div className="col-lg-4 col-md-6" key={service.id}>
                  <div className="services-item">
                    <div className="services-image">
                      <Link href={`/services/${service.attributes.slug}`}>
                        <a>
                          <img
                            src={
                              service.attributes.image.data.attributes.url
                            }
                            alt={
                              service.attributes.image.data.attributes
                                .alternativeText
                            }
                          />
                        </a>
                      </Link>
                    </div>
                    <div className="services-content">
                      <h3>
                        <Link href={`/services/${service.attributes.slug}`}>
                          <a>{service.attributes.title}</a>
                        </Link>
                      </h3>
                      <p>{service.attributes.shortText}</p>
                      <Link href={`/services/${service.attributes.slug}`}>
                        <a className="services-btn">
                          {service.attributes.btnText}
                        </a>
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Shape Images */}
        <div className="services-shape-1">
          <img src="/images/services/services-shape-1.png" alt="image" />
        </div>
        <div className="services-shape-2">
          <img src="/images/services/services-shape-2.png" alt="image" />
        </div>
      </div>
    </>
  );
};

export default AllServicesCard;
