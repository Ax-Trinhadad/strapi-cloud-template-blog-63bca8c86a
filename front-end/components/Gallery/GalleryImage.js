import React from 'react'
import axios from 'axios'
import baseApiUrl from '@/utils/baseApiUrl'

const GalleryImage = () => {
  const [gallery, setGallery] = React.useState()
  React.useEffect(() => {
    const getGallery = async () => {
      const response = await axios.get(
        `${baseApiUrl}/api/gallery?populate=galleryImg.image`,
      )
      setGallery(response.data)
      // console.log(response.data)
    }
    getGallery()
  }, [])
  return (
    <>
      {gallery && (
        <section className="gallery-area pt-100 pb-75">
          <div className="container">
            <div className="row">
              {gallery.data.attributes.galleryImg.map((item) => (
                <div className="col-lg-4 col-md-6 col-sm-6" key={item.id}>
                  <div className="single-gallery-item">
                    <img
                      src={item.image.data.attributes.url}
                      alt={item.image.data.attributes.alternativeText}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  )
}

export default GalleryImage
