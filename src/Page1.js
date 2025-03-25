import React from 'react';
import img1 from './images/logo.jpg'; 
import img2 from './images/manamarteru1.jpg'; 
import img3 from './images/manamarteru2.jpg'; 
function Page1() {
  return (
    <>
      <div
        style={{
          backgroundColor: "#AAC9CE",
          backgroundImage: `url(${img1})`,
          backgroundSize: "cover", 
          backgroundPosition: "center", 
          height: "100vh", 
          display: "flex",
          justifyContent: "center", 
          alignItems: "center",
          textAlign: "center", 
        }}
      >
        <div>
          <h1 style={{ color: "#FFFFFF" }}>aerial view of our village</h1>
         

        
          <div style={{ marginTop: "30px" }}>
            <img src={img2} alt="Second" style={{ width: "300px", margin: "10px" }} />
            <img src={img3} alt="Third" style={{ width: "300px", margin: "10px" }} />
          </div>
        </div>
      </div>
    </>
  );
}

export default Page1;
