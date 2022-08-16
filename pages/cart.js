import Image from "next/image";
import { useState } from "react";
import toast, {Toaster} from "react-hot-toast";
import Layout from "../components/Layout"
import { urlFor } from "../lib/client";
import { useStore } from "../store/store";
import style from '../styles/Cart.module.css';
import OrderModal from "../components/OrderModal";
export default function Cart() {
    const cartData = useStore((state) => state.cart);
    const removePizza = useStore((state) => state.removePizza);
    const [paymentMethod, setPaymentMethod] = useState(null)
    
    const handleOnDelivery = () =>{
        setPaymentMethod(0);
        // localStorage.setItem('total', total());
        typeof window !== 'undefined' && localStorage.setItem('total', total()); // checking if the rendering is on client side or server side

    }
    const getImageSize = (size) => {
        if (size == 0) {
            return 'Small';
        }
        if (size == 1) {
            return 'Medium';
        }
        return "Large";
    }

    const handleRemove = (i) => {
        removePizza(i);
        toast.error("Item Removed")
    }

    const total = () => cartData.pizzas.reduce((a,b) => a+ b.quantity * b.price, 0)

    return (
        <Layout>
            <div className={style.container}>

                {/* details */}
                <div className={style.details}>
                    <table className={style.table}>



                        <thead>
                            <th>Pizza</th>
                            <th>Name</th>
                            <th>Size</th>
                            <th>Price(₹)</th>
                            <th>Quantity</th>
                            <th>Total(₹)</th>
                            <th></th>
                        </thead>
                        <tbody className={style.tbody}>
                            {cartData.pizzas.length > 0 &&
                                cartData.pizzas.map((pizza, i) => {
                                    const src = urlFor(pizza.image).url();
                                    return (
                                        <tr key={i}>
                                            <td className={style.imageTd}>
                                                {/* pizzaimg */}
                                                <Image loader={() => src}
                                                    src={src}
                                                    alt=''
                                                    objectFit="cover"
                                                    width={85}
                                                    height={85}
                                                />
                                            </td>

                                            <td>
                                                {pizza.name}
                                            </td>

                                            <td>
                                                {getImageSize(pizza.size)}
                                            </td>
                                            <td>
                                                {pizza.price}
                                            </td>
                                            <td>
                                                {pizza.quantity}
                                            </td>
                                            <td>
                                                {pizza.price * pizza.quantity}
                                            </td>
                                            <td style={{ color: 'var(--themeRed)', cursor: 'pointer' }}
                                                onClick={() => handleRemove(i)}
                                            > x
                                            </td>
                                        </tr>
                                    )
                                }
                                )
                            }
                        </tbody>

                    </table>
                </div>

                {/* summary */}
                <div className={style.cart}>
                    <span>Cart</span>
                    <div className={style.cartDetails}>
                        <div>
                            <span>Items</span>
                            <span>{cartData.pizzas.length}</span>
                        </div>
                        <div>
                            <span>Total</span>
                            <span>₹ {total()}</span>
                        </div>
                    </div>

                    <div className={style.buttons}>
                        <button className='btn' onClick={handleOnDelivery}>Pay on Delivery</button>
                        {/* <button className={`btn ${style.newBtn}`} disabled>Pay Now</button> */}
                    </div>
                </div>
            </div>
<Toaster/>
            {/* Creating pay on delivery info page */}
            
            <OrderModal
            opened={paymentMethod === 0} 
            setOpened= {setPaymentMethod}
            PaymentMethod = {paymentMethod}
            />

        </Layout>
    )
}
