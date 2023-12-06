import React from "react";
import Link from "next/link";
import NavbarTwo from "@/components/Layout/NavbarTwo";
import KeyFeatures from "@/components/Common/KeyFeatures";
import AllServicesCard from "@/components/Services/AllServicesCard";
import ContactForm from "@/components/Common/ContactForm";
import Footer from "@/components/Layout/Footer";

export default function Services() {
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
            <h2>Services Style One</h2>
            <ul>
              <li>
                <Link href="/">
                  <a>Home</a>
                </Link>
              </li>
              <li>Services</li>
            </ul>
          </div>
        </div>
      </div>

      <KeyFeatures />

      <AllServicesCard />

      <ContactForm />

      <Footer />
    </>
  );
}
