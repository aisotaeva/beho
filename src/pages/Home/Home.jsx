import React from 'react'
import Hero from '../../components/Hero/Hero'
import TheBestProducts from '../../components/thebestProducts/TheBestProducts'
import TargetTitle from '../../components/TargetTitle/TargetTitle'
import ProductsCards from '../../components/Cards/ProductsCard/ProductsCards'

const Home = () => {
  return (
    <>
    <Hero/>
    <TheBestProducts/>
    <TargetTitle/>
    <ProductsCards/>
    </>
  )
}

export default Home