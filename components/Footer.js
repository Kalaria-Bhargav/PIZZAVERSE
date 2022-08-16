import React from 'react'
import style from '../styles/Footer.module.css'
import {UilFacebook, UilInstagram, UilLinkedin } from '@iconscout/react-unicons';
import Image from 'next/image';
import Logo from '../assets/Logo.png'
const Footer = () => {
    return (
        <div className={style.container}>
            <span>ENJOY PIZZAS</span>
            <div className={style.social}>
                <UilFacebook size={45}/>
                <UilLinkedin size={45}/>
                <UilInstagram size={45}/>
            </div>
            <div className={style.logo}>
            <Image src={Logo} alt="" width={50} height={50}/>
            <span>PIZZAVERSE</span>
        </div> 
        </div>
    )
}

export default Footer;
