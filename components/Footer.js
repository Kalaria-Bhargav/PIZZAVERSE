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
               <a   href='https://www.facebook.com/bhargav.kalaria.7/' target="_blank" rel="noopener noreferrer"> <UilFacebook size={45}/></a>
                <a href='https://www.linkedin.com/in/bhargav-kalaria-90587a19b' target="_blank" rel="noopener noreferrer"><UilLinkedin size={45}/></a>
                <a href='https://www.instagram.com/ig_devil07/' target="_blank" rel="noopener noreferrer" ><UilInstagram size={45}/></a>
            </div>
            <div className={style.logo}>
            <Image src={Logo} style={{borderRadius:'5px'}} alt="" width={40} height={40}/>
            <span>PIZZAVERSE</span>
        </div> 
            <div></div>
        </div>
    )
}

export default Footer;
