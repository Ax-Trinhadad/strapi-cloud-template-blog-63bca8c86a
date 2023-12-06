import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import axios from 'axios'
import baseApiUrl from '@/utils/baseApiUrl'

const Partners = () => {
  const [partnerSlider, setPartnerSlider] = React.useState()
  React.useEffect(() => {
    const getPartnerSlider = async () => {
      const response = await axios.get(
        `${baseApiUrl}/api/partner?populate=partnerItem.image`,
      )
      setPartnerSlider(response.data)
      // console.log(response.data)
    }
    getPartnerSlider()
  }, [])
  return (
    <>
      {partnerSlider && (
        <div className="partner-area ptb-100">
          <div className="container">
            <Swiper
              slidesPerView={1}
              spaceBetween={30}
              autoplay={{
                delay: 6000,
                disableOnInteraction: true,
              }}
              breakpoints={{
                0: {
                  slidesPerView: 2,
                },
                576: {
                  slidesPerView: 3,
                },
                768: {
                  slidesPerView: 4,
                },
                1024: {
                  slidesPerView: 6,
                },
              }}
              modules={[Autoplay]}
              className="mySwiper partner-slides"
            >
              {partnerSlider.data.attributes.partnerItem.map((item) => (
                <SwiperSlide key={item.id}>
                  <div className="partner-card">
                    <a href={item.link} target="_blank" rel="noreferrer">
                      <img 
                        src={item.image.data.attributes.url}
                        alt={item.image.data.attributes.alternativeText}
                      />
                    </a>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      )}
    </>
  );
};

export default Partners;
