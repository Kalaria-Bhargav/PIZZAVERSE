import style from '../styles/Hero.module.css';
import Image from 'next/image';
import cherry from '../assets/flash.png'
import HeroImage from '../assets/HeroImage.png'
import {UilPhone} from '@iconscout/react-unicons'
import Pizza1 from '../assets/p1.jpg';

export default () => {
    return (
        <div className={style.container}>
            {/* left Side */}
            <div className={style.left}>
                <div className={style.cherryDiv}>
                        <span>More than faster &nbsp;&nbsp;</span>
                    <Image src={cherry} alt='' width={40} height={40} 
                    style={{borderRadius:'30%'}}/>
                </div>

                <div className={style.heroText}>
                    <span>Be The Fastest</span>
                    <span>In Delivering</span>
                    <span>Your <span style={{
                        color: "var(--themeRed)"
                    }}>Pizza</span></span>
                </div>

                <span className={style.miniText}>
                    No one is perfect, except our pizza. <br />Easy Breezy Cheesy.
                </span>
                <button className={`btn ${style.btn}`}>
                    Get Started
                </button>
            </div>
            {/* right Side */}
            <div className={style.right}>
                <div className={style.imageContainer}>
                    <Image src={HeroImage} alt="" layout='intrinsic' />
                </div>
                <div className={style.ContactUs}>
                    <span>ContactUs</span>
                    <div><UilPhone color='white'/></div>
                </div>

                <div className={style.Pizza}>
                    <div>
                        <Image src={Pizza1} alt="" objectFit='cover' layout='intrinsic'/>
                    </div>
                    <div className={style.details}>
                        <span>Italian Pizza</span>
                    </div>
                </div>
            </div>
        </div>
    )
}
