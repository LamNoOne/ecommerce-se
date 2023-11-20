import React, { useEffect, useState } from "react"
import { products } from "./components/variables/data"
import CartProduct from "./components/CartProduct"
import { Button, Line } from "~/components"
import style from "~/style"
import { useNavigate } from "react-router-dom"

const Cart = () => {
    const navigate = useNavigate()
    // Get order state to know whether the order have free shipping or nor
    // If ship cost = 0, display shipping: free, otherwise display the cost
    const [couponCode, setCouponCode] = useState("")
    const [totalAmount, setTotalAmount] = useState(0)
    const cartProducts = Array.isArray(products) ? products : []
    const handleButtonClick = (couponCode) => {
        console.log(couponCode)
    }
    useEffect(() => {
        const total = cartProducts.reduce((acc, item) => {
            return acc + item.price * item.quantity
        }, 0)
        setTotalAmount(total)
    }, [])

    const handleCreateCart = () => {
        // Cart info => cart ids
        // User info => user id, or user's token to determine user
        // dispatch createOrders action => recieve response => if nice
        // => navigate to checkout to fill necessary information
        navigate('/user/checkout')
    }
    return (
        <div className="my-20">
            <div className="flex flex-col gap-10">
                <div className="grid grid-cart grid-cols-5 grid-flow-row place-items-start rounded h-[72px]">
                    <div className="w-full h-full flex items-center col-span-2">
                        <h3 className="ms-6 text-base">Product</h3>
                    </div>
                    <div className="w-full h-full flex items-center ">
                        <h3 className="ms-6 text-base">Price</h3>
                    </div>
                    <div className="w-full h-full flex items-center ">
                        <h3 className="ms-6 text-base">Quantity</h3>
                    </div>
                    <div className="w-full h-full flex items-center ">
                        <h3 className="ms-6 text-base">Subtotal</h3>
                    </div>
                </div>
                {cartProducts.map((item, index) => (
                    <CartProduct key={index} {...item} />
                ))}
            </div>
            <div className="button-link flex flex-row justify-between items-center mt-6">
                <Button outline large>
                    Return To Shop
                </Button>
                <Button outline large>
                    Update Cart
                </Button>
            </div>
            <div className="flex flex-row justify-between items-start mt-20">
                <div className="coupon flex items-center gap-4">
                    <div className="">
                        <form className="flex items-center gap-4">
                            <input
                                type="text"
                                value={couponCode}
                                onChange={(e) => setCouponCode(e.target.value)}
                                placeholder="Coupon Code"
                                className="w-[300px] border border-black rounded ps-6 py-4 focus:outline-none text-base"
                            />
                            <Button
                                type="submit"
                                onClick={() => handleButtonClick(couponCode)}
                                primary
                                large
                            >
                                Apply Coupon
                            </Button>
                        </form>
                    </div>
                </div>
                <div className="border-[1.5px] border-[#000] py-8 px-6">
                    <h1 className="title text-xl font-medium mb-6">
                        Cart Total
                    </h1>
                    <div className="w-[422px] subtotal flex justify-between items-center">
                        <h3 className="text-base">Subtotal:</h3>
                        <span className="text-base">$ {totalAmount}</span>
                    </div>
                    <div className="my-4">
                        <Line style={style.lineStyleCart} />
                    </div>
                    <div className="w-[422px] shipping flex justify-between items-center">
                        <h3 className="text-base">Shipping:</h3>
                        <span className="text-base">Free</span>
                    </div>
                    <div className="my-4">
                        <Line style={style.lineStyleCart} />
                    </div>
                    <div className="w-[422px] total flex justify-between items-center">
                        <h3 className="text-base">Total:</h3>
                        <span className="text-base">$ {totalAmount}</span>
                    </div>
                    <div className="flex justify-center items-center mt-4">
                        <Button primary large type="submit" onClick={() => handleCreateCart()}>
                            Process to checkout
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cart
