import React from "react";
import Link from 'next/link';
import NavbarTwo from "@/components/Layout/NavbarTwo";
import WhoWeAre from '@/components/AboutThree/WhoWeAre';
import WorkingProcess from '@/components/Common/WorkingProcess';
import IntroVideo from '@/components/Common/IntroVideo';
import TestimonialSliderStyle2 from '@/components/Common/TestimonialSliderStyle2';
import PricingTable from "@/components/Pricing/PricingTable";
import ContactForm from "@/components/Common/ContactForm";
import Footer from "@/components/Layout/Footer";

import TeamMember from "@/components/Common/TeamMember";

export default function About3() {
  return (
    <>
      <NavbarTwo />

      <div className="page-banner-area mt-94" style={{ backgroundImage: `url(/images/page-banner/banner-bg-3.jpg` }}>
        <div className="container">
          <div
            className="page-banner-content"
            data-aos="fade-right"
            data-aos-delay="50"
            data-aos-duration="500"
            data-aos-once="true"
          >
            <h2>About Style Three</h2>
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

      <WorkingProcess />

      <IntroVideo />
  
      <TestimonialSliderStyle2 />

      <PricingTable />
      
      <TeamMember />

      <ContactForm />
  
      <Footer />
    </>
  );
}
