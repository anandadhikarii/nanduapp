import img1 from "./images/logo.jpg"; // Import your background image (if needed)

function Page3() {
  return (
    <>
      <div
        style={{
          backgroundImage: `url(${img1})`, // This is your background image
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
            <a
              href="mailto:manamarteru@gmail.com"
              style={{ color: "#ffffff", textDecoration: "none" }}
            >
              manamarteru@gmail.com
            </a>
          </h2>

          <h1 style={{ color: "#ffffff" }}>THANK YOU</h1>
        </div>
      </div>
    </>
  );
}

export default Page3;
