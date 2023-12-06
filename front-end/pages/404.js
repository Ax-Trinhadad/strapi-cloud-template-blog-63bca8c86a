import React from 'react'
import Link from 'next/link'
import NavbarTwo from '@/components/Layout/NavbarTwo'
import CTO from '@/components/Common/CTO'
import Footer from '@/components/Layout/Footer'

export default function Custom404() {
  return (
    <>
      <NavbarTwo />

      <div
        className="page-banner-area mt-94"
        style={{ backgroundImage: `url(/images/page-banner/banner-bg-4.jpg` }}
      >
        <div className="container">
          <div
            className="page-banner-content"
            data-aos="fade-right"
            data-aos-delay="50"
            data-aos-duration="500"
            data-aos-once="true"
          >
            <h2>404 Error Page</h2>
            <ul>
              <li>
                <Link href="/">
                  <a>Home</a>
                </Link>
              </li>
              <li>404 Error Page</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="error-area ptb-100">
        <div className="container">
          <div className="error-content">
            <img src="/images/error.png" alt="image" />
            <h3>Error 404 : Page Not Found</h3>
            <p>
              The page you are looking for might have been removed had its name
              changed or is temporarily unavailable.
            </p>
            <Link href="/">
              <a className="default-btn">Back to Homepage</a>
            </Link>
          </div>
        </div>
      </div>

      <CTO />

      <Footer />
    </>
  )
}
