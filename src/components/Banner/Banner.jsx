import React from 'react'
import smsolution from "../../assets/images/socila-media-solution.webp"
import notifyhearticon from "../../assets/images/notify-heart.png"
import medal from "../../assets/images/medal-dynamic-gradient.png"
import award from "../../assets/images/award.svg"
import quality from "../../assets/images/best-quality.svg"

const Banner = () => {
return (
<div className='hm-banner'>
   <div className="container">
      <div className='w-full grid grid-cols-1 md:grid-cols-2 items-center justify-between pt-12 2xl:pt-20'>
         <div className="flex flex-col text-left order-2 md:order-1 md:max-w-[90%] mt-6 md:mt-0">
            <h1 data-aos="fade-up" className='text-[30px] leading-[40px] md:text-[36px] md:leading-[46px] lg:text-[50px] lg:leading-[60px] 2xl:text-[64px] 2xl:leading-[74px] text-primary font-jost font-semibold mb-3 sm:mb-4 2xl:mb-6'>We Are Your Social Media <span className='text-secondary'>Solution</span> For Your Business</h1>
            <p data-aos="fade-up" data-aos-delay="200" className='text-graytext'>Lorem ipsum dolor sit amet consectetur. Vulputate pharetra dolor nullam molestie donec vulputate dolor viverra nibh. Libero amet adipiscing nunc mattis ornare eget sed massa. Non dolor in massa mauris facilisis. </p>
            <div data-aos="fade-up"
              data-aos-delay="300"
              data-aos-offset="0" className='inline-flex mt-[22px]'>
               <a href="#" className='flex items-center font-inter text-sm 2xl:text-base leading-4 text-white px-[35px] sm:px-[45px] 2xl:px-[60px] h-[40px] sm:h-[50px] 2xl:h-[69px] rounded-xl sm:rounded-2xl 2xl:rounded-[20px] bg-primary hover:bg-secondary shadow-[0_4px_4px_0px_rgb(0,0,0,0.25)] duration-200'>Get Started</a>
            </div>
         </div>
         <div className="flex w-full flex-grow max-w-[100%] flex-col mx-auto order-1 md:order-2">
            <div className='ml-auto mr-auto md:ml-auto md:mr-0 relative px-10 lg:px-20 2xl:px-32'>
               <div className='max-w-[360px] 2xl:max-w-[545px]'>
                 <img data-aos="zoom-in" className='w-full h-auto' src={smsolution} width={545} height={643} alt="social media influencer" />
               </div>
               <div data-aos="fade-up" className='absolute left-[10px] lg:left-[50px] 2xl:left-[80px] top-[20%] max-w-[70px] lg:max-w-[80px] 2xl:max-w-[120px]'>
                  <img src={notifyhearticon} width={120} height={120} alt="notify heart" />
               </div>
               <div data-aos="fade-down" className='absolute right-[10px] lg:right-[45px] 2xl:right-[80px] bottom-[10%] max-w-[60px] lg:max-w-[70px] 2xl:max-w-[110px]'>
                  <img src={medal} width={110} height={110} alt="medal" />
               </div>
               <div data-aos="slide-right" className='absolute max-w-[max-content] flex left-[-10px] lg:left-[30px] 2xl:left-[40px] bottom-[16%]'>
                  <div className='flex flex-shrink-0 gap-3 2xl:gap-5 max-w-[max-content] px-2 lg:px-4 2xl:px-5 py-2 lg:py-4 2xl:py-6 border-1 2xl:border-2 border-[#FDFDFD] backdrop-blur-sm  rounded-2xl bg-[#FDFDFD]/75 shadow-[0_8px_30px_0px_rgb(24,24,24,0.15)]'>
                     <img className='max-w-[18px] sm:max-w-[25px] 2xl:max-w-[34px]' src={award} width={34} height={49} alt="award" />
                     <span className='font-jost font-semibold text-primary text-sm sm:text-md 2xl:text-2xl'>Best Agency<br/>Awards</span>
                  </div>
               </div>
               <div data-aos="slide-left" className='absolute max-w-[max-content] flex right-[0] 2xl:right-[5px] top-[25%]'>
                  <div className='flex flex-shrink-0 gap-3 2xl:gap-5 max-w-[max-content] px-2 lg:px-4 2xl:px-5 py-2 lg:py-4 2xl:py-6 border-1 2xl:border-2 border-[#FDFDFD] backdrop-blur-sm  rounded-2xl bg-[#FDFDFD]/75 shadow-[0_8px_30px_0px_rgb(24,24,24,0.15)]'>
                     <img className='max-w-[25px] sm:max-w-[35px] 2xl:max-w-[58px]' src={quality} width={58} height={58} alt="quality" />
                     <span className='font-jost font-semibold text-primary text-sm sm:text-md 2xl:text-2xl'>Best Quality<br/>Agency</span>
                  </div>
               </div>
            </div>
         </div>
      </div>
   </div>
</div>
)
}
export default Banner