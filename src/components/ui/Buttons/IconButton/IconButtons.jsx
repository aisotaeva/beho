import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import EqualizerIcon from "@mui/icons-material/Equalizer";
import { IconButton } from "@mui/material"
import FavoriteIcon from '@mui/icons-material/Favorite';
import PersonIcon from '@mui/icons-material/Person';
import React from 'react'
import { useDispatch, useSelector } from "react-redux";

export const IconBlackFavorite = () => {
    return (

        <IconButton size="large"
            sx={{
                border: "1px solid #F2F5F9",
                background: "#fff"
            }}>
            <FavoriteIcon />
        </IconButton>
    )
}

export const IconButtonWithheart = () => {
    return (

        <IconButton size="large"
            sx={{
                border: "1px solid #F2F5F9",
                background: "#fff"
            }}>
            <FavoriteBorderIcon />
        </IconButton>
    )
}
export const IconChek = () => {
    const ordersLegth = () => {
        if (orders.length === 0) {
            return (<span></span>)
        } else {
            return (<span style={{ border: "1px solid red", borderRadius: "50%", width: "20px", position: "absolute", fontSize: "15px", top: "0px", right: "0px", backgroundColor: "#FF4D4D", color: "white" }}>{orders.length}</span>)
        }
    }
    const orders = useSelector(store => store.orders.orders);
    return (

        <IconButton size="large"
            sx={{
                border: "1px solid #F2F5F9",
                background: "#fff"
            }}>
            <FavoriteBorderIcon />
            <span>{ordersLegth()}</span>
        </IconButton>
    )
}
export const IconButtonWithChart = () => {
    return (
        <IconButton size="large"
            sx={{
                border: "1px solid #F2F5F9",
                background: "#fff"
            }}>
            <EqualizerIcon />
        </IconButton>
    )
}
export const IconButtonUser = () => {
    return (
        <IconButton size="large"
            sx={{
                border: "1px solid #F2F5F9",
                background: "#fff"
            }}>
            <PersonIcon />
        </IconButton>
    )
}