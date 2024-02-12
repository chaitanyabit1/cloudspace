import React from 'react'
import journeythumb from "../../assets/images/journey.webp"
import messengerthumb from "../../assets/images/messenger.png"
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";
import Titlewrapper from '../../common/Titlewrapper';
import { CounterUpContent } from '../../data/LocalData';

const OurJourneyComponent = () => {
   const [focus, setFocus] = React.useState(false);

  return (
    <div className='our-journey overflow-hidden'>
   <div className='container'>
      <div className='flex flex-col gap-0 sm:gap-2 lg-5 2xl:gap-12 md:flex-row pt-[50px] lg:pt-[50px] 2xl:pt-[80px]'>
         <div className="flex w-full md:w-1/2">
            <div className='flex-1 flex-col px-0 md:px-10 2xl:px-20'>
               <Titlewrapper position="left" smalltitle="Our Journey" bigtitle="Make Your Business Grow and Solve Your Problem" color="secondary" colorsec="primary"/>
            </div>
         </div>
         <div data-aos="fade-up" data-aos-delay="300" className="flex w-full md:w-1/2 text-left">
            <p className='text-graytext'>Lorem ipsum dolor sit amet consectetur. Vulputate pharetra dolor nullam molestie donec vulputate dolor viverra nibh. Libero amet adipiscing nunc mattis ornare eget sed massa. Non dolor in massa mauris facilisis. </p>
         </div>
      </div>
   </div>
   <div className='relative'>
      <div className='container'>
         <div className='flex bg-[#F2F5FD] rounded-[50px] flex-col sm:flex-row mt-8 sm:mt-16 2xl:mt-20 shadow-[0_4px_4px_0px_rgb(0,0,0,0.25)] after:hidden sm:after:block after:-z-10 after:top-[-15%] 2xl:after:top-[-18%] after:right-0 after:absolute after:h-[100%] after:w-[48%] after:bg-secondary after:content-[""] mb-[4px]'>
            <div className="">
               <div className='flex-grow flex relative h-full'>
                  <img src={journeythumb} className='object-cover h-full rounded-2xl sm:rounded-tl-[35px] sm:rounded-tr-[0px] sm:rounded-bl-[35px] 2xl:rounded-tl-[50px] 2xl:rounded-bl-[50px] w-full max-w-[100%]' width="120" height="120" alt="journey" />
               </div>
            </div>
            <div className="relative flex min-w-[200px] md:min-w-[300px] 2xl:min-w-[450px]">
               <div data-aos="fade-right" data-aos-delay="300" className='absolute right-[-10px] lg:right-[-30px] 2xl:right-[-50px] top-[-7%] max-w-[55px] sm:max-w-[65px] lg:max-w-[85px] 2xl:max-w-[144px]'>
                  <img src={messengerthumb} width='150' height='147' alt="messanger" />
               </div>
               <div className='flex flex-grow justify-center text-center items-center px-5 py-8 flex-col h-full space-y-8 lg:space-y-12 2xl:space-y-16'>
                  {CounterUpContent.map((val, id) => (
                  <div key={id} className='flex fle-1 justify-center text-center flex-col space-y-4 lg:space-y-6 2xl:space-y-8'>
                     <h4 className='font-jost font-semibold text-secondary text-[32px] leading-[32px] sm:text-[36px] lg:text-[48px] sm:leading-[42px] 2xl:text-[64px] 2xl:leading-[64px]'>
                        <CountUp
                           start={focus ? val.startCount : null}
                           end={val.endCount}
                           duration={1}
                           redraw={true}
                           >
                           {({ countUpRef }) => (
                           <VisibilitySensor
                              onChange={(isVisible) => {
                              if (isVisible) {
                              setFocus(true);
                              }
                              }}
                              >
                              <span ref={countUpRef} />
                           </VisibilitySensor>
                           )}
                        </CountUp>
                        {val.endPointText}
                     </h4>
                     <span className='text-[16px] sm:text-[20px] lg:text-[24px] 2xl:[32px] text-graytext font-semibold'>{val.meta}</span>
                  </div>
                  ))}
               </div>
            </div>
         </div>
      </div>
   </div>
</div>
  )
}

export default OurJourneyComponent