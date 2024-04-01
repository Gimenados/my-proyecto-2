import React from 'react'

import iconFacebook from '../assets/faFacebook.svg'
import iconInstagram from '../assets/faInstagram.svg'
import iconTiktok from '../assets/faTiktok.svg'

function SocialMedia() {
    return (
        <div className='socialmedia__wrapper'>
            <a href="https://www.facebook.com" target='_blank' rel="noreferrer">
                <img src={iconFacebook} alt="Facebook Link" />
            </a>
            <a href="https://www.instagram.com" target='_blank' rel="noreferrer">
                <img src={iconInstagram} alt="Instagram Link" />
            </a>
            <a href="https://tiktok.com" target='_blank' rel="noreferrer">
                <img src={iconTiktok} alt="Tiktok Link" />
            </a>
        </div>
    )
}

export default SocialMedia