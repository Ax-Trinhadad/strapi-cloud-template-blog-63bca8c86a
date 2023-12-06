import React from 'react'
import axios from 'axios'
import baseApiUrl from '@/utils/baseApiUrl'

const TeamMembers = () => {
  const [teamMember, setTeamMember] = React.useState()
  React.useEffect(() => {
    const getTeamMember = async () => {
      const response = await axios.get(
        `${baseApiUrl}/api/team-member?populate=members.image`,
      )
      setTeamMember(response.data)
      // console.log(response.data);
    }
    getTeamMember()
  }, [])
  return (
    <>
      {teamMember && (
        <div className="team-area pt-100 pb-75">
          <div className="container">
            <div className="section-title section-style-two">
              <span>{teamMember.data.attributes.subTitle}</span>
              <h2>{teamMember.data.attributes.title}</h2>
              <p>
                {teamMember.data.attributes.shortText}
              </p>
            </div>

            <div className="row justify-content-center">
              {teamMember.data.attributes.members.map((member) => (
                <div className="col-lg-3 col-sm-6" key={member.id}>
                  <div className="single-team-card">
                    <div className="team-image">
                      <img 
                        src={member.image.data.attributes.url}
                        alt={member.image.data.attributes.alternativeText}
                      />

                      <ul className="team-social">
                        <li>
                          <a
                            href={member.socialLink1}
                            target="_blank"
                            rel="noreferrer"
                          >
                            <i className={member.socialIcon1}></i>
                          </a>
                        </li>
                        <li>
                          <a
                            href={member.socialLink2}
                            target="_blank"
                            rel="noreferrer"
                          >
                            <i className={member.socialIcon2}></i>
                          </a>
                        </li>
                        <li>
                          <a
                            href={member.socialLink3}
                            target="_blank"
                            rel="noreferrer"
                          >
                            <i className={member.socialIcon3}></i>
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className="team-content">
                      <h3>{member.name}</h3>
                      <span>{member.designation}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="team-shape">
            <img src="/images/team/line-shape.png" alt="image" />
          </div>
        </div>
      )}
    </>
  )
}

export default TeamMembers
