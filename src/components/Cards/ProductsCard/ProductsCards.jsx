import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from "react-redux"
import { IconBlackFavorite, IconButtonWithChart, IconButtonWithheart } from '../../ui/Buttons/IconButton/IconButtons'
import { dataFetch } from '../../../redux/slices/categoryNewProduct'
import { Link } from 'react-router-dom'
import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll';


const ProductsCards = () => {
    const dispatch = useDispatch()
    const data = useSelector(store => store.products.products)
    const [clickedFavs, setClickedFavs] = useState({})

    useEffect(() => {
        dispatch(dataFetch())
    }, [dispatch])

    if (data.length === 0) {
        return <h1>loading...</h1>
    }

    const addToCart = (product) => {
        dispatch({ type: "add", payload: product })
    }

    const handleFavClick = (id) => {
        setClickedFavs(prevState => ({
            ...prevState,
            [id]: !prevState[id]
        }))
    }

    return (
        <div className='container products__card'>
            <h1>Новинки</h1>
            <div className="cards_flex">
                {
                    data.slice(0, 10).map(item => {
                        return (
                            <div  className='card__product' key={item.id}>
                                <Link style={{opacity: "1"}} to={`/content/${item.id}`}>
                                    <div className='image__card'>
                                        <img src={item.avatar} alt="" />
                                    </div>
                                    <p className='card-text' style={{ color: "black" }}>{item.category}</p>
                                    <h1 className='card-name'>{item.name}</h1>
                                </Link>
                                    <div className='flex-card-flex'>
                                        <h2 className='price-card'>Цена: <span className='span-card'>▾ {item.percent}%</span></h2>
                                        <div className='flex__icons' style={{display: "flex"}}>
                                            <div  className="click__fav" onClick={() => {
                                                addToCart(item)
                                                handleFavClick(item.id)
                                            }}>
                                                {clickedFavs[item.id] ? <IconBlackFavorite /> : <IconButtonWithheart />}
                                            </div>
                                            <IconButtonWithChart />
                                        </div>
                                    </div>
                                    <h3 className='price__card'> {item.price} ₽</h3>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default ProductsCards
