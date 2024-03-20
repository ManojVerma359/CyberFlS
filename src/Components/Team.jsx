import React from "react";
import person_img1 from "../assets/images/Person_Img1.png";
import person_img2 from "../assets/images/Person_Img2.png";
import person_img3 from "../assets/images/Person_Img3.png";
import person_img4 from "../assets/images/Person_Img4.png";

const Team = () => {
  return (
    <>
      <section id="team" className="team_bgimg lg:py-[160px] md:py-[90px] sm:py-[50px] py-[40px] bg-[url(../src/assets/images/Team_Bgimg.webp)] bg-cover bg-no-repeat">
        <div className="container mx-auto px-3 max-w-[1140px] ">
          <h4 className="sm:text-[54px] text-[27px] lg:text-[64px] font-normal text-black ff_audiowide text-center">
            Team
          </h4>
          <hr className="!bg-[#1eadb6] h-[3px] max-w-[120px] border-t-0  sm:max-w-[179px] flex inline-block justify-center items-center mt-1 mx-auto" />
          <div className="md:pt-[50px] pt-[30px] flex gap-[18px] max-md:flex-wrap justify-md-start justify-center">
        
          <div className=" overflow-hidden md:max-w-[273px] max-w-[47%] cursor-pointer hover:shadow-xl   transition-all linear duration-500ms">
                <img className="w-full  " src={person_img1} alt="#" />
                <p className="sm:text-[24px] text-[19px] font-semibold ff_montserrat pt-3 max-lg:text-center">Collin</p>
                <p className="text-[16px] font-normal ff_montserrat pt-1 max-lg:text-center">Founder</p>
            </div>
         
            <div className="md:max-w-[273px] max-w-[47%] cursor-pointer hover:shadow-xl   transition-all linear duration-500ms">
                <img className="w-full" src={person_img2} alt="#" />
                <p className="sm:text-[24px] text-[19px] font-semibold ff_montserrat pt-3 max-lg:text-center">Pharaox</p>
                <p className="text-[16px] font-normal ff_montserrat pt-1 max-lg:text-center">Founder</p>
            </div>
            <div className="md:max-w-[273px] max-w-[47%] cursor-pointer hover:shadow-xl   transition-all linear duration-500ms">
                <img className="w-full" src={person_img3} alt="#" />
                <p className="sm:text-[24px] text-[19px] font-semibold ff_montserrat pt-3 max-lg:text-center">Zach</p>
                <p className="text-[16px] font-normal ff_montserrat pt-1 max-lg:text-center">CM</p>
            </div>
            <div className="md:max-w-[273px] max-w-[47%] cursor-pointer hover:shadow-xl   transition-all linear duration-500ms">
                <img className="w-full" src={person_img4} alt="#" />
                <p className="sm:text-[24px] text-[19px] font-semibold ff_montserrat pt-3 max-lg:text-center">Arlen</p>
                <p className="text-[16px] font-normal ff_montserrat pt-1 max-lg:text-center">CM</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Team;
