import React from "react";
import Link from "next/link";

const WhoWeAre = () => {
  return (
    <>
      <div className="about-area ptb-100">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12">
              <div className="about-image">
                <img
                  src="/images/about/about-2.png"
                  alt="image"
                  data-aos="fade-down"
                  data-aos-delay="80"
                  data-aos-duration="800"
                  data-aos-once="true"
                />
              </div>
            </div>
            <div className="col-lg-6 col-md-12">
              <div
                className="about-content"
                data-aos="fade-up"
                data-aos-delay="80"
                data-aos-duration="800"
                data-aos-once="true"
              >
                <span>WHO WE ARE</span>
                <h3>We Are All In One IT Solution & Technology Company</h3>
                <p>
                  We are leading technology solutions providing company all over
                  the world doing over 40 years lorem ipsum dolor sit amet.
                </p>
                <p>
                  We are leading technology solutions providing company all over
                  the world doing over 40 years. Lorem ipsum dolor sit amet
                  consetetur sadipscing elitr sed diam non umy eirmod tempor
                  invidunt ut labore.
                </p>
                <div className="about-btn">
                  <Link href="/about">
                    <a className="default-btn">Know More About Us</a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="about-shape-1">
          <img src="/images/about/about-shape.png" alt="image" />
        </div>
      </div>
    </>
  );
};

export default WhoWeAre;
