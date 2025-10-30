import React from "react";
export default function Book({image, title, publisher}){
    return (
    <div className="book">
        <img src={image} alt={image} />
        <p>{title}</p>
        <p>{publisher}</p>
        <button>add to cart</button>
    </div>
    )
}