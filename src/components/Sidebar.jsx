import React from 'react'

// file-imports
import Vector from '../assets/Vector.png'
import Token from '../assets/Token.png'
import Pair from '../assets/Pair.png'
import FacebookIcon from '../assets/facebook.png'
import LinkedInIcon from '../assets/linkedin.png'
import TwitterIcon from '../assets/twitter.png'
import { SampleContext } from '../App'

const Sidebar = ({ isMenuOpenXs }) => {
    const { selectedDiv, handleDivClick } = React.useContext(SampleContext)

    return (
        <div className={`sideBar ${!isMenuOpenXs ? 'menuClose' : ''} `}>
            <img src={Vector} alt="vector" className='img-vector' />
            <span>NFTify</span>

            <div className={selectedDiv === 'div1' ? 'div1 selected' : 'div1'}
                onClick={() => handleDivClick('div1')} >
                <img src={Token} alt="token" />
                <span>Token Address</span>
            </div>

            <div className={selectedDiv === 'div2' ? 'div2 selected' : 'div2'}
                onClick={() => handleDivClick('div2')} >
                <img src={Pair} alt="pair" />
                <span>Pair Address</span>
            </div>

            <div className='div3'>
                <img src={FacebookIcon} alt="icon" />
                <img src={LinkedInIcon} alt="icon" />
                <img src={TwitterIcon} alt="icon" />
            </div>

        </div>
    )
}

export default Sidebar