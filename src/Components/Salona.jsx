import React from "react";
import salona_img from "../assets/images/Solana_Img.png";
import unreal_img from "../assets/images/Unreal_Img.png";
import robot_gunimg from "../assets/images/Robot_Gunimg.webp";

const Salona = () => {
  return (
    <>
      <section id="light" className="team_bgimg ">
        <div className="py-[40px] md:py-[90px] lg:py-[180px] relative z-[1] max-w-[1440px] mx-auto">
          <img
            className="absolute max-h-[599px] top-0 left-[2%] z-[-1] max-lg:hidden"
            src={robot_gunimg}
            alt="#"
          />
          <div className="container mx-auto px-3 max-w-[1140px] flex justify-center gap-[51px] max-md:flex-wrap">
            <a href="https://coinmarketcap.com/currencies/solana/">
              <img
                className=" sm:max-w-[385px] sm:max-h-[255px] cursor-pointer"
                src={salona_img}
                alt="#"
              />
            </a>
            <a href="https://www.arcanemirage.com/?gad_source=1&gclid=CjwKCAjw7-SvBhB6EiwAwYdCAdUuV2aEqJWTbyIm6vCRwpLvfBLrJ9PFaFJNfM0wTYoGLWo9v6th4BoCEaIQAvD_BwE">
              <img
                className="sm:max-w-[263px] sm:max-h-[255px] cursor-pointer"
                src={unreal_img}
                alt=""
              />
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Salona;
