import React from 'react'
import Link from 'next/link'
import NavbarTwo from '@/components/Layout/NavbarTwo'
import ProjectsDetailsContent from '@/components/Projects/ProjectsDetailsContent'
import CTO from '@/components/Common/CTO'
import ContactForm from '@/components/Common/ContactForm'
import Footer from '@/components/Layout/Footer'
import baseApiUrl from "@/utils/baseApiUrl";

const ProjectsDetails = ({ project: { data } }) => {
  return (
    <>
      <NavbarTwo />

      <div
        className="page-banner-area mt-94"
        style={{ backgroundImage: `url(/images/page-banner/banner-bg-3.jpg` }}
      >
        <div className="container">
          <div
            className="page-banner-content"
            data-aos="fade-right"
            data-aos-delay="50"
            data-aos-duration="500"
            data-aos-once="true"
          >
            <h2>{data[0].attributes.title}</h2>
            <ul>
              <li>
                <Link href="/">
                  <a>Home</a>
                </Link>
              </li>
              <li>{data[0].attributes.title}</li>
            </ul>
          </div>
        </div>
      </div>

      <ProjectsDetailsContent {...data[0]} />

      <CTO />

      <ContactForm />

      <Footer />
    </>
  );
};

export async function getStaticPaths() {
  const res = await fetch(`${baseApiUrl}/api/projects`);
  const { data } = await res.json();
  // console.log(data);
  const paths = data.map((project) => ({
    params: { slug: project.attributes.slug },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  // console.log(params);
  // Call an external API endpoint to get products.
  // You can use any data fetching library
  const res = await fetch(
    `${baseApiUrl}/api/projects?filters[slug][$eq]=${params.slug}&populate=*`
  );
  const project = await res.json();
  // By returning { props: { project } }, the Blog component
  // will receive `project` as a prop at build time
  return {
    props: {
      project,
    },
  };
}

export default ProjectsDetails;