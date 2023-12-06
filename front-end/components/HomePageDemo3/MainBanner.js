import React from "react";
import Link from "next/link";

const MainBanner = () => {
  return (
    <>
      <div className="main-banner-area">
        <div className="container-fluid">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12">
              <div className="main-banner-content">
                <span
                  data-aos="fade-right"
                  data-aos-delay="70"
                  data-aos-duration="700"
                  data-aos-once="true"
                >
                  WE ARE LEADING TECHNOLOGY SOLUTIONS PROVIDING COMPANY! 
                </span>
                <h1
                  data-aos="fade-right"
                  data-aos-delay="70"
                  data-aos-duration="700"
                  data-aos-once="true"
                >
                  We Make The Best IT Solutions
                </h1>
                <p
                  data-aos="fade-right"
                  data-aos-delay="70"
                  data-aos-duration="700"
                  data-aos-once="true"
                >
                  We are leading technology solutions providing company all over
                  the world doing over 40 years. Lorem ipsum dolor sit amet
                  consetetur sadipscing elitr sed diam nonumy eirmod tempor.
                </p>

                <div
                  className="banner-btn"
                  data-aos="fade-right"
                  data-aos-delay="70"
                  data-aos-duration="700"
                  data-aos-once="true"
                >
                  <Link href="/contact">
                    <a className="default-btn">Get Started</a>
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-lg-6 col-md-12">
              <div className="main-banner-image">
                <img
                  src="/images/main-banner/banner.png"
                  alt="image"
                  data-aos="fade-down"
                  data-aos-delay="70"
                  data-aos-duration="700"
                  data-aos-once="true"
                />

                <div className="banner-circle">
                  <img
                    src="/images/main-banner/banner-circle.png"
                    alt="image"
                    data-aos="fade-down"
                    data-aos-delay="100"
                    data-aos-duration="1000"
                    data-aos-once="true"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Shape Images */}
        <div className="banner-shape-1">
          <img src="/images/main-banner/banner-shape-1.png" alt="image" />
        </div>
        <div className="banner-shape-2">
          <img src="/images/main-banner/banner-shape-2.png" alt="image" />
        </div>
        <div className="banner-dot-shape-1">
          <img src="/images/main-banner/dot-1.png" alt="image" />
        </div>
        <div className="banner-dot-shape-2">
          <img src="/images/main-banner/dot-2.png" alt="image" />
        </div>
        <div className="banner-dot-shape-3">
          <img src="/images/main-banner/dot-3.png" alt="image" />
        </div>
        <div className="banner-dot-shape-4">
          <img src="/images/main-banner/dot-4.png" alt="image" />
        </div>
        <div className="banner-dot-shape-5">
          <img src="/images/main-banner/dot-5.png" alt="image" />
        </div>
        <div className="lines">
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
        </div>
      </div>
    </>
  );
};

export default MainBanner;
