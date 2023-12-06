import React from 'react'
import Link from 'next/link'

const CategoriesPost = () => {
  return (
    <>
      <div className="blog-area pt-100 pb-75">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-4 col-md-6">
              <div className="single-blog-card">
                <div className="blog-image">
                  <Link href="#">
                    <a>
                      <img src="/images/blog/blog-1.jpg" alt="image" />
                    </a>
                  </Link>

                  <div className="date">9th July, 2022</div>
                </div>
                <div className="blog-content">
                  <h3>
                    <Link href="#">
                      <a>How Technology Dominate In The new World In 2022</a>
                    </Link>
                  </h3>
                  <p>
                    Lorem ipsum dolor sit amet conset sadipscing elitr sed diam
                    nonumy eir m od tempor invidunt ut labore.
                  </p>
                  <Link href="#">
                    <a className="blog-btn">View More</a>
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="single-blog-card">
                <div className="blog-image">
                  <Link href="#">
                    <a>
                      <img src="/images/blog/blog-2.jpg" alt="image" />
                    </a>
                  </Link>

                  <div className="date">9th July, 2022</div>
                </div>
                <div className="blog-content">
                  <h3>
                    <Link href="#">
                      <a>Top 10 Most Famous Technology Trend In 2022</a>
                    </Link>
                  </h3>
                  <p>
                    Lorem ipsum dolor sit amet conset sadipscing elitr sed diam
                    nonumy eir m od tempor invidunt ut labore.
                  </p>
                  <Link href="#">
                    <a className="blog-btn">View More</a>
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="single-blog-card">
                <div className="blog-image">
                  <Link href="#">
                    <a>
                      <img src="/images/blog/blog-3.jpg" alt="image" />
                    </a>
                  </Link>

                  <div className="date">9th July, 2022</div>
                </div>
                <div className="blog-content">
                  <h3>
                    <Link href="#">
                      <a>Open Source Job Report Show More Openings Fewer</a>
                    </Link>
                  </h3>
                  <p>
                    Lorem ipsum dolor sit amet conset sadipscing elitr sed diam
                    nonumy eir m od tempor invidunt ut labore.
                  </p>
                  <Link href="#">
                    <a className="blog-btn">View More</a>
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="single-blog-card">
                <div className="blog-image">
                  <Link href="#">
                    <a>
                      <img src="/images/blog/blog-4.jpg" alt="image" />
                    </a>
                  </Link>

                  <div className="date">9th July, 2022</div>
                </div>
                <div className="blog-content">
                  <h3>
                    <Link href="#">
                      <a>Tech Products That Makes Its Easier To Stay At Home</a>
                    </Link>
                  </h3>
                  <p>
                    Lorem ipsum dolor sit amet conset sadipscing elitr sed diam
                    nonumy eir m od tempor invidunt ut labore.
                  </p>
                  <Link href="#">
                    <a className="blog-btn">View More</a>
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="single-blog-card">
                <div className="blog-image">
                  <Link href="#">
                    <a>
                      <img src="/images/blog/blog-5.jpg" alt="image" />
                    </a>
                  </Link>

                  <div className="date">9th July, 2022</div>
                </div>
                <div className="blog-content">
                  <h3>
                    <Link href="#">
                      <a>
                        Necessity May Give Us Your Best Virtual Court System
                      </a>
                    </Link>
                  </h3>
                  <p>
                    Lorem ipsum dolor sit amet conset sadipscing elitr sed diam
                    nonumy eir m od tempor invidunt ut labore.
                  </p>
                  <Link href="#">
                    <a className="blog-btn">View More</a>
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="single-blog-card">
                <div className="blog-image">
                  <Link href="#">
                    <a>
                      <img src="/images/blog/blog-6.jpg" alt="image" />
                    </a>
                  </Link>

                  <div className="date">9th July, 2022</div>
                </div>
                <div className="blog-content">
                  <h3>
                    <Link href="#">
                      <a>
                        How Technology Helps In The Education System In The
                        World
                      </a>
                    </Link>
                  </h3>
                  <p>
                    Lorem ipsum dolor sit amet conset sadipscing elitr sed diam
                    nonumy eir m od tempor invidunt ut labore.
                  </p>
                  <Link href="#">
                    <a className="blog-btn">View More</a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="blog-shape-1">
          <img src="/images/blog/blog-shape-1.png" alt="image" />
        </div>
      </div>
    </>
  )
}

export default CategoriesPost
