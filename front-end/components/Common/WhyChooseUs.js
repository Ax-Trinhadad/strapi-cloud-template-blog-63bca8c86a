import React from 'react'
import axios from 'axios'
import baseApiUrl from '@/utils/baseApiUrl'
import ReactMarkdown from 'react-markdown'

const WhyChooseUs = () => {
  const [whyChooseUs, setWhyChooseUs] = React.useState()
  React.useEffect(() => {
    const getWhyChooseUs = async () => {
      const response = await axios.get(
        `${baseApiUrl}/api/why-choose-us?populate=reason.image`,
      )
      setWhyChooseUs(response.data)
      // console.log(response.data);
    }
    getWhyChooseUs()
  }, [])
  return (
    <>
      {whyChooseUs && (
        <div className="choose-area pt-100 pb-75">
          <div className="container">
            <div className="section-title">
              <span>{whyChooseUs.data.attributes.subTitle}</span>

              <ReactMarkdown>
                {whyChooseUs.data.attributes.titleAndShortText}
              </ReactMarkdown>
            </div>

            <div className="row justify-content-center">
              {whyChooseUs.data.attributes.reason.map((info) => (
                <div className="col-lg-3 col-sm-6" key={info.id}>
                  <div
                    className="single-choose-card"
                    data-aos="fade-up"
                    data-aos-delay="50"
                    data-aos-duration="600"
                    data-aos-once="true"
                  >
                    <div className="choose-image">
                      <img
                        src={info.image.data.attributes.url}
                        alt={info.image.data.attributes.alternativeText}
                      />
                    </div>
                    <div className="choose-content">
                      <h3>{info.title}</h3>
                      <p>{info.shortText}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Shape Images */}
          <div className="choose-shape-1">
            <img src="/images/choose/choose-shape.png" alt="image" />
          </div>
          <div className="choose-shape-2">
            <img src="/images/choose/choose-shape-2.png" alt="image" />
          </div>
        </div>
      )}
    </>
  )
}

export default WhyChooseUs
