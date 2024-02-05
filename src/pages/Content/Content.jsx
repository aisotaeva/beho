import React, { useRef, useEffect, useState } from 'react'
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';
// corusel css
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
// image 
import starBtn from "../../assets/svg/starRate.svg"
import starBtnSmoke from "../../assets/svg/starRateSmoke.svg"
// @mui
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { Box, IconButton, Stack } from '@mui/material';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
// components
import RateContent from '../../components/RateContent/RateContent';
import ColorFullBtn from '../../components/ColorFullBtn/ColorFullBtn';
import Memory from '../../components/Memory/Memory';
import ButtonContent from '../../components/ui/Buttons/Button/ButtonContent';
import ContentImage2 from './ContentImage2/ContentImage2';


const Content = () => {

    const btnRate = [
        1, 1, 1, 1, 0
    ]
    const { id } = useParams();
    const [card, setContentCard] = useState({});
    useEffect(() => {
        axios(
            `https://65268fd1917d673fd76c8856.mockapi.io/api/products/${id}`
        ).then(({ data }) => setContentCard(data));
    }, [id]);

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
        <div className='container content2'>
        <div className='content'>
            <div className="content_corusel">
                <div className='home_carusel container2'>
                    <Slider ref={sliderRef} {...settings}>
                        <div className="slider__card">
                            <img className='avatar__card' src={card.avatar} alt="" />
                        </div>
                        <div className="slider__card">
                            <img className='avatar__card' src={card.avatar} alt="" />
                        </div>
                    </Slider>
                    <div>
                        <IconButton sx={{ background: "white" }} className='icon_button3' onClick={goToPrev} variant="contained">
                            <ArrowBackIosNewIcon />
                        </IconButton>
                        <IconButton sx={{ background: "white" }} className='icon_button1' onClick={goToNext} variant="contained">
                            <ArrowForwardIosIcon />
                        </IconButton>
                    </div>
                </div>
            </div>
            <div className='contentRight'>
                <div className='flex__home'>
                <h1 className='name__card'>{card.name}</h1>
                <Link to="/">
                    <button className='btn__home'>←</button>
                </Link>
                </div>
                <div className='content__flex__btn'>
                    <button className='content__green__btn'>4.4 Оценка экспертов</button>
                    <button className='content__smoke__btn'>4.0 <span>{
                        btnRate.map(el => {
                            return <img src={
                                el ? starBtn : starBtnSmoke
                            } alt="" />
                        })
                    }</span> 447 Отзывов</button>
                </div>
                <RateContent />
                <br />
                <ColorFullBtn />
                <br />
                <Memory/>
                <br />
                <ButtonContent card={card}/>
            </div>
        </div>
        <div className='characteristics'>
            {
                <ContentImage2 key={card.id}
                imageUrl={card.avatar}
                />
            }
        </div>
        </div>
    )
}

export default Content