import React from 'react'
import checkblue from "../../assets/images/blue-check.svg"
import checkgrey from "../../assets/images/grey-check.svg"
import Titlewrapper from '../../common/Titlewrapper';
import { PricingData } from '../../data/LocalData';
const PricingPlanComponent = () => {

    
    
  return (
    <div className='pricing-plans'>
    <div className="py-[50px] lg:py-[80px] 2xl:py-[120px]">
        <div className="container">
          <div className="text-center mb-16">
             <div className="mx-auto max-w-[1080px]">
             <Titlewrapper position="center" color="secondary" colorsec="primary" smalltitle="Pricing Plan" bigtitle="We Give You A Affordable Price To Upgrade Your Business"  />
             <p data-aos="fade-up"
              data-aos-delay="300"
              data-aos-offset="0" className="text-graytext">Lorem ipsum dolor sit amet consectetur. Vulputate pharetra dolor nullam molestie donec vulputate dolor viverra nibh. Libero amet adipiscing nunc mattis ornare eget sed massa. Non dolor in massa mauris facilisis. </p>
             </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-5">
            {PricingData.map((item, id) => (
              <div data-aos="fade-up"
              data-aos-delay={item.aosDelay} key={id}
                className="relative bg-lightbg rounded-xl py-10 2xl:py-12 px-8 2xl:px-10"
              >
                <div className="font-jost font-semibold inline-flex items-end">
                   <h3 className='text-3xl sm:text-4xl 2xl:text-5xl'>${item.pricing}</h3> <small className='text-graytext'>/month</small>
                   
                </div>
                <h4 className='font-jost font-semibold text-2xl 2xl:text-4xl pt-6 2xl:pt-8 pb-4 2xl:pb-6'>{item.plans}</h4>
                <p className='mb-5 2xl:mb-7'>{item.description}</p>
                <ul>
                {item.plansfeatures.map((feature, i) => (
                <li key={i} className='relative pl-5 mb-4 2xl:pl-7 2xl:mb-6'>
                    <div className='absolute left-0 top-4px flex flex-shrink-0'>
                     {feature.recommended ? (
                            <img src={checkblue} className='w-[23px] 2xl:w-[29px] h-[23px] 2xl:h-[29px]' width="29" height="29" alt='enable'/>
                        ) : (
                            <img src={checkgrey} className='w-[23px] 2xl:w-[29px] h-[23px] 2xl:h-[29px]' width="29" height="29" alt='disable'/>
                        )}
                     </div>
                     <div className='pl-4 2xl:pl-5'><h5 className='font-bold text-lg 2xl:text-2xl'>{feature.list}</h5></div>
                    </li>
                 ))}
                </ul>
                <div className='inline-flex w-full justify-center mt-[22px] items-center text-center'>
          <a href="#" className='flex items-center font-inter text-sm 2xl:text-base leading-4 text-white px-[35px] sm:px-[45px] 2xl:px-[60px] h-[40px] sm:h-[50px] 2xl:h-[69px] rounded-xl sm:rounded-2xl 2xl:rounded-[20px] bg-secondary hover:bg-primary duration-200'>Get Started</a>
          </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default PricingPlanComponent