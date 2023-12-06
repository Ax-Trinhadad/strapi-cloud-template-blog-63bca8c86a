import React from "react";
import ReactMarkdown from "react-markdown";

const ServicesDetailsContent = ({ 
  attributes: { 
    servicesDetailsText,
    image: {
      data: {
        attributes: { url: imageUrl },
      },
    },
  } 
}) => {
  return (
    <>
      <div className="services-details-area ptb-100">
        <div className="container">
          <div className="services-details-desc">
            <div className="article-services-image">
              <img
                src={imageUrl}
                alt="image"
              />
            </div>

            <div className="article-services-content">
              <ReactMarkdown>
                {servicesDetailsText}
              </ReactMarkdown>
            </div>
          </div>
        </div>

        <div className="services-details-shape">
          <img src="/images/services-details/line-shape.png" alt="image" />
        </div>
      </div>
    </>
  );
};

export default ServicesDetailsContent;
