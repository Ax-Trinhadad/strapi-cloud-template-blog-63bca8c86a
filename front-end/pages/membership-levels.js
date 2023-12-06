import React from 'react'
import Link from 'next/link'
import NavbarTwo from '@/components/Layout/NavbarTwo'
import CTO from '@/components/Common/CTO'
import Footer from '@/components/Layout/Footer'

export default function MembershipLevels() {
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
            <h2>Membership Levels</h2>
            <ul>
              <li>
                <Link href="/">
                  <a>Home</a>
                </Link>
              </li>
              <li>Membership Levels</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="membership-levels-area ptb-100">
        <div className="container">
          <div className="membership-levels-table table-responsive">
            <table className="table table-striped">
              <thead>
                <tr>
                  <th></th>
                  <th>
                    <span className="desc-1">$500</span>
                    <span className="desc-2">Silver Membership</span>
                    <span className="desc-3">You can view few features</span>
                  </th>
                  <th>
                    <span className="desc-1">$1,000</span>
                    <span className="desc-2">Gold Membership</span>
                    <span className="desc-3">You can view most features</span>
                  </th>
                  <th>
                    <span className="desc-1">$1,500</span>
                    <span className="desc-2">Diamond Membership</span>
                    <span className="desc-3">You can view all features</span>
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Number of features</td>
                  <td>4</td>
                  <td>8</td>
                  <td>15</td>
                </tr>
                <tr>
                  <td>
                    <a href="#">Investment Fundamentals & Data Analytics</a>
                  </td>
                  <td className="item-check">
                    <i className="ri-check-line"></i>
                  </td>
                  <td className="item-check">
                    <i className="ri-check-line"></i>
                  </td>
                  <td className="item-check">
                    <i className="ri-check-line"></i>
                  </td>
                </tr>
                <tr>
                  <td>
                    <a href="#">Hands-On Python & R In Data Science</a>
                  </td>
                  <td className="item-check">
                    <i className="ri-check-line"></i>
                  </td>
                  <td className="item-check">
                    <i className="ri-check-line"></i>
                  </td>
                  <td className="item-check">
                    <i className="ri-check-line"></i>
                  </td>
                </tr>
                <tr>
                  <td>
                    <a href="#">Complete Data Science Bootcamp</a>
                  </td>
                  <td className="item-check">
                    <i className="ri-check-line"></i>
                  </td>
                  <td className="item-check">
                    <i className="ri-check-line"></i>
                  </td>
                  <td className="item-check">
                    <i className="ri-check-line"></i>
                  </td>
                </tr>
                <tr>
                  <td>
                    <a href="#">Programming MasterclassName for Developers</a>
                  </td>
                  <td className="item-none">
                    <i className="ri-close-line"></i>
                  </td>
                  <td className="item-check">
                    <i className="ri-check-line"></i>
                  </td>
                  <td className="item-check">
                    <i className="ri-check-line"></i>
                  </td>
                </tr>
                <tr>
                  <td>
                    <a href="#">Hands-On Artificial Neural Networks</a>
                  </td>
                  <td className="item-none">
                    <i className="ri-close-line"></i>
                  </td>
                  <td className="item-check">
                    <i className="ri-check-line"></i>
                  </td>
                  <td className="item-check">
                    <i className="ri-check-line"></i>
                  </td>
                </tr>
                <tr>
                  <td>
                    <a href="#">PRINCE2® Practitioner Certification Training</a>
                  </td>
                  <td className="item-none">
                    <i className="ri-close-line"></i>
                  </td>
                  <td className="item-check">
                    <i className="ri-check-line"></i>
                  </td>
                  <td className="item-check">
                    <i className="ri-check-line"></i>
                  </td>
                </tr>
                <tr>
                  <td>
                    <a href="#">PMI-RMP® Certification Training</a>
                  </td>
                  <td className="item-none">
                    <i className="ri-close-line"></i>
                  </td>
                  <td className="item-none">
                    <i className="ri-close-line"></i>
                  </td>
                  <td className="item-check">
                    <i className="ri-check-line"></i>
                  </td>
                </tr>
                <tr>
                  <td>
                    <a href="#">PRINCE2® Foundation Certification Training</a>
                  </td>
                  <td className="item-none">
                    <i className="ri-close-line"></i>
                  </td>
                  <td className="item-none">
                    <i className="ri-close-line"></i>
                  </td>
                  <td className="item-check">
                    <i className="ri-check-line"></i>
                  </td>
                </tr>
                <tr>
                  <td>
                    <a href="#">PMP® Plus</a>
                  </td>
                  <td className="item-none">
                    <i className="ri-close-line"></i>
                  </td>
                  <td className="item-none">
                    <i className="ri-close-line"></i>
                  </td>
                  <td className="item-check">
                    <i className="ri-check-line"></i>
                  </td>
                </tr>
                <tr>
                  <td>
                    <a href="#">PMP® Renewal Pack</a>
                  </td>
                  <td className="item-none">
                    <i className="ri-close-line"></i>
                  </td>
                  <td className="item-check">
                    <i className="ri-check-line"></i>
                  </td>
                  <td className="item-check">
                    <i className="ri-check-line"></i>
                  </td>
                </tr>
                <tr>
                  <td>
                    <a href="#">Digital Project Manager</a>
                  </td>
                  <td className="item-none">
                    <i className="ri-close-line"></i>
                  </td>
                  <td className="item-none">
                    <i className="ri-close-line"></i>
                  </td>
                  <td className="item-check">
                    <i className="ri-check-line"></i>
                  </td>
                </tr>
                <tr>
                  <td>
                    <a href="#">Agile Project Management; Agile Delivery</a>
                  </td>
                  <td className="item-none">
                    <i className="ri-close-line"></i>
                  </td>
                  <td className="item-none">
                    <i className="ri-close-line"></i>
                  </td>
                  <td className="item-check">
                    <i className="ri-check-line"></i>
                  </td>
                </tr>
                <tr>
                  <td>
                    <a href="#">Vue JS 2 - The Complete Guide</a>
                  </td>
                  <td className="item-none">
                    <i className="ri-close-line"></i>
                  </td>
                  <td className="item-none">
                    <i className="ri-close-line"></i>
                  </td>
                  <td className="item-check">
                    <i className="ri-check-line"></i>
                  </td>
                </tr>
                <tr>
                  <td>
                    <a href="#">Everything You Need to Program in Python</a>
                  </td>
                  <td className="item-none">
                    <i className="ri-close-line"></i>
                  </td>
                  <td className="item-none">
                    <i className="ri-close-line"></i>
                  </td>
                  <td className="item-check">
                    <i className="ri-check-line"></i>
                  </td>
                </tr>
                <tr>
                  <td>
                    <a href="#">Mathematical Foundation For Machine Learning</a>
                  </td>
                  <td className="item-none">
                    <i className="ri-close-line"></i>
                  </td>
                  <td className="item-none">
                    <i className="ri-close-line"></i>
                  </td>
                  <td className="item-check">
                    <i className="ri-check-line"></i>
                  </td>
                </tr>
                <tr>
                  <td>
                    <a href="#">Drawing Course - Beginner to Advanced</a>
                  </td>
                  <td className="item-none">
                    <i className="ri-close-line"></i>
                  </td>
                  <td className="item-none">
                    <i className="ri-close-line"></i>
                  </td>
                  <td className="item-check">
                    <i className="ri-check-line"></i>
                  </td>
                </tr>
                <tr>
                  <td>
                    <a href="#">Deep Learning and Artificial Intelligence</a>
                  </td>
                  <td className="item-none">
                    <i className="ri-close-line"></i>
                  </td>
                  <td className="item-none">
                    <i className="ri-close-line"></i>
                  </td>
                  <td className="item-check">
                    <i className="ri-check-line"></i>
                  </td>
                </tr>
                <tr>
                  <td>
                    <a href="#">Information About UI/UX Design Degree</a>
                  </td>
                  <td className="item-check">
                    <i className="ri-check-line"></i>
                  </td>
                  <td className="item-check">
                    <i className="ri-check-line"></i>
                  </td>
                  <td className="item-check">
                    <i className="ri-check-line"></i>
                  </td>
                </tr>
                <tr>
                  <td>
                    <a href="#">Photography Photo modify and Beautiful</a>
                  </td>
                  <td className="item-none">
                    <i className="ri-close-line"></i>
                  </td>
                  <td className="item-none">
                    <i className="ri-close-line"></i>
                  </td>
                  <td className="item-check">
                    <i className="ri-check-line"></i>
                  </td>
                </tr>
                <tr>
                  <td>
                    <a href="#">Professional IT Expert Certificate Course</a>
                  </td>
                  <td className="item-none">
                    <i className="ri-close-line"></i>
                  </td>
                  <td className="item-none">
                    <i className="ri-close-line"></i>
                  </td>
                  <td className="item-check">
                    <i className="ri-check-line"></i>
                  </td>
                </tr>
                <tr>
                  <td></td>
                  <td>
                    <a href="#" className="select-btn">
                      Get it now
                    </a>
                  </td>
                  <td>
                    <a href="#" className="select-btn">
                      Get it now
                    </a>
                  </td>
                  <td>
                    <a href="#" className="select-btn">
                      Get it now
                    </a>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <CTO />

      <Footer />
    </>
  )
}
