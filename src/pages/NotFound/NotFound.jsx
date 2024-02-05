import React from 'react'
import { Link } from 'react-router-dom'
import videoUrl from "../../assets/images/bgc.mp4";


const NotFound = () => {
    return (
        <section className='section__notfount'>
            <div className="nofount__wrapper">
                <video autoPlay loop muted className="background_video">
                    <source src={videoUrl} type="video/mp4" />
                </video>
            </div>
            <h1 className='logonot' style={{ fontSize: "30px", position: "absolute" }}>404</h1>
            <h2 className='target__found'>Page not found</h2>
            <li className='strelka__found'><Link style={{ color: "black", textDecoration: "none" }} to="/"><span>will return to the country</span>←</Link></li>
        </section>
    )
}

export default NotFound