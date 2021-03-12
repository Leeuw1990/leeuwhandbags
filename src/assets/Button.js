import React from 'react';

function ButtonRest ({type, log, buttonText, disabled}) {
    return (
        <button
            type={type}
            onClick={() => console.log({log})}
            disabled={disabled}
        >   {buttonText}
        </button>
    );
}

export default ButtonRest;

