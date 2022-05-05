/* eslint-disable @next/next/no-html-link-for-pages */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import React from "react";
import Header from "../components/Header";
import Laptop1 from "../public/assets/svg/laptop1.svg";
import Symbols from "../public/assets/svg/symbols.svg";
export default function LandingPage() {
  return (
    <lol>
      <Header />
      <div hidden="" id="desktop">
        <div style={{ marginLeft: "7.5vw", marginTop: "5vh" }}>
          <div style={{ display: "flex" }}>
            <div style={{ position: "relative", marginTop: 150 }}>
              <img
                src="Ellipse_background.svg"
                style={{
                  width: "40vw",
                  height: "min(50vh,300px)",
                  objectFit: "cover",
                  objectPosition: "right top",
                }}
              />
              <div style={{ position: "absolute", top: "-1vh" }}>
                <div
                  style={{
                    left: "5vw",
                    borderLeft: "6px solid #42A4F2",
                    marginRight: "1vw",
                    padding: 0,
                    paddingLeft: "1vw",
                  }}
                >
                  <p
                    style={{
                      lineHeight: 1,
                      fontWeight: "bold",
                      fontSize: "3vw",
                      margin: 0,
                      padding: 0,
                    }}
                  >
                    Study,&nbsp; &nbsp;Improve
                  </p>
                  <p
                    style={{
                      lineHeight: 1,
                      fontWeight: "bold",
                      fontSize: "5vw",
                      color:
                        "linear-gradient(-63deg, rgba(66, 125.84, 242, 1), rgba(66, 188.50, 241, 1))",
                      margin: 0,
                    }}
                  >
                    Succeed
                  </p>
                  <p
                    style={{
                      marginTop: "2vh",
                      fontSize: "1.2vw",
                      fontWeight: 500,
                    }}
                  >
                    {" "}
                    Check your preparation level with this tiny test.
                  </p>
                </div>
                <a href="/competeZone" style={{ textDecoration: "none" }}>
                  <button
                    style={{
                      marginLeft: "10vw",
                      marginTop: 30,
                      backgroundImage:
                        "linear-gradient(-63deg, rgba(66, 125.84, 242, 1), rgba(66, 188.50, 241, 1))",
                      boxShadow: "2px 46px 35px -48px rgba(66, 128, 242, 1)",
                      borderRadius: 15,
                      borderColor: "transparent",
                      color: "white",
                      padding: "0.5vw",
                      paddingLeft: "3vw",
                      paddingRight: "3vw",
                    }}
                  >
                    Get Started
                  </button>
                </a>
              </div>
            </div>
            <div
              style={{
                marginLeft: "auto",
                marginTop: 75,
                position: "relative",
                marginRight: "7.5vw",
              }}
            >
              <img
                src="b.png"
                style={{ width: "40vw" }}
                alt="Potentio run logo"
              />
              <div style={{ position: "absolute", top: "5%", height: "100%" }}>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    flexDirection: "column",
                  }}
                >
                  <img
                    src="runny.png"
                    style={{ width: "45vw" }}
                    alt="Trade crypto opinion: Yes or No"
                  />
                </div>
              </div>
            </div>
          </div>
          <div>
            <div
              style={{
                width: "85vw",
                textAlign: "center",
                display: "flex",
                fontSize: "4vw",
                fontWeight: 600,
                justifyContent: "center",
                alignItems: "center",
                marginTop: 20,
              }}
            >
              <div
                style={{ margin: "1vw", color: "black", fontWeight: "bold" }}
              >
                Welcome
              </div>
              <div style={{ fontWeight: "bold" }}>to</div>
              <div
                style={{ margin: "1vw", color: "#00C566", fontWeight: "bold" }}
              >
                Growth
              </div>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                width: "85vw",
                textAlign: "center",
                marginTop: 30,
              }}
            >
              <div>
                <img
                  src="https://i.imgur.com/ZgmM60k.png"
                  style={{ height: "25vw", margin: "auto" }}
                  alt="Potentio - Reach your max potential"
                />
                <p
                  style={{
                    width: "15vw",
                    marginLeft: "2.5vw",
                    marginTop: 20,
                    fontSize: "2vw",
                    fontWeight: "bold",
                  }}
                >
                  <span style={{ color: "#00C566" }}>State-of-art</span>{" "}
                  Leaderboard <span style={{ color: "#00C566" }}>designs</span>{" "}
                </p>
                <p
                  style={{
                    width: "15vw",
                    marginLeft: "2.5vw",
                    marginTop: 20,
                    fontSize: "1vw",
                  }}
                >
                  {" "}
                  These leaderboards just motivate you to go ahead without
                  stress!{" "}
                </p>
              </div>
              <div>
                <img
                  src="https://i.imgur.com/1uZrjDI.png" // svg goes here
                  style={{ height: "25vw", margin: "auto" }}
                  alt="Opinion on Trading Buy and sell"
                />
                <p
                  style={{
                    width: "15vw",
                    marginLeft: "2.5vw",
                    marginTop: 20,
                    fontSize: "1.7vw",
                    fontWeight: "bolder",
                  }}
                >
                  {" "}
                  <span style={{ color: "#4C7AA3" }}>
                    {" "}
                    Variety<br></br>{" "}
                  </span>{" "}
                  of Tests
                </p>
                <p
                  style={{
                    width: "15vw",
                    marginLeft: "2.5vw",
                    marginTop: 20,
                    fontSize: "1vw",
                  }}
                >
                  {" "}
                  Tests for every level of preparation so that you always grow!{" "}
                </p>
              </div>
              <div>
                <img
                  src="https://i.imgur.com/p6Sponk.png" //svg goes here
                  style={{ height: "25vw", margin: "auto" }}
                  alt="Profit from your Opinions"
                />
                <p
                  style={{
                    width: "15vw",
                    marginLeft: "2.5vw",
                    marginTop: 20,
                    fontSize: "1.7vw",
                    fontWeight: "bolder",
                  }}
                >
                  <span style={{ color: "#4C7AA3" }}>JEE</span>-like <br></br>
                  <span style={{ color: "#B62D8F" }}>Testing UI</span>{" "}
                </p>
                <p
                  style={{
                    width: "15vw",
                    marginLeft: "2.5vw",
                    marginTop: 20,
                    fontSize: "1vw",
                  }}
                >
                  {" "}
                  So that you are familiar with real JEE testing from the
                  beginning of your journey!{" "}
                </p>
              </div>
            </div>
          </div>
          <div
            style={{
              background: "#E2EBF8",
              borderRadius: 80,
              width: "90vw",
              marginLeft: "-2.5vw",
              marginTop: 100,
              marginBottom: "7vw",
            }}
          >
            <div style={{ display: "flex" }}>
              <div
                style={{
                  position: "relative",
                  marginTop: 150,
                  marginLeft: "2.5vw",
                }}
              >
                <img
                  src="Ellipse_background.svg"
                  style={{
                    width: "40vw",
                    height: 250,
                    objectFit: "cover",
                    objectPosition: "right top",
                  }}
                />
                <div style={{ position: "absolute", top: "-1vh" }}>
                  <div
                    style={{
                      left: "5vw",
                      borderLeft: "6px solid #407BFF",
                      marginRight: "1vw",
                      padding: 0,
                      paddingLeft: "1vw",
                    }}
                  >
                    <p
                      style={{
                        lineHeight: 1,
                        fontWeight: "bold",
                        fontSize: "3vw",
                        margin: 0,
                        padding: 0,
                        marginTop: "1vw",
                      }}
                    >
                      <span style={{ color: "#407BFF" }}> Talk </span> cannot
                      guarantee,
                      <br /> <span style={{ color: "#407BFF" }}>
                        {" "}
                        Research
                      </span>{" "}
                      can...
                    </p>
                    <p
                      style={{
                        marginTop: "2vh",
                        fontSize: "1.2vw",
                        fontWeight: 500,
                      }}
                    >
                      {" "}
                      Prepare all your chapters with us. Our tests are made with
                      state of art methodologies which{" "}
                      <span style={{ color: "#407BFF" }}>
                        {" "}
                        guarantee your growth{" "}
                      </span>{" "}
                    </p>
                  </div>
                  <a href="competeZone" style={{ textDecoration: "none" }}>
                    <button
                      style={{
                        marginLeft: "10vw",
                        marginTop: 30,
                        background: "#407BFF",
                        boxShadow: "10px 10px 35px #D7D7D7",
                        borderRadius: 15,
                        borderColor: "transparent",
                        color: "white",
                        padding: "0.5vw",
                        paddingLeft: "3vw",
                        paddingRight: "3vw",
                      }}
                    >
                      Get Started
                    </button>
                  </a>
                </div>
              </div>
              <div
                style={{
                  marginLeft: "auto",
                  marginTop: 75,
                  position: "relative",
                  marginRight: "2.5vw",
                  paddingBottom: 75,
                }}
              >
                <img
                  src="https://i.imgur.com/aL1vjcJ.png"
                  style={{ width: "25vw" }}
                  alt="Opinion on Healthcare, Elections, Finance, Startups, Banking, Crypto"
                />
              </div>
            </div>
          </div>
          {/* <div
            style={{
              background: "#4CA761",
              borderRadius: 80,
              width: "90vw",
              marginLeft: "-2.5vw",
              marginTop: 50,
            }}
          >
            <div style={{ display: "flex" }}>
              <div
                style={{
                  position: "relative",
                  marginTop: 90,
                  marginLeft: "7.5vw",
                }}
              >
                <p style={{ fontSize: "3.5vw", fontWeight: 500 }}>
                  Stay Up To Date
                </p>
                <p style={{ fontSize: "1.2vw", color: "white", marginTop: 30 }}>
                  Stay ahead of the crowd
                  <br />
                  Receive important event updates, price <br />
                  movements and more
                </p>
                <a
                  style={{ textDecoration: "none" }}
                  href="https://wa.me/919599009220?text=Hi%20HedgeCo%20App!%20Please%20sign%20me%20up%20for%20all%20important%20event%20updates%20on%20WhatsApp."
                >
                  <button
                    style={{
                      marginLeft: "10vw",
                      marginTop: 30,
                      background: "#4C7AA3",
                      boxShadow: "10px 10px 35px #428151",
                      borderRadius: 15,
                      borderColor: "transparent",
                      color: "white",
                      padding: "0.5vw",
                      paddingLeft: "3vw",
                      paddingRight: "3vw",
                    }}
                  >
                    Whatsapp me!
                  </button>
                </a>
              </div>
              <div
                style={{
                  marginLeft: "auto",
                  marginTop: 75,
                  position: "relative",
                  marginRight: "8.5vw",
                }}
              >
                <img
                  src="whatsapp_lap.png"
                  style={{ width: "25vw" }}
                  alt="Whatsapp us"
                />
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </lol>
  );
}
