import React from 'react'
import ReactMarkdown from "react-markdown";

const SingleBlogContent = ({
    attributes: {
      date,
      image: {
        data: {
          attributes: { url: imageUrl },
        },
      },
      blogDetailsText,
    },
  }) => {
  return (
    <>
      <div className="blog-details-area pt-100 pb-100">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 col-md-12">
              <div className="blog-details-desc">
                <div className="article-image">
                  <img
                    src={imageUrl}
                    alt="image"
                  />
                </div>

                <div className="article-content">
                  <ul className="entry-list">
                    <li>
                      By <a href="#">Admin</a>
                    </li>
                    <li>{date}</li>
                  </ul>
                   
                  <ReactMarkdown>
                    {blogDetailsText}
                  </ReactMarkdown>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default SingleBlogContent;
