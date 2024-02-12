import React from "react";
import influencer from "../../assets/images/social-media-influencer.webp";
import brandstrategy from "../../assets/images/brand-strategy.webp";
import contentmarketing from "../../assets/images/content-marketing.webp";
import businessanalytic from "../../assets/images/business-analytic.webp";
import Titlewrapper from "../../common/Titlewrapper";
import {ServicesData} from "../../data/LocalData";
const OurServicesComponent = () => {
  return (
    <>
      <div className="services">
        <div className="py-[50px] lg:py-[50px] 2xl:py-[80px] bg-primary">
          <div className="container">
            {/* Heading section  */}
            <div className="text-center mb-16">
              <div className="mx-auto max-w-[1080px]">

              <Titlewrapper position="center" color="secondary" colorsec="white" smalltitle="For Your Business" bigtitle="We Provide A Quality Services For Your Business"  />
              <p data-aos="fade-up" className="text-white">Lorem ipsum dolor sit amet consectetur. Vulputate pharetra dolor nullam molestie donec vulputate dolor viverra nibh. Libero amet adipiscing nunc mattis ornare eget sed massa. Non dolor in massa mauris facilisis. </p>
              </div>
            </div>

            {/* Services Card section  */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-5">
              {ServicesData.map((service, id) => (
                <div key={id}
                data-aos="fade-up"
                data-aos-delay={service.aosDelay}
                  className="relative"
                >
                  <div className="rounded-lg" >
                    <img
                      src={service.img}
                      alt={service.title}
                      className="max-w-[100%] rounded-[20px] block mx-auto"
                    />
                  </div>
                  <div className="text-center max-w-[374px] mx-auto">
                    
                    <h2 className="font-jost font-semibold text-2xl 2xl:text-3xl text-white mb-4 2xl:mb-6 mt-6 2xl:mt-8">{service.title}</h2>
                    <p className="text-white">
                      {service.description}
                    </p>
                    <a href="#" className="inline-block font-Kodchasan font-semibold text-xl 2xl:text-2xl text-secondary hover:text-white duration-200 mt-3">Learn More</a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        </div>
    </>
  );
};

export default OurServicesComponent;
