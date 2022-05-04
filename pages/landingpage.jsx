/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import React from "react";
import Header from "../components/Header";

export default function Landingpage() {
  return (
    <lol>
      <Header />
      <div hidden="" id="desktop">
        <div style={{ marginLeft: "7.5vw", marginTop: "20vh" }}>
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
                      color: "linear-gradient(-63deg, rgba(66, 125.84, 242, 1), rgba(66, 188.50, 241, 1))",
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
                <a
                  href="https://trade.hedgeco.app/"
                  style={{ textDecoration: "none" }}
                >
                  <button
                    style={{
                      marginLeft: "10vw",
                      marginTop: 30,
                      backgroundImage: "linear-gradient(-63deg, rgba(66, 125.84, 242, 1), rgba(66, 188.50, 241, 1))",
                      boxShadow: "2px 46px 35px -48px rgba(66, 128, 242, 1)",
                      // boxShadow: "10px 10px 35px #D7D7D7",
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
                src="purple.svg"
                style={{ width: "40vw" }}
                alt="Stay Up To Date - Get Updates from HedgCo at Whatsapp"
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
                    src="header1.png"
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
              <div style={{ margin: "1vw", color: "black", fontWeight: "bold" }}>Welcome</div>
              <div style={{ margin: "1vw" }}>to</div>
              <div style={{ margin: "1vw", color: "#4C7AA3" }}>Growth</div>
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
                  src="probability_screen.png"
                  style={{ height: "25vw", margin: "auto" }}
                  alt="HedgeCo - Say yes to Probability"
                />
                <p
                  style={{
                    width: "15vw",
                    marginLeft: "2.5vw",
                    marginTop: 20,
                    fontSize: "1.7vw",
                    fontWeight: 600,
                  }}
                >
                  <span style={{ color: "#00C566" }}> Probability </span>{" "}
                  Determines <span style={{ color: "#00C566" }}>Price</span>{" "}
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
                  The "Yes" market price is the chance an event will happen{" "}
                </p>
              </div>
              <div>
                <img
                  src="trading_likelyhood.png"
                  style={{ height: "25vw", margin: "auto" }}
                  alt="Opinion on Trading Buy and sell"
                />
                <p
                  style={{
                    width: "15vw",
                    marginLeft: "2.5vw",
                    marginTop: 20,
                    fontSize: "1.7vw",
                    fontWeight: 600,
                  }}
                >
                  {" "}
                  Trading <span style={{ color: "#A0318E" }}>
                    Likelihood{" "}
                  </span>{" "}
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
                  Buy and sell positions and profit as events become more or
                  less likely over time{" "}
                </p>
              </div>
              <div>
                <img
                  src="profit_screen.png"
                  style={{ height: "25vw", margin: "auto" }}
                  alt="Profit from your Opinions"
                />
                <p
                  style={{
                    width: "15vw",
                    marginLeft: "2.5vw",
                    marginTop: 20,
                    fontSize: "1.7vw",
                    fontWeight: 600,
                  }}
                >
                  <span style={{ color: "#4C7AA3" }}>Profit</span> from your{" "}
                  <span style={{ color: "#4C7AA3" }}>Opinions</span>{" "}
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
                  When the market closes earn INR 10 for every correct contract
                  you own{" "}
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
                      borderLeft: "6px solid #A0318E",
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
                      <span style={{ color: "#B62D8F" }}> Talk </span> is cheap,
                      <br /> <span style={{ color: "#B62D8F" }}>
                        {" "}
                        Opinions
                      </span>{" "}
                      aren't
                    </p>
                    <p
                      style={{
                        marginTop: "2vh",
                        fontSize: "1.2vw",
                        fontWeight: 500,
                      }}
                    >
                      {" "}
                      Learn and Trade on Topics That Matter like Economics,
                      Finance, Crypto and Many More .{" "}
                    </p>
                  </div>
                  <a
                    href="https://trade.hedgeco.app/"
                    style={{ textDecoration: "none" }}
                  >
                    <button
                      style={{
                        marginLeft: "10vw",
                        marginTop: 30,
                        background: "#B62D8F",
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
                }}
              >
                <img
                  src="markets_svg.svg"
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
