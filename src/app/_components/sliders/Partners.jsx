"use client";

import { SliderProps } from "@common/sliderProps";
import { Swiper, SwiperSlide } from "swiper/react";

import Data from '@data/sliders/partners';

const PartnersSlider = ( { bgStyle } ) => {
  return (
    <>
    {/* partners */}
    <div className={`mil-${bgStyle}-bg mil-partners mil-relative`}>
        {bgStyle == "soft" &&
        <img src="/img/other/bg.svg" className="mil-bg-img" alt="image" />
        }
        
        <div className="container mil-p-120-120">
            <div className="mil-background-grid mil-softened" />
            
            <Swiper
                {...SliderProps.milInfiniteSlider}
                className="swiper-container mil-infinite-show mil-up"
            >
                {Data.items.map((item, key) => (
                <SwiperSlide className="swiper-slide" key={`partners-slider-item-${key}`}>
                    <a href={item.link} target="_blank" className="mil-partner-frame" style={{"width": "60px"}}><img src={item.image} alt={item.alt} /></a>
                </SwiperSlide>
                ))}
            </Swiper>
        </div>
    </div>
    {/* partners end */}
    </>
  );
};
export default PartnersSlider;