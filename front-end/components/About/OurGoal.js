import React from "react";
import axios from "axios";
import baseApiUrl from "@/utils/baseApiUrl";

const OurGoal = () => {
  const [ourGoal, setOurGoal] = React.useState();
  React.useEffect(() => {
    const getOurGoal = async () => {
      const response = await axios.get(
        `${baseApiUrl}/api/about-our-goal?populate=*`
      );
      setOurGoal(response.data);
      // console.log(response.data);
    };
    getOurGoal();
  }, []);
  return (
    <>
      {ourGoal && (
        <div className="about-area pt-100 pb-75">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6 col-md-12">
                <div className="about-wrap-image">
                  <img
                    src={ourGoal.data.attributes.image.data.attributes.url}
                    alt={ourGoal.data.attributes.image.data.attributes.alternativeText}
                    data-aos="fade-down"
                    data-aos-delay="80"
                    data-aos-duration="800"
                    data-aos-once="true"
                  />
                </div>
              </div>
              <div className="col-lg-6 col-md-12">
                <div
                  className="about-wrap-content"
                  data-aos="fade-up"
                  data-aos-delay="80"
                  data-aos-duration="800"
                  data-aos-once="true"
                >
                  <span>{ourGoal.data.attributes.subTitle}</span>
                  <h3>{ourGoal.data.attributes.title}</h3>
                  <p>
                    {ourGoal.data.attributes.shortDec}
                  </p>
                </div>
              </div>
            </div>

            <div className="about-inner-box">
              <div className="row justify-content-center align-items-center">
                <div className="col-lg-4 col-md-6">
                  <div
                    className="single-about-card"
                    data-aos="fade-up"
                    data-aos-delay="80"
                    data-aos-duration="800"
                    data-aos-once="true"
                  >
                    <h3>{ourGoal.data.attributes.ourVisionTitle}</h3>
                    <p>
                      {ourGoal.data.attributes.ourVisionDec}
                    </p>
                  </div>
                </div>

                <div className="col-lg-4 col-md-6">
                  <div
                    className="single-about-card"
                    data-aos="fade-down"
                    data-aos-delay="70"
                    data-aos-duration="700"
                    data-aos-once="true"
                  >
                    <h3>{ourGoal.data.attributes.ourMissionTitle}</h3>
                    <p>
                      {ourGoal.data.attributes.ourMissionDec}
                    </p>
                  </div>
                </div>

                <div className="col-lg-4 col-md-6">
                  <div
                    className="single-about-card"
                    data-aos="fade-up"
                    data-aos-delay="80"
                    data-aos-duration="800"
                    data-aos-once="true"
                  >
                    <div className="card-image">
                      <img 
                        src={ourGoal.data.attributes.image2.data.attributes.url}
                        alt={ourGoal.data.attributes.image2.data.attributes.alternativeText}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="about-circle-shape">
            <img src="/images/about/about-circle.png" alt="image" />
          </div>
        </div>
      )}
    </>
  );
};

export default OurGoal;
