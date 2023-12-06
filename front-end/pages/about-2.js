import React from "react";
import Link from 'next/link';
import NavbarTwo from "@/components/Layout/NavbarTwo";
import WhoWeAre from '@/components/AboutTwo/WhoWeAre';
import WhyChooseUs from '@/components/Common/WhyChooseUs';
import IntroVideo from '@/components/Common/IntroVideo';
import Testimonials from '@/components/Common/Testimonials';
import Skills from "@/components/Common/Skills";
import PricingTable from "@/components/Pricing/PricingTable";
import ContactForm from "@/components/Common/ContactForm";
import Footer from "@/components/Layout/Footer";

export default function About2() {
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
            <h2>About Style Two</h2>
            <ul>
              <li>
                <Link href="/">
                  <a>Home</a>
                </Link>
              </li>
              <li>About Us</li>
            </ul>
          </div>
        </div>
      </div>

      <WhoWeAre />

      <WhyChooseUs />

      <IntroVideo />

      <Skills />

      <PricingTable />

      <Testimonials />

      <ContactForm />
  
      <Footer />
    </>
  );
}
