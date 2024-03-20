import React from "react";
import side_radius from "../assets/images/Side_Radius.png";
import side_radius1 from "../assets/images/Side1_Radius.png";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";

function Icon({ id, open }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="#1EADB6"
      className={`${
        id === open ? "rotate-180" : ""
      } h-5 w-5 transition-transform`}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M19.5 8.25l-7.5 7.5-7.5-7.5"
      />
    </svg>
  );
}
const FaqAccordion = () => {
  const handleOpen = (value) => setOpen(open === value ? 0 : value);
  const [open, setOpen] = React.useState(1);
  return (
    <>
      <section id="faq" className="bg-[#0c0c0c]">
        <div className="container px-3 mx-auto  max-w-[1140px] pt-[35px] md:pt-[50px]">
          <h4 className="sm:text-[54px] text-[27px] lg:text-[64px] font-normal text-white ff_audiowide text-center">
            Faq
          </h4>
          <div className=" pt-[30px] md:pt-[60px] lg:pt-[100px] pb-[30px] md:pb-[60px] lg:pb-[130px] flex flex-col gap-[32px]">
            <Accordion
              open={open === 1}
              icon={<Icon id={1} open={open} />}
              className="border py-[16px] md:py-[23px] px-[20px] md:px-[57px] border-[#1EADB6] border_shadow rounded-tl-[40px] rounded-br-[40px] relative z-[1]"
            >
              <img
                className="absolute right-[-1px] bottom-0 max-w-[55px] md:max-w-[65px] z-[-1]"
                src={side_radius}
                alt=""
              />
              <img
                className="absolute left-[-1px] top-0 max-w-[55px] md:max-w-[65px]"
                src={side_radius1}
                alt=""
              />
              <AccordionHeader
                onClick={() => handleOpen(1)}
                className="text-white text-[16px] md:text-[24px] font-semibold ff_montserrat"
              >
                Dui lectus auctor fermentum potenti enim. ?
              </AccordionHeader>
              <AccordionBody className="text-white text-[15px] md:text-[16px] ff_montserrat leading-[150%] pt-1">
                Dui lectus auctor fermentum potenti enim. Quam donec mauris
                phasellus at auctor. Risus maecenas commodo{" "}
                <span className="block ff_montserrat">
                  eget tellus nullam magna adipiscing facilisis a, nulla.{" "}
                </span>
              </AccordionBody>
            </Accordion>
            <Accordion
              open={open === 2}
              icon={<Icon id={2} open={open} />}
              className="border py-[16px] md:py-[23px] px-[20px] md:px-[57px] border-[#1EADB6] border_shadow rounded-tl-[40px] rounded-br-[40px] relative z-[1]"
            >
              <img
                className="absolute right-[-1px] bottom-0 max-w-[55px] md:max-w-[65px] z-[-1]"
                src={side_radius}
                alt=""
              />
              <img
                className="absolute left-[-1px] top-0 max-w-[55px] md:max-w-[65px]"
                src={side_radius1}
                alt=""
              />
              <AccordionHeader
                onClick={() => handleOpen(2)}
                className="text-white text-[16px] md:text-[24px] font-semibold ff_montserrat"
              >
                Placerat eros faucibus aliquam nunc, mattis
              </AccordionHeader>
              <AccordionBody className="text-white text-[15px] md:text-[16px] ff_montserrat leading-[150%] pt-1">
                Dui lectus auctor fermentum potenti enim. Quam donec mauris
                phasellus at auctor. Risus maecenas commodo{" "}
                <span className="block ff_montserrat">
                  eget tellus nullam magna adipiscing facilisis a, nulla.{" "}
                </span>
              </AccordionBody>
            </Accordion>
            <Accordion
              open={open === 3}
              icon={<Icon id={3} open={open} />}
              className="border py-[16px] md:py-[23px] px-[20px] md:px-[57px] border-[#1EADB6] border_shadow rounded-tl-[40px] rounded-br-[40px] relative z-[1]"
            >
              <img
                className="absolute right-[-1px] bottom-0 max-w-[55px] md:max-w-[65px] z-[-1]"
                src={side_radius}
                alt=""
              />
              <img
                className="absolute left-[-1px] top-0 max-w-[55px] md:max-w-[65px]"
                src={side_radius1}
                alt=""
              />
              <AccordionHeader
                onClick={() => handleOpen(3)}
                className="text-white text-[16px] md:text-[24px] font-semibold ff_montserrat"
              >
                Lorem nunc nunc risus viverra a
              </AccordionHeader>
              <AccordionBody className="text-white text-[15px] md:text-[16px] ff_montserrat leading-[150%] pt-1">
                Dui lectus auctor fermentum potenti enim. Quam donec mauris
                phasellus at auctor. Risus maecenas commodo{" "}
                <span className="block ff_montserrat">
                  eget tellus nullam magna adipiscing facilisis a, nulla.{" "}
                </span>
              </AccordionBody>
            </Accordion>
            <Accordion
              open={open === 4}
              icon={<Icon id={4} open={open} />}
              className="border py-[16px] md:py-[23px] px-[20px] md:px-[57px] border-[#1EADB6] border_shadow rounded-tl-[40px] rounded-br-[40px] relative z-[1]"
            >
              <img
                className="absolute right-[-1px] bottom-0 max-w-[55px] md:max-w-[65px] z-[-1]"
                src={side_radius}
                alt=""
              />
              <img
                className="absolute left-[-1px] top-0 max-w-[55px] md:max-w-[65px]"
                src={side_radius1}
                alt=""
              />
              <AccordionHeader
                onClick={() => handleOpen(4)}
                className="text-white text-[16px] md:text-[24px] font-semibold ff_montserrat"
              >
                In aliquet fusce id dictumst id
              </AccordionHeader>
              <AccordionBody className="text-white text-[15px] md:text-[16px] ff_montserrat leading-[150%] pt-1">
                Dui lectus auctor fermentum potenti enim. Quam donec mauris
                phasellus at auctor. Risus maecenas commodo{" "}
                <span className="block ff_montserrat">
                  eget tellus nullam magna adipiscing facilisis a, nulla.{" "}
                </span>
              </AccordionBody>
            </Accordion>
            <Accordion
              open={open === 5}
              icon={<Icon id={5} open={open} />}
              className="border py-[16px] md:py-[23px] px-[20px] md:px-[57px] border-[#1EADB6] border_shadow rounded-tl-[40px] rounded-br-[40px] relative z-[1]"
            >
              <img
                className="absolute right-[-1px] bottom-0 max-w-[55px] md:max-w-[65px] z-[-1]"
                src={side_radius}
                alt=""
              />
              <img
                className="absolute left-[-1px] top-0 max-w-[55px] md:max-w-[65px]"
                src={side_radius1}
                alt=""
              />
              <AccordionHeader
                onClick={() => handleOpen(5)}
                className="text-white text-[16px] md:text-[24px] font-semibold ff_montserrat"
              >
                Elementum pellentesque nisi, sagittis, 
              </AccordionHeader>
              <AccordionBody className="text-white text-[15px] md:text-[16px] ff_montserrat leading-[150%] pt-1">
                Dui lectus auctor fermentum potenti enim. Quam donec mauris
                phasellus at auctor. Risus maecenas commodo{" "}
                <span className="block ff_montserrat">
                  eget tellus nullam magna adipiscing facilisis a, nulla.{" "}
                </span>
              </AccordionBody>
            </Accordion>
      
        

          </div>
        </div>
      </section>
    </>
  );
};

export default FaqAccordion;
