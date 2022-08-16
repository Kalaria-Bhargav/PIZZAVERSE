import style from '../styles/Services.module.css'
import Image from 'next/image'
import s1 from '../assets/s1.png';
import s2 from '../assets/s2.png';
import s3 from '../assets/s3.png';
export default () => {
    return (
        <>
            <div className={style.heading}>
                <span>WHAT WE SERVE</span>
                <span>Your Favourite Food</span>
                <span>Delivery Partner</span>
            </div>

            {/* features */}
            <div className={style.services}>
                <div className={style.feature}>
                    <div className={style.ImageWrapper}>
                        <Image src={s1} alt='' objectFit='cover' layour='intrinsic' />
                    </div>

                    <span>Easy to order</span>
                    <span>You only need a few steps in food ordering</span>

                </div>


                <div className={style.feature}>
                    <div className={style.ImageWrapper}>
                        <Image src={s2} alt='' objectFit='cover' layour='intrinsic' />
                    </div>
                    <span>Easy to order</span>
                    <span>Delivery that is always on time even faster</span>
                </div>
                <div className={style.feature}>
                    <div className={style.ImageWrapper}>
                        <Image src={s3} alt='' objectFit='cover' layour='intrinsic' />
                    </div>
                    <span>Easy to order</span>
                    <span>Not only fast for us, quality is also number one</span>
                </div>
            </div>
        </>
    )
}
