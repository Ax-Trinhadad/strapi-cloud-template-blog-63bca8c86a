import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "../styles/bootstrap.min.css";
import "../styles/animate.min.css";
import "../styles/remixicon.css";
import "react-accessible-accordion/dist/fancy-example.css";
import "swiper/css";
import "swiper/css/bundle";
// Navbar CSS
import "../styles/navbar.css";
// Footer CSS
import "../styles/footer.css";
// Globals CSS
import "../styles/globals.css";
// Responsive CSS
import "../styles/responsive.css";

import Head from "next/head";
import ScrollToTop from "@/components/Layout/ScrollToTop";

function MyApp({ Component, pageProps }) {
    React.useEffect(() => {
        AOS.init();
    }, []);
    return (
        <>
            <Head>
                <title>
                    Stax - React IT Solutions & Services Template with Strapi
                    CMS
                </title>
                <meta
                    name="viewport"
                    content="initial-scale=1.0, width=device-width"
                />
            </Head>

            <Component {...pageProps} />

            <ScrollToTop />
        </>
    );
}

export default MyApp;
