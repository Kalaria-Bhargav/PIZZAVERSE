import Image from 'next/image'
import style from '../styles/Menu.module.css'
import { urlFor } from '../lib/client';
import Link from 'next/link';

const Menu = ({ pizzas }) => {
    return (
        <div className={style.container}>
            <div className={style.heading}>
                <span>OUR MENU</span>
                <span>Menu That Always</span>
                <span>Make you Fall In Love</span>
            </div>
            {/* pizzas */}

            <div className={style.menu}>

                {pizzas.map((pizza, id) => {

                    const src = urlFor(pizza.image).url();
                    return (
                        <div className={style.pizza} key={id}>
                            <Link href={`./pizza/${pizza.slug.current}`}>


                                <div className={style.ImageWrapper}>
                                    <Image loader={() => src}
                                        src={src} alt=""
                                        layout='fill'
                                        objectFit='cover' />
                                </div>
                            </Link>
                            <span>{pizza.name}</span>

                            <span> <span style={{
                                color
                                    : 'var(--themeRed)'
                            }}>₹</span> {pizza.price[0]}</span>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}


// check image return in map
// we need to use urlFor
// the simple src={pizza.image} will not work
export default Menu;