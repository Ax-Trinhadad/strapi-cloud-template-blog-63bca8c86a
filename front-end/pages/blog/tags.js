import React from 'react'
import Link from 'next/link'
import NavbarTwo from '@/components/Layout/NavbarTwo'
import TagsPost from '@/components/Blog/TagsPost'
import CTO from '@/components/Common/CTO'
import Footer from '@/components/Layout/Footer'

export default function Tags() {
  return (
    <>
      <NavbarTwo />

      <div
        className="page-banner-area mt-94"
        style={{ backgroundImage: `url(/images/page-banner/banner-bg-2.jpg` }}
      >
        <div className="container">
          <div
            className="page-banner-content"
            data-aos="fade-right"
            data-aos-delay="50"
            data-aos-duration="500"
            data-aos-once="true"
          >
            <h2>Tags</h2>
            <ul>
              <li>
                <Link href="/">
                  <a>Home</a>
                </Link>
              </li>
              <li>Tags</li>
            </ul>
          </div>
        </div>
      </div>

      <TagsPost />

      <CTO />

      <Footer />
    </>
  )
}
