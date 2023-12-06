import React from 'react'
import Link from 'next/link'
import axios from 'axios'
import baseApiUrl from '@/utils/baseApiUrl'

const BlogGrid = () => {
  const [blogs, setBlogs] = React.useState()
  React.useEffect(() => {
    const getBlogs = async () => {
      const response = await axios.get(`${baseApiUrl}/api/blogs?populate=*`)
      setBlogs(response.data)
      // console.log(response.data)
    }
    getBlogs()
  }, [])
  return (
    <>
      <div className="blog-area pt-100 pb-100">
        <div className="container">
          <div className="section-title">
            <span>ARTICLE</span>
            <h2>
              Read Our Blog To Get All Recent Tech <b>News</b>
            </h2>
          </div>

          {blogs && (
            <div className="row justify-content-center">
              {blogs.data.map((blog) => (
                <div className="col-lg-6 col-md-12" key={blog.id}>
                  <div
                    className="blog-card"
                    data-aos="fade-up"
                    data-aos-delay="80"
                    data-aos-duration="800"
                    data-aos-once="true"
                  >
                    <div className="row align-items-center">
                      <div className="col-lg-6">
                        <div className="blog-image">
                          <Link href={`/blog/${blog.attributes.slug}`}>
                            <a>
                              <img
                                src={
                                  blog.attributes.image.data.attributes.url
                                }
                                alt={
                                  blog.attributes.image.data.attributes
                                    .alternativeText
                                }
                              />
                            </a>
                          </Link>
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="blog-content">
                          <div className="date">{blog.attributes.date}</div>
                          <h3>
                            <Link href={`/blog/${blog.attributes.slug}`}>
                              <a>
                                {blog.attributes.title}
                              </a>
                            </Link>
                          </h3>
                          <p>
                            {blog.attributes.shortText}
                          </p>
                          <Link href={`/blog/${blog.attributes.slug}`}>
                            <a className="blog-btn">View More</a>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="blog-shape-1">
          <img src="/images/blog/blog-shape-1.png" alt="image" />
        </div>
      </div>
    </>
  )
}

export default BlogGrid
