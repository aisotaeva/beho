import React, { useState } from 'react';
// @mui
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import EqualizerIcon from "@mui/icons-material/Equalizer";
import { useDispatch } from 'react-redux';
import { IconBlackFavorite, IconButtonWithheart } from '../IconButton/IconButtons';
import FavoriteIcon from '@mui/icons-material/Favorite';


const ButtonContent = ({ card }) => { // Принимаем card в качестве пропса
    const [clickedFavs, setClickedFavs] = useState({});
    const dispatch = useDispatch();

    const addToCart = (product) => {
        dispatch({ type: "add", payload: product });
    };

    const handleFavClick = (id) => {
        setClickedFavs(prevState => ({
            ...prevState,
            [id]: !prevState[id]
        }));
    };

    return (
        <div style={{
            display: "flex",
            alignItems: "center",
            gap: "8px"
        }} className='btn__content'>
            <button style={{
                backgroundColor :"#FF4D4D",
                color: "white",
                padding: "12px 20px",
                display: "flex",
                flexWrap: "wrap",
                alignItems: " center",
                borderRadius: "8px",
                gap: "8px"
            }} className='btn__equal'>
                <EqualizerIcon/>
                Сравнить
            </button>
            <button onClick={() => {
                addToCart(card);
                handleFavClick(card.id);
            }} style={{
                backgroundColor :"#FFEEEE",
                color: "#FF4D4D",
                padding: "12px 20px",
                display: "flex",
                flexWrap: "wrap",
                alignItems: " center",
                borderRadius: "8px",
                gap : "8px"
            }} className='btn__favorite'>
                <span>
                {clickedFavs[card.id] ? <FavoriteBorderIcon /> : <FavoriteIcon />}
                </span>
                В избранное
            </button>
        </div>
    );
};

export default ButtonContent;
