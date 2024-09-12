
import { GoogleMap, LoadScript } from '@react-google-maps/api';
import { FC } from 'react';
// const center = {
//     lat: 31.2001, // Latitude for Alexandria, Egypt
//     lng: 29.9187, // Longitude for Alexandria, Egypt
//   };
const center = {
    lat: 30.0444, // Latitude for Cairo, Egypt
    lng: 31.2357, // Longitude for Cairo, Egypt
  };
  
  // Rename the component to avoid conflict with the imported GoogleMap
  const MapComponent: FC = () => {
    return (
      <>
        <div className="min-h-screen flex flex-col items-center px-4 ">
          <h1 className="text-4xl font-bold text-center mt-10 mb-5 text-[#198754]">
          اعرف موقعنا؟؟!
          </h1>
  
          <div className="w-full max-w-6xl h-[400px] md:h-[600px] rounded-lg overflow-hidden ">
            <LoadScript googleMapsApiKey="AIzaSyBDWQqsZrvVbsKKvSJBKiLwik9BGVHz41Y">
              <GoogleMap
                mapContainerClassName="w-full h-full" // Fixed the className issue
                center={center}
                zoom={12}
              >
                {/* Add markers or other Google Map components here */}
              </GoogleMap>
            </LoadScript>
          </div>
        </div>
      </>
    );
  };
  
  export default MapComponent;