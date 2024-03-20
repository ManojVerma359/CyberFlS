import React from 'react'
import nonSec_img from '../assets/images/Gif/nonSec_img.gif'

const NonPrush = () => {
  return (
    <>
     <section>
        <div className='container mx-auto max-w-[1140px] px-3 py-[40px] sm:py-[60px] md:py-[100px] lg:py-[170px] flex items-center gap-4 max-lg:flex-wrap '>
<div className='lg:max-w-[50%]'>
<h5 className="sm:text-[54px] text-[27px] lg:text-[64px] font-normal ff_audiowide text-black  leading-tight">
Non purus.{" "}
            </h5>
          <hr className="!bg-[#1eadb6] border-t-0 h-[3px] max-w-[120px] md:max-w-[179px]  mt-2" />
          <p className='ff_montserrat font-normal text-[#4d4d4d] leading-[150%] text-[16px] pt-[10px]'>Odio nam facilisis arcu, sodales ultrices viverra quam hac massa. Nisi neque nunc at ultricies enim risus quam cum. Purus est cursus aliquet nisl, pulvinar. Sociis ultrices phasellus praesent eleifend quam proin. Sagittis scelerisque est at eu nunc a vitae. Viverra rutrum pretium mattis arcu nulla pharetra. </p>
</div>
<div className='lg:max-w-[50%] mx-auto'>
    <img src={nonSec_img} alt="#" />
</div>

        </div>
        </section>   
    </>
  )
}

export default NonPrush