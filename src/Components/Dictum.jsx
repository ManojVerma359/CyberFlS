import React from 'react'
import dictum_img from '../assets/images/Dictum_Img.webp'

const Dictum = () => {
  return (
    <>
<section className='dictum_bgimg bg-[url(../src/assets/images/Gif/dictum_bgimg.gif)] bg-cover bg-no-repeat'>
    <div className='container mx-auto px-3 max-w-[1140px]  py-[40px] md:py-[68px] flex items-center gap-4 max-lg:flex-wrap-reverse'>
<div className='lg:max-w-[50%] mx-auto'>
<img className='sm:max-w-[600px] lg:w-full w-full' src={dictum_img} alt="#" />
</div>
<div className="lg:max-w-[50%]  ">
            <h4 className="sm:text-[54px] text-[27px] lg:text-[64px] font-normal text-white ff_audiowide">
            Purus dictum
            </h4>
            <hr className="!bg-[#1eadb6] border-t-0 h-[3px] max-w-[120px]  sm:max-w-[179px] flex inline-block justify-center items-center mt-2" />
            <p className="text-white ff_montserrat font-normal text-[16px] leading-[150%] pt-[10px]">
            Euismod gravida hendrerit tincidunt ullamcorper parturient. Ut tellus pellentesque varius semper. Quis nisi vulputate sit nulla. Id sit at enim sapien gravida ultrices risus. Et molestie dis ac duis tempus, lorem consequat, in arcu. Pellentesque venenatis quam orci neque, aliquam mauris, ultricies dignissim gravida.
            </p>
          </div>
    </div>
</section>
    </>
  )
}

export default Dictum