import React from "react";
import Link from 'next/link';
import NavbarTwo from "@/components/Layout/NavbarTwo";
import SingleBlogContent2 from "@/components/Blog/SingleBlogContent2";
import Footer from "@/components/Layout/Footer";

export default function SingleBlog2() {
  return (
    <>
      <NavbarTwo />

      <div className="page-banner-area mt-94" style={{ backgroundImage: `url(/images/page-banner/banner-bg-2.jpg` }}>
        <div className="container">
          <div
            className="page-banner-content"
            data-aos="fade-right"
            data-aos-delay="50"
            data-aos-duration="500"
            data-aos-once="true"
          >
            <h2>Blog Details</h2>
            <ul>
              <li>
                <Link href="/">
                  <a>Home</a>
                </Link>
              </li>
              <li>Blog Details</li>
            </ul>
          </div>
        </div>
      </div>

      <SingleBlogContent2 />
  
      <Footer />
    </>
  );
}
