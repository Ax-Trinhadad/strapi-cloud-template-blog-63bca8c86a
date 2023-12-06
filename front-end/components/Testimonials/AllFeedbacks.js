import React from 'react';
import axios from 'axios'
import baseApiUrl from '@/utils/baseApiUrl'

const AllFeedbacks = () => {
  const [testimonials, setTestimonials] = React.useState()
  React.useEffect(() => {
    const getTestimonials = async () => {
      const response = await axios.get(
        `${baseApiUrl}/api/testimonials-style-2?populate=item.image`,
      )
      setTestimonials(response.data)
      console.log(response.data)
    }
    getTestimonials()
  }, [])
  return (
		<>
			<div className="testimonials-area pt-100 pb-75">
        <div className="container">
          <div className="section-title">
            <span>TESTIMONIALS</span>
            <h2>Our Client Feedbacks</h2>
          </div>

          {testimonials && (
            <div className="row justify-content-center">
              {testimonials.data.attributes.item.map((testimonial) => (
                <div className="col-lg-4 col-md-6" key={testimonial.id}>
                  <div
                    className="single-testimonials-card"
                    data-aos="fade-up"
                    data-aos-delay="50"
                    data-aos-duration="500"
                    data-aos-once="true"
                  >
                    <p>
                      {testimonial.feedbackText}
                    </p>

                    <div className="info-item-box">
                      <img
                        src={testimonial.image.data.attributes.url}
                        alt={testimonial.image.data.attributes.alternativeText}
                        className="rounded-circle"
                      />
                      <h4>
                        {testimonial.name} <span>{testimonial.designation}</span>
                      </h4>
                      <ul className="rating-list">
                        <li>
                          <i className={testimonial.rating1}></i>
                        </li>
                        <li>
                          <i className={testimonial.rating2}></i>
                        </li>
                        <li>
                          <i className={testimonial.rating3}></i>
                        </li>
                        <li>
                          <i className={testimonial.rating4}></i>
                        </li>
                        <li>
                          <i className={testimonial.rating5}></i>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
		</>
  );
}

export default AllFeedbacks;