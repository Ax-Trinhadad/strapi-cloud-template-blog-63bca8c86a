import React from "react";
import Link from "next/link";
import axios from "axios";
import baseApiUrl from "@/utils/baseApiUrl";

const Skills = () => {
  const [skill, setSkill] = React.useState();
  React.useEffect(() => {
    const getSkill = async () => {
      const response = await axios.get(
        `${baseApiUrl}/api/skill?populate=*`
      );
      setSkill(response.data);
      // console.log(response.data);
    };
    getSkill();
  }, []);
  return (
    <>
      {skill && (
        <div className="skill-area ptb-100">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6 col-md-12">
                <div className="skill-content">
                  <span>{skill.data.attributes.subTitle}</span>
                  <h3>{skill.data.attributes.title}</h3>
                </div>
  
                <div
                  className="skill-bar"
                  data-aos="fade-up"
                  data-aos-delay="50"
                  data-aos-duration="500"
                  data-aos-once="true"
                >
                  <h5 className="progress-title">
                    Software Development 
                    <span className="float-end">92%</span>
                  </h5>
                  <div className="progress border-3e019a">
                    <div
                      className="progress-bar bg-3e019a"
                      role="progressbar"
                      style={{ width: '92%' }}
                      aria-valuenow="92"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
                  </div>
                </div>
              
                <div
                  className="skill-bar"
                  data-aos="fade-up"
                  data-aos-delay="50"
                  data-aos-duration="600"
                  data-aos-once="true"
                >
                  <h5 className="progress-title">
                    App Development
                    <span className="float-end">80%</span>
                  </h5>
                  <div className="progress border-D5158F">
                    <div
                      className="progress-bar bg-D5158F"
                      role="progressbar"
                      style={{ width: '80%' }}
                      aria-valuenow="80"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
                  </div>
                </div>
              
                <div
                  className="skill-bar"
                  data-aos="fade-up"
                  data-aos-delay="50"
                  data-aos-duration="700"
                  data-aos-once="true"
                >
                  <h5 className="progress-title">
                    Artificial Intelligence
                    <span className="float-end">70%</span>
                  </h5>
                  <div className="progress border-feb302">
                    <div
                      className="progress-bar bg-feb302"
                      role="progressbar"
                      style={{ width: '70%' }}
                      aria-valuenow="70"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
                  </div>
                </div>
              
                <div
                  className="skill-bar"
                  data-aos="fade-up"
                  data-aos-delay="50"
                  data-aos-duration="700"
                  data-aos-once="true"
                >
                  <h5 className="progress-title">
                    Cyber Security
                    <span className="float-end">45%</span>
                  </h5>
                  <div className="progress border-A66BFF">
                    <div
                      className="progress-bar bg-A66BFF"
                      role="progressbar"
                      style={{ width: '45%' }}
                      aria-valuenow="45"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
                  </div>
                </div>

                <div className="skill-bar-btn" data-aos="fade-up" data-aos-delay="90" data-aos-duration="900" data-aos-once="true">
                  <Link href={skill.data.attributes.btnLink}>
                    <a className="default-btn">{skill.data.attributes.btnText}</a>
                  </Link>
                </div>
              </div>
  
              <div className="col-lg-6 col-md-12">
                <div
                  className="skill-image"
                  data-aos="fade-left"
                  data-aos-delay="80"
                  data-aos-duration="800"
                  data-aos-once="true"
                >
                  <img 
                    src={skill.data.attributes.image.data.attributes.url}
                    alt={skill.data.attributes.image.data.attributes.alternativeText}
                  />

                  <div className="skill-shape-1">
                    <img src="/images/skill/skill-shape-1.png" alt="image" />
                  </div>
                  <div className="skill-shape-2">
                    <img src="/images/skill/skill-shape-2.png" alt="image" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="skill-bg-shape">
            <img src="/images/skill/skill-bg-shape.png" alt="image" />
          </div>
        </div>
      )}
    </>
  );
};

export default Skills;
