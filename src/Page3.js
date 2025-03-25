import img1 from "./images/logo.jpg"; // Import your image

function Page3() {
  return (
    <>
      <div
        style={{
          backgroundImage: `url(${img1})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column" }}>
          <h1 style={{ color: "#ffffff" }}>DM us for paid promotions</h1>

          {/* Hyperlinked email address */}
          <h2 style={{ color: "#ffffff" }}>
            <a href="mailto:manamarteru@gmail.com" style={{ color: '#ffffff', textDecoration: 'none' }}>
              manamarteru@gmail.com
            </a>
          </h2>
          <iframe 
        src="https://drive.google.com/file/d/1EUJDtMPxVguxZgShfU_axL6So_dGEU6k/preview" 
        width="640" 
        height="480" 
        frameBorder="0" 
      ></iframe>


          <h1 style={{ color: "#ffffff" }}>THANK YOU</h1>
        </div>
      </div>
    </>
  );
}

export default Page3;
