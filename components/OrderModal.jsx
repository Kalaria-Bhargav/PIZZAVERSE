import { Modal, useMantineTheme } from "@mantine/core"
import { useState } from "react";
import style from '../styles/formContainer.module.css';
import createOrder from '../lib/orderHandler';
import toast, { Toaster } from "react-hot-toast";
import { useStore } from "../store/store";
import { useRouter } from 'next/router';

export default ({ opened, setOpened, PaymentMethod }) => {
    console.log(PaymentMethod);
    const theme = useMantineTheme();
    const [formData, setFormData] = useState({})
    const router = useRouter();

    const handleInput = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    }
    const resetCart = useStore((state) => state.resetCart);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const id = await createOrder({ ...formData, total, PaymentMethod });

        toast.success('Order Placed');
        resetCart();
        {
            typeof window !== 'undefined' && localStorage.setItem('order', id)
        }

        router.push(`/order/${id}`)
    }


    const total = typeof window !== 'undefined' && localStorage.getItem('total');
    return (
        <Modal
            overlayColor={theme.colorScheme === 'dark' ? theme.colors.dark[9] : theme.colors.gray[2]}
            overlayOpacity={0.55}
            overlayBlur={3}
            opened={opened}
            onClose={() => setOpened(null)}
        >
            <form onSubmit={handleSubmit} className={style.formContainer}>
                <input onChange={handleInput} type="text" name='name' placeholder="Name" required />
                <input onChange={handleInput} type="text" name='phone' placeholder='Phone Number' required />
                <textarea onChange={handleInput} name="address" rows={3} placeholder='Address'></textarea>
                <span>
                    You will pay <span>₹ {total}</span> on delivery
                </span>

                <button type="submit" className="btn">Place Order</button>
            </form>
            <Toaster />
        </Modal>
    )
}
