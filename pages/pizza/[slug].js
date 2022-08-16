import Layout from '../../components/Layout'
import { client, urlFor } from '../../lib/client'
import style from '../../styles/Pizza.module.css';
import Image from 'next/image';
import LeftArrow from '../../assets/arrowLeft.png'
import RightArrow from '../../assets/arrowRight.png'
import { useState } from 'react';
import { useStore } from '../../store/store';
import toast, {Toaster} from 'react-hot-toast';

export default function Pizza({ pizza }){
    // console.log(pizza)
    const src = urlFor(pizza.image).url();
    const [Quantity, setQuantity] = useState(1)

    const [size, setSize] = useState(1);

    const handleQuantity = (type) => {
        if (type === 'inc') {
            setQuantity((prev) => prev + 1);
        } else {
            if (Quantity == 1) return;
            setQuantity((prev) => prev - 1);
        }

    }


    // add to cart funciton 
    const addPizza = useStore((state) => state.addPizza);
    const addToCart = () => {
        addPizza({ ...pizza, price: pizza.price[size], quantity: Quantity, size: size });
        toast.success('Pizza is Added to cart');
    }



    return (
        <Layout>
            <div className={style.container}>
                <div className={style.ImageWrapper}>
                    <Image loader={() => src} src={src}
                        alt='' layout='fill'
                        unoptimized objectFit='cover' />


                </div>

                {/* right side */}
                <div className={style.right}>
                    <span>{pizza.name}</span>
                    <span>{pizza.details}</span>
                    <span> <span style={{ color: 'var(--themeRed)' }}>₹</span> {(pizza.price[size]) * (Quantity)}</span>
                    <div className={style.size}>
                        <span>size</span>
                        <div className={style.sizeVariants}>
                            <div
                                onClick={() => setSize(0)}
                                className={size == 0 ? style.selected : ""}
                            >Small</div>
                            <div
                                onClick={() => setSize(1)}
                                className={size == 1 ? style.selected : ""}
                            >Medium</div>
                            <div
                                onClick={() => setSize(2)}
                                className={size == 2 ? style.selected : ""}
                            >Large</div>
                        </div>
                    </div>

                    {/* Quantity counter */}
                    <div className={style.quantity}>
                        <span>Quantity</span>

                        <div className={style.counter}>
                            <Image src={LeftArrow}
                                height={20}
                                width={20}
                                objectFit='contain'
                                alt=''
                                onClick={() => handleQuantity('dec')}
                            />
                            <span>{Quantity}</span>
                            <Image src={RightArrow}
                                height={20}
                                width={20}
                                objectFit='contain'
                                onClick={() => handleQuantity('inc')}
                                alt='' />
                        </div>
                    </div>

                    {/* button */}
                    <div className={`btn ${style.btn}`} onClick = {addToCart}>
                        Add to Order
                    </div>
                </div>
                <Toaster/>
            </div>
        </Layout>
    )
}

export async function getStaticPaths() {
    const paths = await client.fetch('*[_type=="pizza" && defined(slug.current)][].slug.current');
    return {
        paths: paths.map((slug) => ({ params: { slug } })),
        fallback: 'blocking',
    }
}

export async function getStaticProps(context) {
    const { slug = "" } = context.params;
    const pizza = await client.fetch(
        `*[_type=='pizza' && slug.current == '${slug}'][0]`
    );
    return {
        props: {
            pizza,
        },
    }
}