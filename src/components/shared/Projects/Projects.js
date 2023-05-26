import React from "react";
import harmic from "../../../assets/harmic2.png";
import sellcell from "../../../assets/sellcell.png";
import codeplanner from "../../../assets/code2.png";
import { BiLinkExternal } from "react-icons/bi";

const Projects = () => {
  return (
    <div id="projects" className="text-grayLight grid justify-center align-center my-10 mb-20">
      <div
        data-aos="fade-up"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="1000"
        className="text-center mb-10 "
      >
        <h2 className="text-5xl font-bold">Projects</h2>
        <p className="text-darkpink mt-3">My Recent Works</p>
      </div>
      <div
        data-aos="fade-up"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="1000"
        className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-10"
      >
        <div className="transition duration-700 hover:scale-105 card rounded-sm shadow-2xl shadow-red-800/40">
          <figure>
            <img className="" src={harmic} alt="Shoes" />
          </figure>
          <div className="card-body -mt-5">
            <h2 className="card-title ">HARMIC</h2>
            <p>Harmic is an e-commerce website for different types of fruits and vegetables. Users can add blogs and manage their blogs.</p>
            <div className="card-actions justify-between mt-2 -mb-2">
              <div className="flex">
                <a
                  className="no-underline text-darkpink"
                  href="https://harmic-client.firebaseapp.com/"
                >
                  Live-link
                </a>
              </div>
              <div className="flex">
                <BiLinkExternal className="text-darkpink mt-1 " />
                <a
                  className="no-underline text-darkpink"
                  href="https://github.com/tasmim20/harmic-client"
                >
                  Front-End
                </a>
              </div>
              <div className="flex">
                <BiLinkExternal className="text-darkpink mt-1 " />
                <a
                  className="no-underline text-darkpink"
                  href="https://github.com/tasmim20/harmic-server"
                >
                  Back-End
                </a>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="transition duration-700 hover:scale-105 card rounded-sm card-shadow shadow-2xl shadow-red-800/40">
            <figure>
              <img className="" src={codeplanner} alt="Shoes" />
            </figure>
            <div className="card-body -mt-5">
              <h2 className="card-title ">SELLCELL</h2>
              <p>Sellcell is a website for buying and selling. Users must be registered to buy and sell. Users can manage their orders.</p>
              <div className="card-actions justify-between mt-2 -mb-2">
                <div className="flex">
                  <BiLinkExternal className="text-darkpink mt-1 " />
                  <a
                    className="no-underline text-darkpink"
                    href="https://sellcell-f5de6.web.app"
                  >
                    Live-link
                  </a>
                </div>
                <div className="flex">
                  <BiLinkExternal className="text-darkpink mt-1 " />
                  <a
                    className="no-underline text-darkpink"
                    href="https://github.com/tasmim20/sellcell-client-side"
                  >
                    Front-End
                  </a>
                </div>
                <div className="flex">
                  <BiLinkExternal className="text-darkpink mt-1 " />
                  <a
                    className="no-underline text-darkpink"
                    href="https://github.com/tasmim20/sellcell-server"
                  >
                    Back-End
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="transition duration-700 hover:scale-105 card rounded-sm shadow-2xl card-shadow shadow-red-800/40">
            <figure>
              <img className="" src={sellcell} alt="Shoes" />
            </figure>
            <div className="card-body -mt-5">
              <h2 className="card-title ">CODE-PLANNER</h2>
              <p>Code-planner is an online learning platform. It offers various programming courses.</p>
              <div className="card-actions justify-between mt-2 -mb-2">
                <div className="flex">
                  <BiLinkExternal className="text-darkpink mt-1 " />
                  <a
                    className="no-underline text-darkpink"
                    href="https://code-planner-f4fc4.web.app"
                  >
                    Live-link
                  </a>
                </div>
                <div className="flex">
                  <BiLinkExternal className="text-darkpink mt-1 " />
                  <a
                    className="no-underline text-darkpink"
                    href="https://github.com/tasmim20/code-planner-client"
                  >
                    Front-End
                  </a>
                </div>
                <div className="flex">
                  <BiLinkExternal className="text-darkpink mt-1 " />
                  <a
                    className="no-underline text-darkpink"
                    href="https://github.com/tasmim20/code-planner-server"
                  >
                    Back-End
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
