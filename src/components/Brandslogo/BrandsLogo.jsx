import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const LogoSlider = [
  {
    img: "brand-1",
    url: "",
  },
  {
    img: "brand-2",
    url: "",
  },
  {
    img: "brand-3",
    url: "",
  },
  {
    img: "brand-4",
    url: "",
  },
  {
    img: "brand-5",
    url: "",
  }
];


const BrandsLogo = () => {
  const settings = {
    dots: false,
    arrow: true,
    infinite: true,
    speed: 600,
    center:true,
    draggable: false,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: false,
    margin: 30,
    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 3,
          dots:true,
          draggable: true
        },
      },
      {
        breakpoint: 576,
        autoplay: true,
        settings: {
          slidesToShow: 2,
          dots:true,
          draggable: true
        },
      },
      {
        breakpoint: 420,
        settings: {
          slidesToShow: 1,
          dots:true,
          draggable: true
        },
      },

      
    ],
  };
  return (
    <div className="brand-logos overflow-hidden">
   <div className="py-12 2xl:py-25 bg-lightbg">
      <div className="container mx-auto">
         <Slider {...settings}>
            {LogoSlider.map((val, i) => (
            <div
               className="img-meta !flex items-center justify-center min-h-[75px]"
               key={i}
               >
               <a href={val.url} className="!flex items-center justify-center flex-grow-0 min-h-[75px] flex-shrink-0 outline-none border-0 h-auto max-w-[170px] 2xl:max-w-[220px] opacity-50">
               <img src={`src/assets/images/${val.img}.png`} width="244" height="75" alt="logo" />
               </a>
            </div>
            ))}
         </Slider>
      </div>
   </div>
</div>
  );
};

export default BrandsLogo;
