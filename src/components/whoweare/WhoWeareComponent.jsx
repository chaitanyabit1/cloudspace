import React from 'react'
import whoweare from "../../assets/images/who-we-are.webp"
import Titlewrapper from '../../common/Titlewrapper'
const WhoWeareComponent = () => {
return (
<div className='about-us'>
   <div className='container'>
      <div className='w-full py-[50px] lg:py-[80px] 2xl:py-[120px] grid grid-cols-1 gap-6 sm:gap-7 2xl:gap-20 md:grid-cols-2 items-center justify-between'>
         <div data-aos="fade-right" className='flex px-3 lg:px-9 mx-auto max-w-[400px] lg:max-w-[600px] 2xl:max-w-[100%] relative'>
            <img src={whoweare} className='max-w-[100%]' width="706" height={706} alt='who we are' />
            <div className='absolute top-[26%;] left-[33px] w-12 2xl:w-16 h-12 2xl:h-16 bg-secondary rounded-full'></div>
            <div className='absolute bottom-[26%;] right-[33px] w-12 2xl:w-16 h-12 2xl:h-16 bg-secondary rounded-full'></div>
            <div className='absolute top-[15%;] right-[90px] w-5 2xl:w-[30px] h-5 2xl:h-[30px] bg-secondary rounded-full'></div>
         </div>
         <div className="flex flex-col text-left">
            <Titlewrapper position="left" smalltitle="Who We Are" bigtitle="We Are Leading International Brands & Business" color="secondary" colorsec="primary"/>
            <p data-aos="fade-up" className='text-graytext'>Lorem ipsum dolor sit amet consectetur. Vulputate pharetra dolor nullam molestie donec vulputate dolor viverra nibh. Libero amet adipiscing nunc mattis ornare eget sed massa. Non dolor in massa mauris facilisis. </p>
            <div data-aos="fade-up" className='inline-flex mt-[22px]'>
               <a href="#" className='flex items-center font-inter text-sm 2xl:text-base leading-4 text-white px-[35px] sm:px-[45px] 2xl:px-[60px] h-[40px] sm:h-[50px] 2xl:h-[69px] rounded-xl sm:rounded-2xl 2xl:rounded-[20px] bg-primary hover:bg-secondary shadow-[0_4px_4px_0px_rgb(0,0,0,0.25)] duration-200'>Discover More</a>
            </div>
         </div>
      </div>
   </div>
</div>
)
}
export default WhoWeareComponent