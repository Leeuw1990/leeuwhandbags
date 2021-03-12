import React from "react";

function Tile({image, description, head, children}) {
    if(!image) {
        return(
                <section>
                <h2>{head}</h2>
                {children}
                </section>
        );
        } else {
        return(
            <section>
                <img src={image} alt={description}/>
            </section>
        );
        }
    }

export default Tile;

