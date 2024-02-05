import { Box } from '@mui/material'
import React from 'react'
import { useState, useEffect } from "react"
import axios from 'axios'
import TheBestCard from './TheBestCard/TheBestCard'
import Button from '../ui/Buttons/Button/Button'
import Carusel from "../Carusel/Carusel"
//icons 
import CloseIcon from '@mui/icons-material/Close';
//redux
import {useDispatch, useSelector} from "react-redux"
import {fetchData} from '../../redux/slices/categorySlice'


const TheBestProducts = () => {
    const dispatch = useDispatch()
    const data = useSelector(store => store.category.items)
    const {buttons} = useSelector(store => store.filters)

    useEffect(() => {
        dispatch(fetchData())
    }, [dispatch])

    if(data === 0) {
        return <h2>loading...</h2>
    }

    return (
        <div className="the__best">
            <div className="the__best_bg"></div>

            <div className='container'>
                <h2 className='section__title'>Лучший Выбор</h2>
                <Box className="best__products"
                    sx={{
                        display: "flex",
                        gap: "18px",
                        marginBottom: "32px"
                    }}>
                        {
                        data.map(el => <TheBestCard
                            key={el.id}
                            imgUrl={el.categoryImage}
                            name={el.name}
                        />)
                        }

                </Box>

                <Box sx={{
                    display: "flex", 
                    gap: "10px",
                    marginBottom: "20px"
                }}>
                    {buttons.map(btn => <Button bgColor={"#FDFDFD"}
                    key={btn.name}
                    textColor={btn.choice ? "#FF4D4D" : "#7E8794"}
                    icon={btn.choice && <CloseIcon/>}
                    >
                        {btn.name}
                    </Button>)}
                </Box>
                <Carusel/>
            </div>

        </div>
    )
}

export default TheBestProducts