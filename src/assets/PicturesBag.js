import React from "react";

function BagsPictures ({label, image, imageName, bagName, price}) {
    return (
        <article>
            <span>{label}</span>
            <img src={image} alt={imageName}/>
            <p>{bagName}</p>
            <h4>{price}</h4>
        </article>
    );
}

export default BagsPictures;