import React from 'react'
import ReactMarkdown from "react-markdown"

const CareerDetailsContent = ({
  attributes: {
    title,
    location,
    hours,
    rate,
    salary,
    type,
    longDec
  },
}) => {
  return (
    <>
      <div className="career-details-area pt-100 pb-100">
        <div className="container">
          <div className="row">
            <div className="col-lg-9 col-md-12">
              <div className="career-details-desc">
                <ReactMarkdown>
                  {longDec}
                </ReactMarkdown>
              </div>
            </div>

            <div className="col-lg-3 col-md-12">
              <div className="career-details-info">
                <h3>Job Overview</h3>

                <ul className="list">
                  <li>
                    <span>Location:</span> {location}
                  </li>
                  <li>
                    <span>Job Title:</span> {title}
                  </li>
                  <li>
                    <span>Type:</span> {type}
                  </li>
                  <li>
                    <span>Hours:</span> {hours}
                  </li>
                  <li>
                    <span>Rate:</span> {rate}
                  </li>
                  <li>
                    <span>Salary:</span> {salary}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default CareerDetailsContent
