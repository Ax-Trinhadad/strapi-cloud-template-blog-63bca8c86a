import React from 'react'
import Link from 'next/link'
import axios from 'axios'
import baseApiUrl from '@/utils/baseApiUrl'

const CareerContent = () => {
  const [careers, setCareers] = React.useState()
  React.useEffect(() => {
    const getCareers = async () => {
      const response = await axios.get(`${baseApiUrl}/api/careers?populate=*`)
      setCareers(response.data)
      // console.log(response.data)
    }
    getCareers()
  }, [])
  return (
    <>
    
      <div className="career-area pt-100 pb-100">
        <div className="container">
          <div className="section-title">
            <span>Career</span>
            <h2>
              When You Have Jobs In Multiple <b>Locations</b>
            </h2>
          </div>
        
          {careers && careers.data.map((career) => (
            <div className="career-item">
              <div className="row align-items-center">
                <div className="col-lg-9 col-md-9">
                  <div className="career-content">
                    <h3>
                      <Link href={`/career/${career.attributes.slug}`}>
                        <a>{career.attributes.title}</a>
                      </Link>
                    </h3>
                    <p>
                      {career.attributes.shortDec}
                    </p>
                    <ul className="list">
                      <li>
                        <span>Location:</span> {career.attributes.location}
                      </li>
                      <li>
                        <span>Type:</span> {career.attributes.type}
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-lg-3 col-md-3">
                  <div className="career-btn text-end">
                    <Link href={career.attributes.btnLink}>
                      <a className="default-btn">{career.attributes.btnText}</a>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default CareerContent
