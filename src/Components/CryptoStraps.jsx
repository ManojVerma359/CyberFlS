import React from "react";
import cs_img from "../assets/images/Cs_Img.webp";
import robot_img from "../assets/images/Robot_Img.webp";

const CryptoStraps = () => {
  return (
    <>
      <section id="CryptoStraps" className="cryptoStraps_bgimg  bg-[url(../src/assets/images/Gif/CryptoStraps_img.gif)] bg-cover bg-no-repeat bg-center">
  <div className="relative max-w-[1440px] mx-auto">
  <img
          className="absolute max-h-[365px] lg:max-h-[477px] right-0 bottom-0 z-0 md:block hidden "
          src={robot_img}
          alt="#"
        />

        <div className="container max-w-[1140px] mx-auto px-3 md:py-[80px] sm:py-[60px] py-[40px]  lg:py-[113px] flex justify-between items-center max-lg:flex-wrap-reverse">
          <div className="max-w-[394px]  max-lg:mx-auto lg:pt-0 pt-5">
            <img src={cs_img} alt="#" />
          </div>
          <div className="lg:max-w-[568px] relative z-1 ">
            <h4 className="sm:text-[54px] text-[27px] lg:text-[64px] font-normal text-white ff_audiowide">
              CryptoStraps
            </h4>
            <hr className="!bg-[#1eadb6] h-[3px] max-w-[120px] border-t-0  sm:max-w-[179px] flex inline-block justify-center items-center mt-2" />
            <p className="text-white ff_montserrat font-normal leading-[150%] pt-[10px]">
              CryptoStraps are firearms pushing the boundaries of 3D animated
              art. CyberFPS will be powered by CryptoStraps $AMMO and is
              directly integrated with the existing CryptoStraps NFTs. You will
              be able to use CryptoStraps NFTs in-game and the visuals/graphics
              of CyberFPS are designed by the CryptoStraps 3D Studio.
            </p>
          </div>
        </div>
  </div>
      </section>
    </>
  );
};

export default CryptoStraps;
