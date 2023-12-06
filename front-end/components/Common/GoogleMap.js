import React from 'react'
import axios from "axios";
import baseApiUrl from "@/utils/baseApiUrl";

const GoogleMap = () => {
  // Logo API
  const [map, setMap] = React.useState();
  React.useEffect(() => {
    const getMap = async () => {
      const response = await axios.get(
        `${baseApiUrl}/api/google-map?populate=*`
      );
      setMap(response.data);
      // console.log(response.data);
    };
    getMap();
  }, []);
  return (
    <>
      {map && (
        <div className="container ptb-100">
          <div className="map-location">
            <iframe 
              src={map.data.attributes.mapLink}
              width="100%" 
              height="450" 
              allowFullScreen="" 
              loading="lazy"
            ></iframe>
          </div>
        </div>
      )}
    </>
  )
}

export default GoogleMap
