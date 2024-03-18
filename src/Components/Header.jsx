import React from "react";
import page_logo from "../assets/images/page_logo.webp";
import Svgicon, { Discord, Instagram } from "./Svgicon";
import { useState } from "react";
import Hamburger from "hamburger-react";
import gun_man from "../assets/images/gun_man.gif";
import cyberfls_img from "../assets/images/CyberFPS_img.png";
import ellipse from '../assets/images/ellipse.webp'

const Header = () => {
  const [isOpen, setOpen] = useState(false);
  const [Show, setShow] = useState(false);
  if (Show === true) {
    document.body.classList.add("max-xl:overflow-hidden");
  } else {
    document.body.classList.remove("max-xl:overflow-hidden");
  }
  const moment = () => {
    setShow(!Show);
    setOpen(!isOpen);
  };
  return (
    <>
      <section className="hero_bgimg min-h-screen overflow-hidden   max-xl:max-h-[810px] relative flex flex-col">
        <img className="absolute bottom-0 right-0 z-0 max-w-[234px]" src={ellipse} alt="#" />
        <img
          className="h-full max-w-[102px] absolute max-h-[200px] md:max-h-[452px] top-[45%] sm:top-[25%] left-[1%]"
          src={cyberfls_img}
          alt="#"
        />
        <div className="mx-auto container max-w-[1140px]  px-3 pt-[6px]  ">
          <nav className="flex items-center justify-between relative z-1">
            <img
              className="max-w-[100px] sm:max-w-[128px] cursor-pointer "
              src={page_logo}
              alt="#"
            />

            <ul
              className={`flex  gap-[16px]  ${
                Show ? "left-0" : "left-[-100%]  "
              } h-full  w-full  flex-col xl:flex-row top-0 text-center justify-center max-xl:bg-[#11232b] z_2   items-center duration-500 fixed xl:static`}
            >
              <li className="">
                <a onClick={moment}
                  className="ff_audiowide font-normal text-[16px] text-white relative hover_border link inline-block link  "
                  href=""
                >
                  About
                </a>
              </li>
              <li className="">
                <a onClick={moment}
                  className="ff_audiowide font-normal text-[16px] text-white  relative hover_border link inline-block link "
                  href="#CryptoStraps"
                >
                  CryptoStraps
                </a>
              </li>
              <li className="">
                <a onClick={moment}
                  className="ff_audiowide font-normal text-[16px] text-white  relative hover_border link inline-block link "
                  href=""
                >
                  Team
                </a>
              </li>
              <li className="">
                <a onClick={moment}
                  className="ff_audiowide font-normal text-[16px] text-white  relative hover_border link inline-block link "
                  href=""
                >
                  Faq
                </a>
              </li>
              <li className="">
                <a onClick={moment}
                  className="ff_audiowide font-normal text-[16px] text-white relative hover_border link inline-block link "
                  href=""
                >
                  Light Paper
                </a>
              </li>
            </ul>

            <div className="gap-[10px] flex">
              <span className="transition-all duration-300ms linear">
                <Svgicon />
              </span>
              <span className="transition-all duration-300ms linear">
                <Instagram />
              </span>
              <span className="transition-all duration-300ms linear">
                <Discord />
              </span>
            </div>
            <div
              className="z-30 xl:hidden text-white"
              onClick={() => setShow(!Show)}
            >
              <button>
                <Hamburger toggled={isOpen} toggle={setOpen} />
              </button>
            </div>
          </nav>
        </div>
        <div className=" container max-w-[1140px] px-3 mx-auto pt-[50px] lg:grow flex justify-center lg:justify-end items-center">
          <div className=" justify-end  flex items-center  ">
            <div className="flex flex-col items-center  lg:items-end">
              <img className="md:max-w-[472px] max-w-[200px]" src={page_logo} alt="#" />
              <p className="text-[22px] sm:text-[32.03px] text-white font-normal ff_audiowide max-sm:text-center">
                Web3 Gaming Reimagined
              </p>
            </div>
           
              <img className="h-full w-full  absolute left-[13%] bottom-[-25%] md:bottom-[-40%] lg:bottom-[-26%] max-w-[635px] lg:w-full !z-0" src={gun_man} alt="#" />
            
          </div>
        </div>
      </section>
    </>
  );
};

export default Header;
