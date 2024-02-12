import React from 'react'

const Titlewrapper = ({ smalltitle, bigtitle, color, colorsec, position}) => {
  const titleStyles = `text-${color}`;
  const titleStylestwo = `text-${colorsec}`;
  const titleposition = `text-${position}`;
  return (
    <div data-aos="fade-up" className ={`${titleposition}`}>
      <span className ={`${titleStyles} font-semibold inline-block text-2xl mb-4 2xl:mb-5`}>{smalltitle}</span>
      <h2 className={`${titleStylestwo} text-[35px] leading-[45px] md:text-[42px] md:leading-[52px] lg:text-[50px] lg:leading-[60px] 2xl:text-[64px] 2xl:leading-[74px] font-jost font-semibold mb-4 sm:mb-6`}>{bigtitle}</h2>
    </div>
  )
}

export default Titlewrapper