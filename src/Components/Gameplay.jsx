import React from "react";
import game_play from "../assets/images/game_play.webp";
import play_icon from "../assets/images/play_icon.png";
import secWhat_img from '../assets/images/secWhat_img.webp'

const Gameplay = () => {
  return (
    <>
      <section className="md:pt-[74px] pt-[40px] gameplay_bgimg">
        <div className="container max-w-[1140px] px-3 mx-auto">
          <h2 className="sm:text-[54px] text-[27px] lg:text-[64px] font-normal ff_audiowide text-black text-center leading-tight">
            CyberFPS Pre-Alpha{" "}
            <span className="ff_audiowide   text-[#1eadb6] block">
              Gameplay
            </span>
          </h2>
          <hr className="!bg-[#1eadb6] h-[3px] max-w-[200px] md:max-w-[337px] flex justify-center items-center mx-auto mt-2" />

          <div className="relative pt-[31px]">
            <img className="w-full max-h-[502px]" src={game_play} alt="#" />
            <a href="https://www.youtube.com/watch?v=YXaTfFRY6SQ">
              <img
                className="absolute left-[40%] sm:left-[48%] top-[40%] sm:top-[48%] cursor-pointer max-w-[65px]"
                src={play_icon}
                alt=""
              />
            </a>
          </div>
        </div>
        {/* what is cyberfls */}
        <div className="container max-w-[1140px] md:pt-[90px] pt-[40px] lg:pt-[134px] md:pb-[100px] pb-[40px] lg:pb-[155px] px-3 mx-auto flex justify-between items-center max-lg:flex-wrap">
          <div className="lg:max-w-[562px]">
            <h3 className="sm:text-[54px] text-[27px] lg:text-[64px] font-normal ff_audiowide text-black  leading-tight">
            What is {" "}
              <span className="ff_audiowide   text-[#1eadb6] block">
              CyberFPS
              </span>
            </h3>
            <hr className="!bg-[#1eadb6] h-[3px] max-w-[200px] md:max-w-[337px] flex justify-center items-center mt-2" />
            <p className="pt-[20px] text-[#444445] ff_montserrat font-normal leading-[160%]">CyberFPS is centered around 5v5 Search & Destroy style combat with P2E mechanics featuring the $AMMO Token and deep integrations within the CryptoStraps ecosystem.</p>
            <p className="pt-[20px] text-[#444445] ff_montserrat font-normal leading-[160%]">CyberFPS pits 2 teams of 5 players against each other with the objective being to attack or defend depending on which side you start on. This "Search & Destroy" style combat has been implemented in many popular FPS titles and is a high-skill cap game mode.</p>
          </div>
          <div className="lg:max-w-[528px] lg:pt-0 pt-4 ">
            <img className="w-full " src={secWhat_img} alt="#" />
          </div>
        </div>
      </section>
    </>
  );
};

export default Gameplay;
