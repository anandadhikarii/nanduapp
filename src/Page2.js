import React from 'react';
import videoSource from './mp4/croped logo.mp4';
import backgroundImage from './images/logo.jpg'; // Replace with the path to your background image

function Page2() {
  return (
    <>
      <div
        style={{
          backgroundImage: `url(${backgroundImage})`, // Set the background image
          backgroundSize: 'cover', // Ensure the image covers the full container
          backgroundPosition: 'center', // Center the image
          backgroundRepeat: 'no-repeat', // Prevent the image from repeating
          height: "674px", // Set the height of the container
          color: 'white', // Set text color to white for better contrast
        }}
      >
        <h1 align="center">A glimpse of our page logo</h1>

        {/* Video Element */}
        <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
          <video width="600" height="400" controls>
            <source src={videoSource} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </>
  );
}

export default Page2;
