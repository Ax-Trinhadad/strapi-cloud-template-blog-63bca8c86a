import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import { Autoplay } from "swiper";
import Link from "next/link";

const HeroSlider = () => {
  return (
    <>
      <div className="main-hero-area mt-94">
        <Swiper
          spaceBetween={0}
          navigation={{
            clickable: true,
          }}
          autoplay={{
            delay: 6000,
            disableOnInteraction: true,
          }}
          modules={[Navigation, Autoplay]}
          className="mySwiper hero-slides"
        >
          <SwiperSlide>
            <div className="main-hero-item">
              <div className="container-fluid">
                <div className="main-hero-content">
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
                    We Are Digital Agency & Tech Solution
                  </h1>
                  <p
                    data-aos="fade-right"
                    data-aos-delay="70"
                    data-aos-duration="700"
                    data-aos-once="true"
                  >
                    We are leading technology solutions providing company all
                    over the world doing over 40 years. Lorem ipsum dolor sit
                    amet consetetur sadipscing elitr sed diam nonumy eirmod
                    tempor.
                  </p>

                  <div
                    className="slides-btn"
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
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="main-hero-item item-bg-2">
              <div className="container-fluid">
                <div className="main-hero-content">
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
                    Excellent IT Services For Your Success
                  </h1>
                  <p
                    data-aos="fade-right"
                    data-aos-delay="70"
                    data-aos-duration="700"
                    data-aos-once="true"
                  >
                    We are leading technology solutions providing company all
                    over the world doing over 40 years. Lorem ipsum dolor sit
                    amet consetetur sadipscing elitr sed diam nonumy eirmod
                    tempor.
                  </p>

                  <div
                    className="slides-btn"
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
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="main-hero-item item-bg-3">
              <div className="container-fluid">
                <div className="main-hero-content">
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
                    Get The Best IT Solution From Us
                  </h1>
                  <p
                    data-aos="fade-right"
                    data-aos-delay="70"
                    data-aos-duration="700"
                    data-aos-once="true"
                  >
                    We are leading technology solutions providing company all
                    over the world doing over 40 years. Lorem ipsum dolor sit
                    amet consetetur sadipscing elitr sed diam nonumy eirmod
                    tempor.
                  </p>

                  <div
                    className="slides-btn"
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
            </div>
          </SwiperSlide>
        </Swiper>

        {/* Shape Images */}
        <div className="hero-shape-1">
          <img src="/images/main-hero/slides-shape-1.png" alt="image" />
        </div>
        <div className="hero-shape-2">
          <img src="/images/main-hero/slides-shape-2.png" alt="image" />
        </div>
        <div className="hero-shape-3">
          <img src="/images/main-hero/slides-shape-3.png" alt="image" />
        </div>
      </div>
    </>
  );
};

export default HeroSlider;
