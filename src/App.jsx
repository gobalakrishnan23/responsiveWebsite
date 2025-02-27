import { useState, useRef } from "react";
import "./App.css";

function App() {
  const paragraphs = [
    <div>
      <h3 style={{ color: "#FFFFFF", paddingTop: "30px" }}>Benefits of</h3>
      <h3 style={{ color: "#FFFFFF" }}>improving your business</h3>
      <div style={{ marginTop: "50px" }}>
        <img src="Special Icon.png"></img>
        <h2 style={{ color: "#FFFFFF", marginTop: "10px" }}>
          Expending the Market
        </h2>
      </div>
    </div>,
    <div>
      <h3 style={{ color: "#FFFFFF", paddingTop: "30px" }}>Benefits of</h3>
      <h3 style={{ color: "#FFFFFF" }}>improving your business</h3>
      <div style={{ marginTop: "50px" }}>
        <img src="Special Icon (1).png"></img>
        <h2 style={{ color: "#FFFFFF", marginTop: "10px" }}>Cost-Effective</h2>
      </div>
    </div>,
    <div>
      <h3 style={{ color: "#FFFFFF", paddingTop: "30px" }}>Benefits of</h3>
      <h3 style={{ color: "#FFFFFF" }}>improving your business</h3>
      <div style={{ marginTop: "50px" }}>
        <img src="Special Icon (2).png"></img>
        <h2 style={{ color: "#FFFFFF", marginTop: "10px" }}>
          More Professional
        </h2>
      </div>
    </div>,
    <div>
      <h3 style={{ color: "#FFFFFF", paddingTop: "30px" }}>Benefits of</h3>
      <h3 style={{ color: "#FFFFFF" }}>improving your business</h3>
      <div style={{ marginTop: "50px" }}>
        <img src="Special Icon (3).png"></img>
        <h2 style={{ color: "#FFFFFF", marginTop: "10px" }}>Attract Clint</h2>
      </div>
    </div>,
  ];

  const [index, setIndex] = useState(0);

  // const handleNext = () => {
  //   setIndex(
  //     (prevIndex) => (prevIndex - 1 + paragraphs.length) % paragraphs.length
  //   );
  // };
  const handlefirst = () => {
    setIndex((prevIndex) => (prevIndex = 0) % paragraphs.length);
    document.getElementById("btn").style.backgroundColor = "red";
    document.getElementById("btn1").style.backgroundColor = "#ccc";
    document.getElementById("btn2").style.backgroundColor = "#ccc";
    document.getElementById("btn3").style.backgroundColor = "#ccc";
  };
  const handleSecond = () => {
    setIndex((prevIndex) => (prevIndex = 1) % paragraphs.length);
    document.getElementById("btn1").style.backgroundColor = "red";
    document.getElementById("btn").style.backgroundColor = "#ccc";
    document.getElementById("btn2").style.backgroundColor = "#ccc";
    document.getElementById("btn3").style.backgroundColor = "#ccc";
  };
  const handleThird = () => {
    setIndex((prevIndex) => (prevIndex = 2) % paragraphs.length);
    document.getElementById("btn2").style.backgroundColor = "red";
    document.getElementById("btn").style.backgroundColor = "#ccc";
    document.getElementById("btn1").style.backgroundColor = "#ccc";
    document.getElementById("btn3").style.backgroundColor = "#ccc";
  };
  const handlefour = () => {
    setIndex((prevIndex) => (prevIndex = 3) % paragraphs.length);
    document.getElementById("btn3").style.backgroundColor = "red";
    document.getElementById("btn1").style.backgroundColor = "#ccc";
    document.getElementById("btn2").style.backgroundColor = "#ccc";
    document.getElementById("btn").style.backgroundColor = "#ccc";
  };

  const containerRef = useRef(null);
  const [touchStartY, setTouchStartY] = useState(0);
  const [isThreeFingerTouch, setIsThreeFingerTouch] = useState(false);

  const handleTouchStart = (e) => {
    if (e.touches.length === 3) {
      setTouchStartY(e.touches[0].clientY);
      setIsThreeFingerTouch(true);
    }
  };

  const handleTouchMove = (e) => {
    if (isThreeFingerTouch && containerRef.current) {
      const touchCurrentY = e.touches[0].clientY;
      const scrollDiff = touchStartY - touchCurrentY;
      containerRef.current.scrollTop += scrollDiff; // Adjust scrolling
      setTouchStartY(touchCurrentY); // Update for smooth scrolling
    }
  };

  const handleTouchEnd = () => {
    setIsThreeFingerTouch(false);
  };
  return (
    <>
      <div
        style={{
          width: "98.7dvw",
          backgroundColor: "#060E46",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
          className="container"
        >
          <div style={{ display: "flex", alignItems: "center" }}>
            <img src="Logo 1.png"></img>
            <h1 style={{ color: "#FFFFFF" }}>IT Flow</h1>
          </div>
          <div className="headLine">
            <ul
              style={{
                color: "#ccc",
                display: "flex",
                listStyleType: "none",
                gap: "50px",
                alignItems: "center",
              }}
            >
              <li style={{ borderBottom: "1px solid #9900FF" }}>Home</li>
              <li>Service</li>
              <li>Project</li>
              <li>About Us</li>
            </ul>
          </div>
          <div className="button">
            <button
              style={{
                backgroundColor: "#9900FF",
                padding: "10px",
                paddingRight: "15px",
                paddingLeft: "15px",
                border: "none",
                borderRadius: "30px",
                color: "#ccc",
              }}
            >
              Contect Us
            </button>
          </div>
          <div className="icon">
            <img src="Menu.png"></img>
          </div>
        </div>
        <div style={{ textAlign: "center", marginTop: "50px" }}>
          <button className="button-2">
            NUMBER ONE CREATIVE DIGITAL AGENCY
          </button>
        </div>
        <div>
          <h1 className="text">Smart Choices</h1>
          <div className="text-1" style={{ textAlign: "center" }}>
            <h1>For Your Business</h1>
            <h1>Growth</h1>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              marginTop: "10px",
              padding: "10px",
            }}
          >
            <p style={{ color: "#ccc", width: "500px", textAlign: "center" }}>
              We're a team of experienced designers, developers, and marketers,
              passionate about delivering exceptional digital solutions.
            </p>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              marginTop: "30px",
            }}
          >
            <button
              style={{
                backgroundColor: "#5710E3",
                fontSize: "15px",
                padding: "10px",
                paddingRight: "20px",
                paddingLeft: "20px",
                borderRadius: "30px",
                display: "flex",
                alignItems: "center",
                gap: "10px",
                color: "#ccc",
                border: "none",
              }}
            >
              Contact Us<img src="Arrow Right.png"></img>
            </button>
          </div>
        </div>
        <div style={{ marginTop: "30px" }} className="container-1">
          <div style={{ display: "flex", justifyContent: "center" }}>
            <h1
              style={{
                color: "#FFFFFF",
                width: "fit-content",
                paddingTop: "30px",
              }}
            >
              Benefit of improving your business
            </h1>
          </div>
          <div
            style={{
              display: "flex",
              padding: "40px",
              justifyContent: "center",
              gap: "100px",
            }}
          >
            <div style={{ textAlign: "center" }}>
              <img src="Special Icon.png"></img>
              <p style={{ color: "#ccc", fontSize: "25px" }}>
                Expending the Market
              </p>
            </div>
            <div style={{ textAlign: "center" }}>
              <img src="Special Icon (1).png"></img>
              <p style={{ color: "#ccc", fontSize: "25px" }}>Cost-Effective</p>
            </div>
            <div style={{ textAlign: "center" }}>
              <img src="Special Icon (2).png"></img>
              <p style={{ color: "#ccc", fontSize: "25px" }}>
                More Professional
              </p>
            </div>
            <div style={{ textAlign: "center" }}>
              <img src="Special Icon (3).png"></img>
              <p style={{ color: "#ccc", fontSize: "25px" }}>attract Client</p>
            </div>
          </div>
        </div>
        <div className="con-2">
          <div className="container-2">
            <div>{paragraphs[index]}</div>
            <div
              className="con-btn"
              style={{
                marginTop: "30px",
                display: "flex",
                gap: "10px",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <button
                onClick={handlefirst}
                style={{
                  borderRadius: "100%",
                  height: "10px",
                  padding: "1px",
                  width: "10px",
                  border: "none",
                  backgroundColor: "red",
                }}
                id="btn"
              ></button>
              <button
                onClick={handleSecond}
                style={{
                  borderRadius: "100%",
                  height: "10px",
                  padding: "1px",
                  width: "10px",
                  border: "none",
                  backgroundColor: "#ccc",
                }}
                id="btn1"
              ></button>
              <button
                onClick={handleThird}
                style={{
                  borderRadius: "100%",
                  height: "10px",
                  padding: "1px",
                  width: "10px",
                  border: "none",
                  backgroundColor: "#ccc",
                }}
                id="btn2"
              ></button>
              <button
                onClick={handlefour}
                style={{
                  borderRadius: "100%",
                  height: "10px",
                  padding: "1px",
                  width: "10px",
                  border: "none",
                  backgroundColor: "#ccc",
                }}
                id="btn3"
              ></button>
            </div>
          </div>
        </div>
        <div
          className="container-3"
          style={{ backgroundColor: "black", marginTop: "100px" }}
        >
          <div className="box">
            <img src="Logo.png"></img>
            <img src="Logo (1).png"></img>
            <img src="Logo (2).png"></img>
          </div>
          <div className="box-1">
            <img src="Logo (3).png"></img>
            <img src="Logo (4).png"></img>
            <img src="Logo (5).png"></img>
          </div>
        </div>
        <div style={{ backgroundColor: "#250032" }}>
          <div className="container-4">
            <h1>The Services We</h1>
            <div className="box-2">
              <h1>Offer</h1>
              <h1 style={{ color: "#01A998" }}>For You</h1>
            </div>
          </div>
          <div className="container-5">
            <div
              style={{
                color: "#FFFFFF",
                border: "3px solid #38C6BF",
                backgroundColor: "#0158AA",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                padding: "20px",
                borderRadius: "30px",
              }}
              className="box-3"
            >
              <img src="illustration-1.png"></img>
              <h1>UI / UX DESIGN</h1>
              <p style={{ textAlign: "center", marginTop: "30px" }}>
                Lorem ipsum dolor sit amet consectetur. Nibh luctus nisi ac eu.
                Ultricies nisl enim lacus id aliquam montes euismod urna sem.
              </p>
            </div>
            <div
              style={{ backgroundColor: "#38C6BF", borderRadius: "30px" }}
              className="box-5"
            >
              <div
                style={{
                  color: "#FFFFFF",
                  border: "3px solid #38C6BF",
                  backgroundColor: "#0158AA",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: "20px",
                  borderRadius: "30px",
                  position: "relative",
                  right: "20px",
                  bottom: "20px",
                }}
                className="box-4"
              >
                <img src="Web development, coding and software development.png"></img>
                <h1>Web Development</h1>
                <p style={{ textAlign: "center", marginTop: "30px" }}>
                  Lorem ipsum dolor sit amet consectetur. Nibh luctus nisi ac
                  eu. Ultricies nisl enim lacus id aliquam montes euismod urna
                  sem.
                </p>
              </div>
            </div>
            <div
              style={{
                color: "#FFFFFF",
                border: "3px solid #38C6BF",
                backgroundColor: "#0158AA",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                padding: "20px",
                borderRadius: "30px",
              }}
              className="box-3"
            >
              <img src="Lettering SEO with target, graphs and searchbar text.png"></img>
              <h1 style={{ marginTop: "70px" }}>Digital Marketing</h1>
              <p style={{ textAlign: "center", marginTop: "30px" }}>
                Lorem ipsum dolor sit amet consectetur. Nibh luctus nisi ac eu.
                Ultricies nisl enim lacus id aliquam montes euismod urna sem.
              </p>
            </div>
          </div>
        </div>
        <div style={{ padding: "70px" }}>
          <div className="container-7">
            <p style={{ color: "#FFFFFF" }}>
              We are passionate about helping businesses grow and succeed in the
              digital age. We take pride in our work and strive to exceed your
              expectations every time.
            </p>
          </div>
          <div className="container-6">
            <div style={{ color: "#FFFFFF" }}>
              <h1>10+</h1>
              <p>Years of Experience</p>
            </div>
            <div style={{ color: "#FFFFFF" }}>
              <h1>666+</h1>
              <p>Project Completed</p>
            </div>
            <div style={{ color: "#FFFFFF" }}>
              <h1>555+</h1>
              <p>Satisfied Clint</p>
            </div>
            <div style={{ color: "#FFFFFF" }}>
              <h1>10+</h1>
              <p>Awards Achived</p>
            </div>
          </div>
        </div>
        <div style={{ padding: "30px" }}>
          <div>
            <div className="container-8">
              <h1>Our Project Have</h1>
              <div className="container-9">
                <h1>Been</h1>
                <h1 style={{ color: "#0A958E" }}>Done</h1>
              </div>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                marginTop: "20px",
              }}
            >
              <p style={{ color: "#ccc", width: "700px", textAlign: "center" }}>
                Take a look at some of our recent projects and see how we've
                helped other businesses elevate their brand and drive business
                growth.
              </p>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                marginTop: "30px",
              }}
              className="container-10"
            >
              <ul
                style={{
                  display: "flex",
                  gap: "20px",
                  listStyleType: "none",
                  backgroundColor: "#FFFFFF",
                  padding: "5px",
                  borderRadius: "30px",
                  alignItems: "center",
                }}
              >
                <li
                  style={{
                    backgroundColor: "#1C3EE8",
                    padding: "10px",
                    borderRadius: "30px",
                    color: "#FFFFFF",
                  }}
                >
                  UI/UX Design
                </li>
                <li>Digital Marketing</li>
                <li>Sosmed Management</li>
                <li>Development</li>
              </ul>
            </div>
          </div>
          <div className="container-12">
            <div className="container-11">
              <div>
                <img src="Img.png" className="img-1"></img>
              </div>
              <div>
                <h2 style={{ color: "#FFFFFF", marginTop: "10px" }}>Title</h2>
                <p style={{ color: "#FFFFFF", marginTop: "10px" }}>
                  We are designed to help your business thrive in the online
                  world.
                </p>
              </div>
            </div>
            <div className="container-11">
              <div>
                <img src="Img (1).png" className="img-1"></img>
              </div>
              <div>
                <h2 style={{ color: "#FFFFFF", marginTop: "10px" }}>Title</h2>
                <p style={{ color: "#FFFFFF", marginTop: "10px" }}>
                  We are designed to help your business thrive in the online
                  world.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div style={{ marginTop: "100px" }}>
          <div style={{ textAlign: "center", color: "#FFFFFF" }}>
            <h1>CONTACT US</h1>
            <p style={{ padding: "20px" }}>
              Lorem ipsum dolor sit amet consectetur. Nibh luctus nisi ac eu.
              Ultricies nisl enim lacus id aliquam montes euismod urna sem.
            </p>
          </div>
          <div className="container-13">
            <div style={{ display: "flex", justifyContent: "center" }}>
              <img src="Illustration-2.png" className="img-10"></img>
            </div>
            <div
              style={{ display: "flex", justifyContent: "center" }}
              className="box-6"
            >
              <div style={{ backgroundColor: "#0F1A30", padding: "20px" }}>
                <h1 style={{ color: "#00AAFF" }}>Register interest</h1>
                <p style={{ color: "#ccc", marginTop: "20px" }}>
                  Use the form below to contact us. Please be as detailed and
                  precise as possible. Include your industry and any specific
                  requests. To help us get to know and serve you better, we
                  thank you for first giving us a good description of who you
                  are. You can also send an email, call us or send us a WhatsApp
                  to make an appointment.
                </p>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    marginTop: "20px",
                    color: "#FFFFFF",
                  }}
                >
                  <label>Name</label>
                  <input
                    style={{
                      marginTop: "5px",
                      marginBottom: "10px",
                      padding: "10px",
                      border: "none",
                      borderRadius: "5px",
                    }}
                    type="text"
                    placeholder="Enter your name"
                  ></input>
                  <label>Company</label>
                  <input
                    style={{
                      marginTop: "5px",
                      marginBottom: "10px",
                      padding: "10px",
                      border: "none",
                      borderRadius: "5px",
                    }}
                    type="text"
                    placeholder="Enter your company name"
                  ></input>
                  <label>Email address</label>
                  <input
                    style={{
                      marginTop: "5px",
                      marginBottom: "10px",
                      padding: "10px",
                      border: "none",
                      borderRadius: "5px",
                    }}
                    type="email"
                    placeholder="Enter your email address"
                  ></input>
                  <label>Message</label>
                  <textarea
                    style={{
                      marginTop: "5px",
                      marginBottom: "10px",
                      padding: "10px",
                      border: "none",
                      borderRadius: "5px",
                      height: "100px",
                    }}
                    type="text"
                    placeholder="Your massage hare"
                  ></textarea>
                  <button
                    style={{
                      backgroundColor: "#0A2462",
                      padding: "10px",
                      borderRadius: "30px",
                      border: "none",
                      color: "#FFFFFF",
                      width: "150px",
                    }}
                  >
                    Submit
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            gap: "30px",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div className="container-15">
            <div
              style={{
                width: "350px",
                backgroundColor: "#5738C6",
                padding: "20px",
                borderRadius: "5px",
                marginTop: "30px",
                color: "#FFFFFF",
              }}
            >
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. aliquam
                diam sagittis sagittis ullamcorper. Lorem ipsum dolor sit amet,
                consectetur adipiscing elit. aliquam.
              </p>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                  marginTop: "10px",
                }}
              >
                <img
                  style={{ width: "50px", height: "50px" }}
                  src="Avatar.png"
                ></img>
                <div>
                  <h4>ClaraInsomnia</h4>
                  <p>Occupation</p>
                </div>
              </div>
            </div>
            <div
              style={{
                width: "350px",
                backgroundColor: "#5738C6",
                padding: "20px",
                borderRadius: "5px",
                marginTop: "30px",
                color: "#FFFFFF",
              }}
            >
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. aliquam
                diam sagittis sagittis ullamcorper. Lorem ipsum dolor sit amet,
                consectetur adipiscing elit. aliquam.
              </p>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                  marginTop: "10px",
                }}
              >
                <img
                  style={{ width: "50px", height: "50px" }}
                  src="Avatar (1).png"
                ></img>
                <div>
                  <h4>John Doe</h4>
                  <p>Earth Rounder</p>
                </div>
              </div>
            </div>
            <div
              style={{
                width: "350px",
                backgroundColor: "#5738C6",
                padding: "20px",
                borderRadius: "5px",
                marginTop: "30px",
                color: "#FFFFFF",
              }}
            >
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. aliquam
                diam sagittis sagittis ullamcorper. Lorem ipsum dolor sit amet,
                consectetur adipiscing elit. aliquam.
              </p>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                  marginTop: "10px",
                }}
              >
                <img
                  style={{ width: "50px", height: "50px" }}
                  src="Avatar (2).png"
                ></img>
                <div>
                  <h4>Sabrina Car Panther</h4>
                  <p>Occupation</p>
                </div>
              </div>
            </div>
          </div>
          <div
            ref={containerRef}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
            style={{
              width: "420px",
              height: "600px",
              overflowY: "scroll",
              padding: "10px",
              marginTop: "30px",
              display:"flex",
              flexDirection:"column",
              alignItems:"center"
            }}
          >
            <div className="box-20"
              style={{
                backgroundColor: "#5738C6",
                padding: "20px",
                borderRadius: "5px",
                color: "#FFFFFF",
              }}
            >
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. aliquam
                diam sagittis sagittis ullamcorper. Lorem ipsum dolor sit amet,
                consectetur adipiscing elit. aliquam.
              </p>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                  marginTop: "10px",
                }}
              >
                <img
                  style={{ width: "50px", height: "50px" }}
                  src="Avatar.png"
                ></img>
                <div>
                  <h4>ClaraInsomnia</h4>
                  <p>Occupation</p>
                </div>
              </div>
            </div>
            <div className="box-20"
              style={{
                backgroundColor: "#5738C6",
                padding: "20px",
                borderRadius: "5px",
                marginTop: "30px",
                color: "#FFFFFF",
              }}
            >
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. aliquam
                diam sagittis sagittis ullamcorper. Lorem ipsum dolor sit amet,
                consectetur adipiscing elit. aliquam.
              </p>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                  marginTop: "10px",
                }}
              >
                <img
                  style={{ width: "50px", height: "50px" }}
                  src="Avatar (1).png"
                ></img>
                <div>
                  <h4>John Doe</h4>
                  <p>Earth Rounder</p>
                </div>
              </div>
            </div>
            <div className="box-20"
              style={{
                backgroundColor: "#5738C6",
                padding: "20px",
                borderRadius: "5px",
                marginTop: "30px",
                color: "#FFFFFF",
              }}
            >
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. aliquam
                diam sagittis sagittis ullamcorper. Lorem ipsum dolor sit amet,
                consectetur adipiscing elit. aliquam.
              </p>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                  marginTop: "10px",
                }}
              >
                <img
                  style={{ width: "50px", height: "50px" }}
                  src="Avatar (2).png"
                ></img>
                <div>
                  <h4>Sabrina Car Panther</h4>
                  <p>Occupation</p>
                </div>
              </div>
            </div>
            <div className="box-20"
              style={{
                backgroundColor: "#5738C6",
                padding: "20px",
                borderRadius: "5px",
                marginTop: "30px",
                color: "#FFFFFF",
              }}
            >
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. aliquam
                diam sagittis sagittis ullamcorper. Lorem ipsum dolor sit amet,
                consectetur adipiscing elit. aliquam.
              </p>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                  marginTop: "10px",
                }}
              >
                <img
                  style={{ width: "50px", height: "50px" }}
                  src="Avatar (3).png"
                ></img>
                <div>
                  <h4>Lil Nas</h4>
                  <p>Moon Founder</p>
                </div>
              </div>
            </div>
            <div className="box-20"
              style={{
                backgroundColor: "#5738C6",
                padding: "20px",
                borderRadius: "5px",
                marginTop: "30px",
                color: "#FFFFFF",
              }}
            >
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. aliquam
                diam sagittis sagittis ullamcorper. Lorem ipsum dolor sit amet,
                consectetur adipiscing elit. aliquam.
              </p>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                  marginTop: "10px",
                }}
              >
                <img
                  style={{ width: "50px", height: "50px" }}
                  src="Avatar (4).png"
                ></img>
                <div>
                  <h4>Alan Runner</h4>
                  <p>Sun Founder</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
