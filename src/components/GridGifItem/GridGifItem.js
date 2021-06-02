import React from 'react';
import './GridGifItem.css'

export const GridGifItem = ({ id,title,url }) => {
    return (
        <div className="animate__animated animate__fadeIn animate_duration-1s card">
            <img src={url} alt=""/>
            <h4>{title}</h4>
        </div>
    )
}
