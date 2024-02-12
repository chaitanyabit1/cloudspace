import React from "react";
import reviewerone from "../../assets/images/reviewer-1.webp";
import quote from "../../assets/images/quote.png";
import youtubeicon from "../../assets/images/youtube-icon.png";
import nextarrow from "../../assets/images/right-arrow.svg"
import Titlewrapper from "../../common/Titlewrapper";
import { useState } from "react";
import { TestimonilContent } from "../../data/LocalData";




const TestimonialComponent = () => {
   const [currentTestimonial, setCurrentTestimonial] = useState(0);

   const nextTestimonial = () => {
     setCurrentTestimonial((currentTestimonial + 1) % TestimonilContent.length);
   };
 
   const prevTestimonial = () => {
     setCurrentTestimonial((currentTestimonial - 1 + TestimonilContent.length) % TestimonilContent.length);
   };

     
  return (
    <div className="testimonial overflow-hidden">
   <div className="pb-[50px] lg:pb-[80px] 2xl:pb-[120px]">
      <div className="container">
            
            <div  className="flex flex-col sm:!grid grid-cols-1 lg:grid-cols-2 gap-0 lg:gap-24 2xl:gap-40">
               <div className="items relative">
                  <Titlewrapper position="left" smalltitle="Testimonial" bigtitle="Let’s Hear Our Success Story From Them" color="secondary" colorsec="primary"/> 
                  <p data-aos="fade-up" data-aos-delay="100" className="">{TestimonilContent[currentTestimonial].desc}</p>
                  <div className="flex justify-between items-center mt-6 2xl:[mt-10]"> 
                  <div> 
                  <div data-aos="fade-up" data-aos-delay="300" className="flex flex-col justify-between">
                     <h4 className="text-2xl font-semibold mb-2">{TestimonilContent[currentTestimonial].author}</h4>
                     <p className="font-semibold">{TestimonilContent[currentTestimonial].designation}</p>
                  </div>
                  </div>
                  <div className="flex justify-between gap-x-5">
                     <button onClick={prevTestimonial} className="duration-200 bg-[#ADABAA] hover:bg-secondary z-10 rounded-full w-8 2xl:w-12 h-8 2xl:h-12 flex items-center justify-center focus:outline-none">
                         <img src={nextarrow} width="28" height="18" className=" rotate-180 transform max-w-[22px] 2xl:max-w-[28px]" alt="next" />
                     </button>
                     <button onClick={nextTestimonial} className="duration-200 bg-[#ADABAA] hover:bg-secondary z-10 rounded-full w-8 2xl:w-12 h-8 2xl:h-12 flex items-center justify-center focus:outline-none">
                        <img src={nextarrow} width="28" height="18" className=" max-w-[22px] 2xl:max-w-[28px]" alt="next" />
                     </button>
                  </div>
                  </div>
              
                  
               </div>
               <div className="px-8 sm:px-12 mx-auto mt-5 lg:my-0 max-w-[450px] lg:max-w-[550px] 2xl:max-w-[720px]">
                  <div className="relative">
                     <img data-aos="zoom-in" className="rounded-tl-3xl h-auto rounded-br-3xl rounded-tr-[100px] rounded-bl-[100px]" src={reviewerone} width="612" height="601" alt="review"/>
                     <div data-aos="fade-right" data-aos-delay="200" className='absolute left-[-36px] 2xl:left-[-65px] bottom-[18%]'>
                        <div className='flex items-center justify-center flex-shrink-0 min-w-[55px] sm:min-w-20  2xl:min-w-[124px] min-h-[55px] sm:min-h-20 2xl:min-h-[124px] rounded-full border-1 2xl:border-2 border-[#FDFDFD] backdrop-blur-sm bg-[#FDFDFD]/75 shadow-[0_8px_30px_0px_rgb(24,24,24,0.15)]'>
                           <img className='flex flex-shrink-0 max-w-[30px] sm:max-w-[40px] max-h-[30px] sm:max-h-[40px] 2xl:max-w-[56px] 2xl:max-h-[56px]' src={quote} width="56" height="56" alt="award" />
                        </div>
                     </div>
                     <div data-aos="fade-left" data-aos-delay="400" className='absolute right-[-30px] 2xl:right-[-50px] top-[25%] max-w-[55px] sm:max-w-[85px] 2xl:max-w-[144px]'>
                        <img src={youtubeicon} width='144' height='140' alt="Youtube" />
                     </div>
                  </div>
               </div>
            </div>
      </div>
   </div>
</div>
  )
}

export default TestimonialComponent 