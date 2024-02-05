import React, { useRef } from 'react';
import Slider from 'react-slick';
import Button from '@mui/material/Button';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import SliderCard from '../Cards/SliderCard/SliderCard';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { IconButton } from '@mui/material';


const CarouselWithButtons = () => {
  const sliderRef = useRef(null);

  const settings = {
    autoplay: true,
    autoplaySpeed: 3000,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const goToPrev = () => {
    if (sliderRef.current) {
      sliderRef.current.slickPrev();
    }
  };

  const goToNext = () => {
    if (sliderRef.current) {
      sliderRef.current.slickNext();
    }
  };

  return (
    <div className='home_carusel container2'>
      <Slider ref={sliderRef} {...settings}>
          <div className="slider__card">
            <SliderCard/>
            <SliderCard/>
            <SliderCard/>
            <SliderCard/>
          </div>
          <div className="slider__card">
            <SliderCard/>
            <SliderCard/>
            <SliderCard/>
            <SliderCard/>
          </div>
      </Slider>
      <div>
        <IconButton className='icon_button' onClick={goToPrev} variant="contained">
          <ArrowBackIosNewIcon/>
        </IconButton>
        <IconButton className='icon_button2' onClick={goToNext} variant="contained">
          <ArrowForwardIosIcon/>
        </IconButton>
      </div>
    </div>
  );
};

export default CarouselWithButtons;
