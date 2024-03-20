import React from "react";
import page_logo from "../assets/images/Page_Logo.webp";
import Svgicon, { Discord, Instagram } from "./SvgIcon";

const Footer = () => {
  const d = new Date();
  let year = d.getFullYear();
  return (
    <>
      <section className="footer_bgimg bg-[url(../src/assets/images/Footer_Bgimg.webp)] bg-cover bg-no-repeat">
        <div className="container mx-auto px-3 max-w-[1140px] pt-[36px] flex items-center flex-col ">
          <img
            className="cursor-pointer  max-w-[201px]"
            src={page_logo}
            alt="#"
          />
          <div className="gap-[20px] flex pt-[21px]">
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
          <div />
        </div>
        <hr className="h-[1px] bg-[#a8a8a8] mt-[40px] border-t-0" />
        <p className="py-[21px] text-[16px] text-white text-center ff_montserrat leading-[150%]">
          © Cyber FPS {year}
        </p>
      </section>
    </>
  );
};

export default Footer;
