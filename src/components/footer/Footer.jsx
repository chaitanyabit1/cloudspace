import React from "react";
import logo from "../../assets/images/logo.svg"
import instagram from "../../assets/images/instagram.svg"
import youtube from "../../assets/images/youtube.svg"
import twitter from "../../assets/images/twitter.svg"
import tictok from "../../assets/images/tiktok.svg"
import { InfoLinks, SpecialLinks } from "../../data/LocalData";
const Footer = () => {
  return (
    <footer>
    <div className="bg-primary text-white py-10 sm:py-12 2xl:py-20">
       <div className="container">
          <div className="grid lg:grid-cols-3 justify-between">
             <div className="grid col-span-1 py-5 sm:py-8 2xl:py-10 pr-0 lg:pr-20">
                <div className="sm:text-3xl text-xl max-w-[220px] 2xl:max-w-[350px] font-bold sm:text-left text-justify mb-6 flex items-center gap-3">
                   <img src={logo} width="350" height="78" alt="cloud space" />
                </div>
                <p className="text-[#FEEEE7] pb-8">
                   “Lorem ipsum dolor sit. Lacus nulla rhoncus varius enim velit pharetra varius integer scelerisque. tristique. Egestas non scelerisque nunc dui platea at”
                </p>
                <div className="flex items-center gap-5">
                   <a href="#">
                      <div className="bg-[#ADABAA] hover:bg-secondary duration-300 flex items-center justify-center w-9 h-9 rounded-full">
                         <img src={instagram} width="24" height="24" alt="instagram"/>
                      </div>
                   </a>
                   <a href="#">
                      <div className="bg-[#ADABAA] hover:bg-secondary duration-300 flex items-center justify-center w-9 h-9 rounded-full">
                         <img src={youtube} width="24" height="24" alt="youtube"/>
                      </div>
                   </a>
                   <a href="#">
                      <div className="bg-[#ADABAA] hover:bg-secondary duration-300 flex items-center justify-center w-9 h-9 rounded-full">
                         <img src={twitter} width="24" height="24" alt="twitter"/>
                      </div>
                   </a>
                   <a href="#">
                      <div className="bg-[#ADABAA] hover:bg-secondary duration-300 flex items-center justify-center w-9 h-9 rounded-full">
                         <img src={tictok} width="18" height="20" alt="tiktok"/>
                      </div>
                   </a>
                </div>
             </div>
             {/* Links */}
             <div className="grid grid-cols-2 sm:grid-cols-3 col-span-2 pl-0 lg:pl-20 xl:pl-20 2xl:pl-40">
                <div className="">
                   <div className="py-5 sm:py-8 2xl:py-10 px-3">
                      <h2 className="font-jost font-semibold sm:text-xl text-xl sm:text-left mb-7 2xl:mb-10">
                         Information
                      </h2>
                      <ul className="flex flex-col gap-3 2xl:gap-5">
                         {InfoLinks.map((link) => (
                         <li
                            key={link.title} className="">
                            <a href={link.link}
                               className="cursor-pointer font-medium text-sm sm:text-base 2xl:text-2xl hover:translate-x-1 duration-300 text-extralight hover:text-secondary">
                            {link.title}
                            </a>
                         </li>
                         ))}
                      </ul>
                   </div>
                </div>
                <div className="">
                   <div className="py-5 sm:py-8 2xl:py-10 px-3 ">
                      <h2 className="font-jost font-semibold sm:text-xl text-xl sm:text-left mb-7 2xl:mb-10">
                      Special Links
                      </h2>
                      <ul className="flex flex-col gap-3 2xl:gap-5">
                         {SpecialLinks.map((link) => (
                         <li
                            key={link.title}>
                            <a href={link.link}
                               className="cursor-pointer font-medium text-sm sm:text-base 2xl:text-2xl duration-300  text-extralight hover:text-secondary"
                               >
                            <span>{link.title}</span></a>
                         </li>
                         ))}
                      </ul>
                   </div>
                </div>
                <div className="">
                   <div className="py-5 sm:py-8 2xl:py-10 px-3">
                      <h2 className="font-jost font-semibold sm:text-xl text-xl sm:text-left mb-7 2xl:mb-10">
                         Resources
                      </h2>
                      <ul className="flex flex-col gap-3 2xl:gap-5">
                         <li>
                            <a className="cursor-pointer font-medium text-base sm:text-base 2xl:text-2xl hover:translate-x-1 duration-300 space-x-1 text-extralight hover:text-secondary" href="tel:2085550112">(208) 555-0112</a>
                         </li>
                         <li>
                            <a className="cursor-pointer font-medium text-base sm:text-base 2xl:text-2xl hover:translate-x-1 duration-300 space-x-1 text-extralight hover:text-secondary" href="mailto:monospace@email.com">monospace@email.com</a>
                         </li>
                         <li>
                            <a className="cursor-pointer font-medium text-base sm:text-base 2xl:text-2xl hover:translate-x-1 duration-300 space-x-1 text-extralight hover:text-secondary" href="https://maps.app.goo.gl/69HtZ8ix3CKBaz6B7" target="_blank">1901 Thornridge Cir.<br/>Shiloh, Hawaii</a>
                         </li>
                      </ul>
                   </div>
                </div>
             </div>
          </div>
       </div>
       <div className="container">
          <div className="text-center sm:mt-8 mt-5 mt-10">
             <div className="text-white pt-6 border-t-white border-t-[1px] 2xl:border-t-2 font-inter font-semibold 2xl:text-2xl">&#169; 2023 Pathfinderstd - All Rights Reserved</div>
          </div>
       </div>
       <div>
       </div>
    </div>
 </footer>
  );
};

export default Footer;
