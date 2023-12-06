import React, { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
const MySwal = withReactContent(Swal);
import baseUrl from "@/utils/baseUrl";
import baseApiUrl from "@/utils/baseApiUrl";

const alertContent = () => {
  MySwal.fire({
    title: "Congratulations!",
    text: "Your message was successfully send and will back to you soon",
    icon: "success",
    timer: 2000,
    timerProgressBar: true,
    showConfirmButton: false,
  });
};

// Form initial state
const INITIAL_STATE = {
  name: "",
  email: "",
  number: "",
  subject: "",
  text: "",
};

const ContactForm = () => {
  const [contact, setContact] = useState(INITIAL_STATE);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setContact((prevState) => ({ ...prevState, [name]: value }));
    // console.log(contact)
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const url = `${baseUrl}/api/contact`;
      const { name, email, number, subject, text } = contact;
      const payload = { name, email, number, subject, text };
      const response = await axios.post(url, payload);
      console.log(response);
      setContact(INITIAL_STATE);
      alertContent();
    } catch (error) {
      console.log(error);
    }
  };

  // API
  const [contactForm, setcontactForm] = React.useState();
  React.useEffect(() => {
    const getcontactForm = async () => {
      const response = await axios.get(
        `${baseApiUrl}/api/contact-form?populate=*`
      );
      setcontactForm(response.data);
      // console.log(response.data);
    };
    getcontactForm();
  }, []);

  return (
    <>
      {contactForm && (
        <div className="talk-area ptb-100">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6 col-md-12">
                <div className="talk-image">
                  <img 
                    src={contactForm.data.attributes.image.data.attributes.url}
                    alt={contactForm.data.attributes.image.data.attributes.alternativeText}
                  />
                </div>
              </div>

              <div className="col-lg-6 col-md-12">
                <div className="talk-content margin-zero">
                  <div className="talk-bg-text">{contactForm.data.attributes.subTitle}</div>
                  <span>{contactForm.data.attributes.subTitle}</span>
                  <h3>{contactForm.data.attributes.title}</h3>

                  <div className="contact-from">
                    <form onSubmit={handleSubmit}>
                      <div className="row">
                        <div className="col-lg-6 col-md-6">
                          <div className="form-group">
                            <input
                              type="text"
                              name="name"
                              className="form-control"
                              placeholder="Your name"
                              value={contact.name}
                              onChange={handleChange}
                              required
                            />
                          </div>
                        </div>
                        <div className="col-lg-6 col-md-6">
                          <div className="form-group">
                            <input
                              type="text"
                              name="email"
                              className="form-control"
                              placeholder="Your email address"
                              value={contact.email}
                              onChange={handleChange}
                              required
                            />
                          </div>
                        </div>
                        <div className="col-lg-6 col-md-6">
                          <div className="form-group">
                            <input
                              type="text"
                              name="subject"
                              className="form-control"
                              placeholder="Your Subject"
                              value={contact.subject}
                              onChange={handleChange}
                              required
                            />
                          </div>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-6">
                          <div className="form-group">
                            <input
                              type="text"
                              name="number"
                              className="form-control"
                              value={contact.number}
                              onChange={handleChange}
                              placeholder="Your Phone"
                              required
                            />
                          </div>
                        </div>
                        <div className="col-lg-12 col-md-12 col-sm-12">
                          <div className="form-group">
                            <textarea
                              name="text"
                              cols="30"
                              rows="6"
                              className="form-control"
                              placeholder="Your message..."
                              value={contact.text}
                              onChange={handleChange}
                              required
                            ></textarea>
                          </div>
                        </div>
                        <div className="col-lg-12 col-md-12 col-sm-12">
                          <button type="submit" className="default-btn">
                            Send Message<span></span>
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ContactForm;
