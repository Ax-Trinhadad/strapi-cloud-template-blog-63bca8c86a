import React from 'react'
import Link from 'next/link'
import NavbarTwo from '@/components/Layout/NavbarTwo'
import BlogGridStyle2 from '@/components/Blog/BlogGridStyle2'
import CTO from '@/components/Common/CTO'
import Footer from '@/components/Layout/Footer'

export default function Blog2() {
  return (
    <>
      <NavbarTwo />

      <div
        className="page-banner-area mt-94"
        style={{ backgroundImage: `url(/images/page-banner/banner-bg.jpg` }}
      >
        <div className="container">
          <div
            className="page-banner-content"
            data-aos="fade-right"
            data-aos-delay="50"
            data-aos-duration="500"
            data-aos-once="true"
          >
            <h2>Blog Style Two</h2>
            <ul>
              <li>
                <Link href="/">
                  <a>Home</a>
                </Link>
              </li>
              <li>Blog</li>
            </ul>
          </div>
        </div>
      </div>

      <BlogGridStyle2 />

      <CTO />

      <Footer />
    </>
  )
}
