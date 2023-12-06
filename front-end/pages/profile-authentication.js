import React from 'react'
import Link from 'next/link'
import NavbarTwo from '@/components/Layout/NavbarTwo'
import CTO from '@/components/Common/CTO'
import Footer from '@/components/Layout/Footer'
import Authentication from '@/components/Authentication/Authentication';

export default function ProfileAuthentication() {
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
            <h2>Profile Authentication</h2>
            <ul>
              <li>
                <Link href="/">
                  <a>Home</a>
                </Link>
              </li>
              <li>Profile Authentication</li>
            </ul>
          </div>
        </div>
      </div>

      <Authentication />

      <CTO />

      <Footer />
    </>
  )
}
