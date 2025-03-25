import React from "react";
import img1 from "./images/logo.jpg";
import img2 from "./images/qr.svg";

function Home() {
  return (
    <div
      style={{
        textAlign: "center",
        backgroundImage: `url(${img1})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "100vh",
        color: "white",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        position: "relative",
      }}
    >
      <div>
        <h1>WELCOME TO OUR PAGE</h1>
        <p>foods & travel, news & updates, explore with us</p>
        <p>follow us on Instagram: @mana.marteru</p>
        <h2>for more updates follow us on Instagram</h2>

        {/* Inserted Image */}
        <a
          href="https://www.instagram.com/mana.marteru?igsh=MWpiNHhka2sxeXAyYw=="
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src={img2}
            alt="QR code"
            style={{
              marginTop: "30px",
              width: "200px",
              height: "200px",
              borderRadius: "10px",
            }}
          />
        </a>
      </div>
    </div>
  );
}

export default Home;
