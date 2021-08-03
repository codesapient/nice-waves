import React, { Component } from "react";
import "./LandingPage.css";
import background from "../assets/background.png"
import banner2 from "../assets/banner2.jpg"
import montage2 from "../assets/montage2.jpg"
import nicewaves from "../assets/nicewaves-logo.png"
import output_2 from "../assets/output_2.jpg"
import video_test_2 from "../assets/video-test-2.jpg"
import video_test from "../assets/video-test.jpg"
import whale from "../assets/whale.jpg"
export default class LandingPage extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="main-navbar bg-gray-800 pb-32" id="header">
          <div className="container">
            <nav className="navbar navbar-expand-lg  bg-gray-800">
              {/* <a className="navbar-brand" href="#">Navbar</a> */}
              <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>

              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                  <li className="nav-item ">
                    <a className="nav-link" href="#">
                      All Waves{" "}
                    </a>
                  </li>
                  <li className="nav-item ">
                    <a className="nav-link" href=""></a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      Attributes
                    </a>
                  </li>
                  <li className="nav-item ">
                    <a className="nav-link" href=""></a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      Market Data
                    </a>
                  </li>
                  <li className="nav-item ">
                    <a className="nav-link" href=""></a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      Trade
                    </a>
                  </li>
                  <li className="nav-item ">
                    <a className="nav-link" href=""></a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      Connect Wallet
                    </a>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
        </div>
        <main className="-mt-32">
          <div className="w-full mx-auto pb-12 px-4 sm:px-6 lg:px-8">
            <main>
              <div>
                <div className="container-fluid">
                  {/* <!-- Hero card --> */}
                  <div className="hero-card relative">
                    <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                      <div className="hero-card-second relative ">
                        <div className="banner-bg absolute inset-0">
                          <img
                            className="h-full w-full object-cover"
                            src={background}
                            alt="Nicewaves"
                          />
                        </div>
                        <div className="row">
                          <div className="col-md-7">
                            <div className="banner-main-text relative px-4 py-16 ">
                              <div className="banner-main-text relative px-4 py-16 ">
                                <div className="img-fluid">
                                  {" "}
                                  <img src={nicewaves} />{" "}
                                </div>

                                <p className="banner-text mt-5 text-left">
                                  10,000 unique wave simulations registered in
                                  the blockchain and stored in the permaweb.
                                </p>
                              </div>
                            </div>
                          </div>

                          <div className="col-md-5">
                            <img
                              className="img-fluid"
                              src={montage2}
                              alt=""
                              width="50%"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </main>
            {/* <!--start product waves--> */}
            <div className="product-waves container">
              <div className="heading mt-5 text-left">What are these waves?</div>
              <div className="row mt-5">
                <div className="col-md-7">
                  <div className="svg-text d-flex mt-5">
                    <div className="col md-3 m-0 p-0">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                        width="106"
                        height="106"
                        viewBox="0 0 106 106"
                      >
                        <defs>
                          <filter
                            id="Rectangle_5"
                            x="0"
                            y="0"
                            width="106"
                            height="106"
                            filterUnits="userSpaceOnUse"
                          >
                            <feOffset dy="3" input="SourceAlpha" />
                            <feGaussianBlur stdDeviation="3" result="blur" />
                            <feFlood flood-opacity="0.161" />
                            <feComposite operator="in" in2="blur" />
                            <feComposite in="SourceGraphic" />
                          </filter>
                        </defs>
                        <g
                          transform="matrix(1, 0, 0, 1, 0, 0)"
                          filter="url(#Rectangle_5)"
                        >
                          <g
                            id="Rectangle_5-2"
                            data-name="Rectangle 5"
                            transform="translate(9 6)"
                            fill="#ff1ad6"
                            stroke="#c9fe38"
                            stroke-width="8"
                          >
                            <rect
                              width="78"
                              height="78"
                              rx="20"
                              stroke="none"
                            />
                            <rect
                              x="4"
                              y="4"
                              width="70"
                              height="70"
                              rx="16"
                              fill="none"
                            />
                          </g>
                        </g>
                      </svg>
                    </div>
                    <div className="col-md-9">
                      <div className="inner-text mt-2">
                        <p className="text-left">
                          Nice waves are 10,000 unique wave simulations
                          generated by several custom algorithms, registered in
                          the Ethereum and Solana blockchain and stored in the
                          permaweb using ARweave.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="svg-text d-flex mt-5">
                    <div className="col md-3 m-0 p-0">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                        width="106"
                        height="106"
                        viewBox="0 0 106 106"
                      >
                        <defs>
                          <filter
                            id="Rectangle_5"
                            x="0"
                            y="0"
                            width="106"
                            height="106"
                            filterUnits="userSpaceOnUse"
                          >
                            <feOffset dy="3" input="SourceAlpha" />
                            <feGaussianBlur stdDeviation="3" result="blur" />
                            <feFlood flood-opacity="0.161" />
                            <feComposite operator="in" in2="blur" />
                            <feComposite in="SourceGraphic" />
                          </filter>
                        </defs>
                        <g
                          transform="matrix(1, 0, 0, 1, 0, 0)"
                          filter="url(#Rectangle_5)"
                        >
                          <g
                            id="Rectangle_5-2"
                            data-name="Rectangle 5"
                            transform="translate(9 6)"
                            fill="#ff1ad6"
                            stroke="#c9fe38"
                            stroke-width="8"
                          >
                            <rect
                              width="78"
                              height="78"
                              rx="20"
                              stroke="none"
                            />
                            <rect
                              x="4"
                              y="4"
                              width="70"
                              height="70"
                              rx="16"
                              fill="none"
                            />
                          </g>
                        </g>
                      </svg>
                    </div>
                    <div className="col-md-9">
                      <div className="inner-text mt-2">
                        <p className="text-left">
                          The NFT contract the governs ownership is a standard
                          ERC-721 that works with any compatible service or{" "}
                          <br /> exchange.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="svg-text d-flex mt-5">
                    <div className="col md-3 m-0 p-0">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                        width="106"
                        height="106"
                        viewBox="0 0 106 106"
                      >
                        <defs>
                          <filter
                            id="Rectangle_5"
                            x="0"
                            y="0"
                            width="106"
                            height="106"
                            filterUnits="userSpaceOnUse"
                          >
                            <feOffset dy="3" input="SourceAlpha" />
                            <feGaussianBlur stdDeviation="3" result="blur" />
                            <feFlood flood-opacity="0.161" />
                            <feComposite operator="in" in2="blur" />
                            <feComposite in="SourceGraphic" />
                          </filter>
                        </defs>
                        <g
                          transform="matrix(1, 0, 0, 1, 0, 0)"
                          filter="url(#Rectangle_5)"
                        >
                          <g
                            id="Rectangle_5-2"
                            data-name="Rectangle 5"
                            transform="translate(9 6)"
                            fill="#ff1ad6"
                            stroke="#c9fe38"
                            stroke-width="8"
                          >
                            <rect
                              width="78"
                              height="78"
                              rx="20"
                              stroke="none"
                            />
                            <rect
                              x="4"
                              y="4"
                              width="70"
                              height="70"
                              rx="16"
                              fill="none"
                            />
                          </g>
                        </g>
                      </svg>
                    </div>
                    <div className="col-md-9">
                      <div className="inner-text mt-2">
                        <p className="text-left">
                          Nice waves are unique in the sense that allows users
                          to choose the blockchain were they want to mint the
                          NFT. Included in the contract there is a built-in
                          store for Ethereum and Solana.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-5">
                  <img
                    className="img-fluid float-right"
                    src={video_test}
                    alt="Nicewaves"
                  />
                </div>
              </div>
            </div>
            {/* <!--end product waves--> */}

            {/* <!--start banner--> */}

            <div className="banner-img container-fluid">
              <img className="img-fluid" src={banner2} alt="nicewaves" />
            </div>
            {/* <!--end banner--> */}

            {/* <!--start second product waves--> */}
            <div className="product-waves container">
              <div className="heading mt-5 text-left">Exhibition Ready</div>
              <div className="after-heading mt-4">
                <p className="text-left">
                  {" "}
                  Nice waves are created to serve as a window to the Metaverse
                  from the real world.
                </p>
              </div>
              <div className="row mt-4">
                <div className="col-md-7">
                  <div className="svg-text d-flex mt-5">
                    <div className="col md-3 m-0 p-0">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                        width="106"
                        height="106"
                        viewBox="0 0 106 106"
                      >
                        <defs>
                          <filter
                            id="Rectangle_5"
                            x="0"
                            y="0"
                            width="106"
                            height="106"
                            filterUnits="userSpaceOnUse"
                          >
                            <feOffset dy="3" input="SourceAlpha" />
                            <feGaussianBlur stdDeviation="3" result="blur" />
                            <feFlood flood-opacity="0.161" />
                            <feComposite operator="in" in2="blur" />
                            <feComposite in="SourceGraphic" />
                          </filter>
                        </defs>
                        <g
                          transform="matrix(1, 0, 0, 1, 0, 0)"
                          filter="url(#Rectangle_5)"
                        >
                          <g
                            id="Rectangle_5-2"
                            data-name="Rectangle 5"
                            transform="translate(9 6)"
                            fill="#ff1ad6"
                            stroke="#c9fe38"
                            stroke-width="8"
                          >
                            <rect
                              width="78"
                              height="78"
                              rx="20"
                              stroke="none"
                            />
                            <rect
                              x="4"
                              y="4"
                              width="70"
                              height="70"
                              rx="16"
                              fill="none"
                            />
                          </g>
                        </g>
                      </svg>
                    </div>
                    <div className="col-md-9">
                      <div className="inner-text mt-2">
                        <p className="text-left">
                          The format of the artwork is conceived to be part of
                          an exhibition at a Museum, Gallery or your living
                          room.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="svg-text d-flex mt-5">
                    <div className="col md-3 m-0 p-0">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                        width="106"
                        height="106"
                        viewBox="0 0 106 106"
                      >
                        <defs>
                          <filter
                            id="Rectangle_5"
                            x="0"
                            y="0"
                            width="106"
                            height="106"
                            filterUnits="userSpaceOnUse"
                          >
                            <feOffset dy="3" input="SourceAlpha" />
                            <feGaussianBlur stdDeviation="3" result="blur" />
                            <feFlood flood-opacity="0.161" />
                            <feComposite operator="in" in2="blur" />
                            <feComposite in="SourceGraphic" />
                          </filter>
                        </defs>
                        <g
                          transform="matrix(1, 0, 0, 1, 0, 0)"
                          filter="url(#Rectangle_5)"
                        >
                          <g
                            id="Rectangle_5-2"
                            data-name="Rectangle 5"
                            transform="translate(9 6)"
                            fill="#ff1ad6"
                            stroke="#c9fe38"
                            stroke-width="8"
                          >
                            <rect
                              width="78"
                              height="78"
                              rx="20"
                              stroke="none"
                            />
                            <rect
                              x="4"
                              y="4"
                              width="70"
                              height="70"
                              rx="16"
                              fill="none"
                            />
                          </g>
                        </g>
                      </svg>
                    </div>
                    <div className="col-md-9">
                      <div className="inner-text mt-2">
                        <p className="text-left">
                          1080 video in 9:16 format compatible with any media
                          player and TV screen.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="svg-text d-flex mt-5">
                    <div className="col md-3 m-0 p-0">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                        width="106"
                        height="106"
                        viewBox="0 0 106 106"
                      >
                        <defs>
                          <filter
                            id="Rectangle_5"
                            x="0"
                            y="0"
                            width="106"
                            height="106"
                            filterUnits="userSpaceOnUse"
                          >
                            <feOffset dy="3" input="SourceAlpha" />
                            <feGaussianBlur stdDeviation="3" result="blur" />
                            <feFlood flood-opacity="0.161" />
                            <feComposite operator="in" in2="blur" />
                            <feComposite in="SourceGraphic" />
                          </filter>
                        </defs>
                        <g
                          transform="matrix(1, 0, 0, 1, 0, 0)"
                          filter="url(#Rectangle_5)"
                        >
                          <g
                            id="Rectangle_5-2"
                            data-name="Rectangle 5"
                            transform="translate(9 6)"
                            fill="#ff1ad6"
                            stroke="#c9fe38"
                            stroke-width="8"
                          >
                            <rect
                              width="78"
                              height="78"
                              rx="20"
                              stroke="none"
                            />
                            <rect
                              x="4"
                              y="4"
                              width="70"
                              height="70"
                              rx="16"
                              fill="none"
                            />
                          </g>
                        </g>
                      </svg>
                    </div>
                    <div className="col-md-9">
                      <div className="inner-text mt-2">
                        <p className="text-left">
                          Video file can be streamed locally or directly from
                          the permaweb thanks to ARweave.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-5">
                  <img
                    className="img-fluid float-right"
                    src={output_2}
                    alt="Nicewaves"
                  />
                </div>
              </div>
            </div>
            {/* <!--end product waves--> */}

            {/* <!--start banner--> */}

            <div className="banner-img container-fluid">
              <img className="img-fluid " src={whale} alt="nicewaves" />
            </div>
            {/* <!--end banner--> */}
            {/* <!--start second product waves--> */}
            <div className="product-waves container">
              <div className="row mt-5">
                <div className="col-md-5 mt-5">
                  <img
                    className="img-fluid"
                    src={video_test_2}
                    alt="Nicewaves"
                  />
                </div>
                <div className="col-md-7">
                  <div className="heading mt-5 text-left">
                    Nice Waves take care of our Oceans in real life
                  </div>
                  <div className="inner-text mt-5">
                    <div className="inner-text mt-5">
                      <p className="text-left">
                        The wave height of the ocean has been rising due to
                        Global Warming. Although blockchain is a disruptive
                        technology that would make the world a better place, it
                        carries some warnings sings because the carbon proof
                        print of the Proof of Work. NFT transactions requiere
                        Proof of Work, for that purpose Nice Waves introduce a
                        revolutionary gesture.
                      </p>
                    </div>

                    <div className="svg-text d-flex mt-5">
                      <div className="col md-3 m-0 p-0">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          xmlnsXlink="http://www.w3.org/1999/xlink"
                          width="106"
                          height="106"
                          viewBox="0 0 106 106"
                        >
                          <defs>
                            <filter
                              id="Rectangle_5"
                              x="0"
                              y="0"
                              width="106"
                              height="106"
                              filterUnits="userSpaceOnUse"
                            >
                              <feOffset dy="3" input="SourceAlpha" />
                              <feGaussianBlur stdDeviation="3" result="blur" />
                              <feFlood flood-opacity="0.161" />
                              <feComposite operator="in" in2="blur" />
                              <feComposite in="SourceGraphic" />
                            </filter>
                          </defs>
                          <g
                            transform="matrix(1, 0, 0, 1, 0, 0)"
                            filter="url(#Rectangle_5)"
                          >
                            <g
                              id="Rectangle_5-2"
                              data-name="Rectangle 5"
                              transform="translate(9 6)"
                              fill="#ff1ad6"
                              stroke="#c9fe38"
                              stroke-width="8"
                            >
                              <rect
                                width="78"
                                height="78"
                                rx="20"
                                stroke="none"
                              />
                              <rect
                                x="4"
                                y="4"
                                width="70"
                                height="70"
                                rx="16"
                                fill="none"
                              />
                            </g>
                          </g>
                        </svg>
                      </div>
                      <div className="col-md-9">
                        <div className="inner-text mt-2">
                          <p className="text-left">
                            5% donation embedded in the smart contract. Every
                            time a Nice Wave is minted, it donates a percentage
                            to institutions that are taking care of the Ocean.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="svg-text d-flex mt-5">
                      <div className="col md-3 m-0 p-0">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          xmlnsXlink="http://www.w3.org/1999/xlink"
                          width="106"
                          height="106"
                          viewBox="0 0 106 106"
                        >
                          <defs>
                            <filter
                              id="Rectangle_5"
                              x="0"
                              y="0"
                              width="106"
                              height="106"
                              filterUnits="userSpaceOnUse"
                            >
                              <feOffset dy="3" input="SourceAlpha" />
                              <feGaussianBlur stdDeviation="3" result="blur" />
                              <feFlood flood-opacity="0.161" />
                              <feComposite operator="in" in2="blur" />
                              <feComposite in="SourceGraphic" />
                            </filter>
                          </defs>
                          <g
                            transform="matrix(1, 0, 0, 1, 0, 0)"
                            filter="url(#Rectangle_5)"
                          >
                            <g
                              id="Rectangle_5-2"
                              data-name="Rectangle 5"
                              transform="translate(9 6)"
                              fill="#ff1ad6"
                              stroke="#c9fe38"
                              stroke-width="8"
                            >
                              <rect
                                width="78"
                                height="78"
                                rx="20"
                                stroke="none"
                              />
                              <rect
                                x="4"
                                y="4"
                                width="70"
                                height="70"
                                rx="16"
                                fill="none"
                              />
                            </g>
                          </g>
                        </svg>
                      </div>
                      <div className="col-md-9">
                        <div className="inner-text mt-2">
                          <p className="text-left">
                            An additional 5% of the royalties of every resell
                            will be donated as well for ever.{" "}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* <!--end product waves--> */}
              <div className="col">
                <div className="heading text-center mt-5">Open Offers</div>
                <div className="inner-text text-center mt-2">
                  <p>
                    Here there is a selection of open trades in the marketplaces{" "}
                    <br /> on Ethereum and Solana.{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </main>
      </React.Fragment>
    );
  }
}
