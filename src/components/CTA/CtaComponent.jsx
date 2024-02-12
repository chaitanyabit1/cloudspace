import React from 'react'

const CtaComponent = () => {
  return (
   <div className='cta-section'>
    <div className='py-[50px] lg:py-[80px] 2xl:py-[120px] bg-secondary'>
      <div className="container">
          <div className="text-center">
             <div className="mx-auto max-w-[1080px]">
             <h2 data-aos="fade-up" className='text-[30px] leading-[40px] md:text-[36px] md:leading-[46px] lg:text-[50px] lg:leading-[60px] 2xl:text-[64px] 2xl:leading-[74px] text-white font-jost font-semibold mb-3 sm:mb-4 2xl:mb-6'>Looking For Influencers Who Will <br/> Help Your Business</h2>
             <p data-aos="fade-up" data-aos-delay="200" className="text-white">Lorem ipsum dolor sit amet consectetur. Vulputate pharetra dolor nullam molestie donec vulputate dolor viverra nibh. Libero amet adipiscing nunc mattis ornare eget sed massa. Non dolor in massa mauris facilisis. </p>
             <div data-aos="fade-up" data-aos-delay="300" className='inline-flex mt-[22px]'>
              <a href="#" className='flex items-center font-inter text-sm 2xl:text-base leading-4 text-secondary hover:text-white px-[35px] sm:px-[45px] 2xl:px-[60px] h-[40px] sm:h-[50px] 2xl:h-[69px] rounded-xl sm:rounded-2xl 2xl:rounded-[20px] bg-white hover:bg-primary duration-200'>Let's Talk</a>
           </div>
             </div>
          </div>
      </div>
    </div>
    </div>
  )
}

export default CtaComponent