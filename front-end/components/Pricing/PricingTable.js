import React from "react";
import Link from "next/link";
import axios from 'axios'
import baseApiUrl from '@/utils/baseApiUrl'
import ReactMarkdown from 'react-markdown'

const PricingTable = () => {
  const [pricing, setPricing] = React.useState()
  React.useEffect(() => {
    const getPricing = async () => {
      const response = await axios.get(
        `${baseApiUrl}/api/pricing?populate=priceCard.priceList`,
      )
      setPricing(response.data)
      // console.log(response.data);
    }
    getPricing()
  }, [])
  return (
    <>
      {pricing && (
        <div className="pricing-area with-black-background pt-100 pb-75">
          <div className="container">
            <div className="section-title">
              <span>{pricing.data.attributes.subTitle}</span>
              <ReactMarkdown>
                {pricing.data.attributes.titleAndShortText}
              </ReactMarkdown>
            </div>

            <div className="row justify-content-center">
              {pricing.data.attributes.priceCard.map((price) => (
                <div className="col-lg-4 col-md-6" key={price.id}>
                  <div
                    className="single-pricing-card"
                    data-aos="fade-up"
                    data-aos-delay="70"
                    data-aos-duration="1000"
                    data-aos-once="true"
                  >
                    <h3>{price.title}</h3>
                    <div className="price">
                      {price.price} <span>{price.duration}</span>
                    </div>
                    <p>
                      {price.shortText}
                    </p>

                    <ul className="pricing-list">
                      {price.priceList.map((list) => (
                        <li key={list.id}>
                          <i className="ri-check-fill"></i> {list.text}
                        </li>
                      ))}
                    </ul>

                    <div className="pricing-btn">
                      <Link href={price.btnLink}>
                        <a className="default-btn">{price.btnText}</a>
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Shape Image */}
          <div className="pricing-bg-shape-1">
            <img src="/images/pricing/pricing-bg-shape.png" alt="image" />
          </div>
          <div className="pricing-shape-1">
            <img src="/images/pricing/pricing-shape-1.png" alt="image" />
          </div>
          <div className="pricing-shape-2">
            <img src="/images/pricing/pricing-shape-2.png" alt="image" />
          </div>
        </div>
      )}
    </>
  );
};

export default PricingTable;
