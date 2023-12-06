import React from "react";
import Navbar from "@/components/Layout/Navbar";
import HeroSlider from "@/components/HomePageDemo1/HeroSlider";
import Partners from "@/components/Common/Partners";
import WhoWeAre from "@/components/HomePageDemo1/WhoWeAre";
import ServiceSlider from "@/components/Services/ServiceSlider";
import WhyChooseUs from "@/components/Common/WhyChooseUs";
import IntroVideo from "@/components/Common/IntroVideo";
import ProjectSlider from "@/components/Projects/ProjectSlider";
import Testimonials from "@/components/Common/Testimonials";
import PricingTable from "@/components/Pricing/PricingTable";
import Article from "@/components/Common/Article";
import Footer from "@/components/Layout/Footer";

export default function Home() {
  return (
    <>
      <Navbar />

      <HeroSlider />

      <Partners />

      <WhoWeAre />

      <ServiceSlider />

      <WhyChooseUs />

      <div className="mb-minus-100">
        <IntroVideo />
      </div>

      <ProjectSlider />

      <Testimonials />

      <div className="m-2 bor-radius-15">
        <PricingTable className="rounded-4" />
      </div>

      <Article />

      <div className="m-2 bor-radius-15">
        <Footer className="rounded-4" />
      </div>
    </>
  )
}
