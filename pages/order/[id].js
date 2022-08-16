import { client } from '../../lib/client';
import Layout from '../../components/Layout';
import style from '../../styles/Order.module.css'
import Cooking from '../../assets/cooking.png';
import Onway from '../../assets/onway.png'
import {UilBill, UilBox} from '@iconscout/react-unicons';
import Image from 'next/image';
import Spinner from '../../assets/spinner.svg'
import { useEffect } from 'react';

export const getServerSideProps = async ({ params }) => {
    const query = `*[_type == 'order' && _id == '${params.id}']`
    const order = await client.fetch(query);
    // it returns array of document but we have only one document
    // which have id equal to id and for access it we have to
    // use the first element of the array

    return {
        props: {
            order: order[0]
        }
    }
}
export default function Orders({ order }) {
    
    useEffect(() => {
        if(order.status > 3){
            localStorage.clear();
        }
    }, [order])
    return (
        <Layout>
            <div className={style.container}>
                <span className={style.heading}>
                    Order in Process
                </span>
                <div className={style.details}>


                    <div>
                        <span>Order ID</span>
                        <span>{order._id}</span>
                    </div>
                    <div>
                        <span>Customer Name</span>
                        <span>{order.name}</span></div>
                    <div><span>Phone</span>
                        <span>{order.phone}</span></div>
                    <div>
                        <span>Method</span>
                        <span>{
                            order.method === 0 ? 'cash On Delivery' : 'online Payment(paid)'
                        }</span>
                    </div>
                    <div>
                        <span>total</span>
                        <span>₹ {order.total}</span>
                    </div>
                </div>
                <div className={style.statusContainer}>
                    <div className={style.status}>
                        <UilBill width={50} height={50} />
                        <span>Payment</span>
                        {order.method === 0  ? 
                        <span className={style.pending}>On Delivery</span>:
                        <span className={style.completed}>Completed</span>
                        }
                    </div>

                    <div className={style.status}>
                        <Image src={Cooking} alt='' width={50} height={50}/>
                        <span>Cooking</span>

                        {order.status === 1 && (
                            <div className={style.spinner}>
                                <Image src={Spinner} alt = '' />
                            </div>
                        )}

                        {
                            order.status > 1 && (
                                <span className={style.completed}>Completed</span>
                            )
                        }
                    </div>
                    
                    <div className={style.status}>
                        <Image src={Onway} alt='' width={50} height={50} />
                        <span>Onway</span>
                        {order.status === 2 && (
                            <div className={style.spinner}>
                                <Image src={Spinner} alt = '' />
                            </div>
                        )}
                         {
                            order.status > 2 && (
                                <span className={style.completed}>Completed</span>
                            )
                        }
                    </div>
                    
                    <div className={style.status}>
                        <UilBox width={50} height={50} />
                        <span>Delivered</span>
                        {order.status === 3 && (
                            <div className={style.spinner}>
                                <Image src={Spinner} alt = '' />
                            </div>
                        )}
                         {
                            order.status > 3 && (
                                <span className={style.completed}>Completed</span>
                            )
                        }
                    </div>
                </div>
            </div>
        </Layout>
    )
}