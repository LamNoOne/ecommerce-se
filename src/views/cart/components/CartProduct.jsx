import React, { useState } from "react"

const CartProduct = (props) => {
    const { image, title, price, quantity } = props
    const [numberProduct, setNumberProduct] = useState(quantity)
    return (
        <div className="grid grid-cart grid-cols-5 grid-flow-row place-items-start rounded h-[102px]">
            <div className="col-span-2 item flex gap-5 w-full h-full justify-start items-center place-self-start">
                <img className="ms-6 w-[54px] h-[54px] object-contain" src={image} />
                <h5 className="title">{title}</h5>
            </div>
            <div className="w-full h-full flex justify-start items-center">
                <span className="ms-6 price">$ {price}</span>
            </div>
            <div className="w-full h-full flex justify-start items-center">
                <input
                    className="ms-6 w-[72px] h-[44px] px-[12px] py-[6px] rounded border-[2px] border-[rgba(0,0,0,0.4)]" 
                    name="quantity"
                    type="number"
                    value={numberProduct}
                    min="1"
                    max="100"
                    onChange={(e) => setNumberProduct(e.target.value)}
                />
            </div>
            <div className="w-full h-full flex justify-start items-center">
                <span className="ms-6 sub-total">$ {price * numberProduct}</span>
            </div>
        </div>
    )
}

export default CartProduct
