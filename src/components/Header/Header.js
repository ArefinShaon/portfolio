import React from "react";
import { FaFacebookSquare, FaGithub, FaLinkedin } from "react-icons/fa";

import "./Header.css";
import {
  HiOutlineDocument,
  HiOutlineLocationMarker,
  HiOutlineMail,
} from "react-icons/hi";
import me from "../../assets/myimg.jpg";
import resume from "../../assets/Arefin_Shaon MERN Stack Developer_Resume.pdf";
import { TypeAnimation } from "react-type-animation";

const Header = () => {
  return (
    <div>
      <div className="md:-mt-20">
        <div className="hero text-grayLight rounded-lg">
          <div className="flex flex-col-reverse lg:flex-row-reverse">
            <img
              src={me}
              style={{ width: 480, height: 450 }}
              className="rounded-lg  border-darkpink border shadow-xl shadow-darkpink lg:ml-28 w-full lg:mt-12"
              alt=""
            />
            <div className="content-container">
              <div className="border border-darkpink  shadow-xl shadow-darkpink rounded-lg p-10 font-sans">
                <h2 className="text-5xl font-extrabold font-sans">
                  Hi, I'm <span className="text-darkpink">Arefin Shaon</span>
                </h2>
                <p className="my-5 font-bold ">
                  <TypeAnimation
                    preRenderFirstString={true}
                    sequence={[
                      500,
                      "I am a MERN Stack Developer",
                      1000,
                      "I am a React Developer",
                      1000,
                      "I am a Full Stack Developer",
                      500,
                    ]}
                    speed={50}
                    style={{ fontSize: "2em" }}
                    repeat={Infinity}
                  />
                </p>
                <div className="pt-10">
                  <div className="flex">
                    <HiOutlineDocument className="text-darkpink w-7 h-7" />
                    <p className="">Web Developer</p>
                  </div>
                  <div className="flex py-3">
                    <HiOutlineMail className="text-darkpink w-7 h-7" />
                    <p className="">arefinshaon99@gmail.com</p>
                  </div>
                  <div className="flex">
                    <HiOutlineLocationMarker className="text-darkpink w-7 h-7" />
                    <p className="">Rangpur, Bangladesh</p>
                  </div>
                </div>
              </div>
              <div className=" border border-darkpink shadow-xl shadow-darkpink rounded-lg p-10 mt-8 font-sans">
                <p className="py-2">Download My Resume:</p>
                <a href={resume} download="Arefin Shaon">
                  <button className="btn btn-outline border-sm mr-5 shadow-2xl sm:mb-5 lg:mb-0 text-darkpink rounded-none bg-blackdeep">
                    Download Resume
                  </button>
                </a>
                <div className=" py-2">
                  <p>Others Profiles:</p>
                  <div className="flex border-sm mr-5 mt-2  shadow-2xl sm:mb-5 lg:mb-0 text-darkpink rounded-none gap-4 text-2xl">
                    <a href="https://www.linkedin.com/in/arefin-shaon/">
                      <FaLinkedin />
                    </a>
                    <a href="https://github.com/ArefinShaon">
                      <FaGithub />
                    </a>
                    <a href="https://web.facebook.com/Arefin.shawon.0">
                      <FaFacebookSquare />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
