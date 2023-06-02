import React from 'react'

// importing images
import img1 from '../assets/img1.png';
import img2 from '../assets/img2.png';
import img3 from '../assets/img3.png';

// immediate component, that's why didn't create a context, passing props normally
const Card = ({ heading, pairCreatedAt, symbol, dexId, pairAddress, baseName, baseSymbol, baseAddress, quoteName, quoteSymbol, quoteAddress, priceNative, priceUsd, imgNum }) => {
    return (
        <div className='card'>
            <h3>{heading}</h3>
            <span> {pairCreatedAt ? "Pair Created At: " : priceNative ? "Price Native: " : "Name: "} <span> {pairCreatedAt ? pairCreatedAt : priceNative ? priceNative : baseName ? baseName : quoteName} </span> </span>
            <span> {symbol ? "Symbol: " : priceUsd ? "Price USD: " : "Symbol: "} <span> {symbol ? symbol : priceUsd ? priceUsd : baseSymbol ? baseSymbol : quoteSymbol} </span> </span>
            <span> {dexId ? "Dex ID: " : baseAddress || quoteAddress ? "Address: " : null} <span> {dexId ? dexId : baseAddress ? baseAddress : quoteAddress ? quoteAddress : null} </span> </span>
            <span> {pairAddress ? "Pair Address: " : null} <span> {pairAddress ? pairAddress : null} </span> </span>
            <div className='cardIcon'>
                <img src={imgNum === '1' ? img1 : imgNum === '2' ? img2 : img3} alt="img" />
            </div>
        </div>
    )
}

export default Card